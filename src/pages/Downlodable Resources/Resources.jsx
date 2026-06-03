import BackButton from "../../components/BackButton/BackButton";
function Resources() {
  const resources = [
    {
      title: "Estate Planning Checklist",
      type: "PDF",
      size: "1.2 MB",
    },
    {
      title: "Will Drafting Checklist",
      type: "PDF",
      size: "1.1 MB",
    },
    {
      title: "NRI Property Inheritance Guide",
      type: "PDF",
      size: "1.5 MB",
    },
    {
      title: "Executor Responsibilities Guide",
      type: "PDF",
      size: "1.3 MB",
    },
    {
      title: "Family Asset Inventory Template",
      type: "Excel",
      size: "380 KB",
    },
    {
      title: "Estate Planning Timeline Planner",
      type: "PDF",
      size: "900 KB",
    },
  ];

  return (
    <>
      {/* BACK BUTTON */}

<section className="pt-28 pb-4 bg-white">
  <div className="max-w-7xl mx-auto px-8">
    <BackButton />
  </div>
</section>

      <section className="pt-36 pb-20 bg-[#F8F7F2] min-h-screen">

        <div className="max-w-7xl mx-auto px-8">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-[#0F172A]">
              Downloadable Resources
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Free checklists, templates and planning resources to help
              protect your legacy.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-16">

            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center hover:shadow-xl transition"
              >

                <div>

                  <h3 className="font-bold text-[#0F172A]">
                    {resource.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {resource.type} • {resource.size}
                  </p>

                </div>

                <button className="bg-[#C9A227] text-white px-5 py-2 rounded-lg hover:bg-yellow-700 transition">
                  Download
                </button>

              </div>
            ))}

          </div>

          {/* Lead Generation Section */}

          <div className="mt-24 bg-white rounded-3xl p-10 shadow-md">

            <div className="text-center">

              <h2 className="text-3xl font-bold text-[#0F172A]">
                Get Free Estate Planning Resources
              </h2>

              <p className="mt-3 text-gray-600">
                Enter your details and receive exclusive planning guides,
                checklists and legal updates.
              </p>

            </div>

            <form className="grid md:grid-cols-3 gap-4 mt-8">

              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-xl p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="border rounded-xl p-4"
              />

              <button
                type="submit"
                className="bg-[#0F172A] text-white rounded-xl"
              >
                Get Free Resources
              </button>

            </form>

          </div>

        </div>

      </section>

     
    </>
  );
}

export default Resources;