import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  PackageCheck,
  Route,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Full Truckload (FTL)",
    description:
      "Reliable FTL service for large-volume shipments. We handle every detail—from pickup to delivery—with precision, efficiency, and consistent communication.",
    icon: Truck,
  },
  {
    number: "02",
    title: "Less Than Truckload (LTL)",
    description:
      "Cost-effective and flexible shipping for partial loads. We consolidate, route, and deliver your freight on time with full visibility throughout the journey.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "Dedicated Fleet Services",
    description:
      "For businesses needing consistent capacity, our dedicated fleet keeps your logistics predictable and your supply chain running seamlessly.",
    icon: Route,
  },
];

const HomeService = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[180px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-5 py-2 text-sm font-semibold text-red-400">
            Transportation Services
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
            Our Core Transportation
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Reliable freight services designed to keep your business moving
            efficiently, safely, and on schedule.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >
                {/* Large Number */}
                <div className="absolute -right-5 top-0 text-[120px] font-black leading-none text-white/[0.04]">
                  {service.number}
                </div>

                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 shadow-xl">
                  <Icon size={30} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-relaxed text-slate-400">
                  {service.description}
                </p>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 flex items-center gap-3 font-semibold text-white cursor-pointer"
                >
                  Get Now

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.button>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-red-500/30" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-3"
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">10+</h3>
            <p className="mt-2 text-slate-400">
              Years Industry Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">24/7</h3>
            <p className="mt-2 text-slate-400">
              Customer Support
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-4xl font-bold text-white">100%</h3>
            <p className="mt-2 text-slate-400">
              Commitment To Safety
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeService;