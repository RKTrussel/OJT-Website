import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BridgeConstruction from "../projects/BridgeConstruction";

const CBD_2019Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <BridgeConstruction />
      </main>

      <Footer />
    </div>
  );
};

export default CBD_2019Main;
