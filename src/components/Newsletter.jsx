export default function Newsletter() {
  return (
    <section className="bg-blue-900 text-white px-6 sm:px-8 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left text */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Sign Up For Newsletters
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            Get E-mail updates about our latest shop and{" "}
            <span className="text-orange-400">special offers.</span>
          </p>
        </div>

        {/* Input + Button */}
        <form className="flex w-full sm:w-auto justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="p-3 rounded-l-md flex-grow sm:flex-grow-0 sm:w-64 text-black bg-white text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-teal-600 px-4 sm:px-6 py-3 rounded-r-md text-sm sm:text-base hover:bg-teal-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
