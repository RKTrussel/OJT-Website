import React from "react";

export default function CliberducheWebsite() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Cliberduche Corporation</h1>
        <p className="mt-4 text-lg">
          Foundations • Site Development • Full-scale Construction Works • Trust & Reliability
        </p>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white flex justify-center gap-8 py-4 sticky top-0 z-10">
        <a href="#about" className="hover:underline">About</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#mission" className="hover:underline">Mission & Vision</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="mb-4">
          Established in 2018, Cliberduche Corporation was founded with the vision of providing high-quality land development and construction services in the Philippines. The company was officially registered with the Securities and Exchange Commission on November 28, 2018.
        </p>
        <p>
          We provide premium backfill materials such as sub-base, aggregates, and boulders. Our land development sites in Laguna and Cavite contain over 14 million cubic meters of backfilling materials to support the growing construction industry.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">Primary Services</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Backfill Sourcing / Land Sourcing</li>
                <li>Land Development</li>
                <li>Site Management</li>
                <li>Equipment Leasing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold mb-4">Secondary Services</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Land Development</li>
                <li>Project Management Consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Projects Information</h2>
        <p>
          Cliberduche Corporation handles small, medium, and large commercial and industrial projects. Our expertise includes land clearing, cutting and leveling, drainage installation, road and bridge construction, slope protection, erosion prevention, and soil stabilization works.
        </p>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Mission</h2>
          <p className="mb-8">
            To provide high-quality backfill materials and land development services while adhering to environmental regulations, promoting sustainable development, creating jobs for Filipinos, and delivering value to communities, investors, employees, and stakeholders.
          </p>
          <h2 className="text-3xl font-semibold mb-6">Vision</h2>
          <p>
            To be a highly respected, world-class land development company committed to international standards, environmental conservation, and sustainable projects that contribute to future commercial and housing developments.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
        <p><strong>Office Address:</strong> Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo, Cabuyao City, Laguna, Philippines</p>
        <p className="mt-2"><strong>Phone:</strong> +63 49 546-6107 / 0967-302-6643</p>
        <p className="mt-2"><strong>Email:</strong> cliberduche.corp@yahoo.com</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2018–2026 Cliberduche Corporation. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
