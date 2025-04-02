import { auth } from "@/auth";
import LogoutButton from "@/components/logout-buton/logout_button";
import { prismaShop } from "../../../lib/shop-db";
import { prismaSchool } from "../../../lib/school-db";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { PiUserCirclePlus } from "react-icons/pi";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Order } from "../../../types/order";
const LastTransactions = dynamic(
   () => import("../../../components/last_transactions/last_transactions"),
   { ssr: false }
);

export default async function DashboarPage() {
   const session = await auth();
   if (!session?.user.id) {
      return <div>Not Auteticated</div>;
   }

   // const user = await prismaShop.order.findMany();
   console.log("el usario es", session);
   // const evento = await prismaSchool.evento.findMany();
   const orders: Order[] = await prismaShop.order.findMany({
      where: {
         userId: session.user.id,
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

   return (
      <div className=" w-full min-h-screen px-2 md:p-8  flex flex-col ">
         <h1 className="text-xl md:text-3xl font-medium mt-4">
            Hello, {session.user?.name?.split(" ")[0]}!
         </h1>
         <article className="w-full grid grid-cols-3 gap-4 sm:gap-8 md:gap-24 text-slate-700 my-4 md:my-12 ">
            {/* /projects/my-little-shop/dashboard/orders/new-order */}
            <Link href={"dashboard/orders/new-order"}>
               <section className="flex flex-col gap-2 sm:gap-8 items-center b hover:bg-gray-100 shadow-md rounded-lg sm:rounded-3xl p-2 sm:p-4 cursor-pointer transition-all duration-300 ">
                  <h2 className="text-xs sm:text-xl font-semibold text-center">New order</h2>
                  <div>
                     <CiShoppingBasket className=" size-14 sm:size-20" />
                  </div>
               </section>
            </Link>
            <Link href={"dashboard/customers"}>
               <section className="flex flex-col gap-2 sm:gap-8 items-center  hover:bg-gray-100 shadow-md rounded-lg sm:rounded-3xl p-2 sm:p-4 cursor-pointer transition-all duration-300">
                  <h2 className="text-xs sm:text-xl font-semibold text-center truncate">New Customer</h2>
                  <div>
                     <PiUserCirclePlus className="size-14 sm:size-20" />
                  </div>
               </section>
            </Link>
            <Link href={"dashboard/products"}>
               <section className="flex flex-col gap-2 sm:gap-8 items-center  hover:bg-gray-100 shadow-md rounded-lg sm:rounded-3xl p-2 sm:p-4 cursor-pointer transition-all duration-300">
                  <h2 className="text-xs sm:text-xl font-semibold text-center">My Products</h2>
                  <div>
                     <FaDropbox className="size-14 sm:size-20" />
                  </div>
               </section>
            </Link>
         </article>

         <section className="w-full  min-h-52">
            <LastTransactions orders={orders} />
         </section>
      </div>
   );
}
