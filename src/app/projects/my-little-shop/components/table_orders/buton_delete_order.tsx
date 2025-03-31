"use client";
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Eye, Trash } from "lucide-react";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState, useTransition } from "react";
import { processDeleteOrder } from "../../actions/process_delete_order";
import { Order } from "../../types/order";
import { getOrders } from "../../actions/get_orders";

interface Props {
   id_order: number;
   id_user: string;
   setOrders: Dispatch<SetStateAction<Order[]>>;
}
export function ButtonDeleteOrder({ id_order, id_user, setOrders }: Props) {
   const [isPending, startTransition] = useTransition();
   const [isOpen, setIsOpen] = useState(false); // Siempre abierto
   const { data: session, status } = useSession();
   const [errors, setErrors] = useState<string | null>(null);

   const onDelete = async () => {
      startTransition(async () => {
         const response = await processDeleteOrder(id_order, id_user);
         console.log(response);
         const updateOrders = await getOrders(id_user);
         if (updateOrders) {
            setOrders(updateOrders);
         }
         setIsOpen(false);
      });
   };

   return (
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
         <AlertDialogTrigger asChild>
            <Button
               variant="outline"
               size="icon"
               className="h-8 w-8"
               onClick={() => setIsOpen(true)}
            >
               <Trash className="h-4 w-4" />
               <span className="sr-only">Ver</span>
            </Button>
         </AlertDialogTrigger>
         <AlertDialogContent
            className="text-gray-800"
            onClickCapture={(e) => e.preventDefault()}
         >
            <AlertDialogHeader>
               <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
               <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your order and remove from our servers.
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel
                  disabled={isPending}
                  onClick={() => setIsOpen(false)}
               >
                  Cancel
               </AlertDialogCancel>
               <AlertDialogAction
                  className="bg-destructive hover:bg-destructive "
                  onClick={onDelete}
                  disabled={isPending}
               >
                  Yes, delete order
               </AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>
   );
}
