import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoadConstruction from "../projects/RoadConstruction";

const RoadConstructionMain = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow pt-24">
        <RoadConstruction />
      </main>

      <Footer />
    </div>
  );
};

export default RoadConstructionMain;
