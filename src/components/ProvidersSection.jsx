import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProvidersSection({
  providers,
  loading,
  currentPage,
  totalPages,
  setCurrentPage
}) {

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600">
        Loading providers...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-20 py-16">

      {/* Providers Grid */}
      <div className="grid md:grid-cols-2 gap-8">

        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition flex flex-col md:flex-row overflow-hidden cursor-pointer"
          >

            {/* IMAGE */}
            <div className="md:w-1/2">
              <FaUserCircle size={230} className="text-gray-400 pt-5 pl-10" />
            </div>

            {/* CONTENT */}
            <div className="pr-1 pt-10 pb-10 flex flex-col justify-between md:w-1/2">

              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {provider.name}
                </h3>

                <p className="text-gray-800 text-sm mb-1">
                  {provider.role}
                </p>

                <p className="text-gray-500 text-sm mb-2">
                  {provider.location}
                </p>

                <div className="flex items-center gap-2 text-sm mb-2">
                  <span className="text-yellow-500">
                    ⭐ {provider.rating}
                  </span>
                  <span className="text-gray-500">
                    {provider.reviews} reviews
                  </span>
                </div>

                <p className="text-2xl font-bold text-gray-800">
                  ${provider.price}
                  <span className="text-sm font-normal text-gray-500">
                    /hr
                  </span>
                </p>
              </div>

              <button onClick={() => navigate(`/provider/${provider.id}`)} className="mt-4 mr-15 bg-gray-500 text-white py-2 rounded-xl hover:bg-gray-700 transition shadow">
                Book Now
              </button>

            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center items-center mt-12 gap-3">

        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-white shadow rounded disabled:opacity-50"
        >
          &lt; Previous
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded shadow ${currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-white"
                }`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() =>
            setCurrentPage(prev => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-white shadow rounded disabled:opacity-50"
        >
          Next &gt;
        </button>

      </div>
    </div>
  );
}