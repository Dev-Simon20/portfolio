"use client";

import { z } from "zod";
import { logInSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginActionLittleShop } from "../../actions/auth-actions";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, ShoppingBag } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const Formlogin = () => {
   const router = useRouter();
   const [error, setError] = useState<string | null>(null);
   const [isPending, startTransition] = useTransition();
   const [showPassword, setShowPassword] = useState(false);

   const form = useForm<z.infer<typeof logInSchema>>({
      resolver: zodResolver(logInSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   async function onSubmit(values: z.infer<typeof logInSchema>) {
      startTransition(async () => {
         let errorTemp: string | null = null;
         const response = await loginActionLittleShop(values);
         if (response.error) {
            errorTemp = response.error;
         } else {
            router.push("/projects/my-little-shop/dashboard");
         }
         setError(errorTemp);
      });
   }

   return (
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border shadow-sm ">
         <div className="bg-emerald-600 px-5 py-6 text-white">
            <div className="flex items-center">
               <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <ShoppingBag className="h-5 w-5 text-white" />
               </div>
               <div>
                  <h1 className="text-xl font-bold">Log In</h1>
                  <p className="text-sm text-emerald-100">
                     Log in to your account to continue
                  </p>
               </div>
            </div>
         </div>

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-5">
               <div className="space-y-4">
                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem className="space-y-1.5">
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Mail className="h-4 w-4" />
                                 </div>
                                 <Input
                                    placeholder="example@correo.com"
                                    {...field}
                                    className="pl-9 h-11"
                                 />
                              </div>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="password"
                     render={({ field }) => (
                        <FormItem className="space-y-1.5">
                           <FormLabel>Password</FormLabel>
                           <FormControl>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <Lock className="h-4 w-4" />
                                 </div>
                                 <Input
                                    {...field}
                                    type={showPassword ? "text" : "password"}
                                    className="h-11 pl-9 pr-9"
                                 />
                                 <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                                    onClick={() =>
                                       setShowPassword(!showPassword)
                                    }
                                 >
                                    {showPassword ? (
                                       <EyeOff className="h-4 w-4" />
                                    ) : (
                                       <Eye className="h-4 w-4" />
                                    )}
                                 </button>
                              </div>
                           </FormControl>

                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <div className="flex items-center space-x-2 pt-1">
                     <Checkbox id="remember-after" />
                     <FormLabel
                        htmlFor="remember-after"
                        className="text-sm text-gray-600"
                     >
                        Remember me
                     </FormLabel>
                  </div>
               </div>

               {error && <FormMessage>{error}</FormMessage>}

               <div className="mt-6">
                  <Button
                     type="submit"
                     className="h-11 w-full bg-emerald-600 text-white hover:bg-emerald-700"
                     disabled={isPending}
                  >
                     Log in
                  </Button>
               </div>
               <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                     Don&apos;t have an account?
                  </p>
                  <Link
                     href="register"
                     className="mt-1 text-sm font-medium text-emerald-600"
                  >
                     Sign up now
                  </Link>
               </div>
            </form>
         </Form>
      </div>
   );
};
export default Formlogin;
