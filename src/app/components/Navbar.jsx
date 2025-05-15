import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <section className="px-10 max-w-7xl text-[#002B56] text-[15px] mx-auto py-5 w-full">
      <div className="flex items-center justify-between">
        <div className="flex space-x-7">
          <div>
            <Image
              src="/logo.png"
              height={47}
              width={130}
              alt="Built to rank logo"
            />
          </div>
          <div className="flex leading-[150%] space-x-6 items-center">
            <div>
              <Link href="/">Features</Link>
            </div>
            <div>
              <Link href="/">Services</Link>
            </div>
            <div>
              <Link href="/">Testimonials</Link>
            </div>
            <div>
              <Link href="/">How we work</Link>
            </div>
            <div>
              <Link href="/">FAQ</Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <Link
              className="px-6 py-4 font-medium leading-[150%] border border-[#002B56] rounded-full"
              href="/"
            >
              Book a call
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
