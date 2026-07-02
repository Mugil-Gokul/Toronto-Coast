import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PageHero = ({
  backgroundImage,
  subtitle,
  title,
  highlight,
  description,
  currentPage,
  height = "h-screen",
}) => {
  return (
    <section className={`relative overflow-hidden ${height}`}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl"
        >
          {/* Subtitle */}
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
            {subtitle}
          </span>

          {/* Line */}
          <div className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

          {/* Title */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-4xl lg:text-7xl">
            {title}
            <br />

            {highlight && (
              <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                {highlight}
              </span>
            )}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-300">
              {description}
            </p>
          )}

          {/* Breadcrumb */}
          <div className="mt-10 flex items-center gap-3 text-sm">
            <Link
              to="/"
              className="text-white transition hover:text-red-400"
            >
              Home
            </Link>

            <ChevronRight
              size={16}
              className="text-white/40"
            />

            <span className="font-medium text-red-400">
              {currentPage}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;