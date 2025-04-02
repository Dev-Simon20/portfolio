import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

const ButtonUpdateOrder = () => {
   return (
      <Button variant="outline" size="icon" className="h-8 w-8">
         <Edit className="h-4 w-4" />
         <span className="sr-only">Editar</span>
      </Button>
   );
};
export default ButtonUpdateOrder;
