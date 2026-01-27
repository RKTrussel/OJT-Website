import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SilangCavite2021 from "../projects/SilangCavite2021";

const SilangCavite2021Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <SilangCavite2021 />
      </main>

      <Footer />
    </div>
  );
};

export default SilangCavite2021Main;
