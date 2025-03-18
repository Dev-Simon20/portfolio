import type { Metadata } from "next";
import { SidebarShop } from "../../../components/sidebar_shop/sidebar_shop";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import HeaderDashboard from "../../../components/header_dashboard/header_dashboard";
export default function MyLyttleShopDashboardLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <SidebarProvider>
         <SidebarShop />
         <main className="w-full">
            <HeaderDashboard />
            {children}
         </main>
      </SidebarProvider>
   );
}
