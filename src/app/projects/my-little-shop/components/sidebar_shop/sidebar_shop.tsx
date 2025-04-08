import {
   Calendar,
   Home,
   Inbox,
   Search,
   Settings,
   BadgeDollarSign,
   PackageSearch,
   ChartNoAxesCombined,
   GalleryVerticalEnd,
   ChevronsUpDown,
   ShoppingCart,
   Users,
   ShoppingBag
} from "lucide-react";

import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
} from "@/components/ui/sidebar";

const urlCustom = (text: string): string => {
   return `/projects/my-little-shop/dashboard${text}`;
};
// Menu items.
const items = [
   {
      title: "Home",
      url: urlCustom("/"),
      icon: Home,
   },
   {
      title: "Orders",
      url: urlCustom("/orders"),
      icon: ShoppingCart,
   },
   {
      title: "Products",
      url: urlCustom("/products"),
      icon: PackageSearch,
   },
   {
      title: "Customers",
      url: urlCustom("/customers"),
      icon: Users,
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
      <Sidebar collapsible="icon" variant="inset" className="text-white">
         <SidebarHeader>
         <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-emerald-100  text-emerald-700">
                <ShoppingBag className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">
                  My little shop
                </span>
                <span className="truncate text-xs">Enterprise</span>
              </div>
            </SidebarMenuButton>
         </SidebarHeader>
         <SidebarContent>
            <SidebarGroup>
               {/* <SidebarGroupLabel className="text-lg text-white">
                  Application
               </SidebarGroupLabel> */}
               <SidebarGroupContent>
                  <SidebarMenu>
                     {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                           <SidebarMenuButton asChild>
                              <a href={item.url}>
                                 <item.icon
                                    style={{ width: "18px", height: "18px" }}
                                 />
                                 <span className=" text-md font-light">
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
