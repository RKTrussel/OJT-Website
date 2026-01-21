import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BridgeConstruction from "../projects/BridgeConstruction";

const BridgeConstructionMain = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow pt-24">
        <BridgeConstruction />
      </main>

      <Footer />
    </div>
  );
};

export default BridgeConstructionMain;
