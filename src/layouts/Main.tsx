import React from "react";
import type { ReactNode } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";

// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

interface LayoutProps {
  children?: ReactNode;
  // any props that come into the component
}

export default function Admin({ children }: LayoutProps) {
  return (
    <>
      <div className="bg-blueGray-100 flex h-full w-screen flex-row">
        <div className=" lg:w-1/2">
          <Sidebar />
        </div>

        <div className="m-4 lg:w-1/2">{children}</div>
      </div>
    </>
  );
}
