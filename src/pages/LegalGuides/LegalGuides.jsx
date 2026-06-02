import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function LegalGuides() {
  const guides = [
    {
      title: "Complete Guide to Will Drafting",
      description:
        "Step-by-step guide to creating a legally valid will in India.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    },
    {
      title: "Estate Planning Guide",
      description:
        "Plan your assets and protect your family’s future.",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b",
    },
    {
      title: "NRI Inheritance Guide",
      description:
        "Important inheritance rules and property succession laws for NRIs.",
      image:
        "https://images.unsplash.com/photo-1696902271695-0031d244cd37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bnJpJTIwaW5oZXJpdGFuY2UlMjBndWlkZXxlbnwwfHwwfHx8MA%3D%3D://www.istockphoto.com/photo/inheritance-tax-and-last-will-on-the-desk-gm1141247692-305676532",
    },
    {
      title: "Gift Deed Guide",
      description:
        "Understand when and how to use gift deeds legally.",
      image:
        "https://images.unsplash.com/photo-1512909006721-3d6018887383",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="pt-36 pb-20 bg-[#F8F7F2] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#0F172A]">
              Legal Guides
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              In-depth legal guides to help you understand estate planning,
              inheritance, wills, and succession laws.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {guides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#0F172A]">
                    {guide.title}
                  </h3>

                  <p className="mt-3 text-gray-600 text-sm">
                    {guide.description}
                  </p>

                  <button className="mt-5 bg-[#C9A227] text-white px-5 py-2 rounded-lg hover:bg-yellow-700 transition">
                    Read Guide
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default LegalGuides;