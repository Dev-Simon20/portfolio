import type { Metadata } from "next";

export default function MyLyttleShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={`w-full min-h-screen relative bg-white text-gray-700 `}
      >
        {children}
      </main>
  );
}
