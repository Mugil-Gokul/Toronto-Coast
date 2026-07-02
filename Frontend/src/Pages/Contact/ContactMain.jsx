import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
} from "lucide-react";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Backend API here later

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background Glow */}
      <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-red-500/10 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
            Get In Touch
          </span>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-red-600 to-blue-700" />

          <h2 className="mt-8 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Let's Discuss Your
            <span className="block bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent">
              Logistics Needs
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            Have questions, need a quote, or want to discuss your
            transportation requirements? Our experienced team is here
            to provide reliable support and tailored freight solutions.
          </p>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-5">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:col-span-2"
          >
            {/* Contact Card */}
            <div className="rounded-3xl bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h3>

              <div className="mt-8 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-red-100 p-3">
                    <Phone className="text-red-600" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Phone
                    </p>

                    <p className="font-semibold text-slate-900">
                      +1 (905) 226-4040
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-blue-100 p-3">
                    <Mail className="text-blue-600" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Email
                    </p>

                    <p className="font-semibold text-slate-900">
                      dispatch@torontocoast.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-green-100 p-3">
                    <MapPin className="text-green-600" size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Address
                    </p>

                    <p className="font-semibold leading-7 text-slate-900">
                      9 Holland Dr,
                      {/* <br /> */}
                      Bolton,
                      {/* <br /> */}
                      Ontario L7E 1G7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-orange-100 p-3">
                    <Clock3
                      className="text-orange-600"
                      size={22}
                    />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Working Hours
                    </p>

                    <p className="font-semibold text-slate-900">
                      Monday - Friday
                    </p>

                    <p className="text-slate-500">
                      8:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <iframe
                title="Toronto Coast Trucking"
                src="https://www.google.com/maps?q=9+Holland+Dr,+Bolton,+ON+L7E+1G7,+Canada&output=embed"
                className="h-[320px] w-full border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[32px] bg-white p-10 shadow-xl"
            >
              <h3 className="text-3xl font-bold text-slate-900">
                Send Us a Message
              </h3>

              <p className="mt-3 text-slate-500">
                Fill out the form and we'll get back to you as soon
                as possible.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 123 456 7890"
                    className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block font-medium text-slate-700">
                    Message
                  </label>

                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your logistics requirements..."
                    className="w-full resize-none rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-red-500"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="mt-10 flex cursor-pointer items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg"
              >
                Submit
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;