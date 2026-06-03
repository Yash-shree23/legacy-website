import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import ConsultationModal from "../ConsultationModal/ConsultationModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const navRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowServices(false);
        setShowLearn(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowServices(false);
        setShowLearn(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  // Close dropdowns when a link is clicked
  const closeDropdowns = () => {
    setShowServices(false);
    setShowLearn(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50" ref={navRef}>
        <div className="max-w-7xl mx-auto px-8 py-3 flex justify-between items-center">

          {/* Logo */}
          <Link to="/">
            <h1 className="text-3xl font-bold text-[#0F172A]">
              LEGACY
            </h1>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 text-[#0F172A] font-medium items-center">

            <li className="cursor-pointer">
              <Link to="/" onClick={closeDropdowns}>Home</Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative">
  <button
    onClick={() => {
      setShowServices(!showServices);
      setShowLearn(false);
    }}
    className="flex items-center gap-2"
  >
    Services

    <span
      className={`transition-transform duration-300 ${
        showServices ? "rotate-180" : ""
      }`}
    >
      ⌵
    </span>
  </button>

  {showServices && (
    <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">

      <ul className="text-sm text-[#0F172A]">

        <Link to="/services/will-drafting">
          <li className="px-5 py-3 hover:bg-gray-50">
            Will Drafting
          </li>
        </Link>

        <Link to="/services/estate-planning">
          <li className="px-5 py-3 hover:bg-gray-50">
            Estate Planning
          </li>
        </Link>

        <Link to="/services/gift-deed">
          <li className="px-5 py-3 hover:bg-gray-50">
            Gift Deed
          </li>
        </Link>

        <Link to="/services/will-storage">
          <li className="px-5 py-3 hover:bg-gray-50">
            Will Storage
          </li>
        </Link>

        <Link to="/services/executor-support">
          <li className="px-5 py-3 hover:bg-gray-50">
            Executor Support
          </li>
        </Link>

        <Link to="/services/annual-review">
          <li className="px-5 py-3 hover:bg-gray-50">
            Annual Review
          </li>
        </Link>

        <Link to="/services/post-death-support">
          <li className="px-5 py-3 hover:bg-gray-50">
            Post Death Support
          </li>
        </Link>

        <Link to="/services/nri-services">
          <li className="px-5 py-3 hover:bg-gray-50">
            NRI Services
          </li>
        </Link>

      </ul>

    </div>
  )}
</li>

            {/* NRI */}
            <li className="cursor-pointer">
              <Link to="/nri" onClick={closeDropdowns}>NRI</Link>
            </li>

            {/* About Us */}
            <li className="cursor-pointer">
              <Link to="/aboutus" onClick={closeDropdowns}>About Us</Link>
            </li>

            {/* Pricing */}
            

            {/* Resources Dropdown */}
            {/* Resources Dropdown */}
<li className="relative">
  <button
    onClick={() => {
      setShowLearn(!showLearn);
      setShowServices(false);
    }}
    className="flex items-center gap-2"
  >
    Resources

    <span
      className={`transition-transform duration-300 ${
        showLearn ? "rotate-180" : ""
      }`}
    >
      ⌵
    </span>
  </button>

  {showLearn && (
    <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">

      <ul className="text-sm text-[#0F172A]">

        <Link to="/blogs">
          <li className="px-5 py-3 hover:bg-gray-50">
            Blogs
          </li>
        </Link>

        <Link to="/faqs">
          <li className="px-5 py-3 hover:bg-gray-50">
            FAQs
          </li>
        </Link>

        <Link to="/videos">
          <li className="px-5 py-3 hover:bg-gray-50">
            Videos
          </li>
        </Link>

        <Link to="/legal-guides">
          <li className="px-5 py-3 hover:bg-gray-50">
            Legal Guides
          </li>
        </Link>

        <Link to="/resources">
          <li className="px-5 py-3 hover:bg-gray-50">
            Downloadable Resources
          </li>
        </Link>

      </ul>

    </div>
  )}
</li>
            {/* Contact */}
            <li className="cursor-pointer">
              <Link to="/contact" onClick={closeDropdowns}>Contact</Link>
            </li>

          </ul>

          {/* Book Consultation Button */}
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