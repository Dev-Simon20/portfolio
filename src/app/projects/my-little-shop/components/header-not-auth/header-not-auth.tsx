"use client";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const HeaderNotAuth = () => {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto">
         <div className="container flex h-16 items-center justify-between  mx-auto  px-3 md:px-0">
            <Link
               href="/projects/my-little-shop/"
               className="flex items-center gap-2"
            >
               <ShoppingBag className="h-6 w-6 text-emerald-600" />
               <span className="text-xl font-bold">Mi Little Shop</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
               <Link
                  href="/projects/my-little-shop/#features"
                  className="text-sm font-medium hover:underline underline-offset-4"
               >
                  Features
               </Link>
               <Link
                  href="/projects/my-little-shop/#benefits"
                  className="text-sm font-medium hover:underline underline-offset-4"
               >
                  Benefits
               </Link>
               <Link
                  href="/projects/my-little-shop/#pricing"
                  className="text-sm font-medium hover:underline underline-offset-4"
               >
                  Pricing
               </Link>
               <Link
                  href="/projects/my-little-shop/#faq"
                  className="text-sm font-medium hover:underline underline-offset-4"
               >
                  FAQ
               </Link>
            </nav>
            <div className="flex items-center gap-4">
               <Button asChild variant="ghost" className="hidden md:flex">
                  <Link href="/projects/my-little-shop/login">
                     Login
                  </Link>
               </Button>
               <Button
                  asChild
                  className="hidden md:flex bg-emerald-600 hover:bg-emerald-700"
               >
                  <Link href="/projects/my-little-shop/register">
                     Sign up
                  </Link>
               </Button>
               <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
               >
                  <span className="sr-only">Toggle menu</span>
                  {mobileMenuOpen ? (
                     <X/>
                  ) : (
                     <Menu/>
                  )}
               </Button>
            </div>
         </div>
         {mobileMenuOpen && (
            <div className="container md:hidden py-4 border-t  px-3 md:px-0">
               <nav className="flex flex-col gap-4">
                  <Link
                     href="/projects/my-little-shop/#features"
                     className="text-sm font-medium"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     Características
                  </Link>
                  <Link
                     href="/projects/my-little-shop/#benefits"
                     className="text-sm font-medium"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     Beneficios
                  </Link>
                  <Link
                     href="/projects/my-little-shop/#pricing"
                     className="text-sm font-medium"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     Precios
                  </Link>
                  <Link
                     href="/projects/my-little-shop/#faq"
                     className="text-sm font-medium"
                     onClick={() => setMobileMenuOpen(false)}
                  >
                     FAQ
                  </Link>
                  <div className="flex flex-col gap-2 mt-2">
                     <Button asChild variant="outline">
                        <Link href="/projects/my-little-shop/login">
                           Iniciar Sesión
                        </Link>
                     </Button>
                     <Button asChild>
                        <Link href="/projects/my-little-shop/registerr">
                           Registrarse
                        </Link>
                     </Button>
                  </div>
               </nav>
            </div>
         )}
      </header>
   );
};
export default HeaderNotAuth;
