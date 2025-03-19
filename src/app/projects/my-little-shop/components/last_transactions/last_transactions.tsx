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

interface Transaction {
  codigo: string;
  fecha: string;
  cantidad: number;
  gananciasEsperadas: number;
  estado: string;
  cliente: string;
}

export default function LastTransactions() {
  const transacciones: Transaction[] = [
    {
      codigo: "054",
      fecha: "18/05/2024",
      cantidad: 5,
      gananciasEsperadas: 85,
      estado: "pagado",
      cliente: "Libre",
    },
    {
      codigo: "016",
      fecha: "15/05/2025",
      cantidad: 4,
      gananciasEsperadas: 84,
      estado: "adeuda",
      cliente: "Pedro",
    },
    {
      codigo: "025",
      fecha: "15/05/2025",
      cantidad: 5,
      gananciasEsperadas: 85,
      estado: "adeuda",
      cliente: "Libre",
    },
    {
      codigo: "047",
      fecha: "15/05/2025",
      cantidad: 6,
      gananciasEsperadas: 86,
      estado: "pagado",
      cliente: "Libre",
    },
  ];

  return (
    <div className="w-full p-4 md:p-6 bg-zinc-50  rounded-lg shadow-md">
      <h2 className="text-lg md:text-2xl  mb-4">Last Sales</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Code</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Amount</TableHead>
              <TableHead className="text-center">Earnigs</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Client</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transacciones.map((transaccion) => (
              <TableRow key={transaccion.codigo}>
                <TableCell className="font-medium">
                  {transaccion.codigo}
                </TableCell>
                <TableCell>{transaccion.fecha}</TableCell>
                <TableCell className="text-center">
                  {transaccion.cantidad}
                </TableCell>
                <TableCell className="text-center">
                  ${transaccion.gananciasEsperadas}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      transaccion.estado === "pagado"
                        ? "default"
                        : "destructive"
                    }
                    className={
                      transaccion.estado === "pagado"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : "bg-red-100 text-red-800 hover:bg-red-100"
                    }
                  >
                    {transaccion.estado === "pagado"
                      ? "Pagado"
                      : "Adeuda"}
                  </Badge>
                </TableCell>
                <TableCell>{transaccion.cliente}</TableCell>
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
      <div className="flex mt-8 justify-end">
        <Button className="">
          Todas las ventas...
        </Button>
      </div>
    </div>
  );
}
