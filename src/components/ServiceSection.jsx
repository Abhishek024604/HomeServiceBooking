import React from "react";

export default function ServiceSection(){
  const services = [
    {
      title: "Cooking",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
    },
    {
      title: "House Cleaning",
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
    },
    {
      title: "Maid Service",
      img: "https://plus.unsplash.com/premium_photo-1664910539413-db1c537f0ca7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFpZCUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Dishwashing",
      img: "https://media.istockphoto.com/id/2203460575/photo/woman-washing-wine-glass-with-sponge.webp?a=1&b=1&s=612x612&w=0&k=20&c=DWydG-ziQPw89Evj3uMmeRloGH8xWKI8ykgcB2awvts="
    },
    {
      title: "Electrician",
      img: "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWNpYW58ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* SECTION TITLE */}
        <div className="flex items-center justify-center mb-14">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="mx-6 text-3xl font-semibold text-gray-800">
            Our Services
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-gray-700 font-medium text-lg">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};