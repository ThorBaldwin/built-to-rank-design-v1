import React from "react";
import { FiBox, FiShuffle, FiLayers, FiRepeat } from "react-icons/fi";
import Image from "next/image";
import { motion } from "framer-motion";

const easing = [0.25, 1, 0.5, 1];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 0.9,
    y: 0,
    transition: {
      ease: easing,
      duration: 0.5,
    },
  },
};

function CompanyOverview() {
  return (
    <motion.section
      className="mx-auto max-w-7xl pt-[100px] px-10 text-[#002B56]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-12 h-full">
        {/* Left Text Section */}
        <div className="col-span-7 max-w-[615px]">
          <div>
            <div className="font-semibold leading-[150%] text-[#FFB300] text-sm">
              <p>What we bring to the table</p>
            </div>
            <div className="font-bold pt-4 tracking-[-0.02em] text-5xl leading-[100%]">
              <h2>Unlock your brand's potential</h2>
            </div>
            <div className="text-lg pt-6 leading-[150%]">
              <p>
                At Built to Rank, we specialize in creating custom websites that
                meet your unique business needs. From new builds to seamless
                transfers, we ensure a smooth experience every step of the way.
              </p>
            </div>
          </div>

          {/* First row with 2 items */}
          <div className="grid grid-cols-2 gap-x-6 pt-12 max-w-[615px]">
            <div className="flex flex-col space-y-2">
              <FiBox size={28} className="text-[#FFB300]" />
              <div className="font-semibold leading-[150%]">
                <h4>New builds</h4>
              </div>
              <div className="text-sm leading-[150%]">
                <p>
                  Get a stunning website designed specifically for your
                  brand and audience.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <FiShuffle size={28} className="text-[#FFB300]" />
              <div className="font-semibold leading-[150%]">
                <h4>Seamless transfers</h4>
              </div>
              <div className="text-sm leading-[150%]">
                <p>
                  Easily migrate your existing site without losing any data or
                  functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Second row with 2 items */}
          <div className="grid grid-cols-2 gap-x-6 pt-12 max-w-[615px]">
            <div className="flex flex-col space-y-2">
              <FiLayers size={28} className="text-[#FFB300]" />
              <div className="font-semibold leading-[150%]">
                <h4>Custom design</h4>
              </div>
              <div className="text-sm leading-[150%]">
                <p>
                  Tailored website designs that align perfectly with your
                  brand identity.
                </p>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <FiRepeat size={28} className="text-[#FFB300]" />
              <div className="font-semibold leading-[150%]">
                <h4>Ongoing support</h4>
              </div>
              <div className="text-sm leading-[150%]">
                <p>
                  Continuous maintenance and updates to keep your website
                  running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-span-5 relative h-full">
          <Image
            src="/second.jpg" // Replace with your actual image path
            alt="Built to rank logo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </motion.section>
  );
}

export default CompanyOverview;
