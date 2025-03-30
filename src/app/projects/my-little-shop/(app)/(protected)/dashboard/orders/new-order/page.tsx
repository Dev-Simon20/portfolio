

import SaleForm from "@/app/projects/my-little-shop/components/form_new_order/form_new_order";
import { prismaShop } from "@/app/projects/my-little-shop/lib/shop-db";
import { Product } from "@/app/projects/my-little-shop/types/product";
import { auth } from "@/auth";

const NewOrderPage = async () => {
  
  const session=await auth();
  const products:Product[]= await prismaShop.product.findMany({
    where:{
      userId:session?.user.id
    }
  })
console.log('los productos son ',products);

  return (
    <div className="min-h-full p-2 md:p-6 font-dm_sans">
     {products &&<SaleForm  productsRequire={products}/>}
    </div>
  );
};
export default NewOrderPage;
