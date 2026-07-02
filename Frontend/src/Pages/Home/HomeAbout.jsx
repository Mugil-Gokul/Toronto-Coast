import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  MonitorSmartphone,
  Truck,
  ArrowRight,
} from "lucide-react";

// Replace with your image
import AboutImage from "../../assets/About.jpg";

const HomeAbout = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-500/5 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src={AboutImage}
                alt="Toronto Coast Trucking"
                className="h-[600px] w-full object-cover"
              />
            </div>

            {/* Floating Experience Card */}
            {/* <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-8 bottom-10 rounded-3xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-gradient-to-r from-red-600 to-blue-700 p-4">
                  <Truck className="text-white" size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    10+
                  </h3>
                  <p className="text-slate-600">
                    Years Experience
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* CONTENT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
              About Toronto Coast
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              Why Choose
              <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
                Toronto Coast
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              At Toronto Coast Trucking, we’re more than a transportation
              company — we’re your logistics partner. With years of
              industry experience, a dedicated fleet, and a commitment to
              integrity, we move goods safely, efficiently, and on time.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Our mission is to simplify freight management through
              technology-driven solutions, real-time tracking, and 24/7
              communication. Whether it’s a single shipment or ongoing
              distribution, we handle every mile with care, precision,
              and professionalism.
            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* Safety */}
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                  <ShieldCheck
                    size={28}
                    className="text-red-600"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Safety
                </h3>

                <p className="mt-3 text-slate-600">
                  We take pride in an outstanding DOT safety rating,
                  ensuring every shipment reaches its destination
                  securely and on schedule.
                </p>
              </motion.div>

              {/* Technology */}
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <MonitorSmartphone
                    size={28}
                    className="text-blue-600"
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  Technology
                </h3>

                <p className="mt-3 text-slate-600">
                  Experience real-time tracking and complete shipment
                  visibility so you always know where your freight is and
                  when it will arrive.
                </p>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group mt-10 flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-xl"
            >
              Learn More

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;