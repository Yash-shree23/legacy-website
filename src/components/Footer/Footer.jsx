function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-16">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-[#C9A227]">
            LEGACY
          </h2>

          <p className="mt-4 text-gray-300">
            Your Will. Your Legacy. Protected.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>

          <p>Will Drafting</p>
          <p>Estate Planning</p>
          <p>NRI Services</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>

          <p>Blog</p>
          <p>FAQs</p>
          <p>Knowledge Hub</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p>info@legacy.com</p>
          <p>+91 9876543210</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;