import React from "react";
import { FiUser } from "react-icons/fi";
import Image from "next/image";

function CompanyOverview() {
  return (
    <section className=" mx-auto max-w-7xl pt-[100px] px-10 text-[#002B56]">
      <div className="grid grid-cols-12 h-full">
        {/* Left Text Section */}
        <div className="col-span-7 max-w-[615px]">
          <div>
            <div className="font-semibold leading-[150%] text-[#FFB300] text-sm">
              <p>Services</p>
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

          <div className="flex flex-col space-x-8">
            <div className="flex space-x-6 pt-12 max-w-[615px]">
              <div>
                <div className="flex flex-col space-y-2">
                  <div>icon</div>
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
              </div>
              <div>
                <div className="flex flex-col space-y-2">
                  <div>icon</div>
                  <div className="font-semibold leading-[150%]">
                    <h4>Seamless transfers</h4>
                  </div>
                  <div className="text-sm leading-[150%]">
                    <p>
                      Easily migrate your existing site without losing any
                      data or functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 pt-12 max-w-[615px]">
              <div>
                <div className="flex flex-col space-y-2">
                  <div>icon</div>
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
              </div>
              <div>
                <div className="flex flex-col space-y-2">
                  <div>icon</div>
                  <div className="font-semibold leading-[150%]">
                    <h4>Seamless transfers</h4>
                  </div>
                  <div className="text-sm leading-[150%]">
                    <p>
                      Easily migrate your existing site without losing any
                      data or functionality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-span-5 relative h-full">
          <Image
            src="/your-image.jpg" // Replace with your actual image path
            alt="Built to rank logo"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
