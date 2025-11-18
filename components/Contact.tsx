"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { GiTempleGate } from 'react-icons/gi';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-4xl" />,
      title: "Temple Address",
      content: "Vadakkumpuram, Kerala, India",
      link: "#",
    },
    {
      icon: <FaPhone className="text-4xl" />,
      title: "Contact Number",
      content: "+91 XXXX XXXXXX",
      link: "tel:+91XXXXXXXXXX",
    },
    {
      icon: <FaEnvelope className="text-4xl" />,
      title: "Email",
      content: "info@vadakkumpuram.in",
      link: "mailto:info@vadakkumpuram.in",
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "Visit Hours",
      content: "5:00 AM - 9:00 PM Daily",
      link: "#",
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-divine-gold/20 via-divine-red/10 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-divine-red text-xl font-malayalam mb-4"
          >
            ബന്ധപ്പെടുക
          </motion.p>
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-glow mb-6">
            Visit Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto mb-6" />
          <p className="text-divine-gold/70 text-lg max-w-3xl mx-auto">
            Plan your sacred visit to experience divine blessings at Vadakkumpuram Temple
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-xl bg-divine-darker/60 border border-divine-gold/20 group cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    className="text-divine-gold group-hover:text-divine-red transition-colors"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-divine-gold/60 text-sm mb-1">{info.title}</h4>
                    <p className="text-divine-gold text-lg font-semibold">{info.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="relative h-64 rounded-xl overflow-hidden border-2 border-divine-gold/30 box-glow"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/20 via-divine-dark to-divine-red/20 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaMapMarkerAlt className="text-8xl text-divine-gold/40" />
                </motion.div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-divine-darker/90 border-2 border-divine-gold text-divine-gold font-bold rounded-full backdrop-blur-sm font-cinzel"
                >
                  View on Map
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative p-10 rounded-2xl bg-divine-darker/70 border-2 border-divine-gold/30 overflow-hidden"
          >
            {/* Background Glow */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-radial from-divine-red/20 to-transparent"
            />

            <div className="relative">
              <div className="text-center mb-8">
                <GiTempleGate className="text-6xl text-divine-gold mx-auto mb-4" />
                <h3 className="text-3xl font-cinzel font-bold text-divine-gold mb-2">
                  Get in Touch
                </h3>
                <p className="text-divine-gold/70">Send us your queries and we'll respond soon</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-divine-gold mb-2 font-semibold">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-divine-darker/80 border border-divine-gold/30 rounded-lg text-divine-gold focus:outline-none focus:border-divine-gold transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-divine-gold mb-2 font-semibold">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-divine-darker/80 border border-divine-gold/30 rounded-lg text-divine-gold focus:outline-none focus:border-divine-gold transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-divine-gold mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-divine-darker/80 border border-divine-gold/30 rounded-lg text-divine-gold focus:outline-none focus:border-divine-gold transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-divine-gold mb-2 font-semibold">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-divine-darker/80 border border-divine-gold/30 rounded-lg text-divine-gold focus:outline-none focus:border-divine-gold transition-colors resize-none"
                    placeholder="Your message or inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-divine-gold to-divine-red text-white font-bold rounded-lg box-glow font-cinzel text-lg"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-20 pt-10 border-t border-divine-gold/20"
        >
          <p className="text-divine-gold/60 mb-2">
            © 2024 Vadakkumpuram Vishnumaya Kuttichathan Temple. All Rights Reserved.
          </p>
          <p className="text-divine-red font-malayalam text-lg">
            ഓം വിഷ്ണുമായ നമഃ 🙏
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
