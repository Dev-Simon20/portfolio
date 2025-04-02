"use client";

import { useState } from "react";
import { ChevronDown, LogOut, UserCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function UserDropdown({ name }: { name: string }) {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);
   const userName = name.split(" ")[0];
   const handleOut = async () => {
      await signOut({
         redirect: true,
         redirectTo: "/projects/my-little-shop/login",
      });
   };
   const handleRedirect = () => {
      router.push("/projects/my-little-shop/dashboard/account");
   };
   return (
      <div className="flex justify-end p-2 shadow-sm rounded-sm">
         <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
               <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-muted/50"
               >
                  <Avatar className="h-8 w-8">
                     {/* <AvatarImage src="/placeholder.svg" alt={userName} /> */}
                     <AvatarFallback className="bg-primary/10 text-primary">
                        {userName.charAt(0)}
                     </AvatarFallback>
                  </Avatar>
                  <span className="text-sm hidden sm:block font-medium">{userName}</span>
                  <ChevronDown
                     className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                     }`}
                  />
               </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className=" sm:w-40">
               <DropdownMenuItem
                  className="cursor-pointer flex items-center gap-2 py-2"
                  onClick={() => handleRedirect()}
               >
                  <UserCircle className="!h-5 !w-5 " />
                  <span>Account</span>
               </DropdownMenuItem>
               <DropdownMenuSeparator />
               <DropdownMenuItem
                  className="cursor-pointer flex items-center gap-2 py-2 text-destructive"
                  onClick={() => handleOut()}
               >
                  <LogOut className="!h-5 !w-5" />
                  <span>Log out</span>
               </DropdownMenuItem>
            </DropdownMenuContent>
         </DropdownMenu>
      </div>
   );
}
