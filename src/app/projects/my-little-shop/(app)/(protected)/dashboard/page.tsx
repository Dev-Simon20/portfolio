import { auth } from "@/auth";
import LogoutButton from "@/components/logout-buton/logout_button";
import { prismaShop } from "../../../lib/shop-db";
import { prismaSchool } from "../../../lib/school-db";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { FaDropbox } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { PiUserCirclePlus } from "react-icons/pi";
import dynamic from "next/dynamic";
const LastTransactions = dynamic(
   () => import("../../../components/last_transactions/last_transactions"),
   { ssr: false }
);

export default async function DashboarPage() {
   const session = await auth();
   if (!session) {
      return <div>Not Auteticated</div>;
   }

   // const user = await prismaShop.order.findMany();
   console.log("el usario es",session);
   // const evento = await prismaSchool.evento.findMany();

   return (
      <div className=" w-full min-h-screen p-2 md:p-8  flex flex-col ">
         <h1 className=" text-xl md:text-3xl font-medium pl-4 md:pl-0">
            Hello, {session.user?.name?.split(" ")[0]}!
         </h1>
         <article className="w-full grid grid-cols-3 gap-8 md:gap-24 text-slate-700 my-4 md:my-12 ">
            <section className="flex flex-col gap-8 items-center b hover:bg-gray-100 shadow-md rounded-3xl p-4 cursor-pointer transition-all duration-300 ">
               <h2 className="text-xl font-semibold">New sale</h2>
               <div>
                  <CiShoppingBasket className="w-20 h-20" />
               </div>
            </section>
            <section className="flex flex-col gap-8 items-center  hover:bg-gray-100 shadow-md rounded-3xl p-4 cursor-pointer transition-all duration-300">
               <h2 className="text-xl font-semibold">New Client</h2>
               <div>
                  <PiUserCirclePlus className="w-20 h-20" />
               </div>
            </section>
            <section className="flex flex-col gap-8 items-center  hover:bg-gray-100 shadow-md rounded-3xl p-4 cursor-pointer transition-all duration-300">
               <h2 className="text-xl font-semibold">My Products</h2>
               <div>
                  <FaDropbox className="w-20 h-20" />
               </div>
            </section>
         </article>
         
         <section className="w-full  min-h-52">
            <LastTransactions />
         </section>
      </div>
   );
}
