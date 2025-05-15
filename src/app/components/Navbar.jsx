"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Features", href: "/" },
  { label: "Services", href: "/" },
  { label: "Testimonials", href: "/" },
];

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

function Navbar() {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full py-5 px-10 max-w-7xl mx-auto text-[#002B56] text-[15px] overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-7">
          <motion.div variants={itemVariants}>
            <Image
              src="/logo.png"
              height={47}
              width={130}
              alt="Built to rank logo"
            />
          </motion.div>

          <div className="flex items-center space-x-6 leading-[150%]">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ y: -2, transition: { ease: easing, duration: 0.3 } }}
                transition={{ ease: easing, duration: 0.5 }}
              >
                {/* Removed underline span */}
                <Link href={item.href} className="relative">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, transition: { ease: easing, duration: 0.3 } }}
          whileTap={{ scale: 0.95 }}
          transition={{ ease: easing, duration: 0.5 }}
        >
          <Link
            href="/"
            className="px-5 py-2 font-medium leading-[150%] border border-[#002B56] rounded-full"
          >
            Book a call
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
