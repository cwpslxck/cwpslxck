import Section from "../section";
import CalculateAge from "../calculateAge";
import Image from "next/image";

function Hero() {
  return (
    <Section>
      <div className="flex justify-between items-start p-2 md:p-6">
        <h1 className="w-[80%]">
          <div className="text-3xl md:text-6xl font-black">Hi, i'm Amin👋🏻</div>
          <div className="text-xl">
            <CalculateAge />
            -years-old digital creator
            <br />
            Interested in web dev and digital marketing
          </div>
        </h1>
        <div className="max-w-24">
          <Image
            draggable="false"
            className="rounded-xl"
            alt="Profile Picture"
            src={"https://github.com/cwpslxck.png"}
            width={100}
            height={100}
          />
        </div>
      </div>
    </Section>
  );
}

export default Hero;
