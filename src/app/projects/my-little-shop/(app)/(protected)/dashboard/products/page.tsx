import { prismaShop } from "@/app/projects/my-little-shop/lib/shop-db"
import { Product } from "@/app/projects/my-little-shop/types/product"
import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import { CircleArrowRight, ClipboardPaste, Eye, PlusCircle } from "lucide-react"
import Link from "next/link"


const Products = async () => {

   const session = await auth()
   if (!session) {
      <div>
         Not Autenticade
      </div>
   }
   const products: Product[] = await prismaShop.product.findMany({
      where: {
         userId: session?.user.id
      }
   })

   return (
      <main className="p-2 md:p-6">

         <div className="flex justify-between w-full">
            <h2 className="text-xl md:text-3xl text-gray-600">Products</h2>
            <Link href={"/projects/my-little-shop/dashboard/products/new-product"} className="">
               <Button className="rounded-2xl">
                  <PlusCircle className="!w-6 !h-6" />
                  New Product
               </Button>
            </Link>
         </div>

         <article className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 mt-8 ">
            {
               products.map((p) => (
                  <section className="rounded-lg overflow-hidden font-poppins shadow-md hover:shadow-xl cursor-pointer transition-all duration-300" key={p.id}>
                     <img src={p.image} alt="" />
                     <div className=" flex flex-col p-2 gap-2 text-sm">
                        <p className="text-md font-semibold truncate">{p.name}</p>
                        <p>Current stock: {p.currentStock}</p>
                        <p>Sale price: {p.salePrice}</p>

                     </div>
                     <div className="w-full flex justify-end">
                        <Link href={`products/detail?cod=${p.id}`}>
                        <Button className="mr-2 mb-2" size={"sm"}>
                           Detail
                           <CircleArrowRight />

                        </Button>
                        </Link>
                     </div>
                  </section>
               ))
            }
         </article>
      </main>
   )
}
export default Products