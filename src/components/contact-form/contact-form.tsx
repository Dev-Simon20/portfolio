"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/actions/send-message";

export function ContactForm() {
   const { toast } = useToast();

   const [isPending, startTransition] = useTransition();

   async function handleSubmit(formData: FormData) {
      startTransition(async () => {
         const result = await sendEmail(formData);
         if (result.error) {
            toast({
               variant: "destructive",
               title: "Error",
               description: result.error,
            });
         } else if (result.success) {
            toast({
               title: "Succes",
               description: result.success,
            });
            const form = document.getElementById(
               "contact-form"
            ) as HTMLFormElement;
            form.reset();
         }
      });
   }

   return (
      <form id="contact-form" action={handleSubmit} className="space-y-6">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
               >
                  Name
               </label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your name"
               />
            </div>
            <div>
               <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
               >
                  Email Address
               </label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="your@email.com"
               />
            </div>
         </div>
         <div>
            <label
               htmlFor="subject"
               className="block text-sm font-medium text-gray-700 mb-1"
            >
               Subject
            </label>
            <input
               type="text"
               id="subject"
               name="subject"
               required
               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Message subject"
            />
         </div>
         <div>
            <label
               htmlFor="message"
               className="block text-sm font-medium text-gray-700 mb-1"
            >
               Message
            </label>
            <textarea
               id="message"
               name="message"
               rows={5}
               required
               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
               placeholder="Write your message here..."
            ></textarea>
         </div>
         <div className="text-center">
            <Button
               type="submit"
               className="bg-blue-600 hover:bg-blue-700 px-8 py-2"
               disabled={isPending}
            >
               {isPending ? "Sending..." : "Send Message"}
            </Button>
         </div>
      </form>
   );
}
