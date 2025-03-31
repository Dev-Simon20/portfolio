import { z } from "zod";
import { Product } from "../types/product";
import { SaleFormValues } from "../types/new_order";

// Esquema para el formulario de venta completo
export const saleFormSchema = z.object({
    // Cliente: Se selecciona de una lista"
    client: z.object({
        id: z.number(),
        name: z.string({required_error:'Is require a customer'})
    }),

    // Tipo de venta: al contado o crédito
    paymentType: z.enum(["cash", "yape","plin"], {
        required_error: "Seleccione un tipo de pago",
    }),
    statusPaid:z.enum(["paid","credit"],{required_error:"Selecione el estado de la venta"}),
    // Lista de productos en la venta
    products: z
        .array(
            z.object({
                id: z.number(),
                name: z.string(),
                salePrice: z.number().positive(),
                quantity: z.number().int().min(1),
            })
        )
        .min(1, "Debe agregar al menos un producto"),

    // Total de la venta (calculado)
    total: z.number().positive("El total debe ser mayor a 0"),
});

// Función para validar el formulario completo con lógica personalizada
export const validateSaleForm = (
    values: SaleFormValues,
    availableProducts: Product[]
): string | null => {
    // Validar que cada producto no exceda su stock disponible
    for (const cartProduct of values.products) {
        const availableProduct = availableProducts.find(
            (p) => p.id === cartProduct.id
        );

        if (!availableProduct) {
            return `El producto ${cartProduct.name} ya no está disponible`;
        }

        if (cartProduct.quantity > availableProduct.currentStock) {
            return `La cantidad seleccionada (${cartProduct.quantity}) excede el stock disponible (${availableProduct.currentStock}) para ${cartProduct.name}`;
        }
    }

    // Validar que el total coincida con la suma de los productos
    const calculatedTotal = values.products.reduce(
        (sum, product) => sum + product.salePrice * product.quantity,
        0
    );

    if (Math.abs(calculatedTotal - values.total) > 0.01) {
        return "El total no coincide con la suma de los productos";
    }

    return null; // Sin errores
};
