

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import heroImage from "../../assets/hero.png";

import {
  FaFileSignature,
  FaBalanceScale,
  FaGift,
  FaLock,
  FaUserShield,
  FaSyncAlt,
  FaHandsHelping,
  FaGlobe,
  FaClipboardList,
  FaGavel,
  FaShieldAlt,
  FaCheckCircle,
  FaHandshake,
  FaGlobeAsia,
  FaUsers,
  FaStar,
  FaUserTie,
  FaCertificate,
} from "react-icons/fa";

function Home() {

  const services = [
    {
      icon: <FaFileSignature />,
      title: "Will Drafting",
       slug: "will-drafting",
      desc: "Create legally valid wills with expert legal guidance."
    },
    {
      icon: <FaBalanceScale />,
      title: "Estate Planning",
       slug: "estate-planning",
      desc: "Protect and distribute your assets efficiently."
    },
    {
      icon: <FaGift />,
      title: "Gift Deed",
       slug: "gift-deed",
      desc: "Transfer assets to loved ones with legal certainty."
    },
    {
      icon: <FaLock />,
      title: "Will Storage",
       slug: "will-storage",
      desc: "Secure digital and physical storage for your will."
    },
    {
      icon: <FaUserShield />,
      title: "Executor Support",
      slug: "executor-support",
      desc: "Professional guidance for appointed executors."
    },
    {
      icon: <FaSyncAlt />,
      title: "Annual Review",
       slug: "annual-review",
      desc: "Keep your will updated with life changes."
    },
    {
      icon: <FaHandsHelping />,
      title: "Post-Death Support",
          slug: "post-death-support",
      desc: "Support for families during estate execution."
    },
    {
      icon: <FaGlobe />,
      title: "NRI Services",
          slug: "nri-services",
      desc: "Estate planning solutions for Indians abroad."
    }
  ];

  return (
    <>
      <Navbar />

      <Hero />

      {/* TRUST BAR */}

      <section className="bg-[#C9A227] py-10">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-8 text-center">

          <div>
            <h2 className="text-[#0F172A] text-4xl font-bold">5000+</h2>
            <p className="text-white mt-2">Families Protected</p>
          </div>

          <div>
            <h2 className="text-[#0F172A] text-4xl font-bold">25+</h2>
            <p className="text-white mt-2">Cities Served</p>
          </div>

          <div>
            <h2 className="text-[#0F172A] text-4xl font-bold">100%</h2>
            <p className="text-white mt-2">Confidential</p>
          </div>

          <div>
            <h2 className="text-[#0F172A] text-4xl font-bold">NRI</h2>
            <p className="text-white mt-2">Specialists</p>
          </div>

        </div>
      </section>
{/* HOW IT WORKS */}

<section className="bg-[#0F172A] py-24">

  <div className="max-w-7xl mx-auto px-8">

    <h2
      className="text-center text-white text-5xl"
      style={{ fontFamily: "Playfair Display" }}
    >
      How It Works
    </h2>

    <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

    <div className="grid md:grid-cols-3 gap-10 mt-20">

      <div className="bg-white/5 border border-[#C9A227] rounded-3xl p-8 text-center">

          <div className="text-[#C9A227] text-5xl font-bold">
          1
        </div>

        <h3 className="text-white text-2xl font-semibold mt-6">
          Fill Intake Form
        </h3>

        <p className="text-gray-300 mt-4">
          Complete a simple questionnaire in just
          2 minutes and share your estate details.
        </p>

      </div>

      <div className="bg-white/5 border border-[#C9A227] rounded-3xl p-8 text-center">

        <div className="text-[#C9A227] text-5xl font-bold">
          2
        </div>

        <h3 className="text-white text-2xl font-semibold mt-6">
          Lawyer Drafts
        </h3>

        <p className="text-gray-300 mt-4">
          Our legal experts prepare a legally valid
          and customized estate plan.
        </p>

      </div>

      <div className="bg-white/5 border border-[#C9A227] rounded-3xl p-8 text-center">

        <div className="text-[#C9A227] text-5xl font-bold">
          3
        </div>

        <h3 className="text-white text-2xl font-semibold mt-6">
          Execute & Store
        </h3>

        <p className="text-gray-300 mt-4">
          Register, secure and store your will
          with complete confidence.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* SERVICES */}

      <section className="py-24 bg-[#F8F7F2]">

        <div className="max-w-7xl mx-auto px-8">

          <h2
            className="text-center text-5xl text-[#0F172A]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Our Services
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

          <p className="text-center text-gray-600 mt-6 text-lg">
            Comprehensive estate planning solutions for every family.
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            {services.map((service, index) => (

              <div
                key={index}
                className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-3
                transition-all
                duration-500
                border-t-4
                border-[#C9A227]
                "
              >

                <div className="w-16 h-16 rounded-full bg-[#0F172A] flex items-center justify-center mb-6">

                  <span className="text-[#C9A227] text-3xl">
                    {service.icon}
                  </span>

                </div>

                <h3 className="text-xl font-bold text-[#0F172A]">
                  {service.title}
                </h3>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {service.desc}
                </p>

                {/* <button className="mt-6 text-[#C9A227] font-semibold hover:translate-x-2 transition-all">
                  Learn More →
                </button> */}
      <Link to={`/services/${service.slug}`}>
  <button className="mt-6 text-[#C9A227] font-semibold hover:translate-x-2 transition-all">
    Learn More →
  </button>
</Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY LEGACY */}

      <section className="bg-[#0F172A] py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2
            className="text-center text-white text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Why Legacy?
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

          <div className="grid md:grid-cols-5 gap-6 mt-16">

            {[
              "Execution Guarantee",
              "Hybrid India Model",
              "Post Death Support",
              "Legal Structuring",
              "NRI Expertise"
            ].map((item, index) => (

              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#C9A227] rounded-2xl p-6 text-white text-center"
              >
                {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* NRI BANNER */}

      <section className="bg-[#C9A227] py-24 text-center">

        <div className="max-w-5xl mx-auto px-8">

          <h2
            className="text-white text-5xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            Own Property In India?
          </h2>

          <p className="text-white text-xl mt-6">
            Protect your Indian assets before they become
            a legal challenge for your family.
          </p>

          <Link
  to="/nri"
  className="inline-block mt-8 bg-[#C9A227] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b08d1d] transition-all"
>
  Explore NRI Services →
</Link>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-8">

          <h2
            className="text-center text-5xl text-[#0F172A]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Client Testimonials
          </h2>

          <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="shadow-xl rounded-3xl p-8">
              <h3 className="font-bold text-xl">Mumbai Family</h3>
              <div className="flex gap-1 text-[#C9A227] mt-4">

  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />

</div>
              <p className="text-gray-600 mt-4">
                Legacy helped us secure our family assets with
                complete legal confidence.
              </p>
            </div>

            <div className="shadow-xl rounded-3xl p-8">
              <h3 className="font-bold text-xl">Dubai NRI</h3>
              <div className="flex gap-1 text-[#C9A227] mt-4">

  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />

</div>
              <p className="text-gray-600 mt-4">
                Excellent support for Indian property succession
                planning and documentation.
              </p>
            </div>

            <div className="shadow-xl rounded-3xl p-8">
              <h3 className="font-bold text-xl">Pune Family</h3>
              <div className="flex gap-1 text-[#C9A227] mt-4">

  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />
  <FaStar />

</div>
              <p className="text-gray-600 mt-4">
                Professional, transparent and highly trustworthy
                legal process.
              </p>
            </div>

          </div>

        </div>

      </section>
{/* LEGAL PARTNER */}

<section className="py-24 bg-white">

  <div className="max-w-7xl mx-auto px-8">

    <h2
      className="text-center text-5xl text-[#0F172A]"
      style={{ fontFamily: "Playfair Display" }}
    >
      Our Legal Partner
    </h2>

    <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

    <p className="text-center text-gray-600 mt-6 max-w-3xl mx-auto">
      Legacy operates in partnership with Pravara Legal Services &
      Associates, providing trusted legal guidance for wills,
      estate planning, succession planning and NRI asset protection.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {/* Card 1 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-all duration-300">

        <div
          className="
          w-28
          h-28
          rounded-full
          border-4
          border-[#C9A227]
          bg-[#F8F7F2]
          mx-auto
          flex
          items-center
          justify-center
          shadow-lg
          "
        >
          <FaUserTie
            className="text-[#0F172A]"
            size={50}
          />
        </div>

        <h3 className="font-bold text-2xl text-[#0F172A] mt-6">
          Senior Advocate
        </h3>

        <p className="text-gray-600 mt-2">
          Estate Planning Specialist
        </p>

        <div className="flex items-center justify-center gap-2 mt-5 text-[#C9A227]">

          <FaCertificate />

          <span className="font-medium">
            BCI Enrolled
          </span>

        </div>

      </div>

      {/* Card 2 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-all duration-300">

        <div
          className="
          w-28
          h-28
          rounded-full
          border-4
          border-[#C9A227]
          bg-[#F8F7F2]
          mx-auto
          flex
          items-center
          justify-center
          shadow-lg
          "
        >
          <FaUserTie
            className="text-[#0F172A]"
            size={50}
          />
        </div>

        <h3 className="font-bold text-2xl text-[#0F172A] mt-6">
          Legal Consultant
        </h3>

        <p className="text-gray-600 mt-2">
          Will Registration Expert
        </p>

        <div className="flex items-center justify-center gap-2 mt-5 text-[#C9A227]">

          <FaCertificate />

          <span className="font-medium">
            Certified Professional
          </span>

        </div>

      </div>

      {/* Card 3 */}

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-2 transition-all duration-300">

        <div
          className="
          w-28
          h-28
          rounded-full
          border-4
          border-[#C9A227]
          bg-[#F8F7F2]
          mx-auto
          flex
          items-center
          justify-center
          shadow-lg
          "
        >
          <FaUserTie
            className="text-[#0F172A]"
            size={50}
          />
        </div>

        <h3 className="font-bold text-2xl text-[#0F172A] mt-6">
          BCI Enrolled Team
        </h3>

        <p className="text-gray-600 mt-2">
          Pan India Legal Network
        </p>

        <div className="flex items-center justify-center gap-2 mt-5 text-[#C9A227]">

          <FaCertificate />

          <span className="font-medium">
            Trusted Legal Advisors
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* BLOG PREVIEW */}

<section className="py-24 bg-[#F8F7F2]">

  <div className="max-w-7xl mx-auto px-8">

    <h2
      className="text-center text-5xl text-[#0F172A]"
      style={{ fontFamily: "Playfair Display" }}
    >
      Latest Insights
    </h2>

    <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-4"></div>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {/* Card 1 */}

      <Link
  to="/blogs"
  className="block bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
>

        <img
          src={blog1}
          alt="Blog 1"
          className="w-full h-56 object-cover"
        />

        <div className="p-8">

          <h3 className="font-bold text-xl text-[#0F172A]">
            What Happens If You Die Without A Will?
          </h3>

          <p className="text-gray-500 mt-4">
            5 min read
          </p>

        </div>

      </Link>

      {/* Card 2 */}

      <Link
  to="/blogs"
  className="block bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
>
        <img
          src={blog2}
          alt="Blog 2"
          className="w-full h-56 object-cover"
        />

        <div className="p-8">

          <h3 className="font-bold text-xl text-[#0F172A]">
            NRI Property Planning Guide
          </h3>

          <p className="text-gray-500 mt-4">
            7 min read
          </p>

        </div>

      </Link>

      {/* Card 3 */}

      <Link
  to="/blogs"
  className="block bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
>
        <img
          src={blog3}
          alt="Blog 3"
          className="w-full h-56 object-cover"
        />

        <div className="p-8">

          <h3 className="font-bold text-xl text-[#0F172A]">
            Estate Planning Checklist For Families
          </h3>

          <p className="text-gray-500 mt-4">
            6 min read
          </p>

        </div>

      </Link>

    </div>

  </div>

</section>
      {/* <Footer /> */}
    </>
  );
}

export default Home;