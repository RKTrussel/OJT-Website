import React, { useEffect, useMemo, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../img/cliberduche_logo.png";
import contactBg from "../img/main_background-contact.jpg";
import { bookAppointment } from "../Admin/services/appointmentService";

// ─── Helpers ──────────────────────────────────────────────
// Converts a JS Date to "YYYY-MM-DD" for the backend
const toDateString = (date) => {
  if (!date) return "";
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

// Converts "08:30 AM" → "08:30" 24-hour format for the backend
const to24Hour = (timeStr) => {
  if (!timeStr) return "";
  const [time, meridiem] = timeStr.split(" ");
  let [hour, minute] = time.split(":").map(Number);
  if (meridiem === "AM" && hour === 12) hour = 0;
  if (meridiem === "PM" && hour !== 12) hour += 12;
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
};

const Contact = ({ refProp, visible }) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [timePickerOpen, setTimePickerOpen] = useState(false);

  // ── Form state ─────────────────────────────────────────
  // Fields map directly to backend: full_name, email, contact_number,
  // appointment_date, appointment_time, consultation_type, notes
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    contact_number: "",
    date: null, // JS Date object — converted to string on submit
    time: "", // "HH:MM AM/PM" display — converted to 24h on submit
    consultation_type: "",
    notes: "",
    company: "", // honeypot field (bot trap)
  });

  // reCAPTCHA v2 token — set when user checks the widget
  const [captchaToken, setCaptchaToken] = useState("");
  const recaptchaRef = useRef(null);

  const timePickerRef = useRef(null);
  const hours = useMemo(
    () => Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")),
    [],
  );
  const minutes = useMemo(
    () => Array.from({ length: 60 }, (_, i) => String(i).padStart(2, "0")),
    [],
  );
  const meridiems = useMemo(() => ["AM", "PM"], []);

  const [timeParts, setTimeParts] = useState({
    hour: "08",
    minute: "00",
    meridiem: "AM",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateTime = (next) => {
    setTimeParts(next);
    setFormData((prev) => ({
      ...prev,
      time: `${next.hour}:${next.minute} ${next.meridiem}`,
    }));
  };

  // Close time picker when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (timePickerRef.current && !timePickerRef.current.contains(e.target)) {
        setTimePickerOpen(false);
      }
    };
    if (timePickerOpen) window.addEventListener("mousedown", handler);
    return () => window.removeEventListener("mousedown", handler);
  }, [timePickerOpen]);

  // ── Validation ─────────────────────────────────────────
  const validateForm = () => {
    const { full_name, email, contact_number, date, time, consultation_type } =
      formData;

    if (
      !full_name.trim() ||
      !email.trim() ||
      !contact_number.trim() ||
      !date ||
      !time ||
      !consultation_type
    ) {
      return "Please fill in all required fields.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      return "Please enter a valid email address.";
    }

    const phonePattern = /^[0-9+\-\s()]{7,15}$/;
    if (!phonePattern.test(contact_number.trim())) {
      return "Please enter a valid contact number.";
    }

    if (!captchaToken) {
      return "Please complete the CAPTCHA verification.";
    }

    return "";
  };

  // ── Submit ─────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Honeypot — silently ignore bots
    if (formData.company) return;

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: "error", message: validationError });
      return;
    }

    try {
      setIsSending(true);

      // Build payload matching backend field names exactly
      const payload = {
        full_name: formData.full_name.trim(),
        email: formData.email.trim(),
        contact_number: formData.contact_number.trim(),
        appointment_date: toDateString(formData.date), // "YYYY-MM-DD"
        appointment_time: to24Hour(formData.time), // "HH:MM" 24h
        consultation_type: formData.consultation_type, // "online" | "face_to_face"
        notes: formData.notes.trim(),
        captcha_token: captchaToken, // verified on backend
      };

      const result = await bookAppointment(payload);

      setStatus({
        type: "success",
        message: `Appointment booked! Your reference code is: ${result.reference_code}`,
      });

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        contact_number: "",
        date: null,
        time: "",
        consultation_type: "",
        notes: "",
        company: "",
      });
      setTimeParts({ hour: "08", minute: "00", meridiem: "AM" });
      setCaptchaToken("");
      recaptchaRef.current?.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error?.message || "Sorry, something went wrong. Please try again.",
      });
      // Reset captcha on failure so user can retry
      setCaptchaToken("");
      recaptchaRef.current?.reset();
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
          className={`absolute inset-0 bg-cinematic ${bgLoaded ? "is-loaded" : ""}`}
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
          className={`relative z-10 max-w-6xl mx-auto px-6 py-20 reveal-clip ${visible ? "is-visible" : ""}`}
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
            {/* ── Left: Contact Info ── */}
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

            {/* ── Right: Booking Form ── */}
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
                    Tell us about your project and we'll respond within 24–48
                    hours.
                  </p>
                  <p className="text-xs text-emerald-100/80 mt-3">
                    You'll receive a reference code after booking. Use it to
                    check your appointment status.
                  </p>
                </div>

                {/* Full Name */}
                <div className="mb-4">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200"
                    placeholder="Your Full Name"
                    required
                  />
                </div>

                {/* Email */}
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
                    placeholder="yourname@email.com"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div className="mb-4">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="contact_number"
                    value={formData.contact_number}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300/60 transition duration-200"
                    placeholder="09XXXXXXXXX"
                    required
                  />
                </div>

                {/* Date & Time */}
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

                      {timePickerOpen && (
                        <div className="time-picker__panel" role="dialog">
                          <div className="time-picker__columns">
                            <div
                              className="time-picker__column"
                              aria-label="Hours"
                            >
                              {hours.map((hour) => (
                                <button
                                  key={hour}
                                  type="button"
                                  className={`time-picker__item ${timeParts.hour === hour ? "is-selected" : ""}`}
                                  onClick={() =>
                                    updateTime({ ...timeParts, hour })
                                  }
                                >
                                  {hour}
                                </button>
                              ))}
                            </div>
                            <div
                              className="time-picker__column"
                              aria-label="Minutes"
                            >
                              {minutes.map((minute) => (
                                <button
                                  key={minute}
                                  type="button"
                                  className={`time-picker__item ${timeParts.minute === minute ? "is-selected" : ""}`}
                                  onClick={() =>
                                    updateTime({ ...timeParts, minute })
                                  }
                                >
                                  {minute}
                                </button>
                              ))}
                            </div>
                            <div
                              className="time-picker__column"
                              aria-label="AM/PM"
                            >
                              {meridiems.map((meridiem) => (
                                <button
                                  key={meridiem}
                                  type="button"
                                  className={`time-picker__item ${timeParts.meridiem === meridiem ? "is-selected" : ""}`}
                                  onClick={() =>
                                    updateTime({ ...timeParts, meridiem })
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
                      )}
                    </div>
                  </div>
                </div>

                {/* Consultation Type */}
                <div className="mb-4">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 cursor-pointer transition hover:border-emerald-400/40">
                      <input
                        type="radio"
                        name="consultation_type"
                        value="online"
                        checked={formData.consultation_type === "online"}
                        onChange={handleChange}
                        className="accent-emerald-500"
                        required
                      />
                      Online
                    </label>
                    <label className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 cursor-pointer transition hover:border-emerald-400/40">
                      <input
                        type="radio"
                        name="consultation_type"
                        value="face_to_face"
                        checked={formData.consultation_type === "face_to_face"}
                        onChange={handleChange}
                        className="accent-emerald-500"
                        required
                      />
                      F2F
                    </label>
                  </div>
                </div>

                {/* Notes */}
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
                  />
                </div>

                {/* reCAPTCHA v2 */}
                <div className="mb-6">
                  <label className="block text-slate-200 mb-2 text-sm font-medium">
                    Verification
                  </label>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                    onChange={(token) => setCaptchaToken(token || "")}
                    onExpired={() => setCaptchaToken("")}
                    theme="dark"
                  />
                </div>

                {/* Honeypot (hidden from real users) */}
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

                {/* Status message */}
                {status.message && (
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
                )}

                <button
                  type="submit"
                  disabled={isSending || !captchaToken}
                  className="focus-ring w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/60 text-white font-semibold py-3.5 px-6 rounded-xl transition duration-300 shadow-[0_18px_45px_-28px_rgba(14,165,233,0.6)] hover:shadow-[0_22px_55px_-28px_rgba(16,185,129,0.6)] disabled:cursor-not-allowed"
                >
                  {isSending ? "Booking..." : "Book Appointment"}
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
