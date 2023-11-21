"use client";
import React from "react";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";
import { OrderProvider } from "@/context/OrderContext";

import Navbar from "@/components/Navbar/index";
import { MetaDataContextProvider } from "@/context/MetaDataContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <MetaDataContextProvider>

        <AuthContextProvider>
          <CartProvider>
            <OrderProvider>

            <Navbar />
            {children}
            </OrderProvider>
          </CartProvider>
        </AuthContextProvider>
        </MetaDataContextProvider>

      </body>
    </html>
  );
}
