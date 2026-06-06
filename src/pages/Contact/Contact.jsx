import { useState } from "react";
import axios from "axios";
import BackButton from "../../components/BackButton/BackButton";

function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8080/api/contact",
        formData
      );

      alert(
        "Thank you for contacting Legacy. Our advisor will contact you shortly."
      );

      setFormData({
        full_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      {/* BACK BUTTON */}
      <section className="pt-24 pb-2 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <BackButton />
        </div>
      </section>

      {/* Hero Section */}
      <section className="pt-28 bg-[#F8F7F2]">
        <div className="relative h-[350px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
            alt="Contact"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-white/80"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-8 w-full">
              <p className="uppercase tracking-[3px] text-[#C9A227] font-semibold">
                Contact Us
              </p>

              <h1 className="text-6xl font-bold text-[#0F172A] mt-4">
                We're Here to Help
              </h1>

              <div className="w-20 h-1 bg-[#C9A227] mt-6"></div>

              <p className="mt-8 text-gray-600 text-xl max-w-2xl">
                Have questions about wills, estate planning,
                inheritance or NRI services? Our legal experts
                are here to guide you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-4xl font-bold text-[#0F172A]">
                Send Us a Message
              </h2>

              <p className="text-gray-500 mt-3">
                Fill in your details and our team will get back
                to you shortly.
              </p>

              <form
                className="mt-10 space-y-5"
                onSubmit={handleSubmit}
              >
                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="border border-gray-300 rounded-xl p-4"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="border border-gray-300 rounded-xl p-4"
                    required
                  />

                </div>

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded-xl p-4"
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="border border-gray-300 rounded-xl p-4"
                    required
                  />

                </div>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-xl p-4"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="
                    bg-[#C9A227]
                    hover:bg-yellow-700
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    transition
                  "
                >
                  Send Message →
                </button>

              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 h-fit">

              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
                Contact Information
              </h2>

              <div className="pb-6 border-b">
                <h3 className="font-bold text-lg text-[#0F172A]">
                  📞 Phone
                </h3>

                <p className="mt-2 text-gray-600">
                  +91 98765 43210
                </p>

                <p className="text-gray-500 text-sm">
                  Mon - Sat: 9 AM - 7 PM
                </p>
              </div>

              <div className="py-6 border-b">
                <h3 className="font-bold text-lg text-[#0F172A]">
                  ✉️ Email
                </h3>

                <p className="mt-2 text-gray-600">
                  info@legacy.com
                </p>

                <p className="text-gray-500 text-sm">
                  We reply within 24 hours
                </p>
              </div>

              <div className="py-6 border-b">
                <h3 className="font-bold text-lg text-[#0F172A]">
                  📍 Office Address
                </h3>

                <p className="mt-2 text-gray-600">
                  Legacy Legal Services
                </p>

                <p className="text-gray-600">
                  Nashik, Maharashtra, India
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-lg text-[#0F172A]">
                  💬 WhatsApp
                </h3>

                <p className="mt-2 text-gray-600">
                  +91 98765 43210
                </p>

                <a
                  href="https://wa.me/919876543210"
                  className="text-[#C9A227] font-semibold"
                >
                  Chat with us →
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;