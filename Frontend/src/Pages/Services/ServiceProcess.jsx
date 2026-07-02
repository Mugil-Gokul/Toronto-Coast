import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  PackageCheck,
  MapPinned,
  CircleCheckBig,
} from "lucide-react";

const process = [
  {
    number: "01",
    title: "Quote",
    icon: FileText,
    description:
      "Start by requesting a free, no-obligation quote. Our team reviews your shipment details and provides a competitive rate tailored to your needs.",
  },
  {
    number: "02",
    title: "Load",
    icon: PackageCheck,
    description:
      "Once confirmed, we schedule your pickup and carefully load your freight using safe, efficient handling practices.",
  },
  {
    number: "03",
    title: "Track",
    icon: MapPinned,
    description:
      "Stay informed every mile of the way with real-time GPS tracking and live shipment updates through our dispatch system.",
  },
  {
    number: "04",
    title: "Deliver",
    icon: CircleCheckBig,
    description:
      "After delivery, you'll receive confirmation and peace of mind knowing your shipment arrived safely and on time.",
  },
];

const ServiceProcess = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-28">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            The Process
          </span>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

          <h2 className="mt-8 text-5xl font-extrabold text-white">
            How We
            <span className="block bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            We make freight management simple, transparent, and stress-free.
            From quote to final delivery, every shipment is managed with
            precision, communication, and care.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-[3px] bg-gradient-to-r from-red-600 via-blue-600 to-red-600 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  {/* Circle */}
                  <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-blue-700 shadow-2xl">
                    <Icon className="text-white" size={34} />
                  </div>

                  {/* Card */}
                  <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-red-500/50">
                    <span className="text-sm font-bold tracking-[0.2em] text-red-500">
                      {step.number}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;