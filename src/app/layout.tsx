/* eslint-disable @typescript-eslint/ban-types */

import "tailwindcss/tailwind.css";

import { ReactElement, ReactNode } from "react";

import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { NextPage } from "next";
import Sidebar from "~/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps &
  SharedPageProps & {
    Component: NextPageWithLayout;
  };

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
