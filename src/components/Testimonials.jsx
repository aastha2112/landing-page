import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "This service exceeded my expectations! The team delivered a top-notch website that boosted our engagement by 300%.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "Marketing Director, Brandify",
    feedback:
      "Amazing experience! The UI/UX design was sleek and modern. Our customers love the new look.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Founder, StartupX",
    feedback:
      "Highly recommend! SEO optimization helped us rank #1 on Google, and traffic skyrocketed!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => (
  <div className="bg-[#0E0E37] text-white py-16 px-6">
    <h2 className="text-center text-3xl font-bold mb-10">
      What Our Clients Say
    </h2>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, idx) => (
        <div
          key={idx}
          className="p-6 bg-[#1A1A50] rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform"
        >
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-300 italic">"{testimonial.feedback}"</p>
          <h4 className="text-lg font-semibold mt-4">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Testimonials;
