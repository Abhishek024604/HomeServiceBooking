import React from "react";
import { FaFacebookF, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 pt-16">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-10 pb-12">

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 relative inline-block">
            Quick Links
            <span className="block h-[2px] bg-gray-400 mt-2"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Services</li>
            <li className="hover:text-blue-600 cursor-pointer">About Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 relative inline-block">
            Support
            <span className="block h-[2px] bg-gray-400 mt-2"></span>
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">FAQ</li>
            <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
            <li className="hover:text-blue-600 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="font-semibold mb-4 relative inline-block">
            Connect With Us
            <span className="block h-[2px] bg-gray-400 mt-2"></span>
          </h3>

          <div className="flex space-x-4 mt-3">
            <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
              <FaFacebookF size={14} />
            </div>

            <div className="w-9 h-9 bg-sky-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
              <FaTwitter size={14} />
            </div>

            <div className="w-9 h-9 bg-orange-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition cursor-pointer">
              <FaEnvelope size={14} />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 relative inline-block">
            Contact info
            <span className="block h-[2px] bg-gray-400 mt-2"></span>
          </h3>

          <div className="space-y-3 text-sm mt-3">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-600" size={14} />
              <span>info@homeservice.com</span>
            </div>

            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-600" size={14} />
              <span>+91-98987456211</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-400 py-5 text-center text-sm text-gray-600">
        © 2024 <span className="font-semibold">Home Service</span>. All rights reserved.
      </div>

    </footer>
  );
}