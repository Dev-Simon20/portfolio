import { useForm } from "react-hook-form";
import { ProductAll } from "../../types/product_all_information";
import { z } from "zod";
import { ProducUpdateSchema } from "../../lib/product_update_schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HandCoinsIcon, Search, Upload } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { updateProduct } from "../../actions/update-product";

interface Props {
  product: ProductAll;
  getDataProduct: () => void;
}

const DataProductTab = ({ product, getDataProduct }: Props) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof ProducUpdateSchema>>({
    resolver: zodResolver(ProducUpdateSchema),
    defaultValues: {
      id_product: product.id,
      id_user: product.userId,
      name: product.name,
      description: product.description || "",
      image: product.image,
      sale_price: product.salePrice,
    },
  });
  //  const {}=form
  async function onSubmit(values: z.infer<typeof ProducUpdateSchema>) {
    setIsPending(true)
    await updateProduct(values)
    await getDataProduct();
    console.log("log despues de terminar el getdata product");
  }

  const handleClick = () => {
    fileInputRef.current?.click();
    console.log("abierno el visualizador de iamgenees");
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);
    setIsPending(true);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    form.setValue("image", data.data);
    toast({
      title: "Image Update",
      description: `Image of prodcut ${product.name} Updating.`,
    });
    setIsPending(false);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col items-center "
        >
          <article className="w-full flex flex-col sm:flex-row sm:gap-32 space-y-4 px-4  sm:space-y-0 sm:px-0 sm:justify-between">
            <section className="flex-1 space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Name of product"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Description of product"
                        {...field}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>

            <section className="flex-1 space-y-4">
              <FormField
                control={form.control}
                name="sale_price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit sale price</FormLabel>
                    <FormControl>
                      <div className="relative w-full ">
                        <HandCoinsIcon
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                          size={20}
                        />
                        <div className="absolute left-11 text-gray-400 top-1/2 -translate-y-1/2">
                          S/
                        </div>
                        <Input
                          className="pl-16 rounded-md"
                          disabled={isPending}
                          type="number"
                          step="0.01"
                          placeholder="Unit selling price"
                          {...field}
                          value={
                            field.value
                              ? field.value.toString()
                              : ""
                          }
                          onChange={(e) =>
                            field.onChange(
                              parseFloat(e.target.value)
                            )
                          }
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image for product</FormLabel>
                    <FormControl className="flex justify-center">
                      <div className="flex flex-col">
                        <img
                          src={field.value}
                          alt=""
                          className="size-40 rounded-md"
                        />
                        <div className="space-y-2  mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={handleClick}
                              className="flex items-center gap-2 w-40 "
                              disabled={isPending}
                            >
                              <Upload className="w-4 h-4" />
                              Change image
                            </Button>
                          </div>
                          <Input
                            ref={fileInputRef}
                            type="file"
                            accept="image/png, image/jpeg"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </section>
          </article>
          <div className="w-full flex justify-end pr-4">
            <Button type="submit" className="mt-4" disabled={isPending}>
              Update Product
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default DataProductTab;
