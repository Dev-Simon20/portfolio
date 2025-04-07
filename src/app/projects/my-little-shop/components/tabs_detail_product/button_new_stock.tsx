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

interface Props {
   product: ProductAll;
}

const ButtonNewStock = ({ product }: Props) => {
   const [isOpen, setIsOpen] = useState(false);
   const form = useForm<z.infer<typeof NewStockValidateSchema>>({
      resolver: zodResolver(NewStockValidateSchema),
      defaultValues: {
         productId: product.id,
      },
   });

   const onSubmit = async (values: z.infer<typeof NewStockValidateSchema>) => {
      console.log(values);
   };

   return (
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <DialogTrigger asChild>
            <Button
               variant="outline"
               className="bg-[#2a6274] hover:bg-[#2a6274]/90 hover:text-white text-white"
               onClick={() => setIsOpen(true)}
            >
               New Stock
            </Button>
         </DialogTrigger>
         <DialogContent
            className="text-gray-800 sm:max-w-[425px]"
            onInteractOutside={(e) => {
               e.preventDefault();
            }}
         >
            <DialogHeader>
               <DialogTitle>New Stock</DialogTitle>
            </DialogHeader>
            <Form {...form} >
               <form onSubmit={form.handleSubmit(onSubmit)} id="form_new_stock" className=" flex flex-col space-y-4">
                  <FormField
                     control={form.control}
                     name="purchasePrice"
                     render={({ field }) => (
                        <FormItem className="flex  items-center justify-end gap-8 ">
                           <FormLabel className="!text-gray-800 ">Purchase Price</FormLabel>
                           <FormControl>
                              <Input
                                 type="number"
                                 placeholder="Purchase Price"
                                 {...field}
                                 value={
                                    field.value ? field.value.toString() : ""
                                 }
                                 onChange={(e) => {
                                    field.onChange(parseFloat(e.target.value));
                                    console.log(parseFloat(e.target.value));
                                 }}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="quantity"
                     render={({ field }) => (
                        <FormItem className="flex  items-center justify-end gap-8">
                           <FormLabel className="!text-gray-800 ">Quantity</FormLabel>
                           <FormControl>
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
               >
                  Cancel
               </Button>
               <Button type="submit" form="form_new_stock">
                  Submit
               </Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>
   );
};
export default ButtonNewStock;
