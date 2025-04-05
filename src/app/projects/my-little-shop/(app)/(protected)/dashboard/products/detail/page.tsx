"use client";

import { getProduct } from "@/app/projects/my-little-shop/actions/get_product";
import DataProductTab from "@/app/projects/my-little-shop/components/tabs/data";
import SalesProductTab from "@/app/projects/my-little-shop/components/tabs/sales";
import StocksProductTab from "@/app/projects/my-little-shop/components/tabs/stocks";
import UnderlineTabs from "@/app/projects/my-little-shop/components/tabs/tabs";
import { ProductAll } from "@/app/projects/my-little-shop/types/product_all_information";
import LoaderNoContent from "@/components/loader/loader-no-content";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

//Datos adicionales a  traer del producto
//1- ventas que se han realizado del producto
//2  stock que se han realizado al producto
//3  datos del productod

const ProductDetailPage = () => {
   const [isPending, startTransition] = useTransition();
   const router = useRouter();
   const { data: session, status } = useSession();
   const searchParams = useSearchParams();
   const cod = searchParams.get("cod");
   const [selectedIndex, setSelectedIndex] = useState<number>(0);
   const [product, setProduct] = useState<ProductAll | null>(null);

   const getDataProduct = async () => {
      startTransition(async () => {
         if (!cod || !session?.user.id) return;
         const data = await getProduct(parseInt(cod), session.user.id);
         if (data && "error" in data) {
            console.log("Hubo un error:", data.error);
         } else {
            setProduct(data);
         }
      });
   };

   useEffect(() => {
      getDataProduct();
   }, [cod, session?.user.id]);

   if (status === "loading") {
      return (
         <div className=" p-2 md:p-6 h-full flex flex-col gap-4 relative">
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-20">
               <LoaderNoContent />
            </div>
         </div>
      );
   }
   if (!session?.user.id) {
      router.push("/projects/my-little-shop/login");
      return <h1>Autenticade</h1>;
   }

   return (
      <div className=" p-2 md:p-6 h-full flex flex-col gap-4">
         <h1 className="text-lg">
            <span className="font-semibold">NAME PRODUCT:</span>{" "}
            <span>{product?.name}</span>
         </h1>
         <article>
            <UnderlineTabs
               selectedIndex={selectedIndex}
               setSelectedIndex={setSelectedIndex}
            />
         </article>
         <article className="w-full h-full  relative mb-10">
            {!isPending && product && (
               <>
                  {selectedIndex === 0 && <SalesProductTab product={product} />}
                  {selectedIndex === 1 && (
                     <StocksProductTab product={product} />
                  )}
                  {selectedIndex === 2 && <DataProductTab product={product} />}
               </>
            )}
            {isPending && (
               <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-y-20">
                  <LoaderNoContent />
               </div>
            )}
         </article>
      </div>
   );
};
export default ProductDetailPage;
