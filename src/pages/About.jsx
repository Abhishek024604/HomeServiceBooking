import React from "react";
import Footer from "../components/Footer";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaHeart,
  FaStar
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 ">

      {/* HERO SECTION */}
      <section className="h-[550px]">
        
        <div className=" mx-auto pl-20 grid lg:grid-cols-2 items-center bg-gradient-to-b from-white to-blue-50">

            

          <div className="">
            <h1 className="text-5xl font-bold mb-6">
              About Us
            </h1>

            <p className="text-gray-800 text-lg leading-relaxed">
              Learn more about our mission, vision, and the values that drive
              us to deliver outstanding home services.
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.qOYu1P2FubdnaO_YM3WGLQHaE3?pid=ImgDet&w=178&h=117&c=7&dpr=1.5&o=7&rm=3"
              alt=""
              className="h-[550px] opacity-80 pt-5"
            />
          </div>

          
        </div>

        {/* Wave Effect */}
        {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-white rounded-t-[50%]"></div> */}
      </section>

      {/* WHO WE ARE */}
      <section className="py-10 bg-white mt-">
        <div className=" mx-auto pl-20 grid lg:grid-cols-2 gap-16 items-center bg-gradient-to-b from-white to-blue-50">

          <div className="">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Who We Are & What We Do
            </h2>

            <p className="text-gray-600 leading-relaxed">
              At HomeService, we specialize in providing convenient, reliable,
              and high-quality home services to make your life easier.
              Whether you need a trusted cleaner, skilled handyman,
              or professional cook, we've got you covered.
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://th.bing.com/th/id/OIP.4ZLkBrLGgWE-ON4KvIPjEAHaE8?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
              alt=""
              className="w-full object-contain opacity-70"
            />
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is simple: to provide top-notch home services that
            bring comfort and convenience to your doorstep.
            We strive to make booking trusted professionals
            as easy and stress-free as possible.
          </p>

          <div className="flex justify-center gap-2 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-blue-50 p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt=""
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">
                Qualified Professionals
              </h3>
              <p className="text-gray-600 text-sm">
                All service providers are thoroughly vetted and experienced.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <FaShieldAlt className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Easy & Secure Booking
              </h3>
              <p className="text-gray-600 text-sm">
                Our user-friendly platform ensures seamless booking.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <FaHeart className="text-red-500 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600 text-sm">
                We prioritize your satisfaction and continuous improvement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-10 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-6 rounded-3xl shadow-md text-center">
              <FaShieldAlt className="text-blue-600 text-3xl mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                Trust & Reliability
              </h4>
              <p className="text-gray-600 text-sm">
                We ensure dependable and trustworthy services.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md text-center">
              <FaCheckCircle className="text-green-500 text-3xl mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                Quality Service
              </h4>
              <p className="text-gray-600 text-sm">
                Committed to delivering excellence every time.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md text-center">
              <FaHeart className="text-red-500 text-3xl mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                Customer Focus
              </h4>
              <p className="text-gray-600 text-sm">
                Your needs are our top priority.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-md text-center">
              <FaStar className="text-yellow-500 text-3xl mx-auto mb-3" />
              <h4 className="font-semibold mb-2">
                Integrity
              </h4>
              <p className="text-gray-600 text-sm">
                We operate with honesty and transparency.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}