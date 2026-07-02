import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";

// Replace with your own image
import CTAImage from "../assets/CareerImg.jpg";

const GetStarted = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${CTAImage})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/70" />

      {/* Decorative Glow */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/20 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-xl"
        >
          <Truck size={18} />
          Reliable Freight Solutions
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-4xl font-extrabold leading-tight text-white md:text-6xl"
        >
          Ready to
          <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            Move Smarter?
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-300"
        >
          Let's move your business forward with reliable, real-time logistics
          solutions that deliver performance, transparency, and peace of mind.
          Whether you need a single shipment or a long-term transportation
          partner, Toronto Coast Trucking is ready to help.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="group mt-12 inline-flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-blue-700 px-9 py-5 text-lg font-semibold text-white shadow-2xl"
        >
          Contact Us

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </section>
  );
};

export default GetStarted;