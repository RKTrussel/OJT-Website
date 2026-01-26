import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../img/cliberduche_logo.png";
import contactBg from "../img/main_background-contact.jpg";

const Contact = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return "Please fill in all required fields.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      return "Please enter a valid email address.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (formData.company) {
      return;
    }

    const validationMessage = validateForm();
    if (validationMessage) {
      setStatus({ type: "error", message: validationMessage });
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured. Please try again later.",
      });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          message: formData.message.trim(),
          reply_to: formData.email.trim(),
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent. We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "", company: "" });
    } catch (error) {
      console.error("EmailJS send failed", error);
      const errorMessage =
        error?.text ||
        error?.message ||
        "Sorry, something went wrong while sending. Please try again.";
      setStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <section
        id="contact"
        ref={refProp}
        className="scroll-mt-18 w-full relative overflow-hidden"
      >
        <div
          className={`absolute inset-0 bg-cinematic ${
            bgLoaded ? "is-loaded" : ""
          }`}
        >
          <img
            src={contactBg}
            alt="Contact Background"
            className="bg-cinematic__image"
            onLoad={() => setBgLoaded(true)}
            onError={() => setBgLoaded(true)}
          />
          <div className="absolute inset-0 bg-linear-to-br from-slate-900/85 via-slate-900/60 to-emerald-900/70"></div>
        </div>

        <div
          className={`relative z-10 max-w-6xl mx-auto px-6 py-20 reveal-clip ${
            visible ? "is-visible" : ""
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-10">
            <img
              src={logo}
              alt="Cliberduche Logo"
              className="w-16 h-16 object-contain"
            />
            <h2 className="text-3xl font-semibold text-white text-center">
              Contact Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-emerald-200">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <img
                    src="https://img.icons8.com/ios-filled/24/22c55e/marker.png"
                    alt="Address"
                    className="mt-1 mr-3"
                  />
                  <div>
                    <p className="font-semibold text-white">Office Address</p>
                    <p className="text-slate-200">
                      Lot 3739 National Highway, 3/F CBD Building, Brgy. Pulo,
                      Cabuyao City, Laguna, Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/ios-filled/24/22c55e/phone.png"
                    alt="Phone"
                    className="mr-3"
                  />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-slate-200">
                      +63 49 546-6107 / 0967-302-6643
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/ios-filled/24/22c55e/email.png"
                    alt="Email"
                    className="mr-3"
                  />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-slate-200">cliberduche.corp@yahoo.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/70 p-8 sm:p-10 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md"
              >
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                    Contact Form
                  </p>
                  <h4 className="text-2xl font-semibold text-white">
                    Send us a Message
                  </h4>
                  <p className="text-slate-300 mt-2">
                    Tell us about your project and we’ll respond within 24–48
                    hours.
                  </p>
                  <p className="text-xs text-emerald-100/80 mt-3">
                    Messages go to our Gmail inbox and you’ll receive an
                    automatic acknowledgement.
                  </p>
                </div>

                <div className="mb-4">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200 h-32 resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <div className="hidden" aria-hidden="true">
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                {status.message ? (
                  <div
                    className={`mb-4 text-sm font-medium rounded-lg px-4 py-3 ${
                      status.type === "success"
                        ? "bg-emerald-500/15 text-emerald-200"
                        : "bg-rose-500/15 text-rose-200"
                    }`}
                    role="status"
                  >
                    {status.message}
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-500/60 text-slate-900 font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="h-1 bg-linear-to-r from-green-500 via-blue-500 to-green-500"></div>
    </div>
  );
};

export default Contact;
