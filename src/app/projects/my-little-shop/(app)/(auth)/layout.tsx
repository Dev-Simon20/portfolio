import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import HeaderNotAuth from "../../components/header-not-auth/header-not-auth";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-start relative`}
      >
        <HeaderNotAuth/>
        {children}
      </main>
  );
}
