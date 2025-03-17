import { auth } from "@/auth";
import LogoutButton from "@/components/logout-buton/logout_button";
export default async function DashboarPage() {
   const session = await auth();
   if (!session) {
      return <div>Not Auteticated</div>;
   }

   return (
      <div className="container">
         <pre>{JSON.stringify(session, null, 2)}</pre>
         <LogoutButton/>
      </div>
   );
}
