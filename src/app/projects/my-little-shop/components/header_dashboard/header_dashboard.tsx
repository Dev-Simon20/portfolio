import { auth } from "@/auth";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import dynamic from "next/dynamic"; // 👈 Importa `dynamic`
const Breadcum = dynamic(() => import("./breadcum"), {
   ssr: false,
   loading: () => <h2>Loading....</h2>,
});
const UserDropdown = dynamic(() => import("./user_dropdown"), { ssr: false });

const HeaderDashboard = async () => {
   const session = await auth();
   if (!session) {
      return <div>Not Auteticated</div>;
   }
   return (
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 shadow-gray-200 shadow-sm  justify-between ">
         <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcum />
         </div>
         <div className="lg:mr-8 ">
            <UserDropdown name={session.user?.name || "User-not-found"} />
         </div>
      </header>
   );
};
export default HeaderDashboard;
