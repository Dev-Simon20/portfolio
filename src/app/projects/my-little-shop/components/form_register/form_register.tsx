"use client"
import { z } from "zod";
import {  RegisterSchema } from "@/lib/zod";
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

const Formregister = () => {
   const router = useRouter();
   const [error, setError] = useState<string | null>(null);
   const [isPending, startTransition] = useTransition();

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
         let errorTemp:(string|null)=null;
         const response = await registerActionLittleShop(values);
         if (response.error) {
            errorTemp=response.error;
         } else {
            router.push("/projects/my-little-shop/dashboard");
         }
         setError(errorTemp)
         console.log(errorTemp)

      });
      console.log(values);
      
   }
   return (
      <div className=" min-w-80 rounded-md outline outline-1 outline-gray-100 shadow-md p-4">
         <h1 className="ml-[50%] -translate-x-1/2 font-semibold text-2xl">Register</h1>
         <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                           <Input
                              placeholder="example example example"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
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
               />
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

               {error && <FormMessage>{error}</FormMessage>}
               <Button type="submit" disabled={isPending}>
                  Submit
               </Button>
            </form>
         </Form>
      </div>
   );
};
export default Formregister;
