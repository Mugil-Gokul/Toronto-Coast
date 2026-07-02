import React from "react";
import { motion } from "framer-motion";

const ServiceDetail = ({
  image,
  subtitle,
  title,
  description1,
  description2,
  reverse = false,
}) => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-red-500/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid items-center gap-20 lg:grid-cols-2 ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Image */}

          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? 60 : -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="group overflow-hidden rounded-[32px] shadow-2xl">
              <img
                src={image}
                alt={title}
                className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* Floating Card */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-6 bottom-8 rounded-3xl bg-white px-8 py-6 shadow-2xl"
            >
              <h3 className="text-4xl font-bold text-red-600">
                24/7
              </h3>

              <p className="text-slate-500">
                Dispatch Support
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: reverse ? -60 : 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
              {subtitle}
            </span>

            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
              {title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description1}
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {description2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;