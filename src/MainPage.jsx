import React, { useEffect, useRef, useState } from "react";

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
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (missionRef.current) observer.observe(missionRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Cliberduche Corporation</h1>
          <p className="text-xl md:text-2xl mb-8">
            Foundations  •  Site Development  •  Full-scale Construction Works  •  Trust & Reliability
          </p>
          <a href="#about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg">
            Learn More
          </a>
        </div>
      </header>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>

      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-md text-white flex justify-between items-center px-6 py-4 fixed top-0 w-full z-20 border-b border-white/10">
        <div className="text-2xl font-bold text-green-500">Cliberduche</div>
        <div className="flex gap-8">
          <a href="#about" className="hover:text-green-400 transition duration-300">About</a>
          <a href="#services" className="hover:text-green-400 transition duration-300">Services</a>
          <a href="#projects" className="hover:text-green-400 transition duration-300">Projects</a>
          <a href="#mission" className="hover:text-green-400 transition duration-300">Mission & Vision</a>
          <a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a>
        </div>
      </nav>

      {/* About */}
      <section id="about" ref={aboutRef} className={`bg-blue-50 max-w-6xl mx-auto px-6 py-16 transition-all duration-700 ${visibleSections.about ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6 text-green-600">About Us</h2>
            <p className="mb-4">
              Established in 2018, Cliberduche Corporation was founded with the vision of providing high-quality land development and construction services in the Philippines. The company was officially registered with the Securities and Exchange Commission on November 28, 2018.
            </p>
            <p>
              We provide premium backfill materials such as sub-base, aggregates, and boulders. Our land development sites in Laguna and Cavite contain over 14 million cubic meters of backfilling materials to support the growing construction industry.
            </p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Construction Equipment" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" ref={servicesRef} className={`bg-gray-50 py-16 transition-all duration-700 ${visibleSections.services ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition duration-300">
              <img src="https://img.icons8.com/ios-filled/64/000000/bulldozer.png" alt="Land Development" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-4">Land Development</h3>
              <p>Comprehensive land preparation and development services</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition duration-300">
              <img src="https://img.icons8.com/ios-filled/64/000000/helmet.png" alt="Site Management" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-4">Site Management</h3>
              <p>Professional site management and coordination</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition duration-300">
              <img src="https://img.icons8.com/ios-filled/64/000000/soil.png" alt="Backfill Materials" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-4">Backfill Materials</h3>
              <p>Premium backfill sourcing and supply</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow text-center hover:shadow-lg transition duration-300">
              <img src="https://img.icons8.com/ios-filled/64/000000/truck.png" alt="Equipment Leasing" className="mx-auto mb-4 w-16 h-16" />
              <h3 className="text-xl font-semibold mb-4">Equipment Leasing</h3>
              <p>Heavy equipment leasing and rental services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500"></div>

      {/* Projects */}
      <section id="projects" ref={projectsRef} className={`bg-green-50 max-w-6xl mx-auto px-6 py-16 transition-all duration-700 ${visibleSections.projects ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-3xl font-semibold mb-10 text-center">Our Projects</h2>
        <p className="text-center mb-10">
          Cliberduche Corporation handles small, medium, and large commercial and industrial projects. Our expertise includes land clearing, cutting and leveling, drainage installation, road and bridge construction, slope protection, erosion prevention, and soil stabilization works.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col md:flex-row">
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Road Construction" className="w-full md:w-1/2 h-48 object-cover hover:scale-110 transition duration-300" />
            <div className="p-4 md:w-1/2 flex flex-col justify-center">
              <h3 className="font-semibold text-lg text-green-600">Road Construction</h3>
              <p>Highway and infrastructure development projects</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col md:flex-row">
            <img src="https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Land Development" className="w-full md:w-1/2 h-48 object-cover hover:scale-110 transition duration-300" />
            <div className="p-4 md:w-1/2 flex flex-col justify-center">
              <h3 className="font-semibold text-lg text-green-600">Land Development</h3>
              <p>Site preparation and land development services</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer flex flex-col md:flex-row">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Bridge Construction" className="w-full md:w-1/2 h-48 object-cover hover:scale-110 transition duration-300" />
            <div className="p-4 md:w-1/2 flex flex-col justify-center">
              <h3 className="font-semibold text-lg text-green-600">Bridge Construction</h3>
              <p>Bridge building and structural engineering</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500"></div>

      {/* Mission & Vision */}
      <section id="mission" ref={missionRef} className={`bg-gradient-to-br from-gray-50 to-gray-100 py-16 transition-all duration-700 ${visibleSections.mission ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 text-center text-green-600">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <img src="https://img.icons8.com/ios-filled/50/22c55e/handshake.png" alt="Mission" className="w-12 h-12 mr-4" />
                <h3 className="text-2xl font-semibold text-green-600">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide high-quality backfill materials and land development services while adhering to environmental regulations, promoting sustainable development, creating jobs for Filipinos, and delivering value to communities, investors, employees, and stakeholders.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <img src="https://img.icons8.com/ios-filled/50/3b82f6/binoculars.png" alt="Vision" className="w-12 h-12 mr-4" />
                <h3 className="text-2xl font-semibold text-blue-600">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be a highly respected, world-class land development company committed to international standards, environmental conservation, and sustainable projects that contribute to future commercial and housing developments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500"></div>

      {/* Contact */}
      <section id="contact" ref={contactRef} className={`bg-gray-50 max-w-6xl mx-auto px-6 py-16 transition-all duration-700 ${visibleSections.contact ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-3xl font-semibold mb-10 text-center">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-600">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <img src="https://img.icons8.com/ios-filled/24/22c55e/marker.png" alt="Address" className="mt-1 mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Office Address</p>
                  <p className="text-gray-600">Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo, Cabuyao City, Laguna, Philippines</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/24/22c55e/phone.png" alt="Phone" className="mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">+63 49 546-6107 / 0967-302-6643</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="https://img.icons8.com/ios-filled/24/22c55e/email.png" alt="Email" className="mr-3" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">cliberduche.corp@yahoo.com</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold mb-6 text-gray-800">Send us a Message</h4>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200" placeholder="your@email.com" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200 h-32 resize-none" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-green-500 mb-4">Cliberduche Corporation</h3>
              <p>Building the future with quality and reliability since 2018.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-green-400 transition duration-300">About</a></li>
                <li><a href="#services" className="hover:text-green-400 transition duration-300">Services</a></li>
                <li><a href="#projects" className="hover:text-green-400 transition duration-300">Projects</a></li>
                <li><a href="#contact" className="hover:text-green-400 transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p>Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo, Cabuyao City, Laguna, Philippines</p>
              <p className="mt-2">Phone: +63 49 546-6107 / 0967-302-6643</p>
              <p>Email: cliberduche.corp@yahoo.com</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p>© 2018–2026 Cliberduche Corporation. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
