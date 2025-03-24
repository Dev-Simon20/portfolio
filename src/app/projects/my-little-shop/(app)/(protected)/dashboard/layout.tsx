import type { Metadata } from "next";
import { SidebarShop } from "../../../components/sidebar_shop/sidebar_shop";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
   Breadcrumb,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbList,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import HeaderDashboard from "../../../components/header_dashboard/header_dashboard";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export default async function MyLyttleShopDashboardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const session = await auth();
   if (!session) {
      redirect("/projects/my-little-shop/login");
   }

   return (
      <SidebarProvider className="font-roboto_slab">
         <SidebarShop />
         <main className="w-full bg-white m-3 ml-0 rounded-3xl overflow-hidden ">
            <HeaderDashboard />
            {children}
         </main>
         <Toaster />
      </SidebarProvider>
   );
}
