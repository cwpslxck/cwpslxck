import Image from "next/image";
import Section from "../section";
import { Link2Icon } from "lucide-react";
import Link from "next/link";

function DesignsSection() {
  return (
    <Section classNameWrapper="-m-5 -mt-6.5" className="relative">
      <div className="w-full min-h-44 overflow-hidden group">
        <div className="absolute h-full w-full bg-gradient-to-b from-background/40 via-background/90 to-background p-3 z-10">
          <div className="w-full h-full flex justify-center items-end font-black text-2xl">
            <Link
              href={"/design"}
              className="inline-flex items-center justify-center gap-1 p-4 group-hover:text-blue-500 duration-150"
            >
              <Link2Icon size={30} />
              VISIT DESIGNS PAGE
            </Link>
          </div>
        </div>
        <div className="aspect-5/2 w-full overflow-hidden py-2">
          <Image
            alt="Gallery Section Screenshot"
            loading="lazy"
            width={500}
            height={500}
            draggable="false"
            src={"/assets/gallery.png"}
            className="w-full object-cover px-2 transition-all duration-1000 group-hover:translate-y-[-40%]"
          />
        </div>
      </div>
    </Section>
  );
}

export default DesignsSection;
