"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const easing = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easing,
      duration: 0.9,
    },
  },
};

function ConsultationReminder() {
  return (
    <motion.section
      className="pt-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="px-10 bg-[#0070E0]">
        <div className="py-16">
          <div className="flex flex-col justify-center max-w-[620px] mx-auto text-center">
            <div className="font-semibold leading-[150%] text-[#FFB300] text-sm">
              <p>Let's make it happen</p>
            </div>
            <div className="font-bold max-w-[15ch] mx-auto pt-4 text-[#F9FAFB] text-5xl tracking-[-2%]">
              <h2>Refresh. Redesign. Reimagine.</h2>
            </div>
            <div className="text-lg text-[#F9FAFB] pt-6 leading-[150%]">
              <p>
                Your brand deserves a bold, modern presence—and we're here to
                build it. Schedule a free consultation to see how we can help
                you grow.
              </p>
            </div>
            <div className="pt-6">
              <Link href="/" passHref>
                <button className="px-5 py-3 font-medium text-[#002B56] bg-[#FFB300] leading-[150%] rounded-full">
                  Book your free consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ConsultationReminder;
