"use client";
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
import {
   ChevronFirst,
   ChevronLast,
   ChevronLeft,
   ChevronRight,
   Edit,
   Eye,
   Search,
   Trash2,
} from "lucide-react";
import { Order } from "../../types/order";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import FiltersTableOrders from "./filters_table_orders";

import {
   endOfDay,
   format,
   isAfter,
   isBefore,
   isEqual,
   isWithinInterval,
   parseISO,
   parseJSON,
   startOfDay,
} from "date-fns";
import { DateRange } from "react-day-picker";
import { es } from "date-fns/locale";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import clsx from "clsx";
import { ButtonDeleteOrder } from "./buton_delete_order";
import { ButtonViewOrder } from "./button_view_order";

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
                        <TableHead>Date</TableHead>
                        <TableHead className="">State</TableHead>
                        <TableHead className="text-center">
                           Payment Type
                        </TableHead>
                        <TableHead className="text-center">Earnigs</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="text-end">Actions</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {paginatedData.map((order) => (
                        <TableRow key={order.id}>
                           <TableCell className="font-medium">
                              {order.id}
                           </TableCell>
                           <TableCell>
                              {format(order.date, "dd MMM yyyy, HH:mm a", {
                                 locale: es,
                              })}
                           </TableCell>
                           <TableCell>
                              <Badge
                                 className={clsx({
                                    "bg-green-100 text-green-800 hover:bg-green-100":
                                       order.status === "paid",
                                    "bg-orange-100 text-orange-800 hover:bg-orange-100":
                                       order.status === "credit",
                                 })}
                              >
                                 {order.status.replace(/^./, (char) =>
                                    char.toUpperCase()
                                 )}
                              </Badge>
                           </TableCell>
                           <TableCell
                              className={clsx(
                                 {
                                    "text-purple-700":
                                       order.paymentType === "yape",
                                    "text-green-700":
                                       order.paymentType === "cash",
                                    "text-red-700":
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

                           <TableCell>{order.customer.name}</TableCell>
                           <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                 <ButtonViewOrder order={order}/>
                                 <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                 >
                                    <Edit className="h-4 w-4" />
                                    <span className="sr-only">Editar</span>
                                 </Button>
                                 <ButtonDeleteOrder id_order={order.id} id_user={id_user} setOrders={setOrders}/>
                              </div>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         </div>
         <article className="flex justify-between border border-1 border-gray-200 p-3 border-t-0">
            <section className="flex items-center justify-between px-2">
               <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                     Filas por página
                  </span>
                  <Select
                     value={rowsPerPage.toString()}
                     onValueChange={handleRowsPerPageChange}
                  >
                     <SelectTrigger className="h-8 w-[70px]">
                        <SelectValue placeholder={rowsPerPage.toString()} />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                     </SelectContent>
                  </Select>
               </div>
            </section>
            <section className="flex items-center space-x-6 ">
               <span className="text-sm text-muted-foreground">
                  Página {currentPage} de {totalPages || 1}
               </span>
               <div className="flex items-center space-x-1">
                  <Button
                     variant="outline"
                     size="icon"
                     className="h-8 w-8"
                     onClick={() => handlePageChange(1)}
                     disabled={currentPage === 1}
                  >
                     <ChevronFirst className="h-4 w-4" />
                     <span className="sr-only">Primera página</span>
                  </Button>
                  <Button
                     variant="outline"
                     size="icon"
                     className="h-8 w-8"
                     onClick={() => handlePageChange(currentPage - 1)}
                     disabled={currentPage === 1}
                  >
                     <ChevronLeft className="h-4 w-4" />
                     <span className="sr-only">Página anterior</span>
                  </Button>
                  <Button
                     variant="outline"
                     size="icon"
                     className="h-8 w-8"
                     onClick={() => handlePageChange(currentPage + 1)}
                     disabled={currentPage === totalPages || totalPages === 0}
                  >
                     <ChevronRight className="h-4 w-4" />
                     <span className="sr-only">Página siguiente</span>
                  </Button>
                  <Button
                     variant="outline"
                     size="icon"
                     className="h-8 w-8"
                     onClick={() => handlePageChange(totalPages)}
                     disabled={currentPage === totalPages || totalPages === 0}
                  >
                     <ChevronLast className="h-4 w-4" />
                     <span className="sr-only">Última página</span>
                  </Button>
               </div>
            </section>
         </article>
      </section>
   );
};
export default TableOrders;
