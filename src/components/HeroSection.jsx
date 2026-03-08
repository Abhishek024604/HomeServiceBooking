import React from "react";

export default function HeroSection(){
  return (
    <div className="relative w-full bg-gray-100 pt-20 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10 relative z-10">

        {/* LEFT CONTENT */}
<div className="max-w-xl">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug mb-4">
    Book Trusted Home Services Easily
  </h1>

  <p className="text-gray-600 text-lg mb-8">
    Find the best service professionals for your needs.
  </p>

  {/* Search Card */}
  <div className="bg-gray-100 shadow-md rounded-xl p-6">

    <div className="grid md:grid-cols-2 gap-4">

      {/* Service Field */}
      <div>
        <label className="text-sm text-gray-600 block mb-1">
          What service do you need?
        </label>
        <select className="w-full border rounded-lg px-4 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>e.g. Cleaning, Cooking</option>
          <option>Cleaning</option>
          <option>Cooking</option>
        </select>
      </div>

      {/* Location Field */}
      <div>
        <label className="text-sm text-gray-600 block mb-1">
          Your Location
        </label>
        <input
          type="text"
          placeholder="Enter your city or area"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </div>

    {/* Search Button */}
    <div className="flex justify-center mt-6">
      <button className="bg-blue-600 text-white px-10 py-2.5 rounded-lg shadow-md hover:bg-blue-700 transition">
        Search
      </button>
    </div>

  </div>
</div>

        {/* RIGHT SIDE (EMPTY because image will be absolute) */}
        {/* <div></div> */}
      </div>

      {/* CIRCULAR IMAGE CONTAINER */}
      <div className="absolute right-15 top-15 w-[400px] h-[400px] bg-blue-100 rounded-full overflow-hidden flex justify-center">

        <img
          src="https://thumbs.dreamstime.com/b/portrait-man-cleaning-equipment-cleaning-house-30014330.jpg"
          alt="Service Professional"
          className="h-full object-cover"
        />
      </div>

    </div>
  );
};