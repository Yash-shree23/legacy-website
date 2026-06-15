import { useState } from "react";
import axios from "axios";

function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {

    await axios.post(
      // "http://localhost:8080/api/consultation",
      "https://hpclsparesportal.in/legacy-backend/public/api/consultation",
      formData
    );

    setSubmitted(true);

  } catch (error) {

    console.error(error);

    alert("Something went wrong.");

  } finally {

    setLoading(false);

  }
};

  const handleClose = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    onClose();
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={handleClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top accent bar */}
        <div className="h-1.5 w-full bg-[#C9A227]" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="px-8 py-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-7">
                <span className="text-xs uppercase tracking-[4px] text-[#C9A227] font-semibold">
                  Free First Session
                </span>
                <h2 className="text-3xl font-bold text-[#0F172A] mt-2 leading-tight">
                  Book a Consultation
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                  Our estate planning experts will get back to you within 24 hours.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">
                    Full Name <span className="text-[#C9A227]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Rajesh Sharma"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition"
                  />
                </div>

                {/* Email + Phone row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1">
                      Email <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-1">
                      Phone <span className="text-[#C9A227]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">
                    Service Interested In <span className="text-[#C9A227]">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition bg-white"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    <option>Will Drafting</option>
                    <option>Estate Planning</option>
                    <option>Gift Deed</option>
                    <option>Will Storage</option>
                    <option>Executor Support</option>
                    <option>Annual Review</option>
                    <option>Post Death Support</option>
                    <option>NRI Services</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#0F172A] mb-1">
                    Brief Message
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your situation…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#C9A227] hover:bg-yellow-700 text-white font-semibold py-3.5 rounded-xl transition disabled:opacity-60 flex items-center justify-center gap-2 mt-1"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    "Book My Free Consultation →"
                  )}
                </button>

                <p className="text-center text-xs text-gray-400 mt-1">
                  🔒 100% confidential. No spam, ever.
                </p>
              </form>
            </>
          ) : (
            // Success State
            <div className="py-10 text-center">
              <div className="w-16 h-16 rounded-full bg-[#C9A227]/10 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-[#C9A227]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">You're all set!</h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our team will reach out to{" "}
                <strong>{formData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={handleClose}
                className="mt-7 bg-[#0F172A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#1e293b] transition"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ConsultationModal;
