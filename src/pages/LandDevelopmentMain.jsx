import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandDevelopment from "../projects/LandDevelopment";

const LandDevelopmentMain = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="grow pt-24">
        <LandDevelopment />
      </main>

      <Footer />
    </div>
  );
};

export default LandDevelopmentMain;
