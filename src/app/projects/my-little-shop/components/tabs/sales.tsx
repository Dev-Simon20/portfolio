import {
   OrderItemProduct,
   ProductAll,
} from "../../types/product_all_information";
import DataTable, {
   TableColumn,
   ExpanderComponentProps,
} from "react-data-table-component";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { es } from "date-fns/locale";
interface Props {
   product: ProductAll;
}

const customStyles = {
   headRow: {
      style: {
         backgroundColor: "#2a6274", // Color de fondo de la cabecera
      },
   },
   headCells: {
      style: {
         color: "white", // Color del texto en las cabeceras
      },
   },
};

const columns: TableColumn<OrderItemProduct>[] = [
   {
      name: "Code",
      selector: (row) => row.id,
      sortable: true,
   },
   {
      name: "Customer",
      selector: (row) => row.order.customer.name,
      sortable: true,
   },
   {
      name: "Date",
      cell: (row) =>
         format(new Date(row.order.date), "dd MMM yyyy, HH:mm a", {
            locale: es,
         }),
      sortable: true,
   },
   {
      name: "Earnings",
      selector: (row) => row.earnings,
      sortable: true,
   },
   {
      name: "State",
      selector: (row) => row.order.status,
      sortable: true,
   },
   {
      name: "Type Payment",
      selector: (row) => row.order.paymentType,
      sortable: true,
   },
];

const SalesProductTab = ({ product }: Props) => {
   const [busqueda, setBusqueda] = useState("");
   const [datosFiltrados, setDatosFiltrados] = useState<OrderItemProduct[]>(
      product.orderItems
   );

   useEffect(() => {
      const filtrados = product.orderItems.filter(
         (orderItem) =>
            orderItem.order.status
               .toLowerCase()
               .includes(busqueda.toLowerCase()) ||
            orderItem.order.paymentType
               .toLowerCase()
               .includes(busqueda.toLowerCase()) ||
            orderItem.order.customer.name
               .toLowerCase()
               .includes(busqueda.toLowerCase())
      );
      setDatosFiltrados(filtrados);
   }, [busqueda]);

   return (
      <div className=" border rounded-2xl overflow-hidden">
         <DataTable
            className="!rounded-none"
            columns={columns}
            data={datosFiltrados}
            pagination
            highlightOnHover
            striped
            customStyles={customStyles}
            // expandableRows
            // expandableRowsComponent={ExpandedComponent}
            subHeader
            subHeaderComponent={
               <Input
                  type="text"
                  placeholder="Search for customer, type payment and state"
                  className="px-3 py-2 border border-gray-300 rounded w-auto md:w-80"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
               />
            }
         />
      </div>
   );
};
export default SalesProductTab;
