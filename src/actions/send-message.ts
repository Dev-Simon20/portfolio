"use server";

import { Resend } from "resend";

// Inicializar Resend con tu API key
// En producción, deberías usar una variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

// Función para enviar email
export async function sendEmail(formData: FormData) {
   try {
      // Extraer datos del formulario
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      // Validar datos
      if (!name || !email || !subject || !message) {
         return { error: "Please fill out all fields" };
      }

      // Enviar email usando Resend
      const { data, error } = await resend.emails.send({
         from: "Formulario de Contacto <onboarding@resend.dev>", // Usa tu dominio verificado en producción
         to: "jeanpierks6@gmail.com", // Reemplaza con tu correo personal
         subject: `Nuevo mensaje de contacto: ${subject}`,
         html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      });

      if (error) {
         return { error: "Error sending the message. Please try again." };
      }

      return {
         success: "Message sent successfully. Thank you for contacting me!",
      };
   } catch (error) {
      return { error: "Error processing the request. Please try again." };
   }
}
