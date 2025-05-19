"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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

const footerColumns = [
  {
    title: "Socials",
    links: ["LinkedIn", "Facebook", "Instagram"],
  },
  {
    title: "Resources",
    links: ["Blog", "Help Center", "Tutorials"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Contact"],
  },
];

function Footer() {
  return (
    <motion.section
      className="py-28 max-w-[1440px] mx-auto text-sm text-[#002B56] px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="flex flex-col space-y-14">
        <div className="flex justify-between">
          <div className="flex space-x-36">
            {footerColumns.map(({ title, links }) => (
              <div key={title} className="space-y-4">
                <div className="font-semibold">
                  <h5>{title}</h5>
                </div>
                {links.map((label) => (
                  <div key={label} className="pt-2">
                    <span className="cursor-default hover:underline">{label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex space-y-1 max-w-[390px] flex-col">
            <div className="font-semibold">
              <h5>Let's build something better</h5>
            </div>
            <div>
              <p>
                Subscribe for thoughtful web design insights and actionable growth ideas.
              </p>
            </div>
            <div className="pt-3">
              <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow rounded-l-lg px-3.5 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-[#0070E0] hover:bg-[#0070e0b4] text-[#F9FAFB] font-medium px-3.5 py-2 rounded-r-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex space-x-8">
          {["1.png", "2.jpg", "3.png"].map((file, idx) => (
            <Image
              key={idx}
              src={`/Logos/${file}`}
              alt={`Company logo ${idx + 1}`}
              height={24}
              width={100}
              className="h-10 w-auto"
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Footer;
