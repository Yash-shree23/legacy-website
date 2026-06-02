
import { useState } from "react";


function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogs = [
    {
      title: "Why Every Family Needs a Will",
      category: "Estate Planning",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
    },
    {
      title: "What Happens If You Die Without A Will?",
      category: "Inheritance",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
    },
    {
      title: "Will vs Trust Explained",
      category: "Legal",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
    },
    {
      title: "Estate Planning Checklist",
      category: "Estate Planning",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    },
  ];

  const categories = [
    "All",
    "Estate Planning",
    "Inheritance",
    "Legal",
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      

      <section className="pt-36 pb-20 bg-[#F8F7F2] min-h-screen">
        <div className="max-w-7xl mx-auto px-8">

          {/* Heading */}

          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#0F172A]">
              Blogs
            </h1>

            <p className="text-center mt-4 text-gray-600">
              Insights, legal updates and estate planning advice.
            </p>
          </div>

          {/* Search + Category */}

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-96 px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />

            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(e.target.value)
              }
              className="px-5 py-4 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            >
              {categories.map((category) => (
                <option key={category}>
                  {category}
                </option>
              ))}
            </select>

          </div>

          {/* Blog Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {filteredBlogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-60 w-full object-cover"
                />

                <div className="p-6">

                  <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>

                  <h3 className="font-bold text-xl mt-4 text-[#0F172A]">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm">
                    Learn more about estate planning,
                    inheritance laws and wealth protection
                    strategies.
                  </p>

                  <button className="mt-5 text-[#C9A227] font-semibold">
                    Read More →
                  </button>

                </div>
              </div>
            ))}

          </div>

          {/* No Results */}

          {filteredBlogs.length === 0 && (
            <div className="text-center mt-16 text-gray-500">
              No blogs found.
            </div>
          )}

        </div>
      </section>

      
    </>
  );
}
export default Blogs;
