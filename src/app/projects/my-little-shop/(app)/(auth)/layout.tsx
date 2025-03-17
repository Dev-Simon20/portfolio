import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start relative`}
      >
        <article className="w-full flex justify-between py-4 px-16 shadow-md absolute items-center">
          <section>
              <h2 className="font-normal text-2xl font-abril">My Little Shop</h2>
          </section>
          <section className="flex gap-8">
             <Button variant="secondary">
                  <a href="/projects/my-little-shop/register">Register</a>
             </Button>
             <Button >
                <a href="/projects/my-little-shop/login">Login</a>
             </Button>
          </section>
        </article>
        {children}
      </main>
  );
}
