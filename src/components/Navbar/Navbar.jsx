// function Navbar() {
//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">

//       <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

//         <h1 className="text-3xl font-bold text-[#0F172A]">
//           LEGACY
//         </h1>

//         <ul className="hidden md:flex gap-8 text-[#0F172A] font-medium">

//           <li>Home</li>
//           <li>Services</li>
//           <li>NRI</li>
//           <li>Pricing</li>
//           <li>Resources</li>
//           <li>Contact</li>

//         </ul>

//         <button className="bg-[#C9A227] text-white px-6 py-3 rounded-xl">
//           Book Consultation
//         </button>

//       </div>

//     </nav>
//   );
// }

// export default Navbar;
import { Link } from "react-router-dom";
import { useState } from "react";
import ConsultationModal from "../ConsultationModal/ConsultationModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <h1 className="text-3xl font-bold text-[#0F172A]">
            LEGACY
          </h1>

          <ul className="hidden md:flex gap-8 text-[#0F172A] font-medium">
            <li>Home</li>
            {/* <li>Services</li> */}
           <li className="relative">
  <button
    onClick={() => setShowServices(!showServices)}
    className="flex items-center gap-1"
  >
    Services
    <span className={`transition-transform ${showServices ? "rotate-180" : ""}`}>
      ▼
    </span>
  </button>

  {showServices && (
    <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
  <ul className="text-sm text-[#0F172A]">

    <Link to="/services/will-drafting">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        Will Drafting
      </li>
    </Link>

    <Link to="/services/estate-planning">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        Estate Planning
      </li>
    </Link>

    <Link to="/services/gift-deed">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        Gift Deed
      </li>
    </Link>

    <Link to="/services/will-storage">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        Will Storage
      </li>
    </Link>

    <Link to="/services/executor-support">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        Executor Support
      </li>
    </Link>

    <Link to="/services/annual-review">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        Annual Review
      </li>
    </Link>

    <Link to="/services/post-death-support">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        Post Death Support
      </li>
    </Link>

    <Link to="/services/nri-services">
      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
        NRI Services
      </li>
    </Link>

  </ul>
</div>
  )}
</li>
            <li>NRI</li>
            <li>Pricing</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#C9A227] text-white px-6 py-3 rounded-xl hover:bg-yellow-700 transition"
          >
            Book Consultation
          </button>

        </div>
      </nav>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default Navbar;
