import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Truck } from "lucide-react";

import CareerBg from "../../assets/CareerImg.jpg";

const HomeCareer = () => {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${CareerBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/70" />

      {/* Decorative Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-red-600/20 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/20 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md"
        >
          <Truck size={18} />
          Careers at Toronto Coast Trucking
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl"
        >
          Start Your Career
          <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
            On the Right Road
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300"
        >
          Join a team that values your hard work, safety, and growth.
          With competitive pay, modern equipment, and comprehensive
          benefits, Toronto Coast Trucking is where professional drivers
          build rewarding and lasting careers.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
            ✓ Competitive Pay
          </div>

          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
            ✓ Modern Fleet
          </div>

          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
            ✓ Comprehensive Benefits
          </div>

          <div className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-md">
            ✓ Career Growth
          </div>
        </motion.div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="group mt-14 flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-blue-700 px-9 py-4 text-lg font-semibold text-white shadow-2xl"
        >
          Apply to Drive Today

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </motion.button>
      </div>
    </section>
  );
};

export default HomeCareer;