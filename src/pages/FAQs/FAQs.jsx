
import ConsultationModal from "../../components/ConsultationModal/ConsultationModal";
import { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";

function FAQs() {

const [openIndex, setOpenIndex] = useState(null);
const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");
const [isModalOpen, setIsModalOpen] = useState(false);



  const faqData = [
    {
      category: "Will Drafting",
      question: "Is a handwritten will legally valid in India?",
      answer:
        "Yes. A handwritten will is legally valid if it is signed by the testator and witnessed by at least two witnesses.",
    },

    {
      category: "Will Drafting",
      question: "Can I modify my will after creating it?",
      answer:
        "Yes. A will can be modified or revoked at any time during your lifetime.",
    },

    {
      category: "Estate Planning",
      question: "What is estate planning?",
      answer:
        "Estate planning is the process of arranging the management and transfer of assets after death.",
    },

    {
      category: "Estate Planning",
      question: "Who should have an estate plan?",
      answer:
        "Anyone who owns assets, property, investments, or wishes to protect their family should consider estate planning.",
    },

    {
      category: "Inheritance",
      question: "What happens if someone dies without a will?",
      answer:
        "Their assets are distributed according to applicable succession laws.",
    },

    {
      category: "Inheritance",
      question: "Can inheritance disputes be avoided?",
      answer:
        "A properly drafted will and estate plan significantly reduce the chances of disputes.",
    },

    {
      category: "NRI Services",
      question: "Can NRIs create wills for Indian assets?",
      answer:
        "Yes. NRIs can create wills specifically covering their Indian assets.",
    },

    {
      category: "NRI Services",
      question: "Can foreign wills be enforced in India?",
      answer:
        "Yes, subject to Indian legal procedures and probate requirements.",
    },
  ];

  const categories = [
    "All",
    "Will Drafting",
    "Estate Planning",
    "Inheritance",
    "NRI Services",
  ];

  const filteredFaqs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      faq.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      
{/* BACK BUTTON */}

<section className="pt-24 pb-2 bg-white">
  <div className="max-w-7xl mx-auto px-8">
    <BackButton />
  </div>
</section>
      <section className="pt-6 pb-20 bg-[#F8F7F2] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}

          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#0F172A]">
              Frequently Asked Questions
            </h1>

            <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
              Find answers to common questions about wills,
              estate planning, inheritance, and NRI legal services.
            </p>
          </div>

          {/* Search Bar */}

          <div className="max-w-2xl mx-auto mt-10">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full p-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
          </div>

          {/* Main Content */}

          <div className="grid lg:grid-cols-4 gap-8 mt-16">

            {/* Sidebar */}

            <div>

              <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 sticky top-28">

                <h3 className="font-bold text-xl text-[#0F172A] mb-6">
                  Categories
                </h3>

                <div className="space-y-3">

                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(category)
                      }
                      className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 font-medium

                      ${
                        selectedCategory === category
                          ? "bg-[#C9A227] text-white shadow-md"
                          : "bg-[#F8F7F2] text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                      }
                    `}
                    >
                      {category}
                    </button>
                  ))}

                </div>

              </div>

            </div>

            {/* FAQ Section */}

            <div className="lg:col-span-3">

              <div className="space-y-4">

                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(
                          openIndex === index ? null : index
                        )
                      }
                      className="w-full flex justify-between items-center text-left p-6"
                    >
                      <div>
                        <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] text-xs px-3 py-1 rounded-full mb-2">
                          {faq.category}
                        </span>

                        <h3 className="font-semibold text-[#0F172A]">
                          {faq.question}
                        </h3>
                      </div>

                      <span className="text-3xl text-[#C9A227]">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}

                {filteredFaqs.length === 0 && (
                  <div className="bg-white p-10 rounded-2xl text-center">
                    <p className="text-gray-500">
                      No FAQs found.
                    </p>
                  </div>
                )}

              </div>

            </div>

          </div>

          {/* CTA */}

          <div className="mt-24 bg-[#0F172A] rounded-3xl p-12 text-center">

            <h2 className="text-4xl font-bold text-white">
              Still Have Questions?
            </h2>

            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Our legal experts are here to guide you through
              wills, estate planning and inheritance matters.
            </p>

            <button
  onClick={() => setIsModalOpen(true)}
  className="mt-8 bg-[#C9A227] hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-semibold transition"
>
  Book Consultation
</button>
          </div>

        </div>
      </section>

      
      

<ConsultationModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/>


    </>
  );
}

export default FAQs;