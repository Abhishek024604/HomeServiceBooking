import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Choose a Service",
      desc: "Select the service you need.",
      img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
    {
      number: "2",
      title: "Book Your Provider",
      desc: "Schedule an appointment easily.",
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    },
    {
      number: "3",
      title: "Get the Job Done",
      desc: "Relax while we do the work.",
      img: "https://cdn-icons-png.flaticon.com/512/2910/2910768.png",
    },
  ];

  return (
    <div className="relative bg-gray-100 py-24">

      <div className="max-w-6xl mx-auto px-8">

        {/* Section Title */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="mx-6 text-3xl font-semibold text-gray-800">
            How It Works
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md pt-16 pb-10 px-6 text-center hover:shadow-lg transition duration-300"
            >
              {/* Floating Circle Icon */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center shadow-sm">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Number Badge */}
              <div className="flex justify-center mb-3 mt-2">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {step.number}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* Subtle curved bottom effect */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gray-200 rounded-t-[100%]"></div>

    </div>
  );
}