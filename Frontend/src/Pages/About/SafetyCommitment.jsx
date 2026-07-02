import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Truck,
  MapPinned,
  Wrench,
  CheckCircle2,
} from "lucide-react";

// Replace with your own image
import SafetyImage from "../../assets/IMG_1137-1536x1152.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "DOT / CSA Compliance",
  },
  {
    icon: MapPinned,
    title: "Real-Time GPS Tracking",
  },
  {
    icon: Truck,
    title: "Electronic Logging Devices",
  },
  {
    icon: Wrench,
    title: "Preventive Fleet Maintenance",
  },
];

const SafetyCommitment = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Glow */}
      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-red-600/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
              Safety Commitment
            </span>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              Our Safety Is
              <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                Your Peace of Mind
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-300">
              Safety isn't just a policy—it's part of our culture. We maintain
              an outstanding DOT/CSA safety rating and hold our drivers to the
              highest standards of training and professionalism.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Every vehicle is equipped with advanced safety technology,
              including real-time GPS monitoring, dashcams, and Electronic
              Logging Devices (ELDs), ensuring complete visibility and
              compliance throughout every journey.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Through continuous driver training, regular inspections, and
              proactive fleet maintenance, we protect both your cargo and our
              people every mile of the way.
            </p>

            {/* Features */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div className="rounded-xl bg-gradient-to-r from-red-600 to-blue-700 p-3">
                      <Icon className="text-white" size={22} />
                    </div>

                    <span className="font-medium text-white">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="relative"
          >
            <img
              src={SafetyImage}
              alt="Safety"
              className="rounded-[32px] shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCommitment;