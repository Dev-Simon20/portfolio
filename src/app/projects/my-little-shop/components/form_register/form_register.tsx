"use client";
import { z } from "zod";
import { RegisterSchema } from "@/lib/zod";
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
import { registerActionLittleShop } from "../../actions/auth-actions";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Formregister = () => {
   const router = useRouter();
   const [error, setError] = useState<string | null>(null);
   const [isPending, startTransition] = useTransition();
   const [acceptTerms, setAcceptTerms] = useState(false);
   const [showPassword, setShowPassword] = useState(false);

   const form = useForm<z.infer<typeof RegisterSchema>>({
      resolver: zodResolver(RegisterSchema),
      defaultValues: {
         email: "",
         password: "",
         name: "",
      },
   });

   async function onSubmit(values: z.infer<typeof RegisterSchema>) {
      startTransition(async () => {
         let errorTemp: string | null = null;
         console.log("Incia el registro");

         const response = await registerActionLittleShop(values);
         console.log("respuesta del registro", response);

         if (response.error) {
            errorTemp = response.error;
         } else {
            router.push("/projects/my-little-shop/dashboard");
         }
         setError(errorTemp);
         console.log(errorTemp);
      });
      console.log(values);
   }
   return (
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border shadow-sm ">
         <div className="bg-emerald-600 px-5 py-6 text-white">
            <div className="flex items-center">
               <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                  <ShoppingBag className="h-5 w-5 text-white" />
               </div>
               <div>
                  <h1 className="text-xl font-bold">Sign Up</h1>
                  <p className="text-sm text-emerald-100">
                     Create your account to continue
                  </p>
               </div>
            </div>
         </div>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="p-5">
               <div className="space-y-2">
                  <FormField
                     control={form.control}
                     name="name"
                     render={({ field }) => (
                        <FormItem className="space-y-1.5">
                           <FormLabel>Full name</FormLabel>
                           <FormControl>
                              <div className="relative">
                                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <User className="h-4 w-4" />
                                 </div>
                                 <Input
                                    placeholder=" example example"
                                    {...field}
                                    className="h-11 pl-9"
                                 />
                              </div>
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  {/* <FormField
                  control={form.control}
                  name="birthdate"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Birthdate</FormLabel>
                        <FormControl>
                           <Input
                              type="date"
                              {...field}
                              value={
                                 field.value
                                    ? new Date(field.value)
                                         .toISOString()
                                         .split("T")[0]
                                    : ""
                              }
                              onChange={(e) =>
                                 field.onChange(new Date(e.target.value))
                              }
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               /> */}
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
                                    className="h-11 pl-9"
                                    type="email"
                                    {...field}
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
                                    placeholder="Minimum 8 characters"
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
                           <p className="mt-1 text-xs text-gray-500">
                              The password must be at least 8 characters long,
                              including an uppercase letter and a number.
                           </p>
                        </FormItem>
                     )}
                  />

                  <div className="flex items-start space-x-2 pt-1">
                     <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(!!checked)}
                     />
                     <Label htmlFor="terms" className="text-xs text-gray-600">
                        I accept the{" "}
                        <Link
                           href="#"
                           className="text-emerald-600 hover:underline"
                        >
                           Terms and Conditions
                        </Link>{" "}
                        and the{" "}
                        <Link
                           href="#"
                           className="text-emerald-600 hover:underline"
                        >
                           Privacy Policy
                        </Link>
                     </Label>
                  </div>
               </div>

               {error && <FormMessage>{error}</FormMessage>}

               <div className="mt-6">
                  <Button
                     type="submit"
                     className="h-11 w-full bg-emerald-600 text-white hover:bg-emerald-700"
                     disabled={!acceptTerms || isPending}
                  >
                     Create Account
                  </Button>
               </div>

               <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                     Already have an account?
                  </p>
                  <Link
                     href="login"
                     className="mt-1 text-sm font-medium text-emerald-600"
                  >
                     Log in
                  </Link>
               </div>
            </form>
         </Form>
      </div>
   );
};
export default Formregister;
