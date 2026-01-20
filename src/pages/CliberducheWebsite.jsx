import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Mission from "../components/Mission";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function CliberducheWebsite() {
  const [visibleSections, setVisibleSections] = useState({});
  const [scrollY, setScrollY] = useState(0);

  const aboutRef = useRef();
  const servicesRef = useRef();
  const projectsRef = useRef();
  const missionRef = useRef();
  const contactRef = useRef();
  const parallaxRef = useRef();

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    [aboutRef, servicesRef, projectsRef, missionRef, contactRef].forEach(
      (ref) => {
        if (ref.current) observer.observe(ref.current);
      }
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      <Hero parallaxRef={parallaxRef} scrollY={scrollY} />
      <About refProp={aboutRef} visible={visibleSections.about} />
      <Mission refProp={missionRef} visible={visibleSections.mission} />
      <Services refProp={servicesRef} visible={visibleSections.services} />
      <Projects refProp={projectsRef} visible={visibleSections.projects} />
      <Contact refProp={contactRef} visible={visibleSections.contact} />

      <Footer />
    </div>
  );
}
