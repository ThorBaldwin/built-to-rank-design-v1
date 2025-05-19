"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "./components/Marquee";
import CompanyOverview from "./components/CompanyOverview";
import ConsultationReminder from "./components/ConsultationReminder";

const easing = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: easing,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: easing,
    },
  },
};

export default function Home() {
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mx-auto max-w-[1440px] overflow-hidden pt-56 px-10 grid grid-cols-12 w-full text-[#002B56]"
      >
        <motion.div
          variants={itemVariants}
          className="col-span-6 flex flex-col"
        >
          <p className="text-sm font-semibold text-[#FFB300]">
            Upgrade your online impact
          </p>

          <h1 className="text-7xl pt-4 font-bold leading-[100%] tracking-[-0.02em]">
            Elevate your <br /> digital presence
          </h1>

          <h3 className="text-xl pt-6 max-w-[50ch] leading-[150%]">
            We craft lightning-fast, responsive websites tailored to your unique
            business goals. Enjoy seamless functionality and peak performance as
            your online presence is elevated.
          </h3>

          <div className="pt-6 space-x-6">
            <Link href="/" passHref>
              <button className="px-5.5 py-3 rounded-lg bg-[#0070E0] text-white font-medium leading-[150%]">
                Get started
              </button>
            </Link>

            <Link href="/" passHref>
              <button className="px-5.5 py-3 rounded-lg border border-[#002B56] text-[#002B56] bg-[#F9FAFB] font-medium leading-[150%]">
                Book your free consultation
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-6 relative bottom-12 left-12 h-[500px]"
        >
          <Image
            src="/hero.jpg"
            alt="Digital presence illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </motion.div>
      </motion.section>

      <Marquee />
      <CompanyOverview />
      <ConsultationReminder />
    </>
  );
}
