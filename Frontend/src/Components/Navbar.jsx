import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Truck,
  Package,
  ShieldCheck,
} from "lucide-react";
import Logo from "../assets/TCT-Logo.png";


const services = [
  {
    title: "Full Truckload Shipping",
    icon: Truck,
    link: "/services/full-truckload-shipping",
  },
  {
    title: "Less-Than-Truckload Freight",
    icon: Package,
    link: "/services/less-than-truckload-freight",
  },
  {
    title: "Dedicated Contract Services",
    icon: ShieldCheck,
    link: "/services/dedicated-contract-services",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLink = ({ isActive }) =>
    `font-medium transition-all duration-300 ${
      scrolled
        ? isActive
          ? "text-red-600"
          : "text-slate-700 hover:text-red-600"
        : isActive
          ? "text-red-400"
          : "text-white hover:text-red-400"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Navbar Background */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.3 }}
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200 shadow-lg backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Toronto Coast Trucking"
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            <NavLink to="/" end className={navLink}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLink}>
              About Us
            </NavLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center gap-2 font-medium transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? "text-red-600"
                        : "text-slate-700 hover:text-red-600"
                      : isActive
                        ? "text-red-400"
                        : "text-white hover:text-red-400"
                  }`
                }
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </NavLink>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-5 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
                  >
                    {services.map((service, index) => {
                      const Icon = service.icon;

                      return (
                        <NavLink
                          key={index}
                          to={service.link}
                          className={({ isActive }) =>
                            `flex items-center gap-4 border-b border-slate-100 px-5 py-4 transition ${
                              isActive ? "bg-red-50" : "hover:bg-slate-50"
                            }`
                          }
                        >
                          <div className="rounded-xl bg-red-50 p-3">
                            <Icon size={20} className="text-red-600" />
                          </div>

                          <span className="font-medium text-slate-700">
                            {service.title}
                          </span>
                        </NavLink>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" className={navLink}>
              Contact Us
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/careers"
                className="rounded-full bg-gradient-to-r from-red-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg"
              >
                Apply for Job
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`transition-colors duration-300 lg:hidden ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[320px] bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b p-5">
                <h3 className="font-bold text-slate-800">Menu</h3>

                <button onClick={() => setMobileOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-2 p-5">
                <NavLink
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl p-3 font-medium ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl p-3 font-medium ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  About Us
                </NavLink>

                <div className="rounded-xl bg-slate-50 p-4">
                  <h4 className="mb-3 font-semibold text-slate-800">
                    Services
                  </h4>

                  <div className="space-y-3">
                    {services.map((service, index) => (
                      <NavLink
                        key={index}
                        to={service.link}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-2 py-2 text-sm ${
                            isActive
                              ? "text-red-600 font-semibold"
                              : "text-slate-600 hover:text-red-600"
                          }`
                        }
                      >
                        {service.title}
                      </NavLink>
                    ))}
                  </div>
                </div>

                <NavLink
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl p-3 font-medium ${
                      isActive
                        ? "bg-red-50 text-red-600"
                        : "text-slate-700 hover:bg-slate-100"
                    }`
                  }
                >
                  Contact Us
                </NavLink>

                <motion.div whileTap={{ scale: 0.95 }} className="mt-4">
                  <Link
                    to="/careers"
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl bg-gradient-to-r from-red-600 to-blue-700 p-4 text-center font-semibold text-white"
                  >
                    Apply for Job
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
