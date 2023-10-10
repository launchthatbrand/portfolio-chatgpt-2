import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";

// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <><div className="flex w-screen h-screen flex-row">
      <div className="bg-red-600 basis-3/6"></div>

      <Sidebar />
      <div className="bg-blueGray-100 basis-3/6">
        {children}
      </div>
      </div>
    </>
  );
}
