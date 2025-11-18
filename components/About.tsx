"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiTempleGate, GiFlame, GiSpiralBottle } from 'react-icons/gi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <GiTempleGate className="text-6xl" />,
      title: "Ancient Legacy",
      description: "A centuries-old temple steeped in divine history and powerful traditions",
    },
    {
      icon: <GiFlame className="text-6xl" />,
      title: "Sacred Rituals",
      description: "Experience authentic poojas and ceremonies blessed by divine presence",
    },
    {
      icon: <GiSpiralBottle className="text-6xl" />,
      title: "Miraculous Powers",
      description: "Witness the mystical powers of Vishnumaya and Kuttichathan",
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-divine-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-divine-red/10 rounded-full blur-[100px]" />
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
            ക്ഷേത്രത്തെക്കുറിച്ച്
          </motion.p>
          <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-glow mb-6">
            Temple History
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-divine-gold to-transparent mx-auto" />
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-cinzel font-bold text-divine-gold">
              The Sacred Abode of Vishnumaya
            </h3>
            <p className="text-divine-gold/80 text-lg leading-relaxed">
              Vadakkumpuram Vishnumaya Kuttichathan Temple stands as a beacon of divine power
              in Kerala, where ancient traditions merge with mystical energies. This sacred sanctuary
              has been a pilgrimage destination for devotees seeking protection, blessings, and
              spiritual guidance for generations.
            </p>
            <p className="text-divine-gold/80 text-lg leading-relaxed">
              Lord Vishnumaya, the fierce and compassionate deity, along with the powerful
              Kuttichathan, blesses devotees with miraculous solutions to life's challenges.
              The temple's divine atmosphere is enhanced by traditional rituals, sacred fire ceremonies,
              and the continuous chanting of powerful mantras.
            </p>
            <p className="text-divine-gold/80 text-lg leading-relaxed">
              Experience the transformative power of devotion in this hallowed space where
              countless devotees have witnessed divine interventions and received blessings
              that changed their lives forever.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-divine-red to-divine-darkred text-white font-bold rounded-full box-glow font-cinzel">
                Explore Temple Heritage
              </button>
            </motion.div>
          </motion.div>

          {/* Image/Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden box-glow">
              {/* Placeholder for temple image with torch effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-divine-gold/20 via-divine-dark to-divine-red/20">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-radial from-divine-gold/40 via-transparent to-transparent"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <GiTempleGate className="text-[200px] text-divine-gold/30" />
                </div>
              </div>

              {/* Torch Light Effect */}
              <motion.div
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-divine-gold/30 to-transparent blur-2xl"
              />
            </div>

            {/* Floating Decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 border-4 border-divine-gold/30 rounded-full"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative p-8 rounded-xl bg-divine-darker/50 border border-divine-gold/20 box-glow group"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                className="text-divine-gold mb-6 group-hover:text-divine-red transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-2xl font-cinzel font-bold text-divine-gold mb-4">
                {feature.title}
              </h4>
              <p className="text-divine-gold/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
