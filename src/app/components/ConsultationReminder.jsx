import React from "react";
import Link from "next/link";

function ConsultationReminder() {
  return (
    <section className="pt-[100px]">
      <div className="px-10 bg-[#0070E0]">
        <div className="py-20">
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
              <Link href="/">
                <button className="px-5 py-3 font-medium text-[#002B56] bg-[#FFB300] leading-[150%] rounded-full">
                  Book your free consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationReminder;
