import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { nriServices } from "../../data/nriServices";
import BackButton from "../../components/BackButton/BackButton";

function NRIServiceDetails() {
  const { slug } = useParams();

  const service = nriServices[slug];

  if (!service) {
    return <h1 className="text-center py-20">Service Not Found</h1>;
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

      {/* HERO */}

      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">

          <span className="uppercase tracking-[4px] text-[#C9A227] font-semibold">
            NRI Service
          </span>

          <h1
            className="text-6xl font-bold text-[#0F172A] mt-5"
            style={{ fontFamily: "Playfair Display" }}
          >
            {service.title}
          </h1>

          <p className="text-xl text-gray-600 mt-6 max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section className="bg-[#0F172A] py-20">
        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-white text-center text-5xl mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 p-8 rounded-3xl text-white">
              <h3 className="text-[#C9A227] text-2xl font-bold">
                Step 1
              </h3>
              <p className="mt-4">
                Book Consultation
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl text-white">
              <h3 className="text-[#C9A227] text-2xl font-bold">
                Step 2
              </h3>
              <p className="mt-4">
                Lawyer Review & Documentation
              </p>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl text-white">
              <h3 className="text-[#C9A227] text-2xl font-bold">
                Step 3
              </h3>
              <p className="mt-4">
                Final Delivery & Support
              </p>
            </div>

          </div>
        </div>
      </section>

     {/* BENEFITS SECTION */}

<section className="bg-[#F8F7F2] py-24">

  <div className="max-w-7xl mx-auto px-8">

    {/* Heading */}

    <div className="text-center mb-16">

      <span className="uppercase tracking-[5px] text-[#C9A227] font-semibold">
        Key Benefits
      </span>

      <h2
        className="text-5xl mt-4 text-[#0F172A]"
        style={{ fontFamily: "Playfair Display" }}
      >
        Why Families Choose Legacy
      </h2>

      <div className="w-24 h-1 bg-[#C9A227] mx-auto mt-5 rounded-full"></div>

      <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
        Experience a seamless, legally compliant and professionally
        managed estate planning process designed specifically for
        NRI families and Indian asset holders.
      </p>

    </div>

    {/* Benefits Grid */}

    <div className="grid md:grid-cols-2 gap-8">

      {[
        {
          no: "01",
          title: "Property Transfer",
          desc: "Smooth and legally compliant transfer of Indian properties and assets to beneficiaries."
        },
        {
          no: "02",
          title: "Legal Compliance",
          desc: "Complete adherence to Indian inheritance laws, FEMA regulations and documentation standards."
        },
        {
          no: "03",
          title: "Documentation Support",
          desc: "Preparation, review and verification of all required legal documents and declarations."
        },
        {
          no: "04",
          title: "Dedicated Lawyer Assistance",
          desc: "Direct support from experienced estate planning professionals throughout the process."
        }
      ].map((item, index) => (

        <div
          key={index}
          className="
          bg-white
          border-2
          border-[#C9A227]
          rounded-3xl
          p-8
          shadow-md
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all
          duration-300
          group
          "
        >

          <div className="flex items-start gap-5">

            {/* Number Circle */}

            <div
              className="
              min-w-[70px]
              h-[70px]
              rounded-full
              bg-[#0F172A]
              text-[#C9A227]
              flex
              items-center
              justify-center
              text-2xl
              font-bold
              group-hover:scale-110
              transition
              "
            >
              {item.no}
            </div>

            {/* Content */}

            <div>

              <h3 className="text-2xl font-bold text-[#0F172A]">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.desc}
              </p>

            </div>

          </div>

        </div>

      ))}

    </div>

    {/* Bottom Trust Strip */}

    <div className="mt-16 bg-[#0F172A] rounded-3xl p-8">

      <div className="grid md:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-[#C9A227] text-3xl font-bold">
            5000+
          </h3>

          <p className="text-white mt-2">
            Families Assisted
          </p>
        </div>

        <div>
          <h3 className="text-[#C9A227] text-3xl font-bold">
            20+
          </h3>

          <p className="text-white mt-2">
            Countries Served
          </p>
        </div>

        <div>
          <h3 className="text-[#C9A227] text-3xl font-bold">
            100%
          </h3>

          <p className="text-white mt-2">
            Confidential Process
          </p>
        </div>

        <div>
          <h3 className="text-[#C9A227] text-3xl font-bold">
            Expert
          </h3>

          <p className="text-white mt-2">
            Legal Guidance
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* PRICING */}

      <section className="bg-white py-20">

        <div className="max-w-md mx-auto">

          <div className="bg-[#0F172A] text-white rounded-3xl p-10 text-center">

            <h3 className="text-3xl font-bold">
              {service.title}
            </h3>

            <div className="text-[#C9A227] text-4xl font-bold mt-6">
              {service.price}
            </div>

            <button className="w-full mt-8 bg-[#C9A227] py-4 rounded-xl">
              Get Started
            </button>

          </div>

        </div>
      </section>
      {/* OTHER SERVICES */}

<section className="bg-white py-24">

  <div className="max-w-7xl mx-auto px-8">

    <div className="text-center">

      <span className="uppercase tracking-[4px] text-[#C9A227] font-semibold">
        Explore More
      </span>

      <h2
        className="text-[#0F172A] text-5xl mt-4"
        style={{ fontFamily: "Playfair Display" }}
      >
        Other NRI Services
      </h2>

      <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
        Discover our complete range of estate planning
        and inheritance solutions designed specifically
        for Non-Resident Indians.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8 mt-16">

      {[
        {
          title: "India Asset Will",
          slug: "india-asset-will",
        },
        {
          title: "Cross Border Planning",
          slug: "cross-border-planning",
        },
        {
          title: "FEMA Compliance",
          slug: "fema-compliance",
        },
        {
          title: "Tax Advisory",
          slug: "tax-advisory",
        },
        {
          title: "Executor Services",
          slug: "executor-services",
        },
        {
          title: "Will Storage",
          slug: "will-storage",
        },
        {
          title: "Post Death Support",
          slug: "post-death-support",
        },
        {
          title: "Asset Transfer",
          slug: "asset-transfer",
        },
      ]
        .filter((item) => item.slug !== slug)
        .map((item, index) => (
          <Link
            key={index}
            to={`/nri/${item.slug}`}
            className="
              bg-[#F8F7F2]
              p-8
              rounded-3xl
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-300
              border-t-4
              border-[#C9A227]
            "
          >
            <h3 className="text-xl font-bold text-[#0F172A]">
              {item.title}
            </h3>

            <p className="text-gray-600 mt-3">
              Learn more about this service.
            </p>

            <div className="mt-5 text-[#C9A227] font-semibold">
              Explore →
            </div>

          </Link>
        ))}

    </div>

  </div>

</section>


      {/* <Footer /> */}
    </>
  );
}

export default NRIServiceDetails;