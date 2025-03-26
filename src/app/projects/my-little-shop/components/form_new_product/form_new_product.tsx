'use client'

import { useForm } from "react-hook-form"
import { NewProductValidateSchema } from "../../lib/product_validate_schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { useState, useTransition } from "react"
import { createProduct } from "../../actions/create-product"

const FormNewProduct = () => {
    const { data: session, status } = useSession();
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();



    const form = useForm<z.infer<typeof NewProductValidateSchema>>({
        resolver: zodResolver(NewProductValidateSchema),
        defaultValues: {
            name: "",
            description: ""
        }
    })
    async function onSubmit(values: z.infer<typeof NewProductValidateSchema>) {
        const formData = new FormData();

        formData.append('image', values.image)

        startTransition(async () => {
            let errorTemp: string | null = null;
            const url = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            })
            const data = await url.json()
            if (session?.user.id) {
                const { image, ...restValues } = values;
                const plainValues = JSON.parse(JSON.stringify(restValues));
                const response = await createProduct(plainValues, data.data, session?.user.id)
                if (response.error) {
                    errorTemp = response.error;
                }
                setError(errorTemp);
            }
        });


    }

    if (status === "loading") return <p>Cargando...</p>;

    if (!session) return <p>No has iniciado sesión</p>;

    return (
        <Card className="w-full max-w-md mx-auto p-3 text-gray-700">
            <h2>New Product</h2>
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
                                        placeholder="Name of product"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Description of product"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="purchase_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Purchase price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        placeholder="Total purchase price"
                                        {...field}
                                        value={field.value ? field.value.toString() : ""}
                                        onChange={(e) =>
                                            field.onChange(parseFloat(e.target.value))
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sale_price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Unit sale price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        placeholder="Unit selling price"
                                        {...field}
                                        value={field.value ? field.value.toString() : ""}
                                        onChange={(e) =>
                                            field.onChange(parseFloat(e.target.value))
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"

                                        placeholder="Quantity product"
                                        {...field}
                                        value={field.value ? field.value.toString() : ""}
                                        onChange={(e) =>
                                            field.onChange(parseInt(e.target.value))
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel >Picture</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept=".jpg,.jpeg,.png,.webp"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0]; // Captura el archivo seleccionado
                                            field.onChange(file); // Actualiza manualmente el valor del campo
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" disabled={isPending}>
                        Submit
                    </Button>
                    {error && <FormMessage>{error}</FormMessage>}


                </form>

            </Form>

        </Card>
    )
}
export default FormNewProduct