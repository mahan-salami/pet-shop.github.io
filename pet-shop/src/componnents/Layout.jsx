import React from "react";
import Offer from "./Offer";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Offer />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
