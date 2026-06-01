function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">

      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <span className="uppercase tracking-[5px] text-[#C9A227] font-semibold">
            India's Trusted Estate Planning Platform
          </span>

          <h1 className="text-[#0F172A] text-6xl lg:text-7xl font-bold leading-tight mt-6">

            Protect What
            <br />
            Matters Most.

          </h1>

          <p className="text-gray-600 text-xl mt-8 leading-relaxed">

            Create legally valid wills, estate plans,
            succession strategies and NRI inheritance
            solutions with complete legal confidence.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-[#C9A227] hover:bg-yellow-700 text-white px-8 py-4 rounded-xl font-semibold">

              Start My Will

            </button>

            <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-xl font-semibold">

              Talk To Lawyer

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="w-full h-[500px] bg-[#0F172A] rounded-[40px] relative overflow-hidden">

            <div className="absolute top-10 right-10 w-40 h-40 bg-[#C9A227] rounded-full opacity-30 blur-3xl"></div>

            <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#C9A227] rounded-full opacity-30 blur-3xl"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center">

              <h2 className="text-white text-4xl font-bold text-center">

                Your Will.
                <br />
                Your Legacy.
                <br />
                Protected.

              </h2>

              <div className="w-32 h-1 bg-[#C9A227] mt-6"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;