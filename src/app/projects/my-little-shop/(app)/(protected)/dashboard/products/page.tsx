import { Product } from "@/app/projects/my-little-shop/types/product"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

const AVAILABLE_PRODUCTS: Product[] = [
   { id: "1", name: "Producto 1", price: 2, stock: 10, imageUrl: "/placeholder.svg" },
   { id: "2", name: "Producto 2", price: 5, stock: 5, imageUrl: "/placeholder.svg" },
   { id: "3", name: "Producto 3", price: 10, stock: 3, imageUrl: "/placeholder.svg" },
]
const Products = () => {

  return (
    <main className=" p-2 md:p-6">

<div className="flex justify-between w-full">
            <h2 className="text-xl md:text-3xl text-gray-600">Products</h2>
            <Link href={"/projects/my-little-shop/dashboard/products/new-product"} className="">
               <Button className="rounded-2xl">
                  <PlusCircle className="!w-6 !h-6" />
                  New Product
               </Button>
            </Link>
         </div>
    </main>
  )
}
export default Products