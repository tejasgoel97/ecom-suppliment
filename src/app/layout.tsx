"use client";
import React from "react";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

import Navbar from "./Navbar/Navbar";

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
        <AuthContextProvider>
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
