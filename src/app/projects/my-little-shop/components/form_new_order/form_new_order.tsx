"use client"

import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Minus, Plus, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { saleFormSchema, validateSaleForm } from "../../lib/order_validate_schema"

import { type SaleFormValues } from "../../types/new_order"
import { type Product } from "../../types/product"
import { useToast } from "@/hooks/use-toast"
import { Customer } from "../../types/customer"
import { procesNewOrder } from "../../actions/process_new_order"
import { useRouter } from "next/navigation"

interface SaleFormProps{
   productsRequire:Product[],
   customers:Customer[],
   id:string
}

export default function SaleForm({productsRequire,customers,id}:SaleFormProps) {
   const { toast } = useToast();
   const router=useRouter();
   // Configuración del formulario con React Hook Form y Zod
   const AVAILABLE_PRODUCTS=productsRequire
   const REGISTERED_CLIENTS=customers
   const {
      control,
      handleSubmit,
      setValue,
      watch,
      formState: { errors },
   } = useForm<SaleFormValues>({
      resolver: zodResolver(saleFormSchema),
      defaultValues: {
         // client: { id: 1, name: "Client free" },
         paymentType: "cash",
         statusPaid: "paid",
         products: [],
         total: 0,
      },
   })

   // Observar cambios en los productos del carrito
   const watchProducts = watch("products")

   // Calcular el total cuando cambian los productos
   useEffect(() => {
      if (watchProducts && watchProducts.length > 0) {
         const total = watchProducts.reduce((sum, product) => sum + product.salePrice * product.quantity, 0)
         setValue("total", total)
      } else {
         setValue("total", 0)
      }
   }, [watchProducts, setValue])



   // Manejar cambios en la cantidad de un producto
   const handleQuantityChange = (productId: number, newQuantity: number) => {
      // Encontrar el producto disponible
      const availableProduct = AVAILABLE_PRODUCTS.find((p) => p.id === productId)

      if (!availableProduct) return

      // Validar que la cantidad no exceda el stock
      if (newQuantity > availableProduct.currentStock) {

         toast({
            title: "Error",
            description: `Solo hay ${availableProduct.currentStock} unidades disponibles`,
            variant: "destructive",
         })
         return
      }

      if (newQuantity < 1) {
         // Actualizar los productos en el formulario
         const updatedProducts = watchProducts.filter((p) => p.id !== productId)
         setValue("products", updatedProducts)
      } else {

         // Actualizar los productos en el formulario
         const updatedProducts = [...watchProducts]
         const productIndex = updatedProducts.findIndex((p) => p.id === productId)

         if (productIndex >= 0) {
            updatedProducts[productIndex].quantity = newQuantity
         } else {
            updatedProducts.push({
               id: productId,
               name: availableProduct.name,
               salePrice: availableProduct.salePrice,
               quantity: newQuantity,
            })
         }

         setValue("products", updatedProducts)
      }
   }

   // Manejar el envío del formulario
   const onSubmit =async (data: SaleFormValues) => {
      // Validación personalizada
      const validationError = validateSaleForm(data, AVAILABLE_PRODUCTS)
      if (validationError) {
         toast({
            title: "Error de validación",
            description: validationError,
            variant: "destructive",
         })
         return
      }
      // Procesar la venta (en una app real, esto enviaría los datos a una API)
      console.log("Venta procesada:", data)
      const response=await procesNewOrder(data,id)
      console.log(response);      
      toast({
         title: "Venta completada",
         description: `Total: $${data.total.toFixed(2)}`,
      })

      // Reiniciar el formulario
      setValue("products", [])
      setValue("total", 0)
      router.push('/projects/my-little-shop/dashboard/orders')

   }

   // Obtener la cantidad de un producto en el carrito
   const getProductQuantity = (productId: number): number => {
      const product = watchProducts.find((p) => p.id === productId)
      return product ? product.quantity : 0
   }


   return (
      <Card className="w-full max-w-md mx-auto p-6">
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
               <h2 className="text-xl font-bold text-center">New Order</h2>
               {/* Selección de cliente */}
               <div className="space-y-2">
                  <Label>Select client</Label>
                  <Controller
                     name="client.id"
                     control={control}
                     render={({ field }) => (
                        <Select
                           value={field.value?field.value.toString():undefined}
                           onValueChange={(value) => {
                              field.onChange(value)
                              const client = REGISTERED_CLIENTS.find((c) => c.id === parseInt(value))
                              if (client) {
                                 setValue("client", client)
                              }
                           }}
                        >
                           <SelectTrigger>
                              <SelectValue placeholder="Seleccione un cliente" />
                           </SelectTrigger>
                           <SelectContent>
                              {REGISTERED_CLIENTS.map((client) => (
                                 <SelectItem key={client.id} value={client.id.toString()}>
                                    {client.name}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     )}
                  />
                  {errors.client?.name && <p className="text-sm text-red-500">{errors.client.name.message}</p>}
               </div>

               {/* Tipo de venta */}
               <div className="space-y-2">
                  <Label>Payment Type</Label>
                  <Controller
                     name="paymentType"
                     control={control}
                     render={({ field }) => (
                        <RadioGroup value={field.value} onValueChange={field.onChange} className="flex space-x-4">
                           <div className="flex items-center space-x-2">
                              <RadioGroupItem value="cash" id="cash" />
                              <Label htmlFor="cash">Cash</Label>
                           </div>
                           <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yape" id="yape" />
                              <Label htmlFor="yape">Yape</Label>
                           </div>
                           <div className="flex items-center space-x-2">
                              <RadioGroupItem value="plin" id="plin" />
                              <Label htmlFor="plin">Plin</Label>
                           </div>
                        </RadioGroup>
                     )}
                  />
                  {errors.paymentType && <p className="text-sm text-red-500">{errors.paymentType.message}</p>}
               </div>
               {/*estado de la venta  */}
               <div className="space-y-2">
                  <Label>Status order</Label>
                  <Controller
                     name="statusPaid"
                     control={control}
                     render={({ field }) => (
                        <RadioGroup value={field.value} onValueChange={field.onChange} className="flex space-x-4">
                           <div className="flex items-center space-x-2">
                              <RadioGroupItem value="paid" id="paid" />
                              <Label htmlFor="paid">Paid</Label>
                           </div>
                           <div className="flex items-center space-x-2">
                              <RadioGroupItem value="credit" id="credit" />
                              <Label htmlFor="credit">Credit</Label>
                           </div>
                        </RadioGroup>
                     )}
                  />
                  {errors.statusPaid && <p className="text-sm text-red-500">{errors.statusPaid.message}</p>}
               </div>

               {/* Productos */}
               <div className="space-y-4">
                  <Label>Productos</Label>
                  <div className="space-y-3">
                     {AVAILABLE_PRODUCTS.map((product) => (
                        <div key={product.id} className="flex items-center border rounded-md p-3">
                           <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-md mr-3">
                              <img src={product.image || "/placeholder.svg"} alt={'N'} className="w-8 h-8" />
                           </div>
                           <div className="flex-1">
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm">${product.salePrice}</p>
                           </div>
                           <div className="flex items-center space-x-2">
                              <Button
                                 type="button"
                                 variant="outline"
                                 size="icon"
                                 className="h-8 w-8"
                                 onClick={() => handleQuantityChange(product.id, getProductQuantity(product.id) - 1)}
                                 disabled={getProductQuantity(product.id) === 0}
                              >
                                 <Minus className="h-4 w-4" />
                              </Button>
                              <span className="w-6 text-center">{getProductQuantity(product.id)}</span>
                              <Button
                                 type="button"
                                 variant="outline"
                                 size="icon"
                                 className="h-8 w-8"
                                 onClick={() => handleQuantityChange(product.id, getProductQuantity(product.id) + 1)}
                                 disabled={getProductQuantity(product.id) >= product.currentStock}
                              >
                                 <Plus className="h-4 w-4" />
                              </Button>
                           </div>
                        </div>
                     ))}
                  </div>
                  {errors.products && <p className="text-sm text-red-500">{errors.products.message}</p>}
               </div>

               {/* Total */}
               <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-lg font-bold">Total ${watch("total").toFixed(2)}</div>
                  <Button type="submit" disabled={watchProducts.length === 0}>
                     <ShoppingCart className="mr-2 h-4 w-4" />
                     Comprar
                  </Button>
               </div>
            </div>
         </form>
      </Card>
   )
}

