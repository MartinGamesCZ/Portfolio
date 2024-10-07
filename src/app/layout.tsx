import Head from "next/head";
import React from "react";
import { Nunito } from "next/font/google";

import "@/styles/global.scss";
  src: "./fonts/GeistVF.woff",

interface ILayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const metadata = {
  title: "Martin Petr // When software matters",
  description: "Martin Petr // When software matters",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function Layout({ children }: ILayoutProps) {
  return (
    <html>
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
