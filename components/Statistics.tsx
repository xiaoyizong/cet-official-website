"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Statistics() {
  const stats = [
    {
      number: 15,
      suffix: "+",
      title: "Years Experience",
      icon: "🏆",
    },
    {
      number: 120,
      suffix: "+",
      title: "Global Clients",
      icon: "🤝",
    },
    {
      number: 30,
      suffix: "+",
      title: "European Partners",
      icon: "🌍",
    },
    {
      number: 20,
      suffix: "+",
      title: "Countries Served",
      icon: "🚢",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-28 bg-[#0f2b4d] text-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-yellow-400 rounded-full blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-80 h-80 bg-blue-400 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Company Statistics
          </h2>

          <p className="text-gray-300 mt-5 max-w-2xl mx-auto text-lg">
            Years of experience, trusted partnerships and global business
            connections across Europe and Asia.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                rounded-2xl
                p-8
                text-center
                bg-white/10
                backdrop-blur-md
                border
                border-white/10
                shadow-xl
                hover:bg-white/15
                transition-all
              "
            >
              {/* Icon */}
              <div className="text-5xl">{item.icon}</div>

              {/* Number */}
              <h3 className="mt-6 text-5xl font-bold text-yellow-400">
                {inView ? (
                  <CountUp
                    end={item.number}
                    duration={2}
                    suffix={item.suffix}
                  />
                ) : (
                  "0"
                )}
              </h3>

              {/* Title */}
              <p className="mt-4 text-lg text-gray-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}