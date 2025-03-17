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

const Formlogin = () => {
   const router = useRouter();
   const [error, setError] = useState<string | null>(null);
   const [isPending, startTransition] = useTransition();
   const form = useForm<z.infer<typeof logInSchema>>({
      resolver: zodResolver(logInSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   async function onSubmit(values: z.infer<typeof logInSchema>) {
      startTransition(async () => {
         let errorTemp:(string|null)=null;
         const response = await loginActionLittleShop(values);
         if (response.error) {
            errorTemp=response.error;
         } else {
            router.push("/projects/my-little-shop/dashboard");
         }
         setError(errorTemp)
      });

   }

   return (
      <div className=" min-w-80 rounded-md outline outline-1 outline-gray-100 shadow-md p-4">
         <h1>Login</h1>
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input
                              placeholder="example@example.com"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                           <Input placeholder="AX*44c&" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               {/* <FormField
                  control={form.control}
                  name="date_of_birth"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Date of birth</FormLabel>
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
               {
                  error&&<FormMessage>
                     {error}
                  </FormMessage>
               }
               <Button type="submit" disabled={isPending}>
                  Submit
               </Button>
            </form>
         </Form>
      </div>
   );
};
export default Formlogin;
