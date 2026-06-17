import React from "react";
import {
  Leaf,
  Truck,
  ShieldCheck,
  Users,
  ArrowRight,
  Award,
  HeartHandshake,
} from "lucide-react";

const AboutUs = () => {
  const features = [
    {
      icon: <Leaf size={32} />,
      title: "Farm Fresh Products",
      desc: "Directly sourced from trusted local farms to ensure maximum freshness and quality.",
    },
    {
      icon: <Truck size={32} />,
      title: "Fast Delivery",
      desc: "Reliable and quick delivery service that brings freshness to your doorstep.",
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Quality Assurance",
      desc: "Every product passes through multiple quality checks before delivery.",
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "Customer First",
      desc: "We focus on customer satisfaction and long-term trust.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:25px_25px]" />
        </div>

        <div className="relative w-[90%] max-w-7xl mx-auto text-center text-white">
          <span className="uppercase tracking-[5px] text-green-200 text-sm">
            Welcome To AKStore
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Freshness Delivered
            <br />
            Every Single Day
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-green-100 leading-8">
            We connect local farmers with modern families by delivering
            fresh vegetables, organic products, and healthy groceries
            directly to your doorstep.
          </p>

          <button className="mt-10 px-8 py-4 bg-white text-green-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
            Explore Products
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e"
                alt="Fresh Vegetables"
                className="rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <h3 className="text-4xl font-bold text-green-600">
                  5+
                </h3>
                <p className="text-gray-600">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-green-600 font-semibold uppercase tracking-wider">
                Our Story
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-800">
                Building A Healthier Future Through Fresh Food
              </h2>

              <p className="mt-8 text-gray-600 leading-8">
                AKStore was founded with a simple mission: make fresh,
                healthy and affordable vegetables accessible to every
                household. We work directly with farmers and suppliers
                to eliminate unnecessary middlemen and ensure better
                quality products.
              </p>

              <p className="mt-5 text-gray-600 leading-8">
                Over the years, we have built strong relationships
                with local farming communities while delivering
                exceptional value and freshness to thousands of
                customers.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <h3 className="text-3xl font-bold text-green-600">
                    10K+
                  </h3>
                  <p className="text-gray-500">
                    Happy Customers
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-green-600">
                    150+
                  </h3>
                  <p className="text-gray-500">
                    Farm Partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-24">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Trusted By Thousands
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-green-600 mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-6xl font-black text-green-600">
                10K+
              </h3>
              <p className="mt-3 text-gray-500">
                Customers Served
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-6xl font-black text-green-600">
                500+
              </h3>
              <p className="mt-3 text-gray-500">
                Daily Orders
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-6xl font-black text-green-600">
                150+
              </h3>
              <p className="mt-3 text-gray-500">
                Farm Partners
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-6xl font-black text-green-600">
                98%
              </h3>
              <p className="mt-3 text-gray-500">
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-900 text-white py-24">
        <div className="w-[90%] max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <Award className="text-green-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-300 leading-8">
                To provide fresh, healthy and affordable products
                while supporting local farmers and sustainable
                agriculture practices.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-10 rounded-3xl border border-white/10">
              <Users className="text-green-400 mb-6" size={40} />

              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-300 leading-8">
                To become the most trusted online grocery platform
                by combining technology, sustainability and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="w-[90%] max-w-5xl mx-auto bg-gradient-to-r from-green-600 to-emerald-500 rounded-[40px] p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready To Experience Freshness?
          </h2>

          <p className="mt-6 text-green-100 text-lg">
            Join thousands of families who trust AKStore for their
            daily grocery needs.
          </p>

          <button className="mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-all duration-300">
            Shop Now
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
