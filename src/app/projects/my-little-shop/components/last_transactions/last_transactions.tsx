"use client";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Order } from "../../types/order";
import clsx from "clsx";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export default function LastTransactions({ orders }: { orders: Order[] }) {
   return (
      <div className="w-full p-1 md:p-6 bg-zinc-50  rounded-lg shadow-md">
         <h2 className="text-lg md:text-2xl  mb-4">Last Orders</h2>
         <div className="overflow-x-auto ">
            <Table>
               <TableHeader>
                  <TableRow>
                     <TableHead className="w-24">Code</TableHead>
                     <TableHead >Customer</TableHead>
                     <TableHead className="min-w-[101px]">Date</TableHead>
                     <TableHead className="text-start">State</TableHead>
                     <TableHead className="text-center truncate">Payment Type</TableHead>
                     <TableHead className="text-center">Earnigs</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {orders.slice(0,4).map((order) => (
                     <TableRow key={order.id}>
                        <TableCell className="font-medium">
                           {order.id}
                        </TableCell>
                        <TableCell className="truncate max-w-[100px] sm:max-w-[250px">{order.customer.name}</TableCell>

                        <TableCell>
                           {format(order.date, "dd MMM yyyy, HH:mm a", {
                              locale: es,
                           })}
                        </TableCell>
                        <TableCell className="text-start tracking-wider">
                           <Badge
                              variant={
                                 order.status === "paid"
                                    ? "success"
                                    : "destructive"
                              }
                           >
                              {order.status.replace(/^./, (char) =>
                                 char.toUpperCase()
                              )}
                           </Badge>
                        </TableCell>
                        <TableCell
                           className={clsx(
                              {
                                 "text-purple-600":
                                    order.paymentType === "yape",
                                 "text-green-600": order.paymentType === "cash",
                                 "text-red-600": order.paymentType === "plin",
                              },
                              "text-center  font-medium"
                           )}
                        >
                           {order.paymentType.replace(/^./, (char) =>
                              char.toUpperCase()
                           )}
                        </TableCell>
                        <TableCell className="text-center">{order.total}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </div>
         <div className="flex mt-4 justify-end">
            <Button className=" bg-emerald-600 hover:bg-emerald-700">
                           View all orders
                        </Button>
         </div>
      </div>
   );
}
