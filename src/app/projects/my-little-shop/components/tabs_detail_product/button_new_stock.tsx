import { Button } from "@/components/ui/button";
import {
   Dialog,
   DialogFooter,
   DialogTitle,
   DialogContent,
   DialogTrigger,
   DialogHeader,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { NewStockValidateSchema } from "../../lib/new_stock_validate_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductAll } from "../../types/product_all_information";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { FormControl, FormLabel } from "@mui/material";
import { Input } from "@/components/ui/input";
import { createNewStock } from "../../actions/new-stock";

interface Props {
   product: ProductAll;
   getDataProduct: () => void;

}

const ButtonNewStock = ({ product,getDataProduct }: Props) => {
   const [isPending, setIsPending] = useState<boolean>(false);
   const [isOpen, setIsOpen] = useState(false);
   const form = useForm<z.infer<typeof NewStockValidateSchema>>({
      resolver: zodResolver(NewStockValidateSchema),
      defaultValues: {
         productId: product.id,
      },
   });

   const onSubmit = async (values: z.infer<typeof NewStockValidateSchema>) => {
      setIsPending(true);
      const response=await createNewStock(values)
      console.log(response);
      
      if(response?.status){
         setIsOpen(false);
         await getDataProduct()
         setIsPending(false)
      }

      console.log(values);
   };

   return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <DialogTrigger asChild>
            <Button
               variant="outline"
               className="bg-[#2a6274] hover:bg-[#2a6274]/90 hover:text-white text-white"
               onClick={() => setIsOpen(true)}
               disabled={isPending}
            >
               New Stock
            </Button>
         </DialogTrigger>
         <DialogContent
            className="text-gray-800 sm:max-w-[430px] [&>button.absolute.right-4.top-4]:hidden"
            onInteractOutside={(e) => {
               e.preventDefault();
            }}
         >
            <DialogHeader>
               <DialogTitle>New Stock</DialogTitle>
            </DialogHeader>
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  id="form_new_stock"
                  className=" flex flex-col space-y-4"
               >
                  <FormField
                     control={form.control}
                     name="purchasePrice"
                     render={({ field }) => (
                        <FormItem className="flex flex-col items-end">
                           <div className="grid grid-cols-4 items-center gap-4">
                              <FormLabel className="!text-gray-800 !text-xs">
                                 Purchase Price
                              </FormLabel>
                              <FormControl className="col-span-3 ">
                                 <Input
                                    type="number"
                                    placeholder="Purchase Price"
                                    {...field}
                                    value={
                                       field.value ? field.value.toString() : ""
                                    }
                                    onChange={(e) => {
                                       field.onChange(
                                          parseFloat(e.target.value)
                                       );
                                       console.log(parseFloat(e.target.value));
                                    }}
                                 />
                              </FormControl>
                           </div>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="quantity"
                     render={({ field }) => (
                        <FormItem className="flex flex-col items-end">
                           <div className="grid grid-cols-4 items-center gap-4 w-full">
                              <FormLabel className="!text-gray-800 !text-xs">
                                 Quantity
                              </FormLabel>
                              <FormControl className="col-span-3 ">
                                 <Input
                                    type="number"
                                    placeholder="Quantity product"
                                    {...field}
                                    value={
                                       field.value ? field.value.toString() : ""
                                    }
                                    onChange={(e) =>
                                       field.onChange(parseInt(e.target.value))
                                    }
                                 />
                              </FormControl>
                           </div>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </form>
            </Form>
            <DialogFooter className="mt-4">
               <Button
                  onClick={() => {
                     form.reset({
                        productId: product.id,
                        purchasePrice: 0,
                        quantity: 0,
                     });
                     setIsOpen(false);
                  }}
                  disabled={isPending}
               >
                  Cancel
               </Button>
               <Button type="submit" form="form_new_stock" disabled={isPending}>
                  Submit
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};
export default ButtonNewStock;
