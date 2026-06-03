// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";

// function Videos() {

//   const videos = [
//     "What Is A Will?",
//     "Estate Planning Explained",
//     "NRI Property Inheritance",
//     "Gift Deed Explained"
//   ];

//   return (
//     <>
//       <Navbar />

//       <section className="pt-36 pb-20 bg-[#F8F7F2] min-h-screen">

//         <div className="max-w-7xl mx-auto px-8">

//           <h1 className="text-5xl font-bold text-center">
//             Videos
//           </h1>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

//             {videos.map((video, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl overflow-hidden shadow"
//               >
//                 <div className="h-52 bg-[#0F172A] flex items-center justify-center text-white text-6xl">
//                   ▶
//                 </div>

//                 <div className="p-6">
//                   <h3 className="font-semibold">
//                     {video}
//                   </h3>
//                 </div>
//               </div>
//             ))}

//           </div>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );
// }

// export default Videos;
import { useState } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";
import BackButton from "../../components/BackButton/BackButton";

function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const videos = [
    {
      title: "What Is A Will?",
      category: "Will Drafting",
      duration: "5 min",
      thumbnail:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      description:
        "Understand the basics of will drafting and why it is important.",
    },
    {
      title: "Estate Planning Explained",
      category: "Estate Planning",
      duration: "8 min",
      thumbnail:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      description:
        "Learn how estate planning helps protect family wealth.",
    },
    {
      title: "NRI Property Inheritance",
      category: "NRI",
      duration: "12 min",
      thumbnail:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
      description:
        "A complete guide for NRIs managing inherited assets in India.",
    },
    {
      title: "Gift Deed Explained",
      category: "Legal",
      duration: "7 min",
      thumbnail:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
      description:
        "Everything you need to know about gift deeds and ownership transfer.",
    },
  ];

  const categories = [
    "All",
    "Will Drafting",
    "Estate Planning",
    "NRI",
    "Legal",
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      video.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* <Navbar /> */}
      {/* BACK BUTTON */}

<section className="pt-36 pb-8 bg-[#F8F7F2]">
  <div className="max-w-7xl mx-auto px-8">
    <BackButton />
  </div>
</section>

      <section className="pt-36 pb-20 bg-[#F8F7F2] min-h-screen">

        <div className="max-w-7xl mx-auto px-8">

          {/* Header */}

          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#0F172A]">
              Video Library
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Watch expert insights on wills, estate planning,
              inheritance and legal protection.
            </p>
          </div>

          {/* Search + Filter */}

          <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="text"
              placeholder="Search videos..."
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

          {/* Video Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                {/* Thumbnail */}

                <div className="relative">

                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-56 object-cover"
                  />

                  {/* Play Button */}

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-2xl shadow-lg cursor-pointer">
                      ▶
                    </div>
                  </div>

                  {/* Duration */}

                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    {video.duration}
                  </div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <span className="inline-block bg-[#C9A227]/10 text-[#C9A227] px-3 py-1 rounded-full text-sm">
                    {video.category}
                  </span>

                  <h3 className="font-bold text-xl mt-4 text-[#0F172A]">
                    {video.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {video.description}
                  </p>

                  <button className="mt-5 text-[#C9A227] font-semibold">
                    Watch Video →
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* No Results */}

          {filteredVideos.length === 0 && (
            <div className="text-center mt-16 text-gray-500">
              No videos found.
            </div>
          )}

        </div>

      </section>

  
    </>
  );
}

export default Videos;