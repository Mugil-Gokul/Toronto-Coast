import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Clock3, ShieldCheck } from "lucide-react";
import TCTVideo from "../../assets/TCT-vid.mp4";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <section className="relative h-[110vh] overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={TCTVideo} type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Background Glow Effects */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[160px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-[160px]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 pt-24 lg:pt-0">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              {/* <span className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md">
                Trusted Freight Solutions Across Canada
              </span> */}

              {/* Heading */}
              <h1 className="text-5xl font-extrabold leading-tight text-white md:text-6xl xl:text-7xl">
                Reliable Freight.
                <br />
                <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                  Driven by Integrity.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">
                Delivering your cargo safely and on time every mile, every day.
                From local hauls to long-distance freight, we move your business
                forward with precision and trust.
              </p>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-2xl"
                >
                  <Link to="/services">
                    Get Started
                  </Link>
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">
          <div className="mt-2 h-3 w-3 rounded-full bg-white" />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;