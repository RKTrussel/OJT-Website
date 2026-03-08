// services/appointmentService.js
import api from "./api";

// ─── Field Normalizer ─────────────────────────────────────
// Backend returns snake_case DB column names.
// Frontend components use short aliases.
// This maps them so components stay clean.
//
//  DB column           → Frontend alias
//  full_name           → name
//  contact_number      → phone
//  consultation_type   → type
//  reference_code      → ref
//  appointment_date    → date
//  appointment_time    → time
//  meeting_link        → link
export const normalizeAppointment = (a) => {
  // Strip time portion from date — MySQL sometimes returns
  // "2026-03-29T16:00:00.000Z" instead of plain "2026-03-29"
  // due to timezone handling. split("T")[0] ensures clean date.
  const rawDate = a.appointment_date ?? a.date ?? "";
  const cleanDate = String(rawDate).split("T")[0];

  // Strip seconds from time — "14:30:00" → "14:30"
  const rawTime = a.appointment_time ?? a.time ?? "";
  const cleanTime = String(rawTime).substring(0, 5);

  return {
    ...a,
    name: a.full_name ?? a.name ?? "",
    phone: a.contact_number ?? a.phone ?? "",
    type: a.consultation_type ?? a.type ?? "",
    ref: a.reference_code ?? a.ref ?? "",
    date: cleanDate,
    time: cleanTime,
    link: a.meeting_link ?? a.link ?? "",
  };
};

// ── GET /appointments ─────────────────────────────────────
// Admin: fetch all appointments with optional server-side filters.
// filters: { status, consultation_type, appointment_date, search }
// All fields are optional — unused ones are not sent to the server.
export const getAllAppointments = async (filters = {}) => {
  const params = {};
  if (filters.status && filters.status !== "all")
    params.status = filters.status;
  if (filters.consultation_type && filters.consultation_type !== "all")
    params.consultation_type = filters.consultation_type;
  if (filters.appointment_date)
    params.appointment_date = filters.appointment_date;
  if (filters.search) params.search = filters.search;

  const { data } = await api.get("/appointments", { params });
  return data.map(normalizeAppointment); // always returns normalized array
};

// ── GET /appointments/:id ─────────────────────────────────
// Admin: fetch one appointment by database ID.
export const getAppointmentById = async (id) => {
  const { data } = await api.get(`/appointments/${id}`);
  return normalizeAppointment(data);
};

// ── POST /appointments ────────────────────────────────────
// Client-facing: book a new appointment.
// body: { full_name, email, contact_number, appointment_date,
//         appointment_time, consultation_type, notes }
// Returns: { message, reference_code }
export const bookAppointment = async (appointmentData) => {
  const { data } = await api.post("/appointments", appointmentData);
  return data;
};

// ── GET /appointments/check/:reference_code ───────────────
// Client-facing: check appointment status by reference code.
export const checkAppointment = async (referenceCode) => {
  const { data } = await api.get(`/appointments/check/${referenceCode}`);
  return normalizeAppointment(data);
};

// ── PATCH /appointments/:id/approve ──────────────────────
// Admin: approve a pending appointment.
// meetingLink is REQUIRED when consultation_type === 'online'.
export const approveAppointment = async (id, meetingLink = "") => {
  const body = meetingLink ? { meeting_link: meetingLink } : {};
  const { data } = await api.patch(`/appointments/${id}/approve`, body);
  return data; // { message }
};

// ── PATCH /appointments/:id/reject ───────────────────────
// Admin: reject a pending appointment.
// reason is optional.
export const rejectAppointment = async (id, reason = "") => {
  const { data } = await api.patch(`/appointments/${id}/reject`, { reason });
  return data; // { message }
};

// ── PATCH /appointments/:id/complete ─────────────────────
// Admin: mark an approved appointment as completed.
export const completeAppointment = async (id) => {
  const { data } = await api.patch(`/appointments/${id}/complete`);
  return data; // { message }
};

// ── PATCH /appointments/:id/cancel ───────────────────────
// Admin: cancel a pending or approved appointment.
// reason is optional.
export const cancelAppointment = async (id, reason = "") => {
  const { data } = await api.patch(`/appointments/${id}/cancel`, { reason });
  return data; // { message }
};

export const deleteAppointment = (id) =>
  api.delete(`/appointments/${id}`).then((r) => r.data);
