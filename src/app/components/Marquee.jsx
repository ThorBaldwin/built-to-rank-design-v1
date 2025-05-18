"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.25, 1, 0.5, 1];

const marqueeVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

function Marquee() {
  return (
    <motion.section
      className="pt-28 max-w-[1440px] mx-auto px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.9 }}
      variants={marqueeVariants}
    >
      <div className="flex flex-col w-full space-y-4">
        <div className="text-lg opacity-60 text-[#002B56] font-medium">
          <h5>Chosen by leading companies worldwide</h5>
        </div>
        <div className="flex flex-wrap w-full items-center justify-between">
          {["1", "6", "3", "4", "5", "2", "7"].map((num) => (
            <Image
              key={num}
              src={`/Marquee/${num}.svg`}
              alt={`Company logo ${num}`}
              height={24}
              width={100}
              className="h-6 w-auto"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Marquee;
