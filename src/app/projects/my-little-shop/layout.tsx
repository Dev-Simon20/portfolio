import type { Metadata } from "next";

export default function MyLyttleShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main
        className={`w-full min-h-screen relative flex flex-col items-center justify-start bg-white text-gray-700 font-`}
      >
        {children}
      </main>
  );
}
