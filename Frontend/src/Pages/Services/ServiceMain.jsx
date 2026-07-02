import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Package,
 ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Full Truckload (FTL)",
    icon: Truck,
    description:
      "Reliable FTL service for large-volume shipments. We manage every shipment from pickup to delivery with precision, efficiency, and constant communication.",
  },
  {
    number: "02",
    title: "Less Than Truckload (LTL)",
    icon: Package,
    description:
      "Flexible and cost-effective transportation for partial loads. We consolidate freight intelligently while maintaining full shipment visibility.",
  },
  {
    number: "03",
    title: "Dedicated Fleet Services",
    icon: ShieldCheck,
    description:
      "Need dependable transportation every day? Our dedicated fleet solutions provide consistent capacity, reliable drivers, and seamless logistics.",
  },
];

const ServiceMain = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}
      <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-red-500/5 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/5 blur-[180px]" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
            Our Services
          </span>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

          <h2 className="mt-8 text-5xl font-extrabold text-slate-900">
            Our Core Transportation
            <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Reliable freight services designed around your business,
            delivering every shipment with precision, safety, and
            complete transparency.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 hidden h-full w-[2px] bg-gradient-to-b from-red-600 via-blue-600 to-red-600 lg:block" />

          <div className="space-y-14">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: .6 }}
                  whileHover={{ x: 8 }}
                  className="group relative rounded-[30px] border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:border-red-500 hover:shadow-2xl lg:ml-20"
                >
                  {/* Number */}

                  <div className="absolute -left-20 top-8 hidden lg:flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-blue-700 text-2xl font-bold text-white shadow-xl">
                    {service.number}
                  </div>

                  {/* Huge Background Number */}

                  <h1 className="absolute right-8 top-4 text-8xl font-black text-slate-100 transition duration-500 group-hover:text-red-50">
                    {service.number}
                  </h1>

                  <div className="relative z-10">

                    <div className="flex items-center gap-5">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-blue-700">
                        <Icon
                          size={30}
                          className="text-white"
                        />
                      </div>

                      <h3 className="text-3xl font-bold text-slate-900">
                        {service.title}
                      </h3>

                    </div>

                    <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                      {service.description}
                    </p>

                    <motion.button
                      whileHover={{
                        x: 6,
                      }}
                      className="group mt-10 flex cursor-pointer items-center gap-3 font-semibold text-red-600"
                    >
                      Get Now

                      <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </motion.button>

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

export default ServiceMain;