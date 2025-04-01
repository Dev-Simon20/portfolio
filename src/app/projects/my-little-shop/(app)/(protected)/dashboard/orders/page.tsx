import { Order } from "@/app/projects/my-little-shop/types/order";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { prismaShop } from "@/app/projects/my-little-shop/lib/shop-db";
import { auth } from "@/auth";
import LoaderConten from "@/components/loader/loader_conten";

const TableOrders = dynamic(
   () => import("../../../../components/table_orders/table_orders"),
   {
      ssr: false,
      loading: () => <LoaderConten />,
   }
);

const OrdersPage = async () => {
   const session = await auth();

   const orders: Order[] = await prismaShop.order.findMany({
      where: {
         userId: session?.user.id,
      },
      include: {
         customer: true,
         orderItems:{
            include:{
               product:true
            }
         }
      },
   });
   if (!session?.user.id) {
      return <>Usuario no autenticado</>;
   }

   return (
      <div className=" min-h-full p-2 md:p-6">
         <div className="flex justify-between w-full ">
            <h2 className="text-xl md:text-3xl">Orders</h2>
            <Link
               href={"/projects/my-little-shop/dashboard/orders/new-order"}
               className=""
            >
               <Button className="rounded-2xl">
                  <PlusCircle className="!w-6 !h-6" />
                  New Order
               </Button>
            </Link>
         </div>
         <section className="w-full min-h-96 flex  ">
            <TableOrders ordersBack={orders} id_user={session?.user.id} />
         </section>
      </div>
   );
};
export default OrdersPage;
