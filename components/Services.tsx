"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiFlame, GiLotusFlower, GiIncense, GiCandleHolder, GiPrayer, GiBellShield } from 'react-icons/gi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <GiFlame className="text-6xl" />,
      title: "Ganapathi Homam",
      malayalam: "ഗണപതി ഹോമം",
      description: "Sacred fire ritual for removing obstacles and invoking Lord Ganesha's blessings",
      duration: "2-3 hours",
      price: "₹5,000",
    },
    {
      icon: <GiLotusFlower className="text-6xl" />,
      title: "Vishnumaya Pooja",
      malayalam: "വിഷ്ണുമായ പൂജ",
      description: "Special worship ceremony for divine protection and wish fulfillment",
      duration: "1-2 hours",
      price: "₹3,000",
    },
    {
      icon: <GiIncense className="text-6xl" />,
      title: "Kuttichathan Sadhana",
      malayalam: "കുട്ടിച്ചാത്തന്‍ സാധന",
      description: "Mystical ritual for prosperity, protection, and spiritual advancement",
      duration: "3-4 hours",
      price: "₹7,000",
    },
    {
      icon: <GiCandleHolder className="text-6xl" />,
      title: "Pradosham",
      malayalam: "പ്രദോഷം",
      description: "Auspicious evening worship for Lord Shiva and family deities",
      duration: "1 hour",
      price: "₹2,000",
    },
    {
      icon: <GiPrayer className="text-6xl" />,
      title: "Monthly Seva",
      malayalam: "മാസിക സേവ",
      description: "Regular monthly offerings and prayers for continuous divine grace",
      duration: "Monthly",
      price: "₹10,000",
    },
    {
      icon: <GiBellShield className="text-6xl" />,
      title: "Special Darshan",
      malayalam: "പ്രത്യേക ദർശനം",
      description: "Private audience with the deities for personal prayers and blessings",
      duration: "30 mins",
      price: "₹1,500",
    },
  ];

  const timings = [
    { day: "Monday - Friday", morning: "5:00 AM - 12:00 PM", evening: "5:00 PM - 8:00 PM" },
    { day: "Saturday - Sunday", morning: "5:00 AM - 1:00 PM", evening: "4:00 PM - 9:00 PM" },
    { day: "Festival Days", morning: "4:00 AM - 1:00 PM", evening: "4:00 PM - 10:00 PM" },
  ];

  return (
    <section id="services" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-divine-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-divine-red/10 rounded-full blur-[120px]" />
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
            സേവനങ്ങൾ
          </motion.p>
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-glow mb-6">
            Temple Services
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto mb-6" />
          <p className="text-divine-gold/70 text-lg max-w-3xl mx-auto">
            Participate in sacred rituals and ceremonies to receive divine blessings
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              <div className="relative h-full p-8 rounded-xl bg-divine-darker/60 border border-divine-gold/20 overflow-hidden">
                {/* Hover Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-divine-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  className="relative text-divine-gold mb-6 group-hover:text-divine-red transition-colors"
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-cinzel font-bold text-divine-gold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-lg font-malayalam text-divine-red mb-4">
                    {service.malayalam}
                  </p>
                  <p className="text-divine-gold/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-divine-gold/60">Duration:</span>
                      <span className="text-divine-gold font-semibold">{service.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-divine-gold/60">Offering:</span>
                      <span className="text-divine-gold font-semibold">{service.price}</span>
                    </div>
                  </div>

                  {/* Book Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-divine-gold to-divine-darkgold text-divine-darker font-bold rounded-lg font-cinzel"
                  >
                    Book Now
                  </motion.button>
                </div>

                {/* Corner Decoration */}
                <div className="absolute top-2 right-2 w-12 h-12 border-t-2 border-r-2 border-divine-gold/30" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Temple Timings */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
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
            <h3 className="text-4xl font-cinzel font-bold text-divine-gold text-center mb-8">
              Temple Timings
            </h3>
            <p className="text-center text-divine-red font-malayalam text-xl mb-10">
              ക്ഷേത്ര സമയം
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {timings.map((timing, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="p-6 rounded-xl bg-divine-darker/80 border border-divine-gold/20"
                >
                  <h4 className="text-xl font-cinzel font-bold text-divine-gold mb-4 text-center">
                    {timing.day}
                  </h4>
                  <div className="space-y-3">
                    <div className="text-center">
                      <p className="text-divine-gold/60 text-sm mb-1">Morning</p>
                      <p className="text-divine-gold font-semibold">{timing.morning}</p>
                    </div>
                    <div className="h-px bg-divine-gold/20" />
                    <div className="text-center">
                      <p className="text-divine-gold/60 text-sm mb-1">Evening</p>
                      <p className="text-divine-gold font-semibold">{timing.evening}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
