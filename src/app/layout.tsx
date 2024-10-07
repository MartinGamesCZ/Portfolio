import Head from "next/head";
import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/styles/global.scss";
import Navbar from "@/components/Navbar/Navbar";

interface ILayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const metadata = {
  title: "Martin Petr // When software matters",
  description: "Martin Petr // When software matters",
};

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function Layout({ children }: ILayoutProps) {
  return (
    <html>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
