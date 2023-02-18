import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import BottomNav from "../components/Navbar/BottomNav";

const AppLayout = ({ children }) => {
  return (
    <div>
      <main>
        <Navbar />
        <div>{children}</div>
        <BottomNav />
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;
