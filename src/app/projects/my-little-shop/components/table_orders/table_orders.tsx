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
import { Edit, Eye, Search, Trash2 } from "lucide-react";
import { Order } from "../../types/order";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import FiltersTableOrders from "./filters_table_orders";
interface Props {
    orders: Order[];
}
import { addDays, format } from "date-fns"
import { DateRange } from "react-day-picker";

const TableOrders = ({ orders }: Props) => {
    const [orderText, setOrderText] = useState("");
    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined,
    })
    return (
        <section className="mt-6">
            <FiltersTableOrders
                orderText={orderText}
                setOrderText={setOrderText}
                date={date}
                setDate={setDate}
            />
            <div className="w-full border border-1 border-gray-200">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-24">Code</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="text-center">Quantity</TableHead>
                                <TableHead className="text-center">Earnigs</TableHead>
                                <TableHead>State</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead className="text-end">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {orders.map((order) => (
                                <TableRow key={order.code}>
                                    <TableCell className="font-medium">
                                        {order.code}
                                    </TableCell>
                                    <TableCell>{order.date}</TableCell>
                                    <TableCell className="text-center">
                                        {order.quantity}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        ${order.expectedEarnings}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                        
                                            className={
                                                order.status === "paid"
                                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                                    : "bg-red-100 text-red-800 hover:bg-red-100"
                                            }
                                        >
                                            {order.status === "paid"
                                                ? "Paid"
                                                : "Due"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{order.customer}</TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                            >
                                                <Eye className="h-4 w-4" />
                                                <span className="sr-only">Ver</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                            >
                                                <Edit className="h-4 w-4" />
                                                <span className="sr-only">Editar</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8 text-red-500 hover:text-red-600"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                                <span className="sr-only">Eliminar</span>
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    );
};
export default TableOrders;
