import Image from "next/image";
import Link from "next/link";
import Marquee from "./components/Marquee";
import CompanyOverview from "./components/CompanyOverview";
import ConsultationReminder from "./components/ConsultationReminder";

export default function Home() {
  return (
    <>
    <section className=" mx-auto max-w-7xl pt-20 px-10 grid grid-cols-12 w-full text-[#002B56]">
        <div className="col-span-7 pt-10 flex flex-col">
          <div className="text-sm font-semibold text-[#FFB300]">
            <p>Revamp your online strategy</p>
          </div>
          <div className="text-7xl pt-4 font-bold leading-[100%] tracking-[-0.02em]">
            <h1>Elevate your <br /> digital presence</h1>
          </div>
          <div className="text-xl pt-6 leading-[150%]">
            <h3>We craft lightning-fast, responsive websites tailored to <br /> your unique 
              business goals. Enjoy seamless functionality <br /> and peak performance as 
              your online presence is elevated.</h3>
          </div>
          <div className="pt-6 space-x-5">
            <button className="px-6 py-4 rounded-full bg-[#0070E0] text-white">
              <Link className="" href='/'>
                <p className="font-medium leading-[150%]">Get started</p>
              </Link>
            </button>
            <button className="px-6 py-4 rounded-full border border-[#002B56] text-[#002B56] bg-[#F9FAFB]">
              <Link className="" href='/'>
                <p className="font-medium leading-[150%]">Book your free consultation</p>
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-5">
                  <Image
                    src="/"
                    height={520}
                    width={520}
                    alt="Built to rank logo"
                  />
        </div>
    </section>
    <Marquee />
    <CompanyOverview />
    <ConsultationReminder />
    </>
  );
}
