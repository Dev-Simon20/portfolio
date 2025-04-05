import { ProductAll } from "../../types/product_all_information";
import DataTable, {
   TableColumn,
   ExpanderComponentProps,
} from "react-data-table-component";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Stock } from "../../types/stock";
import { es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Edit, Eye, Trash } from "lucide-react";
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
const columns: TableColumn<Stock>[] = [
   {
      name: "Code",
      selector: (row) => row.id,
      sortable: true,
   },
   {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
   },
   {
      name: "Date",
      cell: (row) =>
         format(new Date(row.date), "dd MMM yyyy, HH:mm a", {
            locale: es,
         }),
      sortable: true,
   },
   {
      name: "Purchase Price",
      selector: (row) => row.purchasePrice,
      sortable: true,
      center: true,
   },
   {
      name: "Actions",
      cell: () => (
         <div className="flex gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
               <Eye className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8">
               <Edit className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 ">
               <Trash className="h-4 w-4" />
            </Button>
         </div>
      ),
      center:true
   },
];

const StocksProductTab = ({ product }: Props) => {
   const [datosFiltrados, setDatosFiltrados] = useState<Stock[]>(
      product.stocks
   );

   return (
      <div className="border rounded-2xl overflow-hidden">
         <DataTable
            className="!rounded-none"
            columns={columns}
            data={datosFiltrados}
            pagination
            highlightOnHover
            striped
            customStyles={customStyles}
            subHeader
            subHeaderComponent={
               <Button className="bg-[#2a6274] hover:bg-[#2a6274]/90">
                  New Stock
               </Button>
            }
            // disabled={true}
         />
      </div>
   );
};
export default StocksProductTab;
