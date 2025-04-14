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
import HeaderNotAuth from "../components/header-not-auth/header-not-auth";

export default function MyLittlePageShop() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

   return (
      <div className="flex min-h-screen flex-col items-center">
         <HeaderNotAuth />

         <main className="!flex-1 w-full flex flex-col">
            <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-background dark:to-background/90 mx-auto">
               <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2 ">
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                           <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                              Manage your business effortlessly
                           </h1>
                           <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                              <b>My Little Shop</b> is the perfect tool for
                              small businesses looking to easily manage their
                              products, sales, and customers—all in one place.
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
                           Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Everything you need for your business
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           My Little Shop gives you all the tools you need to
                           manage your inventory, sales, and customers—all in
                           one place.
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
                              Product Management
                           </h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Create, update, and delete products with ease.
                              Manage your inventory and keep precise control
                              over your stock.
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-700/20">
                           <ShoppingBag className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-bold">Sales Tracking</h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Record your sales quickly and easily. Generate
                              reports and analyze your business performance.
                           </p>
                        </div>
                     </div>
                     <div className="flex flex-col justify-center space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-700/20">
                           <Users className="h-6 w-6 text-emerald-700 dark:text-emerald-400" />
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-xl font-bold">
                              Customer Management
                           </h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Keep track of your customers and their purchases.
                              Enhance your service and build customer loyalty.
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
                           Benefits
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Why Choose Mi Little Shop?
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Discover how our app can help you grow your business.
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
                              <h3 className="text-xl font-bold">Easy to Use</h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Intuitive interface that doesn’t require
                                 advanced technical knowledge.
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
                              <h3 className="text-xl font-bold">Time Saving</h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Automate repetitive tasks and spend more time
                                 growing your business.
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
                                 Detailed Reports
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Get valuable insights into your business
                                 performance with detailed reports.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Guaranteed Security
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Your data is secure with us thanks to our
                                 advanced security measures.
                              </p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-700/20">
                              <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" />
                           </div>
                           <div className="space-y-1">
                              <h3 className="text-xl font-bold">
                                 Technical Support
                              </h3>
                              <p className="text-gray-500 dark:text-gray-400">
                                 Our support team is available to assist you
                                 with any questions or issues.
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
                           Pricing
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Plans tailored to your needs
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Choose the plan that best suits your business and
                           start managing your inventory today.
                        </p>
                     </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
                        <div className="space-y-2">
                           <h3 className="text-2xl font-bold">Free</h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Ideal for entrepreneurs who are just starting out.
                           </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                           <span className="text-4xl font-bold tracking-tight">
                              S/. 0.00
                           </span>
                           <span className="ml-1 text-xl font-semibold">
                              /mes
                           </span>
                        </div>
                        <ul className="mt-6 space-y-4">
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Up to 20 products</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Basic inventory management</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Sales tracking</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Email support</span>
                           </li>
                        </ul>
                        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                           Start for free
                        </Button>
                     </div>
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900 relative">
                        <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">
                           Popular
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-2xl font-bold">Professional</h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              Perfect for growing businesses.
                           </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                           <span className="text-4xl font-bold tracking-tight">
                              S/. 9.99
                           </span>
                           <span className="ml-1 text-xl font-semibold">
                              /mes
                           </span>
                        </div>
                        <ul className="mt-6 space-y-4">
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Up to 500 products</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Advanced inventory management</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Detailed sales reports</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Customer management</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Priority support</span>
                           </li>
                        </ul>
                        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                           Start Free Trial
                        </Button>
                     </div>
                     <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm dark:bg-gray-900">
                        <div className="space-y-2">
                           <h3 className="text-2xl font-bold">Enterprise</h3>
                           <p className="text-gray-500 dark:text-gray-400">
                              For established businesses with large volumes.
                           </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-gray-900 dark:text-white">
                           <span className="text-4xl font-bold tracking-tight">
                              S/. 14.99
                           </span>
                           <span className="ml-1 text-xl font-semibold">
                              /mes
                           </span>
                        </div>
                        <ul className="mt-6 space-y-4">
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Unlimited products</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Premium inventory management</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Advanced sales analytics</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Full CRM</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>Custom integrations</span>
                           </li>
                           <li className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-emerald-600" />
                              <span>24/7 support</span>
                           </li>
                        </ul>
                        <Button className="mt-8 bg-emerald-600 hover:bg-emerald-700">
                           Contact Sales
                        </Button>
                     </div>
                  </div>
               </div>
            </section>

            <section id="faq" className="py-12 md:py-24 lg:py-32 ">
               <div className="container px-4 md:px-6 mx-auto">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-700/20 dark:text-emerald-400">
                           FAQ
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                           Frequently Asked Questions
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                           Find answers to the most common questions about Mi
                           Little Shop.
                        </p>
                     </div>
                  </div>
                  <div className="mx-auto max-w-3xl py-12">
                     <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                           <AccordionTrigger>
                              Do I need technical knowledge to use Mi Little
                              Shop?
                           </AccordionTrigger>
                           <AccordionContent>
                              No, Mi Little Shop is designed to be intuitive and
                              easy to use. You do not need advanced technical
                              knowledge to manage your business with our app.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                           <AccordionTrigger>
                              Can I access Mi Little Shop from my mobile phone?
                           </AccordionTrigger>
                           <AccordionContent>
                              Yes, Mi Little Shop is fully responsive, and you
                              can access it from any device with an internet
                              connection, whether it’s a computer, tablet, or
                              mobile phone.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                           <AccordionTrigger>
                              How can I start using Mi Little Shop?
                           </AccordionTrigger>
                           <AccordionContent>
                              It&apos;s very simple. You just need to sign up on our
                              platform, choose the plan that best suits your
                              needs, and start adding your products. We offer a
                              free trial period so you can explore all the
                              features.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                           <AccordionTrigger>
                              Are my data secure in Mi Little Shop?
                           </AccordionTrigger>
                           <AccordionContent>
                              Absolutely. The security of your data is our
                              priority. We use advanced encryption technology
                              and follow best security practices to protect your
                              information.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                           <AccordionTrigger>
                              Can I change my plan at any time?
                           </AccordionTrigger>
                           <AccordionContent>
                              Yes, you can upgrade or change your plan at any
                              time according to your business needs. The change
                              will be applied in your next billing cycle.
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
                           Start managing your business today
                        </h2>
                        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                           Join thousands of entrepreneurs who already trust Mi
                           Little Shop to grow their businesses.
                        </p>
                     </div>
                     <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button
                           asChild
                           size="lg"
                           className="bg-white text-emerald-600 hover:bg-gray-100"
                        >
                           <Link href="#">
                              Start now
                              <ArrowRight className="ml-2 h-4 w-4" />
                           </Link>
                        </Button>
                        <Button
                           asChild
                           size="lg"
                           variant="outline"
                           className="border-white text-white bg-emerald-600 hover:bg-emerald-700 hover:text-white"
                        >
                           <Link href="#">Contact sales</Link>
                        </Button>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <footer className="border-t py-6 md:py-8 w-full">
            <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8 mx-auto">
               <div className="flex items-center gap-2">
                  <ShoppingBag className="h-6 w-6 text-emerald-600" />
                  <span className="text-lg font-bold">Mi Little Shop</span>
               </div>
               <nav className="flex gap-4 md:gap-6">
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Terms
                  </Link>
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Privacy
                  </Link>
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     Contact
                  </Link>
               </nav>
               <div className="md:ml-auto flex gap-4">
                  <Link
                     href="#"
                     className="text-sm font-medium hover:underline underline-offset-4"
                  >
                     © 2025 Mi Little Shop. All rights reserved.
                  </Link>
               </div>
            </div>
         </footer>
      </div>
   );
}
