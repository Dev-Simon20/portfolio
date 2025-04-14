"use client";

import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogContent,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Check, Clock, Eye, X } from "lucide-react";
import type { Order } from "../../types/order";

export function ButtonViewOrder({ order }: { order: Order }) {
   let total = 0;

   for (const p of order.orderItems) {
      total += p.quantity * p.product.salePrice;
   }

   return (
      <Dialog>
         <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
               <Eye className="h-4 w-4" />
               <span className="sr-only">Ver</span>
            </Button>
         </DialogTrigger>
         <DialogContent className="max-w-xs sm:max-w-md p-0 border-0 shadow-lg overflow-hidden font-poppins">
            <DialogHeader className="bg-teal-600 text-white p-4 flex flex-row justify-between items-center">
               <DialogTitle className="text-2xl font-semibold">
                  Ticket
               </DialogTitle>
               {/* <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-teal-700 rounded-full h-8 w-8 p-0"
               >
                  <X className="h-5 w-5" />
               </Button> */}
            </DialogHeader>

            <div className="bg-teal-50 p-4 border-b border-teal-100">
               <h3 className="text-sm font-medium text-teal-800 mb-3">
                  TRANSACTION DATA
               </h3>
               <div className="space-y-2">
                  <div className="flex justify-between">
                     <span className="text-slate-700">Customer:</span>
                     <span className="font-medium text-slate-900">
                        {order.customer.name}
                     </span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-slate-700">Payment Type:</span>
                     <span className="font-medium text-slate-900">
                        {order.paymentType.replace(/^./, (char) =>
                           char.toUpperCase()
                        )}
                     </span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-slate-700">Status:</span>
                     {order.status === "paid" ? (
                        <span className="flex items-center gap-1 text-emerald-600 font-medium">
                           <Check className="h-4 w-4" />
                           Paid
                        </span>
                     ) : (
                        <span className="flex items-center gap-1 text-amber-600 font-medium">
                           <Clock className="h-4 w-4" />
                           Credit
                        </span>
                     )}
                  </div>
               </div>
            </div>

            <div className="p-4">
               <h3 className="text-sm font-medium text-teal-800 mb-3">
                  PRODUCTS
               </h3>
               <Table>
                  <TableHeader>
                     <TableRow className="hover:bg-transparent border-b border-slate-200">
                        <TableHead className="w-12 text-slate-700">
                           N°
                        </TableHead>
                        <TableHead className="text-slate-700">Name</TableHead>
                        <TableHead className="text-right text-slate-700">
                           Quantity
                        </TableHead>
                        <TableHead className="text-right text-slate-700">
                           Earnings
                        </TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {order.orderItems.map((p, i) => (
                        <TableRow
                           key={p.id}
                           className="hover:bg-slate-50 border-b border-slate-100"
                        >
                           <TableCell className="text-slate-600">
                              {i + 1}
                           </TableCell>
                           <TableCell className="font-medium text-slate-800">
                              {p.product.name}
                           </TableCell>
                           <TableCell className="text-right text-slate-600">
                              {p.quantity}
                           </TableCell>
                           <TableCell className="text-right text-slate-800">
                              S/.{p.earnings}
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>

            <DialogFooter className="bg-slate-50 p-4 flex justify-end border-t border-slate-200">
               <div className="flex items-center gap-3">
                  <span className="text-slate-700 font-medium">Total:</span>
                  <span className="text-xl font-bold text-teal-700">
                     S/. {total}.00
                  </span>
               </div>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
}
