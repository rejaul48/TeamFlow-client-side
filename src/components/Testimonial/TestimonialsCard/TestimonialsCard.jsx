import React from 'react';

const TestimonialsCard = ({ image, name, title, testimonial }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition duration-500 hover:scale-105 hover:shadow-xl">
      {/* Image and Client Info */}
      <div className="flex items-center justify-start p-5">
        <img
          src={image}
          alt="Client"
          className="w-16 h-16 rounded-full object-cover border-4 border-green-500"
        />
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="p-5">
        <p className="text-gray-600 text-base italic">{`"${testimonial}"`}</p>
      </div>

      {/* Testimonial Card Footer */}
      <div className="p-4 border-t border-gray-200">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCard
