import type { Metadata } from "next";

export default function PokeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={`w-full min-h-screen relative flex flex-col items-center justify-start `}
      >
        {children}
      </main>
  );
}
