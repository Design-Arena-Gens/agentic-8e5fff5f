"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiFireRing, GiCrystalBall } from 'react-icons/gi';

const Deities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const deities = [
    {
      name: "Lord Vishnumaya",
      malayalam: "വിഷ്ണുമായ",
      description: "The powerful deity born from Lord Shiva's curse upon Dharmaputhra, Vishnumaya represents divine justice and protection. Known for fierce compassion, this deity grants wishes and removes obstacles for sincere devotees.",
      powers: ["Divine Protection", "Justice & Truth", "Wish Fulfillment", "Obstacle Removal"],
      color: "gold",
    },
    {
      name: "Sri Kuttichathan",
      malayalam: "കുട്ടിച്ചാത്തന്‍",
      description: "The mystical guardian spirit worshipped across Kerala, Kuttichathan is known for miraculous powers and swift responses to devotee prayers. This deity offers protection from negative energies and grants prosperity.",
      powers: ["Wealth & Prosperity", "Enemy Protection", "Mystical Powers", "Swift Blessings"],
      color: "red",
    },
  ];

  return (
    <section id="deities" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-divine-gold/20 via-transparent to-divine-red/20"
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
            ദേവതകൾ
          </motion.p>
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-glow mb-6">
            Divine Presence
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto mb-6" />
          <p className="text-divine-gold/70 text-lg max-w-3xl mx-auto">
            Experience the powerful blessings of our presiding deities who have protected
            and guided devotees for countless generations
          </p>
        </motion.div>

        {/* Deities Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {deities.map((deity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative p-10 rounded-2xl bg-divine-darker/70 border-2 border-divine-gold/30 overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 1 }}
                  className={`absolute inset-0 bg-gradient-radial from-${
                    deity.color === 'gold' ? 'divine-gold' : 'divine-red'
                  }/20 to-transparent blur-2xl`}
                />

                {/* Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="relative mb-8 flex justify-center"
                >
                  {deity.color === 'gold' ? (
                    <GiFireRing className="text-8xl text-divine-gold text-glow" />
                  ) : (
                    <GiCrystalBall className="text-8xl text-divine-red text-glow-red" />
                  )}
                </motion.div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-3xl font-cinzel font-bold text-divine-gold mb-2 text-center">
                    {deity.name}
                  </h3>
                  <p className="text-2xl font-malayalam text-divine-red mb-6 text-center">
                    {deity.malayalam}
                  </p>
                  <p className="text-divine-gold/80 leading-relaxed mb-8 text-center">
                    {deity.description}
                  </p>

                  {/* Powers Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {deity.powers.map((power, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className={`p-4 rounded-lg bg-divine-darker/80 border border-${
                          deity.color === 'gold' ? 'divine-gold' : 'divine-red'
                        }/30 text-center`}
                      >
                        <p className={`text-sm font-semibold ${
                          deity.color === 'gold' ? 'text-divine-gold' : 'text-divine-red'
                        }`}>
                          {power}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-divine-gold/50 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-divine-red/50 rounded-br-2xl" />
              </div>

              {/* Floating Ring Animation */}
              <motion.div
                animate={{
                  rotate: index === 0 ? 360 : -360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className={`absolute -top-6 -right-6 w-32 h-32 border-4 border-${
                  deity.color === 'gold' ? 'divine-gold' : 'divine-red'
                }/20 rounded-full`}
              />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-divine-gold via-divine-red to-divine-darkred text-white font-bold text-lg rounded-full box-glow font-cinzel"
          >
            Seek Divine Blessings
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Deities;
