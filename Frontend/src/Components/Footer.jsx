import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import Logo from "../assets/TCT-Logo.png";

const quickLinks = ["Home", "About", "Contact Us"];

const services = [
  "Full Truckload Shipping",
  "Less-Than-Truckload Freight",
  "Specialized/Dedicated Contract Services",
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-red-600/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-700/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
  src={Logo}
  alt="Logo"
  className="h-20 w-auto brightness-0 invert"
/>

            <p className="mt-6 leading-8 text-slate-400">
              Logistics delivers dependable, on-time transportation solutions
              across the region. With a commitment to safety, technology, and
              exceptional customer service, we keep your freight moving
              efficiently mile after mile.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "#",
                },
                {
                  icon: <FaTwitter />,
                  href: "#",
                },
                {
                  icon: <FaLinkedinIn />,
                  href: "#",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{
                    y: -5,
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition-all duration-300 hover:border-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-blue-700"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h3 className="mb-6 text-2xl font-bold">Quick Links</h3>

            <div className="space-y-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center gap-2 text-slate-400 transition hover:text-white"
                >
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="mb-6 text-2xl font-bold">Our Services</h3>

            <div className="space-y-4">
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="group flex items-start gap-2 text-slate-400 transition hover:text-white"
                >
                  <ArrowUpRight
                    size={16}
                    className="mt-1 transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>{service}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            <h3 className="mb-6 text-2xl font-bold">Contact Us</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="rounded-xl  p-3">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-slate-400">Phone</p>
                  <a
                    href="tel:+19052264040"
                    className="transition hover:text-red-400"
                  >
                    +1 905-226-4040
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl p-3">
                  <Mail size={18} />
                </div>

                <div>
                  <p className="text-slate-400">Email</p>
                  <a
                    href="mailto:dispatch@torontocoast.com"
                    className="transition hover:text-blue-400"
                  >
                    dispatch@torontocoast.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl p-3">
                  <MapPin size={18} />
                </div>

                <div>
                  <p className="text-slate-400">Address</p>

                  <p className="leading-7 text-slate-300">
                    9 Holland Dr,
                    Bolton, Ontario,
                    L7E 1G7
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Toronto Coast Trucking. All Rights
            Reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
