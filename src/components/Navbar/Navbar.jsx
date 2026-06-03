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
            <li 
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <button
                className="flex items-center gap-1"
              >
                Services
                <span
                  className={`transition-transform ${
                    showServices ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {showServices && (
                <div className="absolute top-full left-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                  <ul className="text-sm text-[#0F172A]">

                    <Link to="/services/will-drafting" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Will Drafting
                      </li>
                    </Link>

                    <Link to="/services/estate-planning" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Estate Planning
                      </li>
                    </Link>

                    <Link to="/services/gift-deed" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Gift Deed
                      </li>
                    </Link>

                    <Link to="/services/will-storage" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Will Storage
                      </li>
                    </Link>

                    <Link to="/services/executor-support" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Executor Support
                      </li>
                    </Link>

                    <Link to="/services/annual-review" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Annual Review
                      </li>
                    </Link>

                    <Link to="/services/post-death-support" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Post Death Support
                      </li>
                    </Link>

                    <Link to="/services/nri-services" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
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
            <li 
              className="relative"
              onMouseEnter={() => setShowLearn(true)}
              onMouseLeave={() => setShowLearn(false)}
            >
              <button
                className="flex items-center gap-1"
              >
                Resources
                <span
                  className={`transition-transform ${
                    showLearn ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {showLearn && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50">
                  <ul className="text-sm text-[#0F172A]">

                    <Link to="/blogs" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Blogs
                      </li>
                    </Link>

                    <Link to="/faqs" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        FAQs
                      </li>
                    </Link>

                    <Link to="/videos" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Videos
                      </li>
                    </Link>

                    <Link to="/legal-guides" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
                        Legal Guides
                      </li>
                    </Link>

                    <Link to="/resources" onClick={closeDropdowns}>
                      <li className="px-5 py-3 hover:bg-gray-50 cursor-pointer">
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