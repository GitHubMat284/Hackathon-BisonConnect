import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BisonsConnect",
  description: "Generated by Matheo :D",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full bg-blue-900 shadow-md flex flex-col items-center">
          {/* Top Section: Logo & Title */}
          <div className="flex items-center justify-between w-full px-6">
            {/* Logo on the Left */}
            <Image
              src="/UM-logo-horizontal-CMYK.png"
              alt="University Logo"
              width={150}
              height={50}
            />

            {/* Title in the Center */}
            <h1 className="text-3xl font-bold text-yellow-400 text-center flex-grow font-uofm">
              BisonsConnect
            </h1>

            {/* Empty Div for spacing balance */}
            <div className="w-[150px]"></div>
          </div>

          <nav className="w-full bg-gray-900/80 backdrop-blur-md mt-4 shadow-md">
            <NavigationMenu>
              <NavigationMenuList className="flex justify-center space-x-6 md:space-x-10 p-3">
                {[
                  { name: "Home", href: "/" },
                  { name: "Events", href: "/events" },
                  { name: "About", href: "/about" },
                ].map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="text-white text-lg font-medium px-4 py-2 rounded-md transition duration-300 hover:bg-yellow-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
