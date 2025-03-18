import { auth } from "@/auth";
import LogoutButton from "@/components/logout-buton/logout_button";
import { prismaShop } from "../../../lib/shop-db";
import { prismaSchool } from "../../../lib/school-db";
export default async function DashboarPage() {
   const session = await auth();
   if (!session) {
      return <div>Not Auteticated</div>;
   }

   // const user = await prismaShop.user.findMany();
   // console.log("el usario es", user);
   const evento=await prismaSchool.evento.findMany();
   console.log('los eventos son',evento);

   return (
      <div className=" w-full min-h-screen p-8">
         <section className="w-full bg-blue-100 min-h-52"></section>
         <article>
            <section></section>
            <section></section>
         </article>
         <LogoutButton />
      </div>
   );
}
