import { Button } from "@/components/ui/button";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import {
   ChevronFirst,
   ChevronLast,
   ChevronLeft,
   ChevronRight,
} from "lucide-react";

interface Props {
   handlePageChange: (page:number) => void;
   rowsPerPage: number;
   handleRowsPerPageChange: (value:string) => void;
   currentPage: number;
   totalPages: number;
}

const PaginationTable = ({
   currentPage,
   handlePageChange,
   handleRowsPerPageChange,
   rowsPerPage,
   totalPages,
}: Props) => {
   return (
      <article className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between border border-1 border-gray-200 p-3 border-t-0">
         <section className="flex items-center justify-center sm:justify-start px-2 order-2 sm:order-1 ">
            <div className="flex items-center space-x-2 ">
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
         <section className="flex items-center justify-center sm:justify-start space-x-6 order-1 sm:order-2">
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
   );
};
export default PaginationTable;
