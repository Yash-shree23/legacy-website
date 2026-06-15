import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { services } from "../../data/servicesData";
import BackButton from "../../components/BackButton/BackButton";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
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

  const fullName = formData.full_name.trim();
  const email = formData.email.trim();
  const phone = formData.phone.trim();
  const message = formData.message.trim();

  // Prevent blank spaces
  if (!fullName || !message) {
    alert("Name and Requirement cannot contain only blank spaces.");
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone validation
  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Phone number must contain exactly 10 digits.");
    return;
  }

    try {
      await axios.post(
        //  "http://localhost:8080/api/service-enquiry",
        "https://hpclsparesportal.in/legacy-backend/public/api/service-enquiry",
        {
          ...formData,
          service_name: service.title,
        }
      );

    alert(
      "Thank you for your enquiry. Our advisor will contact you shortly."
    );

    setFormData({
      full_name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      {/* BACK BUTTON */}

      <section className="pt-24 pb-2 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <BackButton />
        </div>
      </section>

      {/* SERVICE DETAILS */}

      <section className="pt-6 pb-20 py-24 bg-[#F8F7F2]">
        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}

            <div>
              <h1 className="text-6xl font-bold text-[#C9A227]">
                {service.title}
              </h1>

              <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-12">
                <p className="line-through text-gray-500">
                  ₹ 25,000/-
                </p>

                <h2 className="text-4xl font-bold text-[#0F172A]">
                  {service.price}
                </h2>
              </div>
            </div>

            {/* RIGHT FORM */}

            <div className="py-4 bg-[#F8F7F2]">

              <h2 className="text-4xl font-bold text-center text-[#0F172A]">
                Enquiry Form
              </h2>

              <p className="text-center mt-3 text-gray-500">
                Our lawyer will call you within 24 hours
              </p>

              <form
                className="space-y-5 mt-8"
                onSubmit={handleSubmit}
              >

                <input
  type="text"
  name="full_name"
  value={formData.full_name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full border p-3 rounded-xl"
  required
  maxLength={50}
  pattern="^[A-Za-z ]+$"
  title="Only letters and spaces are allowed"
/>

              <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Email Address"
  className="w-full border p-3 rounded-xl"
  required
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
/>
                <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "");

    setFormData({
      ...formData,
      phone: value,
    });
  }}
  placeholder="Phone Number"
  className="w-full border p-3 rounded-xl"
  required
  maxLength={10}
  pattern="[0-9]{10}"
  title="Enter a valid 10 digit phone number"
/>
                <textarea
  rows="4"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Requirement"
  className="w-full border p-3 rounded-xl"
  required
  maxLength={1000}
></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#C9A227] text-white py-3 rounded-xl hover:bg-yellow-700 transition"
                >
                  Submit
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold mb-16 text-[#0F172A]">
            How It Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {[1, 2, 3, 4].map((step) => (
              <div key={step}>

                <div className="w-16 h-16 rounded-full bg-[#C9A227] text-white text-2xl font-bold flex items-center justify-center">
                  {step}
                </div>

                <h3 className="mt-6 font-bold text-xl">
                  Step {step}
                </h3>

                <p className="mt-3 text-gray-600">
                  Description for step {step}.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      
      {/* <Footer /> */}

    </>
  );
}

export default ServiceDetails;