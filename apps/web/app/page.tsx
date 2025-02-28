"use client";

export default function Web() {
  return (
    <>
      <div className="container mx-auto px-7 py-16 md:py-24 ">
        {/* Hero Section */}
        <section className="flex sm:flex-row justify-around items-center flex-col gap-12 ">
          <div className="flex flex-col gap-6 ">
            <div className="inline-block bg-gradient-to-bl from-blue-600 to-purple-600 text-transparent bg-clip-text">
              <h1 className="text-7xl font-bold">
                Manage your Medications Smarter
              </h1>
            </div>
            <span className="text-2xl font-light">
              Dwayati helps you track prescriptions, prevent duplicates, and
              maitain your medical history - all in one place
            </span>
            <div className="flex gap-5 ">
              <button
                className="px-6 py-2 bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold rounded-full hover:to-purple-900 transition-all shadow-lg
               hover:scale-105 cursor-pointer"
              >
                Download App
              </button>
              <button className="px-6 py-2 bg-white border-2 rounded-full border-blue-800 text-blue-600 font-semibold hover:scale-105 transition-all cursor-pointer hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Medication Management"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </section>
        {/* Feature Section */}

        {/* How It Work Section */}

        {/* Control Section */}

        {/* Footer Section */}
      </div>
    </>
  );
}
