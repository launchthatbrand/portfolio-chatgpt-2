import "tailwindcss/tailwind.css";

import { Inter } from "next/font/google";
import Sidebar from "~/components/Sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export interface SharedPageProps {
  draftMode: boolean;
  token: string;
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <div className="bg-blueGray-100 flex h-full w-screen flex-row">
        <div className=" lg:w-1/2">
          <Sidebar />
        </div>

        <div className="m-4 lg:w-1/2">{children}</div>
      </div>
    </html>
  );
}
