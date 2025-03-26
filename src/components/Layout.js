import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
