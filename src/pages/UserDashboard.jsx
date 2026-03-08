import React from "react";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaHistory,
  FaCog,
  FaSignOutAlt,
  FaMapMarkerAlt,
  FaStar,
  FaPhoneAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
    navigate("/");
  };

  const user = localStorage.getItem("user");

  const allBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const userBookings = allBookings.filter(
    (b) => b.user === user
  );

  const now = new Date();

  const upcomingBookings = userBookings.filter(
    (b) => new Date(b.date) >= now
  );

  const pastBookings = userBookings.filter(
    (b) => new Date(b.date) < now
  );



  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 pt-24">

      <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-12 gap-8">

        {/* Sidebar */}
        <div className="md:col-span-3 bg-white rounded-2xl shadow-lg p-6 h-fit">

          <div className="flex flex-col items-center text-center mb-6">
            <FaUserCircle size={70} className="text-gray-400 mb-2" />
            <h2 className="font-semibold text-lg">{user}</h2>
          </div>

          <div className="space-y-4 text-gray-600">

            <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <FaCalendarAlt /> Upcoming Bookings
            </div>

            <div className="flex items-center gap-3 hover:text-blue-600 cursor-pointer">
              <FaHistory /> Past Bookings
            </div>


            <div className="flex items-center gap-3 hover:text-red-500 cursor-pointer">
              <FaSignOutAlt />
              <button onClick={handleLogout}>Log Out</button>
            </div>

          </div>

        </div>

        {/* Main Content */}
        <div className="md:col-span-9">

          <h1 className="text-3xl font-bold mb-8">
            Welcome Back, {user}!
          </h1>

          {/* Upcoming */}
          <h2 className="text-xl font-semibold mb-4">
            Upcoming Bookings
          </h2>

          <div className="space-y-6 mb-10">

            {upcomingBookings.map((booking) => {

              const total = booking.price * booking.hours;

              return (
                <div
                  key={booking.id}
                  className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row justify-between gap-6"
                >

                  <div>

                    <h3 className="text-lg font-semibold">
                      {booking.providerName}
                    </h3>

                    <p className="text-gray-500">
                      {booking.role}
                    </p>

                    <div className="flex items-center gap- text-gray-500 mt-2">
                      <FaPhoneAlt />
                      {booking.contact}
                    </div>

                    <div className="text-gray-600 mt-2 pr-5">
                      ${booking.price}/hr • {booking.hours} hrs • <span className="font-bold">Total ${total}</span>
                    </div>

                    <div className="text-gray-500 text-sm mt-2">
                      {booking.date} • {booking.time}
                    </div>

                  </div>

                  <div className="flex flex-col gap-3">

                    <button className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600">
                      View Details
                    </button>

                    <button className="border border-red-400 text-red-500 px-5 py-2 rounded-lg hover:bg-red-50">
                      Cancel
                    </button>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Past */}
          <h2 className="text-xl font-semibold mb-4">
            Past Bookings
          </h2>

          <div className="space-y-6">

            {pastBookings.map((booking) => (

              <div
                key={booking.id}
                className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center"
              >

                <div>

                  <h3 className="text-lg font-semibold">
                    {booking.providerName}
                  </h3>

                  <p className="text-gray-500">
                    {booking.role}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <FaPhoneAlt />
                    {booking.contact}
                  </div>


                  <div className="text-gray-600 mt-2">
                    {booking.hours} hours
                  </div>

                  <div className="text-gray-500 text-sm mt-2">
                    {booking.date} • {booking.time}
                  </div>

                </div>

                <button className="bg-gray-200 px-5 py-2 rounded-lg hover:bg-gray-300">
                  View Details
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}