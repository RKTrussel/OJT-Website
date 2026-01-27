import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pier2_NorthHarbour2026 from "../projects/Pier2_NorthHarbour2026";

const Pier2_NorthHarbour2026Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <Pier2_NorthHarbour2026 />
      </main>

      <Footer />
    </div>
  );
};

export default Pier2_NorthHarbour2026Main;
