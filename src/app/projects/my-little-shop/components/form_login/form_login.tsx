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

const Formlogin = () => {
   const form = useForm<z.infer<typeof logInSchema>>({
      resolver: zodResolver(logInSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   async function onSubmit(values: z.infer<typeof logInSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log('valores desde la funcion on submit',values);
      await loginActionLittleShop(values);
   }

   return (
      <div className=" min-w-80 rounded-md outline outline-1 outline-gray-100 shadow-md p-4">
         <h1>Login</h1>
         <Form {...form} >
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
                           <Input
                              placeholder="AX*44c&"
                              {...field}
                           />
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
               <Button type="submit">Submit</Button>
            </form>
         </Form>
      </div>
   );
};
export default Formlogin;
