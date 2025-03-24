import { z } from "zod";
import { Product } from "../types/product";
import { SaleFormValues } from "../types/new_order";

// Esquema para el formulario de venta completo
export const saleFormSchema = z.object({
    // Cliente: Se selecciona de una lista"
    client: z.object({
        id: z.string().optional(),
        name: z.string().min(1, "El nombre del cliente es requerido"),
    }),

    // Tipo de venta: al contado o crédito
    paymentType: z.enum(["cash", "credit"], {
        required_error: "Seleccione un tipo de pago",
    }),

    // Lista de productos en la venta
    products: z
        .array(
            z.object({
                id: z.string(),
                name: z.string(),
                price: z.number().positive(),
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

        if (cartProduct.quantity > availableProduct.stock) {
            return `La cantidad seleccionada (${cartProduct.quantity}) excede el stock disponible (${availableProduct.stock}) para ${cartProduct.name}`;
        }
    }

    // Validar que el total coincida con la suma de los productos
    const calculatedTotal = values.products.reduce(
        (sum, product) => sum + product.price * product.quantity,
        0
    );

    if (Math.abs(calculatedTotal - values.total) > 0.01) {
        return "El total no coincide con la suma de los productos";
    }

    return null; // Sin errores
};
