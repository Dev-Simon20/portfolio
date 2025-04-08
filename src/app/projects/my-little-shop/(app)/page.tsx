// const MyLittlePageShop = () => {
//   return (
//     <div>
//       /MyLittlePageShop

//     </div>
//   )
// }
// export default MyLittlePageShop
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Package, ShoppingBag, Users } from "lucide-react";
import dash from "@/public/pics/dashboard.png";

import { Button } from "@/components/ui/button";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

export default function MyLittlePageShop() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <div className="flex min-h-screen flex-col items-center">
         <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mx-auto ">
            <div className="container flex h-16 items-center justify-between  mx-auto">
               <div className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-emerald-600" />
                  <span className="text-xl font-bold">Mi Little Shop</span>
               </div>
               <nav className="hidden md:flex items-center gap-6">
                  <Link
                     href="#features"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Características
                  </Link>
                  <Link
                     href="#benefits"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Beneficios
                  </Link>
                  <Link
                     href="#pricing"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Precios
                  </Link>
                  <Link
                     href="#faq"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     FAQ
                  </Link>
               </nav>
               <div className="flex items-center gap-4">
                  <Button asChild variant="ghost" className="hidden md:flex">
                     <Link href="#">Iniciar Sesión</Link>
                  </Button>
                  <Button asChild className="hidden md:flex">
                     <Link href="#">Registrarse</Link>
                  </Button>
                  <Button
                     variant="outline"
                     size="icon"
                     className="md:hidden"
                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                     <span className="sr-only">Toggle menu</span>
                     {mobileMenuOpen ? (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="h-6 w-6"
                        >
                           <path d="M18 6 6 18" />
                           <path d="m6 6 12 12" />
                        </svg>
                     ) : (
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           strokeWidth="2"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="h-6 w-6"
                        >
                           <line x1="4" x2="20" y1="12" y2="12" />
                           <line x1="4" x2="20" y1="6" y2="6" />
                           <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                     )}
                  </Button>
               </div>
            </div>
            {mobileMenuOpen && (
               <div className="container md:hidden py-4 border-t">
                  <nav className="flex flex-col gap-4">
                     <Link
                        href="#features"
                        className="text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                     >
                        Características
                     </Link>
                     <Link
                        href="#benefits"
                        className="text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                     >
                        Beneficios
                     </Link>
                     <Link
                        href="#pricing"
                        className="text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                     >
                        Precios
                     </Link>
                     <Link
                        href="#faq"
                        className="text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                     >
                        FAQ
                     </Link>
                     <div className="flex flex-col gap-2 mt-2">
                        <Button asChild variant="outline">
                           <Link href="#">Iniciar Sesión</Link>
                        </Button>
                        <Button asChild>
                           <Link href="#">Registrarse</Link>
                        </Button>
                     </div>
                  </nav>
               </div>
            )}
         </header>
         <main className="!flex-1 w-full flex flex-col">
            <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/90 mx-auto">
               <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 ">
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                              Gestiona tu negocio con facilidad
                           </h1>
                           <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                              Mi Little Shop es la herramienta perfecta para
                              pequeños emprendimientos que necesitan gestionar
                              sus productos, ventas y clientes de manera
                              sencilla y eficiente.
                           </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                           <Button
                              asChild
                              size="lg"
                              className="bg-emerald-600 hover:bg-emerald-700"
                           >
                              <Link href="#">
                                 Comenzar ahora
                                 <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                           </Button>
                           <Button asChild size="lg" variant="outline">
                              <Link href="#">Ver demostración</Link>
                           </Button>
                        </div>
                     </div>
                     <div className="mx-auto w-full max-w-[600px] lg:max-w-none">
                        <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow-xl dark:bg-gray-900">
                           <Image
                              src={dash.src}
                              alt="Dashboard de Mi Little Shop"
                              width={1280}
                              height={720}
                              className="object-cover"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section id="features" className="py-12 md:py-24 lg:py-32 mx-auto">
               <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-400">
                           Características
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Todo lo que necesitas para tu negocio
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Mi Little Shop ofrece todas las herramientas
                           necesarias para gestionar tu inventario, ventas y
                           clientes en un solo lugar.
                        </p>
                     </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-700/20">
                           <Package className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-bold">
                              Gestión de Productos
                           </h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Crea, actualiza y elimina productos fácilmente.
                              Gestiona tu inventario y mantén un control preciso
                              de tu stock.
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-700/20">
                           <ShoppingBag className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-bold">
                              Registro de Ventas
                           </h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Registra tus ventas de forma rápida y sencilla.
                              Genera informes y analiza el rendimiento de tu
                              negocio.
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-700/20">
                           <Users className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-bold">
                              Gestión de Clientes
                           </h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Mantén un registro de tus clientes y sus compras.
                              Mejora tu servicio y fideliza a tus clientes.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section
               id="benefits"
               className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50"
            >
               <div className="container px-4 md:px-6 mx-auto">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-400">
                           Beneficios
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           ¿Por qué elegir Mi Little Shop?
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Descubre cómo nuestra aplicación puede ayudarte a
                           hacer crecer tu negocio.
                        </p>
                     </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                     <div className="grid gap-6">
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Fácil de usar
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Interfaz intuitiva que no requiere
                                 conocimientos técnicos avanzados.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Ahorro de tiempo
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Automatiza tareas repetitivas y dedica más
                                 tiempo a hacer crecer tu negocio.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Acceso desde cualquier lugar
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Gestiona tu negocio desde cualquier dispositivo
                                 con conexión a internet.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="grid gap-6">
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Informes detallados
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Obtén información valiosa sobre el rendimiento
                                 de tu negocio con informes detallados.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Seguridad garantizada
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Tus datos están seguros con nosotros gracias a
                                 nuestras medidas de seguridad avanzadas.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Soporte técnico
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Nuestro equipo de soporte está disponible para
                                 ayudarte con cualquier duda o problema.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section id="pricing" className="py-12 md:py-24 lg:py-32 mx-auto">
               <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-400">
                           Precios
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Planes adaptados a tus necesidades
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Elige el plan que mejor se adapte a tu negocio y
                           comienza a gestionar tu inventario hoy mismo.
                        </p>
                     </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
                        <div className="space-y-2">
                           <h3 className="text-2xl font-bold">Básico</h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Ideal para emprendedores que están comenzando.
                           </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                           <span className="text-4xl font-bold tracking-tight">
                              $9.99
                           </span>
                           <span className="ml-1 text-xl font-semibold">
                              /mes
                           </span>
                        </div>
                        <ul className="mt-6 space-y-4">
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Hasta 100 productos</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Gestión de inventario básica</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Registro de ventas</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Soporte por email</span>
                           </li>
                        </ul>
                        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                           Comenzar gratis
                        </Button>
                     </div>
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900 relative">
                        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                           Popular
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-2xl font-bold">Profesional</h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Perfecto para negocios en crecimiento.
                           </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                           <span className="text-4xl font-bold tracking-tight">
                              $19.99
                           </span>
                           <span className="ml-1 text-xl font-semibold">
                              /mes
                           </span>
                        </div>
                        <ul className="mt-6 space-y-4">
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Hasta 500 productos</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Gestión de inventario avanzada</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Informes de ventas detallados</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Gestión de clientes</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Soporte prioritario</span>
                           </li>
                        </ul>
                        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                           Comenzar prueba gratuita
                        </Button>
                     </div>
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
                        <div className="space-y-2">
                           <h3 className="text-2xl font-bold">Empresarial</h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Para negocios establecidos con grandes volúmenes.
                           </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                           <span className="text-4xl font-bold tracking-tight">
                              $39.99
                           </span>
                           <span className="ml-1 text-xl font-semibold">
                              /mes
                           </span>
                        </div>
                        <ul className="mt-6 space-y-4">
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Productos ilimitados</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Gestión de inventario premium</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Análisis avanzado de ventas</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>CRM completo</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Integraciones personalizadas</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Soporte 24/7</span>
                           </li>
                        </ul>
                        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                           Contactar ventas
                        </Button>
                     </div>
                  </div>
               </div>
            </section>

            <section
               id="testimonials"
               className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900/50"
            >
               <div className="container px-4 md:px-6 mx-auto">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-400">
                           Testimonios
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Lo que dicen nuestros clientes
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Descubre cómo Mi Little Shop ha ayudado a otros
                           emprendedores a hacer crecer sus negocios.
                        </p>
                     </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
                        <div className="flex items-center gap-4">
                           <Image
                              src="/images/avatar-maria.jpg"
                              alt="María González"
                              width={40}
                              height={40}
                              className="rounded-full object-cover"
                           />
                           <div>
                              <h3 className="font-bold">María González</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                 Tienda de Ropa
                              </p>
                           </div>
                        </div>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                           "Mi Little Shop ha transformado la forma en que
                           gestiono mi tienda. Ahora puedo controlar mi
                           inventario y ventas de manera eficiente, lo que me ha
                           permitido enfocarme en hacer crecer mi negocio."
                        </p>
                     </div>
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
                        <div className="flex items-center gap-4">
                           <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt="Avatar"
                              width={40}
                              height={40}
                              className="rounded-full"
                           />
                           <div>
                              <h3 className="font-bold">Carlos Rodríguez</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                 Tienda de Electrónica
                              </p>
                           </div>
                        </div>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                           "La facilidad de uso de Mi Little Shop es
                           impresionante. En minutos pude configurar mi tienda y
                           comenzar a gestionar mis productos. El soporte
                           técnico es excelente y siempre están dispuestos a
                           ayudar."
                        </p>
                     </div>
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
                        <div className="flex items-center gap-4">
                           <Image
                              src="/placeholder.svg?height=100&width=100"
                              alt="Avatar"
                              width={40}
                              height={40}
                              className="rounded-full"
                           />
                           <div>
                              <h3 className="font-bold">Laura Martínez</h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                 Pastelería
                              </p>
                           </div>
                        </div>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                           "Gracias a Mi Little Shop he podido organizar mejor
                           mi inventario y llevar un control preciso de mis
                           ventas. Los informes me ayudan a tomar mejores
                           decisiones para mi negocio. ¡Lo recomiendo
                           totalmente!"
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            <section id="faq" className="py-12 md:py-24 lg:py-32 ">
               <div className="container px-4 md:px-6  mx-auto">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-400">
                           FAQ
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Preguntas frecuentes
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Encuentra respuestas a las preguntas más comunes
                           sobre Mi Little Shop.
                        </p>
                     </div>
                  </div>
                  <div className="mx-auto max-w-3xl py-12">
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                           <AccordionTrigger>
                              ¿Necesito conocimientos técnicos para usar Mi
                              Little Shop?
                           </AccordionTrigger>
                           <AccordionContent>
                              No, Mi Little Shop está diseñado para ser
                              intuitivo y fácil de usar. No necesitas
                              conocimientos técnicos avanzados para gestionar tu
                              negocio con nuestra aplicación.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                           <AccordionTrigger>
                              ¿Puedo acceder a Mi Little Shop desde mi teléfono
                              móvil?
                           </AccordionTrigger>
                           <AccordionContent>
                              Sí, Mi Little Shop es completamente responsive y
                              puedes acceder desde cualquier dispositivo con
                              conexión a internet, ya sea un ordenador, tablet o
                              teléfono móvil.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                           <AccordionTrigger>
                              ¿Cómo puedo empezar a usar Mi Little Shop?
                           </AccordionTrigger>
                           <AccordionContent>
                              Es muy sencillo. Solo tienes que registrarte en
                              nuestra plataforma, elegir el plan que mejor se
                              adapte a tus necesidades y comenzar a añadir tus
                              productos. Ofrecemos un período de prueba gratuito
                              para que puedas explorar todas las
                              funcionalidades.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                           <AccordionTrigger>
                              ¿Mis datos están seguros en Mi Little Shop?
                           </AccordionTrigger>
                           <AccordionContent>
                              Absolutamente. La seguridad de tus datos es
                              nuestra prioridad. Utilizamos tecnología de
                              encriptación avanzada y seguimos las mejores
                              prácticas de seguridad para proteger tu
                              información.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                           <AccordionTrigger>
                              ¿Puedo cambiar de plan en cualquier momento?
                           </AccordionTrigger>
                           <AccordionContent>
                              Sí, puedes actualizar o cambiar tu plan en
                              cualquier momento según las necesidades de tu
                              negocio. El cambio se aplicará en tu próximo ciclo
                              de facturación.
                           </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                  </div>
               </div>
            </section>

            <section
               id="cta"
               className="py-12 md:py-24 lg:py-32 bg-emerald-600 text-white"
            >
               <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Comienza a gestionar tu negocio hoy mismo
                        </h2>
                        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                           Únete a miles de emprendedores que ya confían en Mi
                           Little Shop para hacer crecer sus negocios.
                        </p>
                     </div>
                     <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button
                           asChild
                           size="lg"
                           className="bg-white text-emerald-600 hover:bg-gray-100"
                        >
                           <Link href="#">
                              Comenzar ahora
                              <ArrowRight className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                        <Button
                           asChild
                           size="lg"
                           variant="outline"
                           className="border-white text-white bg-emerald-600 hover:bg-emerald-700 hover:text-white"
                        >
                           <Link href="#">Contactar ventas</Link>
                        </Button>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer className="border-t py-6 md:py-8">
            <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
               <div className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg font-bold">Mi Little Shop</span>
               </div>
               <nav className="flex gap-4 md:gap-6">
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Términos
                  </Link>
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Privacidad
                  </Link>
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Contacto
                  </Link>
               </nav>
               <div className="md:ml-auto flex gap-4">
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     © 2025 Mi Little Shop. Todos los derechos reservados.
                  </Link>
               </div>
            </div>
         </footer>
      </div>
   );
}
