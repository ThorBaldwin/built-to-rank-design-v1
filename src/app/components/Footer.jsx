import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <section className="py-[100px] max-w-7xl mx-auto text-sm text-[#002B56] px-10">
      <div className="flex flex-col space-y-14">
        <div className="flex justify-between">
          <div className="flex space-x-36">
            <div className="space-y-4">
              <div className="font-semibold">
                <h5>Socials</h5>
              </div>
              <div className="pt-2">
                <p>LinkedIn</p>
              </div>
              <div>
                <p>Facebook</p>
              </div>
              <div>
                <p>Instagram</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-semibold">
                <h5>Socials</h5>
              </div>
              <div className="pt-2">
                <p>LinkedIn</p>
              </div>
              <div>
                <p>Facebook</p>
              </div>
              <div>
                <p>Instagram</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="font-semibold">
                <h5>Socials</h5>
              </div>
              <div className="pt-2">
                <p>LinkedIn</p>
              </div>
              <div>
                <p>Facebook</p>
              </div>
              <div>
                <p>Instagram</p>
              </div>
            </div>
          </div>
          <div className="flex space-y-1 max-w-[390px] flex-col">
            <div className="font-semibold">
              <h5>Let's build something better</h5>
            </div>
            <div>
              <p>
                Subscribe for thoughtful web design insights and actionable
                growth ideas.
              </p>
            </div>
            <div className="pt-3">
              <form className="flex w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow rounded-l-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="bg-[#0070E0] hover:bg-[#e85e51] text-[#F9FAFB] font-medium px-4 py-2 rounded-r-full"
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
    </section>
  );
}

export default Footer;
