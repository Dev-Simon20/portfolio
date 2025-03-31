

import SaleForm from "@/app/projects/my-little-shop/components/form_new_order/form_new_order";
import { prismaShop } from "@/app/projects/my-little-shop/lib/shop-db";
import { Customer } from "@/app/projects/my-little-shop/types/customer";
import { Product } from "@/app/projects/my-little-shop/types/product";
import { auth } from "@/auth";

const NewOrderPage = async () => {
  
  const session=await auth();
  if (!session?.user.id) {
    return <h2>Sesion no iniciada</h2>;
 }
  const products:Product[]= await prismaShop.product.findMany({
    where:{
      userId:session?.user.id
    }
  })
  const customers:Customer[]=await prismaShop.customer.findMany({
    where:{
      userId:session?.user.id
    }
  })
  
  console.log('los productos son ',customers);

  return (
    <div className="min-h-full p-2 md:p-6 font-dm_sans">
     {<SaleForm  productsRequire={products} customers={customers} id={session.user.id}/>}
    </div>
  );
};
export default NewOrderPage;
