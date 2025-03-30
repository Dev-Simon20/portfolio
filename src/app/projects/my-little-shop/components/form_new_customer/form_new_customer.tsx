'use client'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { object, string, z } from "zod"
import { createCustomer } from "../../actions/create-customer"
import { newCustomerSchema } from "../../lib/customer_validate_schema"




const FormNewCustomer = ({loadData,id}:{loadData:(id:string)=>void,id:string}) => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const { data: session, status } = useSession()

  const form = useForm<z.infer<typeof newCustomerSchema>>({
    resolver: zodResolver(newCustomerSchema),
    defaultValues: {
      name: ''
    }
  })

  async function onSubmit(values: z.infer<typeof newCustomerSchema>) {

    startTransition(async () => {
      let errorTemp: string | null = null;

      if (session?.user.id) {
        const response = await createCustomer(values, session.user.id);
        
        if (response.error) {
          errorTemp = response.error;
        }else{
          loadData(id)
          form.reset()
        }
        setError(errorTemp);
      }
    })


  }



  if (status === "loading") return <p>Cargando...</p>;

  if (!session) return <p>No has iniciado sesión</p>;
  return (
    <div className=" flex flex-col">
      <h2>Register the new customer</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the name of the new customer"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>
            Register
          </Button>
        </form>
      </Form>
    </div>
  )
}
export default FormNewCustomer