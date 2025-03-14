"use client";

import { cn } from "@/lib/utils";
import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
   navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { forwardRef } from "react";
import { GrProjects } from "react-icons/gr";

export function NavigationMenuDemo() {
   return (
      <NavigationMenu className="dark">
         <NavigationMenuList>
            <NavigationMenuItem>
               <NavigationMenuTrigger className="text-white bg-zinc-800  font-normal">
                  Projects
               </NavigationMenuTrigger>
               <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                     <li className="row-span-3">
                        <NavigationMenuLink asChild>
                           <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/projects"
                           >
                              <GrProjects className="h-6 w-6" />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                 My projects
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                 Explore some of the projects I've worked on,
                                 using modern technologies like Tailwind CSS,
                                 Radix UI, and Next.js.
                              </p>
                           </a>
                        </NavigationMenuLink>
                     </li>
                     <ListItem
                        href="/projects/mi-marinera.com"
                        title="Mi marinera.com"
                     >
                        A comprehensive platform for managing and promoting
                        Marinera events in Peru.
                     </ListItem>
                     <ListItem
                        href="/projects/dashboard"
                        title="School Dashboard"
                     >
                        A school management dashboard with student records,
                        grades, and schedules.
                     </ListItem>
                     <ListItem href="/projects/pokedex" title="Pokedex">
                        An interactive app with detailed Pokémon information,
                        built using Radix UI and Tailwind CSS.
                     </ListItem>
                  </ul>
               </NavigationMenuContent>
            </NavigationMenuItem>
         </NavigationMenuList>
      </NavigationMenu>
   );
}

const ListItem = forwardRef<
   React.ElementRef<"a">,
   React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
   return (
      <li>
         <NavigationMenuLink asChild>
            <a
               ref={ref}
               className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  className
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
               </p>
            </a>
         </NavigationMenuLink>
      </li>
   );
});
ListItem.displayName = "ListItem";
