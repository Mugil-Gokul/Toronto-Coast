import React from "react";
import { motion } from "framer-motion";
import {
  Play,
  ShieldCheck,
  Truck,
  BadgeCheck,
} from "lucide-react";

import AboutVideo from "../../assets/TCT-vid.mp4";

const features = [
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Every shipment is handled with strict safety standards and experienced professionals.",
  },
  {
    icon: Truck,
    title: "Reliability",
    description:
      "Consistent on-time deliveries backed by a dependable fleet and dedicated drivers.",
  },
  {
    icon: BadgeCheck,
    title: "Integrity",
    description:
      "Transparent communication and honest service from pickup to final delivery.",
  },
];

const AboutUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-red-500/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[30px] shadow-2xl">
              <video
                autoPlay
                loop
                playsInline
                className="h-[600px] w-full object-cover"
              >
                <source src={AboutVideo} type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
              About Us
            </span>

            <div className="mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
              Driven by Precision,
              <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Powered by Integrity.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Founded on a commitment to reliability and integrity,
              Toronto Coast Trucking Ltd began with one clear goal —
              to deliver freight safely, efficiently, and on time.
              What started as a small local operation has grown into
              a trusted logistics partner serving businesses across
              the region.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is simple: to connect businesses through
              dependable transportation solutions backed by modern
              technology, exceptional customer care, and unwavering
              values.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Every mile we drive is guided by our core principles—
              <span className="font-semibold text-slate-900">
                {" "}
                Safety, Reliability, and Integrity
              </span>
              —ensuring your shipments arrive exactly as promised.
            </p>

            {/* Feature Cards */}
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -8,
                    }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-700">
                      <Icon
                        size={26}
                        className="text-white"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
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

export default AboutUs;