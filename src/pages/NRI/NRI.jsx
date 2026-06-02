// src/pages/NRI/NRI.jsx

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import nri from "../../assets/nri.png";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaShieldAlt,
  FaBalanceScale,
  FaGlobeAsia,
  FaFileSignature,
  FaUniversity,
  FaUserTie,
  FaLock,
  FaCheckCircle,
  FaChevronDown,
} from "react-icons/fa";

function NRI() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      {/* HERO SECTION */}

<section className="bg-white pt-25 pb-24">

  <div className="max-w-7xl mx-auto px-8">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}

      <div>

        <span className="uppercase tracking-[4px] text-[#C9A227] font-semibold">
          NRI Estate Planning
        </span>

        <h1
          className="text-[#0F172A] text-6xl lg:text-7xl font-bold leading-tight mt-6"
          style={{ fontFamily: "Playfair Display" }}
        >
          Protect Your
          <br />
          Indian Assets
          <br />
          Across Borders.
        </h1>

        <p className="text-gray-600 text-xl mt-8 leading-relaxed max-w-xl">
          Secure your Indian properties, investments,
          bank accounts and family assets through legally
          valid wills and cross-border estate planning solutions.
        </p>

        <div className="grid grid-cols-2 gap-5 mt-10 text-lg">

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#C9A227]" />
            India Asset Will
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#C9A227]" />
            FEMA Compliance
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#C9A227]" />
            Tax Advisory
          </div>

          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-[#C9A227]" />
            Cross Border Planning
          </div>

        </div>

        {/* <button className="mt-10 bg-[#C9A227] hover:bg-[#b7921f] text-white px-10 py-5 rounded-xl font-semibold text-lg transition">

          Book Consultation

        </button> */}

      </div>

      {/* RIGHT IMAGE */}

      <div className="flex justify-center">

        <div
  className="
  relative
  bg-[#0F172A]
  p-4
  rounded-[30px]
  border-4
  border-[#C9A227]
  shadow-[0_25px_50px_rgba(15,23,42,0.25)]
  "
>

  <img
    src={nri}
    alt="NRI Estate Planning"
    className="
    w-full
    max-w-[650px]
    h-[500px]
    object-cover
    rounded-[20px]
    "
  />

</div>

      </div>

    </div>

  </div>

</section>

      {/* WHY NRI NEED WILL */}

      <section className="bg-[#0F172A] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2
            className="text-center text-white text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Why NRI Need An Indian Will
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div className="bg-white/5 border border-[#C9A227] rounded-3xl p-8 text-center text-white">
              <FaHome className="mx-auto text-[#C9A227] text-5xl mb-5" />
              <h3 className="font-bold text-xl">Property Protection</h3>
            </div>

            <div className="bg-white/5 border border-[#C9A227] rounded-3xl p-8 text-center text-white">
              <FaShieldAlt className="mx-auto text-[#C9A227] text-5xl mb-5" />
              <h3 className="font-bold text-xl">Family Security</h3>
            </div>

            <div className="bg-white/5 border border-[#C9A227] rounded-3xl p-8 text-center text-white">
              <FaBalanceScale className="mx-auto text-[#C9A227] text-5xl mb-5" />
              <h3 className="font-bold text-xl">Legal Compliance</h3>
            </div>

            <div className="bg-white/5 border border-[#C9A227] rounded-3xl p-8 text-center text-white">
              <FaGlobeAsia className="mx-auto text-[#C9A227] text-5xl mb-5" />
              <h3 className="font-bold text-xl">Cross Border Planning</h3>
            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="bg-[#F8F7F2] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2
            className="text-center text-5xl text-[#0F172A]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Services We Offer
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {[
  {
    icon: <FaFileSignature />,
    title: "India Asset Will",
    slug: "india-asset-will",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Cross Border Planning",
    slug: "cross-border-planning",
  },
  {
    icon: <FaBalanceScale />,
    title: "FEMA Compliance",
    slug: "fema-compliance",
  },
  {
    icon: <FaUniversity />,
    title: "Tax Advisory",
    slug: "tax-advisory",
  },
  {
    icon: <FaUserTie />,
    title: "Executor Services",
    slug: "executor-services",
  },
  {
    icon: <FaLock />,
    title: "Will Storage",
    slug: "will-storage",
  },
  {
    icon: <FaShieldAlt />,
    title: "Post Death Support",
    slug: "post-death-support",
  },
  {
    icon: <FaHome />,
    title: "Asset Transfer",
    slug: "asset-transfer",
  },
].map((item, index) => (
  <Link
    key={index}
    to={`/nri/${item.slug}`}
    className="
      block
      bg-white
      rounded-3xl
      p-8
      shadow-lg
      hover:-translate-y-2
      hover:shadow-2xl
      transition-all
      duration-500
      border-t-4
      border-[#C9A227]
    "
  >
    <div className="text-5xl text-[#C9A227] mb-5">
      {item.icon}
    </div>

    <h3 className="font-bold text-xl text-[#0F172A]">
      {item.title}
    </h3>

    <p className="text-gray-600 mt-3">
      Dedicated legal support for NRIs.
    </p>

    <div className="mt-5 text-[#C9A227] font-semibold">
      Know More →
    </div>
  </Link>
))}
          </div>
        </div>
      </section>

      {/* PRICING */}

      <section className="bg-[#C9A227] py-10">
        <div className="max-w-5xl mx-auto px-8 text-center">

          <h2
            className="text-5xl text-[#0F172A]"
            style={{ fontFamily: "Playfair Display" }}
          >
            NRI Estate Plan
          </h2>

          <div className="mt-12 max-w-md mx-auto bg-[#0F172A] rounded-3xl p-10 text-white shadow-2xl border border-[#C9A227]">

            <div className="text-5xl font-bold text-[#C9A227]">
              ₹9,999
            </div>

            <div className="mt-2 text-gray-300">
              + GST Applicable
            </div>

            <div className="mt-8 space-y-4 text-left">

              <p>✓ Will Drafting</p>
              <p>✓ FEMA Review</p>
              <p>✓ Lawyer Support</p>
              <p>✓ Asset Review</p>
              <p>✓ Consultation Call</p>

            </div>

            <button className="w-full mt-8 bg-[#C9A227] text-white py-4 rounded-xl font-semibold">
              Get Started
            </button>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-[#F8F7F2] py-24">

        <div className="max-w-4xl mx-auto px-8">

          <h2 className="text-center text-5xl text-[#0F172A]">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-5">

            {[
              "Can NRIs create Indian wills?",
              "Is FEMA compliance included?",
              "Can registration be done remotely?",
              "Do you support UAE and USA residents?",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[#0F172A]">
                    {item}
                  </h3>

                  <FaChevronDown />
                </div>
              </div>
            ))}

          </div>

        </div>

      </section>
      

      {/* CONTACT FORM */}

     <section className="bg-[#F8F7F2] py-24">

  <div className="max-w-7xl mx-auto px-8">
    

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}

      <div>

        <span className="uppercase tracking-[4px] text-[#C9A227] font-semibold">
          Free Consultation
        </span>

        <h2 className="text-[#0F172A] text-5xl lg:text-6xl font-bold mt-6 leading-tight">

          Still Confused?
          <br />
          Let us help you out

        </h2>

        <p className="text-gray-600 text-lg mt-8 max-w-md">

          Speak with our legal experts and get
          professional guidance on wills, estate
          planning, inheritance and NRI asset protection.

        </p>

      </div>

      {/* RIGHT SIDE */}

      <div>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="
            w-full
            border
            border-gray-400
            rounded-3xl
            px-6
            py-5
            bg-white
            outline-none
            focus:border-[#C9A227]
            "
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="
            w-full
            border
            border-gray-400
            rounded-3xl
            px-6
            py-5
            bg-white
            outline-none
            focus:border-[#C9A227]
            "
          />

          <textarea
            rows="5"
            placeholder="Requirement"
            className="
            w-full
            border
            border-gray-400
            rounded-3xl
            px-6
            py-5
            bg-white
            outline-none
            resize-none
            focus:border-[#C9A227]
            "
          ></textarea>

          <button
  type="submit"
  className="
  w-full
  bg-[#0F172A]
  hover:bg-[#C9A227]
  border-2
  border-[#C9A227]
  text-white
  py-5
  rounded-3xl
  text-lg
  font-semibold
  transition-all
  "
>
  Book Free Consultation →
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

export default NRI;