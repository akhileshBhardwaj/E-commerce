import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Working Professional",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    review:
      "As someone with a busy work schedule, grocery shopping used to be stressful. AKStore has completely changed that. The vegetables always arrive fresh, properly packed, and exactly on time. It's become a part of my weekly routine.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Fitness Coach",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "I pay close attention to the quality of food I consume. AKStore consistently delivers fresh vegetables and organic products that meet my expectations. The quality is noticeably better than most local markets.",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Homemaker",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "What impressed me most is the consistency. Every order feels carefully packed and the produce stays fresh for days. Their customer support team is also incredibly responsive whenever I need assistance.",
  },
  {
    id: 4,
    name: "Vikas Yadav",
    role: "Restaurant Owner",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    review:
      "Fresh ingredients are the backbone of any restaurant. AKStore has helped us maintain quality standards while saving time and reducing sourcing challenges. Their service has been exceptional.",
  },
  {
    id: 5,
    name: "Sneha Kapoor",
    role: "Teacher",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "The freshness and taste of the vegetables remind me of produce directly from the farm. The ordering process is simple, delivery is reliable, and the overall experience has been outstanding.",
  },
  {
    id: 6,
    name: "Arjun Singh",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
    review:
      "I've tried several grocery delivery services, but AKStore stands out because of its quality and transparency. Every product feels premium and the service has never disappointed me.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 py-28">
        <div className="w-[90%] max-w-6xl mx-auto text-center text-white">
          <span className="uppercase tracking-[4px] text-green-200">
            Customer Stories
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-5">
            Trusted By Thousands
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-green-100 leading-8">
            Discover why thousands of families choose AKStore for fresh
            vegetables, quality groceries, and exceptional customer service
            every day.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <h2 className="text-5xl font-black text-green-600">10K+</h2>
              <p className="mt-3 text-gray-500">Happy Customers</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <h2 className="text-5xl font-black text-green-600">4.9★</h2>
              <p className="mt-3 text-gray-500">Average Rating</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <h2 className="text-5xl font-black text-green-600">98%</h2>
              <p className="mt-3 text-gray-500">Satisfaction Rate</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center shadow-sm">
              <h2 className="text-5xl font-black text-green-600">50K+</h2>
              <p className="mt-3 text-gray-500">Orders Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[30px] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <Quote size={42} className="text-green-500 mb-5" />

                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-8 text-[15px]">
                  "{item.review}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="pb-24">
        <div className="w-[90%] max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-500 rounded-[40px] p-12 md:p-16 text-center text-white shadow-2xl">
            <Quote size={60} className="mx-auto mb-8 opacity-80" />

            <p className="text-2xl md:text-3xl leading-relaxed font-medium">
              "AKStore is more than a grocery service. It has become a trusted
              partner for our family's healthy lifestyle. The freshness,
              reliability, and convenience are simply unmatched."
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-bold">Meera Khanna</h3>

              <p className="text-green-100">Loyal Customer Since 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="w-[90%] max-w-5xl mx-auto bg-white rounded-[40px] p-12 text-center shadow-xl">
          <h2 className="text-4xl font-bold text-gray-800">
            Ready To Experience Freshness?
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust AKStore for premium
            vegetables, organic products and daily groceries.
          </p>

          <button className="mt-8 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
