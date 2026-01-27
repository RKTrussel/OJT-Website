import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CBD_2019 from "../projects/CBD_2019";

const CBD_2019Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <CBD_2019 />
      </main>

      <Footer />
    </div>
  );
};

export default CBD_2019Main;
