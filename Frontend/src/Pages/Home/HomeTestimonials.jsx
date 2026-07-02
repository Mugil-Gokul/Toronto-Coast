import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

// Dummy Image (Replace later)
import Person1 from "../../assets/image-P3RKYH9-1.jpg";
import Person2 from "../../assets/image-P3RKYH9-2.jpg";
import Person3 from "../../assets/image-P3RKYH9-3.jpg";

const testimonials = [
  {
    image: Person1,
    review:
      "Dependable and transparent from start to finish. Their tracking system gives us confidence every time we ship.",
    role: "Operations Manager",
    company: "Retail Distributor",
  },
  {
    image: Person2,
    review:
      "Exceptional service and always on schedule. We've partnered with them for years and wouldn't go anywhere else.",
    role: "Logistics Coordinator",
    company: "Manufacturing Company",
  },
  {
    image: Person3,
    review:
      "Their reliability sets them apart. Every shipment arrives as promised, and their team is always quick to respond.",
    role: "Supply Chain Manager",
    company: "National Wholesaler",
  },
];

const HomeTestimonials = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-red-500/10 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
            Client Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Voices
            <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              From the Road
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Trusted by businesses across Canada for dependable freight
            transportation, transparent communication, and reliable service.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-8 top-8">
                <Quote
                  size={60}
                  className="text-red-100 transition-all duration-500 group-hover:rotate-12"
                />
              </div>

              {/* Profile */}
              <div className="flex items-center gap-5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
                />

                <div>
                  <p className="text-sm font-medium text-red-600">
                    {testimonial.role}
                  </p>

                  <p className="text-sm text-slate-500">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 leading-8 text-slate-600">
                "{testimonial.review}"
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 rounded-[32px] bg-gradient-to-r from-red-600 to-blue-700 p-12 text-center shadow-2xl"
        >
          <h3 className="text-4xl font-bold text-white">
            Trusted by Businesses Across Canada
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/90">
            From retail distributors to national manufacturers, companies rely
            on Toronto Coast Trucking for safe, reliable, and on-time freight
            transportation.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100"
          >
            Become Our Next Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeTestimonials;