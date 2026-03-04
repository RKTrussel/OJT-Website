import React, { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import logo from "../img/cliberduche_logo.png";
import contactBg from "../img/main_background-contact.jpg";

const Contact = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: null,
    time: "",
    type: "",
    notes: "",
    captcha: "",
    company: "",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const timePickerRef = useRef(null);
  const hours = useMemo(
    () => Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")),
    []
  );
  const minutes = useMemo(
    () => Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")),
    []
  );
  const meridiems = useMemo(() => ["AM", "PM"], []);

  const [timeParts, setTimeParts] = useState({
    hour: "08",
    minute: "00",
    meridiem: "AM",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateTime = (next) => {
    setTimeParts(next);
    setFormData((prev) => ({
      ...prev,
      time: `${next.hour}:${next.minute} ${next.meridiem}`,
    }));
  };

  const validateForm = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.date ||
      !formData.time ||
      !formData.type
    ) {
      return "Please fill in all required fields.";
    }

    const emailPattern = /^[^\s@]+@gmail\.com$/i;
    if (!emailPattern.test(formData.email.trim())) {
      return "Please enter a valid Gmail address.";
    }

    return "";
  };

  const formatDate = (value) =>
    value
      ? value.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        })
      : "";

  const formatTime = (value) =>
    value
      ? typeof value === "string"
        ? value
        : value.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })
      : "";

  useEffect(() => {
    const handler = (event) => {
      if (!timePickerRef.current) return;
      if (!timePickerRef.current.contains(event.target)) {
        setTimePickerOpen(false);
      }
    };
    if (timePickerOpen) {
      window.addEventListener("mousedown", handler);
    }
    return () => window.removeEventListener("mousedown", handler);
  }, [timePickerOpen]);

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
          contact_date: formatDate(formData.date),
          contact_time: formatTime(formData.time),
          contact_type: formData.type,
          notes: formData.notes.trim(),
          captcha: formData.captcha.trim(),
          reply_to: formData.email.trim(),
        },
        publicKey
      );

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent. We'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        date: null,
        time: "",
        type: "",
        notes: "",
        captcha: "",
        company: "",
      });
      setTimeParts({ hour: "08", minute: "00", meridiem: "AM" });
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
        className="scroll-mt-6 w-full relative overflow-hidden"
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
                    Valid Gmail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200"
                    placeholder="yourname@gmail.com"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-slate-200 mb-2 text-sm font-medium">
                      Date
                    </label>
                    <DatePicker
                      selected={formData.date}
                      onChange={(date) =>
                        setFormData((prev) => ({ ...prev, date }))
                      }
                      placeholderText="Select date"
                      dateFormat="MMMM d, yyyy"
                      minDate={new Date()}
                      showPopperArrow={false}
                      popperPlacement="bottom-start"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200"
                      calendarClassName="ojt-datepicker"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-200 mb-2 text-sm font-medium">
                      Time
                    </label>
                    <div className="time-picker" ref={timePickerRef}>
                      <button
                        type="button"
                        className="time-picker__trigger"
                        onClick={() => setTimePickerOpen((open) => !open)}
                        aria-haspopup="dialog"
                        aria-expanded={timePickerOpen}
                      >
                        <span>
                          {formData.time ? formData.time : "Select time"}
                        </span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 7.5L10 12.5L15 7.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>

                      {timePickerOpen ? (
                        <div className="time-picker__panel" role="dialog">
                          <div className="time-picker__columns">
                            <div className="time-picker__column" aria-label="Hours">
                              {hours.map((hour) => (
                                <button
                                  key={hour}
                                  type="button"
                                  className={`time-picker__item ${
                                    timeParts.hour === hour
                                      ? "is-selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    updateTime({
                                      ...timeParts,
                                      hour,
                                    })
                                  }
                                >
                                  {hour}
                                </button>
                              ))}
                            </div>
                            <div className="time-picker__column" aria-label="Minutes">
                              {minutes.map((minute) => (
                                <button
                                  key={minute}
                                  type="button"
                                  className={`time-picker__item ${
                                    timeParts.minute === minute
                                      ? "is-selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    updateTime({
                                      ...timeParts,
                                      minute,
                                    })
                                  }
                                >
                                  {minute}
                                </button>
                              ))}
                            </div>
                            <div className="time-picker__column" aria-label="AM/PM">
                              {meridiems.map((meridiem) => (
                                <button
                                  key={meridiem}
                                  type="button"
                                  className={`time-picker__item ${
                                    timeParts.meridiem === meridiem
                                      ? "is-selected"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    updateTime({
                                      ...timeParts,
                                      meridiem,
                                    })
                                  }
                                >
                                  {meridiem}
                                </button>
                              ))}
                            </div>
                          </div>
                          <div className="time-picker__footer">
                            <button
                              type="button"
                              className="time-picker__confirm"
                              onClick={() => setTimePickerOpen(false)}
                            >
                              Done
                            </button>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 cursor-pointer transition hover:border-emerald-400/40">
                      <input
                        type="radio"
                        name="type"
                        value="Online"
                        checked={formData.type === "Online"}
                        onChange={handleChange}
                        className="accent-emerald-500"
                        required
                      />
                      Online
                    </label>
                    <label className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 cursor-pointer transition hover:border-emerald-400/40">
                      <input
                        type="radio"
                        name="type"
                        value="F2F"
                        checked={formData.type === "F2F"}
                        onChange={handleChange}
                        className="accent-emerald-500"
                        required
                      />
                      F2F
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Notes (optional)
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200 h-28 resize-none"
                    placeholder="Add any notes or details..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Captcha
                  </label>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-sm text-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-white">Cloudflare Turnstile</p>
                        <p className="text-xs text-slate-400 mt-1">
                          Captcha widget will appear here once keys are added.
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-500/15 text-emerald-200 px-3 py-1 text-xs">
                        Pending
                      </span>
                    </div>
                    <div className="mt-4 rounded-lg border border-dashed border-emerald-400/40 bg-slate-900/60 px-4 py-6 text-center text-emerald-200/80">
                      Widget placeholder
                    </div>
                  </div>
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
                  className="focus-ring w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/60 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-[0_18px_45px_-28px_rgba(14,165,233,0.6)] hover:shadow-[0_22px_55px_-28px_rgba(16,185,129,0.6)] disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
