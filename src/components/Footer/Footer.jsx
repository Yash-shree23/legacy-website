

import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-5 gap-10">

          {/* Logo Section */}

          <div>

            <h2 className="text-3xl font-bold text-[#C9A227]">
              LEGACY
            </h2>

            <p className="mt-4 text-gray-300 leading-relaxed">
              Your Will.
              <br />
              Your Legacy.
              <br />
              Protected.
            </p>

            {/* Contact Info */}

            <div className="mt-6 space-y-2 text-gray-300 text-sm">
              <p>info@legacy.com</p>
              <p>+91 9876543210</p>
            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-6">

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* About */}

          <div>

            <h3 className="font-semibold text-[#C9A227] mb-5">
              About
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  to="/aboutus"
                  className="hover:text-[#C9A227] transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#C9A227] transition"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-semibold text-[#C9A227] mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  to="/services/will-drafting"
                  className="hover:text-[#C9A227] transition"
                >
                  Will Drafting
                </Link>
              </li>

              <li>
                <Link
                  to="/services/estate-planning"
                  className="hover:text-[#C9A227] transition"
                >
                  Estate Planning
                </Link>
              </li>

              <li>
                <Link
                  to="/services/nri-services"
                  className="hover:text-[#C9A227] transition"
                >
                  NRI Services
                </Link>
              </li>

              <Link
  to="/nri"
  className="text-[#C9A227] hover:underline"
>
  View All →
</Link>

            </ul>

          </div>

          {/* Learn */}

          <div>

            <h3 className="font-semibold text-[#C9A227] mb-5">
              Learn
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  to="/blogs"
                  className="hover:text-[#C9A227] transition"
                >
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/videos"
                  className="hover:text-[#C9A227] transition"
                >
                  Videos
                </Link>
              </li>

              <li>
                <Link
                  to="/faqs"
                  className="hover:text-[#C9A227] transition"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  to="/legal-guides"
                  className="hover:text-[#C9A227] transition"
                >
                  Legal Guides
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="font-semibold text-[#C9A227] mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                <Link
                  to="/resources"
                  className="hover:text-[#C9A227] transition"
                >
                  Downloads
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-[#C9A227] transition"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/terms"
                  className="hover:text-[#C9A227] transition"
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © 2026 LEGACY. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with trust, privacy & legal expertise.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;