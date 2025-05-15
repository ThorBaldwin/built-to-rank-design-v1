import Image from "next/image";

function Marquee() {
  return (
    <section className="pt-20 px-10">
      <div className="flex flex-col w-full space-y-4">
        <div className="text-lg opacity-60 text-[#002B56] font-medium">
          <h5>Chosen by leading companies worldwide</h5>
        </div>
        <div className="flex flex-wrap w-full items-center justify-between">
          {["1", "2", "3", "4", "5", "6", "7"].map((num) => (
            <Image
              key={num}
              src={`/Marquee/${num}.svg`}
              alt={`Company logo ${num}`}
              height={24}
              width={100}
              className="h-6 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Marquee;
