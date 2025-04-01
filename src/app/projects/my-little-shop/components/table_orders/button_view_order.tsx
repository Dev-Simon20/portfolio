import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableHead, TableHeader } from "@/components/ui/table";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { Eye } from "lucide-react";
import { Order } from "../../types/order";

export function ButtonViewOrder({ order }: { order: Order }) {

    var total=0;
    
    for(const p of order.orderItems){
        total+=p.quantity*p.product.salePrice
    }
   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
               <Eye className="h-4 w-4" />
               <span className="sr-only">Ver</span>
            </Button>
         </DialogTrigger>
         <DialogContent className="sm:max-w-[425px]  text-gray-700">
            <DialogHeader>
               <DialogTitle className="text-center text-xl">
                  View Order
               </DialogTitle>
            </DialogHeader>
            <div className="grid gap-2 font-dm_sans text-sm font-medium ">
               <div className="flex justify-between border-b pb-1">
                  <span>Customer:</span>
                  <span className=" text-gray-600">{order.customer.name}</span>
               </div>
               <div className="flex justify-between border-b pb-1">
                  <span>Payment Type:</span>
                  <span className=" text-gray-600">{order.paymentType}</span>
               </div>
               <div className="flex justify-between">
                  <span>Status Paid:</span>
                  <span className=" text-gray-600">{order.status}</span>
               </div>
            </div>
            <article>
               <DialogTitle className="text-base">Products</DialogTitle>
               <section className="w-full border border-1 border-gray-200  rounded-lg my-2">
                  <div className="overflow-x-auto">
                     <Table>
                        <TableHeader>
                           <TableRow>
                              <TableHead>N°</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Quantity</TableHead>
                              <TableHead>Earnings</TableHead>
                           </TableRow>
                        </TableHeader>
                        <TableBody>
                           {order.orderItems.map((p,i) => (
                              <TableRow key={p.id}>
                                 <TableCell>{i+1}</TableCell>
                                 <TableCell>{p.product.name}</TableCell>
                                 <TableCell>{p.quantity}</TableCell>
                                 <TableCell>S/.{p.quantity*p.product.salePrice}</TableCell>
                              </TableRow>
                           ))}
                        </TableBody>
                     </Table>
                  </div>
               </section>
               <section className="flex gap-3 font-dm_sans justify-end pt-4 pr-2">
                  <h2 className="font-bold ">Total: </h2>
                  <p className="font-semibold">S/. {total}.00</p>
               </section>
            </article>
         </DialogContent>
      </Dialog>
   );
}
