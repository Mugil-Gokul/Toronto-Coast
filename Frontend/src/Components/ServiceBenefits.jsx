import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ServiceBenefits = ({
  title,
  description,
  benefits,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-14">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-red-500/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
            Benefits
          </span>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

          <h2 className="mt-8 text-4xl font-extrabold text-slate-900 md:text-5xl">
            {title}
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            {description}
          </p>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-700">
                <CheckCircle2
                  size={28}
                  className="text-white"
                />
              </div>

              <h3 className="text-xl font-bold text-slate-900">
                {benefit.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;