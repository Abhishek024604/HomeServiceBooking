import React from "react";

export default function ServicesHero({
  setSearchTerm,
  setMinRating,
  setMaxPrice,
  setSortType,
  setSelectedRole,
  setSelectedLocation,
}) {
  return (
    <div className="relative bg-gradient-to-b from-gray-100 to-gray-200 pt-24 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10 relative z-10">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Find Trusted Service Providers
          </h1>

          <p className="text-gray-600 mb-8">
            Find and book service professionals for your home needs
            effortlessly.
          </p>

          {/* FILTER CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-5">
            {/* Top Row */}
            <div className="grid md:grid-cols-2 gap-4">
              <select
                onChange={(e) => setSelectedRole(e.target.value)}
                className="border rounded-xl px-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="">All Services</option>
                <option value="House Cleaner">House Cleaner</option>
                <option value="Cook">Cook</option>
                <option value="Electrician">Electrician</option>
                <option value="Driver">Driver</option>
                <option value="Babysitter">Babysitter</option>
                <option value="Gardener">Gardener</option>
                <option value="Plumber">Plumber</option>
                <option value="Maid">Maid</option>
                <option value="AC Technician">AC Technician</option>
                <option value="Painter">Painter</option>
                <option value="Dishwasher">Dishwasher</option>
              </select>

              <select
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Locations</option>
                <option value="Connaught Place, New Delhi, Delhi">
                  Connaught Place, New Delhi
                </option>
                <option value="Bandra West, Mumbai, Maharashtra">
                  Bandra West, Mumbai
                </option>
                <option value="Koramangala, Bengaluru, Karnataka">
                  Koramangala, Bengaluru
                </option>
              </select>
            </div>

            {/* Bottom Filters */}
            <div className="flex flex-wrap items-center gap-4">
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="bg-gray-100 border rounded-xl px-4 py-2 text-sm"
              >
                <option value="rating">Sort by: Best Rating</option>
                <option value="price">Sort by: Price</option>
              </select>

              <select
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="bg-gray-100 border rounded-xl px-4 py-2 text-sm"
              >
                <option value="0">Rating: All Ratings</option>
                <option value="4">4+ Rating</option>
                <option value="4.5">4.5+ Rating</option>
              </select>

              <select
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="bg-gray-100 border rounded-xl px-4 py-2 text-sm"
              >
                <option value="100">Price: Any Price</option>
                <option value="40">Under $40</option>
                <option value="50">Under $50</option>
              </select>

              <button className="bg-gray-500 text-white px-8 py-2 rounded-xl shadow-md hover:bg-gray-700 transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center relative">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-man-cleaning-equipment-cleaning-house-30014330.jpg"
            alt="Provider"
            className="w-[380px] object-contain relative z-10 rounded-full"
          />

          {/* Soft Circle Background */}
          {/* <div className="absolute w-[500px] h-[500px] bg-gray-200 rounded-full bottom-0 top-[1px]"></div> */}
        </div>
      </div>

      {/* Bottom Wave Effect */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[50%]"></div> */}
    </div>
  );
}
