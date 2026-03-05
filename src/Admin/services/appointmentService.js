import api from "./api";

export const normalizeAppointment = (a) => ({
  ...a,
  name: a.full_name ?? a.name ?? "",
  phone: a.contact_number ?? a.phone ?? "",
  type: a.consultation_type ?? a.type ?? "",
  ref: a.reference_code ?? a.ref ?? "",
  date: a.appointment_date ?? a.date ?? "",
  time: a.appointment_time ?? a.time ?? "",
  link: a.meeting_link ?? a.link ?? "",
});

// ── GET /appointments ─────────────────────────────────────
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
  return data.map(normalizeAppointment);
};

// ── GET /appointments/:id ─────────────────────────────────
export const getAppointmentById = async (id) => {
  const { data } = await api.get(`/appointments/${id}`);
  return normalizeAppointment(data);
};

// ── POST /appointments ────────────────────────────────────
export const bookAppointment = async (appointmentData) => {
  const { data } = await api.post("/appointments", appointmentData);
  return data;
};

// ── GET /appointments/check/:reference_code ───────────────
export const checkAppointment = async (referenceCode) => {
  const { data } = await api.get(`/appointments/check/${referenceCode}`);
  return normalizeAppointment(data);
};

// ── PATCH /appointments/:id/approve ──────────────────────
export const approveAppointment = async (id, meetingLink = "") => {
  const body = meetingLink ? { meeting_link: meetingLink } : {};
  const { data } = await api.patch(`/appointments/${id}/approve`, body);
  return data;
};

// ── PATCH /appointments/:id/reject ───────────────────────
export const rejectAppointment = async (id, reason = "") => {
  const { data } = await api.patch(`/appointments/${id}/reject`, { reason });
  return data;
};

// ── PATCH /appointments/:id/complete ─────────────────────
export const completeAppointment = async (id) => {
  const { data } = await api.patch(`/appointments/${id}/complete`);
  return data;
};

// ── PATCH /appointments/:id/cancel ───────────────────────
export const cancelAppointment = async (id, reason = "") => {
  const { data } = await api.patch(`/appointments/${id}/cancel`, { reason });
  return data;
};
