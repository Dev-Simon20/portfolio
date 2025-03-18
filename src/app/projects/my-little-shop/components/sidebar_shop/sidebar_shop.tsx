import {
   Calendar,
   Home,
   Inbox,
   Search,
   Settings,
   BadgeDollarSign,
   PackageSearch,
   ChartNoAxesCombined,
} from "lucide-react";

import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar";

const urlCustom=(text:string):string=>{
   return `/projects/my-little-shop/dashboard${text}`
}
// Menu items.
const items = [
   {
      title: "Home",
      url: urlCustom("/"),
      icon: Home,
   },
   {
      title: "Sales",
      url: urlCustom("/sales"),
      icon: BadgeDollarSign,
   },
   {
      title: "Products",
      url: urlCustom("/products"),
      icon: PackageSearch,
   },
   {
      title: "Finance",
      url: urlCustom("/finance"),
      icon: ChartNoAxesCombined,
   },
   {
      title: "Settings",
      url: urlCustom("/settings"),
      icon: Settings,
   },
];

export function SidebarShop() {
   return (
      <Sidebar collapsible="icon">
         <SidebarContent>
            <SidebarGroup>
               <SidebarGroupLabel className="text-lg">
                  Application
               </SidebarGroupLabel>
               <SidebarGroupContent>
                  <SidebarMenu>
                     {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton asChild>
                              <a href={item.url}>
                                 <item.icon
                                    style={{ width: "18px", height: "18px" }}
                                 />
                                 <span className="font-dm_sans text-md font-medium">
                                    {item.title}
                                 </span>
                              </a>
                           </SidebarMenuButton>
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>
         </SidebarContent>
      </Sidebar>
   );
}
