import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { services } from "../../data/servicesData";

function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="pt-36 pb-20 py-24 bg-[#F8F7F2]">
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

            {/* RIGHT */}

            <div className="py-4 bg-[#F8F7F2]">
              <h2 className="text-4xl font-bold text-center text-[#0F172A]">
                Enquiry Form
              </h2>

              <p className="text-center mt-3 text-gray-500">
                Our lawyer will call you within 24 hours
              </p>

              <form className="space-y-5 mt-8">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border p-3 rounded-xl"
                />

                <textarea
                  rows="4"
                  placeholder="Requirement"
                  className="w-full border p-3 rounded-xl"
                />

                <button
                  className="w-full bg-[#C9A227] text-white py-2 rounded-xl"
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

            {[1,2,3,4].map((step) => (
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

      {/* CTA */}

      <section className="py-20 py-24 bg-[#F8F7F2]">

        <div className="max-w-6xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-5xl font-bold text-[#0F172A]">
                Still Confused?
              </h2>

              <h3 className="text-5xl font-bold text-[#0F172A] mt-2">
                Let us help you out
              </h3>
            </div>

            <div>
              <form className="space-y-4">

                <input
                  placeholder="Your Name"
                  // className="w-full p-4 rounded-xl"
                  className="w-full border p-3 rounded-xl"
                />

                <input
                  placeholder="Phone Number"
                className="w-full border p-3 rounded-xl"
                />

                <textarea
                  rows="3"
                  placeholder="Requirement"
                 className="w-full border p-3 rounded-xl"
                />

                <button className="w-full bg-[#0F172A] text-white py-4 rounded-xl">
                  Submit →
                </button>

              </form>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ServiceDetails;