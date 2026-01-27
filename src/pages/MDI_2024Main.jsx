import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MDI_2024 from "../projects/MDI_2024";

const MDI_2024Main = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        <MDI_2024 />
      </main>

      <Footer />
    </div>
  );
};

export default MDI_2024Main;
