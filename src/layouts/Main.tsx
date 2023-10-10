import React from "react";

// components

// import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar";
// import HeaderStats from "components/Headers/HeaderStats.js";
// import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="bg-blueGray-100 relative md:w-6/12 lg:w-6/12 xl:w-6/12">
        {children}
      </div>
    </>
  );
}
