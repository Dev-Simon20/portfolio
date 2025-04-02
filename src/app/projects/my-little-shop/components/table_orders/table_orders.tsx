"use client";
import { Badge } from "@/components/ui/badge";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";
import { Order } from "../../types/order";
import { useEffect, useState } from "react";
import FiltersTableOrders from "./filters_table_orders";

import {
   endOfDay,
   format,
   isWithinInterval,
   startOfDay,
} from "date-fns";
import { DateRange } from "react-day-picker";
import { es } from "date-fns/locale";

import clsx from "clsx";
import { ButtonDeleteOrder } from "./buton_delete_order";
import { ButtonViewOrder } from "./button_view_order";
import PaginationTable from "./pagination_table";

interface Props {
   ordersBack: Order[];
   id_user: string;
}
const TableOrders = ({ ordersBack, id_user }: Props) => {
   const [orderText, setOrderText] = useState("");
   const [date, setDate] = useState<DateRange | undefined>({
      from: undefined,
      to: undefined,
   });
   const [orders, setOrders] = useState<Order[]>(ordersBack);
   const [currentPage, setCurrentPage] = useState(1);
   const [rowsPerPage, setRowsPerPage] = useState(5);

   const filteredData = orders.filter(
      (item) =>
         item.customer.name.toLowerCase().includes(orderText.toLowerCase()) ||
         item.status.toLowerCase().includes(orderText.toLowerCase()) ||
         item.id.toString().toLowerCase().includes(orderText.toLowerCase()) ||
         item.paymentType
            .toString()
            .toLowerCase()
            .includes(orderText.toLowerCase())
   );
   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

   // Obtener los datos para la página actual
   const startIndex = (currentPage - 1) * rowsPerPage;
   const paginatedData = filteredData.slice(
      startIndex,
      startIndex + rowsPerPage
   );

   // Manejar el cambio de página
   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   // Manejar el cambio de filas por página
   const handleRowsPerPageChange = (value: string) => {
      setRowsPerPage(Number.parseInt(value));
      setCurrentPage(1); // Resetear a la primera página
   };

   useEffect(() => {
      let copyOrders = [...ordersBack];

      if (date?.from && date?.to) {
         const startDate = startOfDay(date.from); // Asegurar que inicie en 00:00:00
         const endDate = endOfDay(date.to); // Asegurar que termine en 00:00:00

         console.log("Fecha inicio:", startDate);
         console.log("Fecha fin:", endDate);
         copyOrders = copyOrders.filter((o) => {
            console.log(o.date);

            const fechaOrder = o.date; // Asegura que solo se compare la fecha
            console.log("fecgha de la orden", fechaOrder);

            return isWithinInterval(fechaOrder, {
               start: startDate,
               end: endDate,
            });
         });
      }

      setOrders(copyOrders);
   }, [date]);

   return (
      <section className="mt-6 w-full">
         <FiltersTableOrders
            orderText={orderText}
            setOrderText={setOrderText}
            date={date}
            setDate={setDate}
         />
         <div className="w-full border border-1 border-gray-200 p-3">
            <div className="overflow-x-auto">
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead className="w-24">Code</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="min-w-[101px]">Date</TableHead>
                        <TableHead className="">State</TableHead>
                        <TableHead className="text-center truncate">
                           Payment Type
                        </TableHead>
                        <TableHead className="text-center">Earnigs</TableHead>
                        <TableHead className="text-end">Actions</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {paginatedData.map((order) => (
                        <TableRow key={order.id}>
                           <TableCell className="font-medium">
                              {order.id}
                           </TableCell>
                           <TableCell className="truncate max-w-[100px] sm:max-w-[250px]">{order.customer.name}</TableCell>

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
                                    "text-green-600":
                                       order.paymentType === "cash",
                                    "text-red-600":
                                       order.paymentType === "plin",
                                 },
                                 "text-center  font-medium"
                              )}
                           >
                              {order.paymentType.replace(/^./, (char) =>
                                 char.toUpperCase()
                              )}
                           </TableCell>
                           <TableCell className="text-center">
                              ${order.total}
                           </TableCell>
                           <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                 <ButtonViewOrder order={order} />
                                 {/* <ButtonUpdateOrder/>       */}
                                 <ButtonDeleteOrder
                                    id_order={order.id}
                                    id_user={id_user}
                                    setOrders={setOrders}
                                 />
                              </div>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         </div>
         <PaginationTable
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            handleRowsPerPageChange={handleRowsPerPageChange}
            rowsPerPage={rowsPerPage}
            totalPages={totalPages}
         />
      </section>
   );
};
export default TableOrders;
