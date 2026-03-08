import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";

import {
  FaUserCircle,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import Footer from "../components/Footer";
import providersData from "../data/providers";

export default function ProviderDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const provider = providersData.find((p) => p.id === Number(id));

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState(1);

  if (!provider) {
    return <div className="pt-24 text-center">Provider Not Found</div>;
  }

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"];

  const now = new Date();

  // Convert slot string to actual Date
  const convertToDateTime = (timeString) => {
    const [time, modifier] = timeString.split(" ");
    let [hours, minutes] = time.split(":");

    hours = parseInt(hours);
    minutes = parseInt(minutes);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }

    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    const date = new Date(selectedDate);

    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);

    return date;
  };

  const totalAddup = provider.price * hours;
  const gstAmount = totalAddup * 0.15;
  const totalCost = totalAddup + gstAmount;

  const handleBooking = () => {

    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login to book a service");
      return;
    }

    if (!selectedTime) {
      alert("Please select a time slot");
      return;
    }

    if (!address) {
      alert("Please enter service address");
      return;
    }

    const booking = {
      id: Date.now(),
      user: user,
      providerId: provider.id,
      providerName: provider.name,
      role: provider.role,
      rating: provider.rating,
      location: provider.location,
      contact: provider.contact,
      date: selectedDate.toDateString(),
      time: selectedTime,
      hours: hours,
      price: provider.price,
      total: totalCost,
      address: address
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    existingBookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    alert("Booking Confirmed!");

    navigate("/dashboard");
  };

  return (
    <>
      <div className="relative bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen pl-10 pr-20 overflow-hidden pt-20">

        <div className="absolute right-25 top-15 w-[25%] hidden lg:block">
          <img
            src="https://thumbs.dreamstime.com/b/portrait-man-cleaning-equipment-cleaning-house-30014330.jpg"
            alt=""
            className="w-full object-contain rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <h1 className="text-5xl font-bold text-gray-800 mb-16">
            Book Your Service
          </h1>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              {/* DATE PICKER */}
              <div className="bg-gray-100 rounded-3xl shadow-sm p-8">

                <h2 className="text-xl font-semibold mb-6">
                  Select Date & Time
                </h2>

                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  inline
                  minDate={new Date()}
                />

                {/* TIME SLOTS */}
                <div className="flex gap-3 mt-6 flex-wrap">

                  {timeSlots.map((time) => {

                    const slotTime = convertToDateTime(time);

                    const isPast =
                      selectedDate.toDateString() === now.toDateString() &&
                      slotTime < now;

                    return (
                      <button
                        key={time}
                        disabled={isPast}
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-2 rounded-xl transition
                          ${
                            isPast
                              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                              : selectedTime === time
                              ? "bg-gray-500 text-white"
                              : "bg-gray-100 hover:bg-gray-400 hover:text-white"
                          }`}
                      >
                        {time}
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* ADDRESS */}
              <div>

                <h3 className="text-xl font-semibold mb-4">
                  Enter Your Address
                </h3>

                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your full address"
                  className="w-full bg-white border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />

              </div>

              {/* PRICE BOX */}
              <div className="bg-gray-100 rounded-2xl shadow-sm p-6">

                <h3 className="text-lg font-semibold mb-4">
                  Total Charges
                </h3>

                <div className="flex justify-between mb-4">
                  <span>Hourly Rate</span>
                  <span>${provider.price}</span>
                </div>

                <div className="flex justify-between items-center mb-4">

                  <span>Number of Hours</span>

                  <div className="flex items-center border rounded-xl">

                    <button
                      onClick={() => setHours((prev) => Math.max(prev - 1, 1))}
                      className="px-4 py-1"
                    >
                      -
                    </button>

                    <span className="px-4">{hours}</span>

                    <button
                      onClick={() => setHours((prev) => prev + 1)}
                      className="px-4 py-1"
                    >
                      +
                    </button>

                  </div>

                </div>

                <div className="flex justify-between font-semibold text-lg border-t pt-4">
                  <span>Total Addup</span>
                  <span>${totalAddup.toFixed(2)}</span>
                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              <div className="flex items-center gap-5 mt-40">

                <FaUserCircle size={70} className="text-gray-400" />

                <div>
                  <h2 className="text-3xl font-bold">
                    {provider.name}
                  </h2>

                  <p className="text-gray-500">
                    {provider.role}
                  </p>
                </div>

              </div>

              <div className="bg-gray-100 rounded-3xl shadow-sm p-8">

                <div className="flex items-center gap-2 mb-6 text-sm">

                  <FaStar className="text-yellow-500" />

                  <span>{provider.rating}</span>

                  <span className="text-gray-500">
                    {provider.reviews} reviews
                  </span>

                  <span className="ml-auto font-semibold">
                    ${provider.price}/hr
                  </span>

                </div>

                <div className="space-y-4 text-sm text-gray-600 border-t pt-6">

                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt />
                    <span>{provider.location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhoneAlt />
                    <span>{provider.contact}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope />
                    <span>
                      {provider.name
                        .toLowerCase()
                        .replace(" ", ".")}@mail.com
                    </span>
                  </div>

                </div>

              </div>

              {/* PRICE SUMMARY */}
              <div className="bg-gray-100 rounded-3xl shadow-sm p-10 mb-5">

                <h3 className="text-lg font-semibold mb-4 border-b pb-2">
                  Price Summary
                </h3>

                <div className="flex justify-between mb-4">
                  <span>Total Addup</span>
                  <span>${totalAddup.toFixed(2)}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <span>Number of Hours</span>
                  <span>{hours}</span>
                </div>

                <div className="flex justify-between mb-4">
                  <span>GST (15%)</span>
                  <span>${gstAmount.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-xl font-semibold border-t pt-4 mb-6">
                  <span>Total Cost</span>
                  <span>${totalCost.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleBooking}
                  className="w-full bg-yellow-500 text-white py-4 rounded-xl text-lg hover:bg-yellow-600 transition shadow-lg"
                >
                  Confirm Booking
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}