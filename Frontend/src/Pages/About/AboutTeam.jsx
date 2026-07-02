import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Clock3 } from "lucide-react";

// Replace these later with your own images
import Image1 from "../../assets/IMG_1137-1536x1152.jpg";
import Image2 from "../../assets/IMG_1144-1536x1143.jpg";
import Image3 from "../../assets/IMG_1205-1536x1152 copy.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety First",
  },
  {
    icon: Truck,
    title: "Reliable Fleet",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
  },
];

const AboutTeam = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-red-500/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-5"
          >
            {/* Large Image */}
            <div className="row-span-2 overflow-hidden rounded-[32px] shadow-xl">
              <img
                src={Image1}
                alt=""
                className="h-full w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            {/* Top Image */}
            <div className="overflow-hidden rounded-[28px] shadow-xl">
              <img
                src={Image2}
                alt=""
                className="h-64 w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>

            {/* Bottom Image */}
            <div className="overflow-hidden rounded-[28px] shadow-xl">
              <img
                src={Image3}
                alt=""
                className="h-64 w-full object-cover transition duration-700 hover:scale-110"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              Our Team
            </span>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
              What Makes Us
              <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Different
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Toronto Coast Trucking LTD stands apart by delivering more than
              just freight—we deliver confidence. Our difference comes from a
              commitment to precision, transparent communication, and a team
              that truly cares about every shipment.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              With advanced tracking technology, highly trained drivers, and a
              flexible approach tailored to each client's needs, we ensure every
              load moves safely, efficiently, and exactly as promised.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We don't aim for one-time deliveries—we build long-term
              partnerships through reliability, accountability, and consistent
              service you can trust mile after mile.
            </p>

            {/* Features */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                    }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-md transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-700">
                      <Icon size={26} className="text-white" />
                    </div>

                    <h3 className="font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;