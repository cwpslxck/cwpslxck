import { PROJECTS_ITEMS } from "@/constants/items";
import Section from "../section";
import Image from "next/image";
import Link from "next/link";
import { Link2Icon } from "lucide-react";

function Edu() {
  return (
    <Section
      title="Projects"
      classNameWrapper="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {PROJECTS_ITEMS.map((item, i) => (
        <div
          key={i}
          className="flex flex-col w-full group justify-between items-center bg-white border overflow-hidden border-black/10 rounded-xl hover:translate-y-[1px] duration-300"
        >
          <div className="flex flex-col w-full gap-2">
            {/* بخش تصویر یا ویدیو */}
            <div className="w-full flex justify-start">
              {item.video ? (
                // نمایش ویدیو/GIF
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full object-cover aspect-video rounded-t-xl bg-foreground"
                >
                  <source src={item.video} type="video/mp4" />
                  <source src={item.video} type="video/gif" />
                </video>
              ) : (
                // نمایش تصویر
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={180}
                  draggable="false"
                  className="w-full object-cover aspect-video rounded-t-xl"
                />
              )}
            </div>
            <div className="flex flex-col px-4 gap-0.5">
              <span className="font-semibold text-lg">{item.title}</span>
              <div className="inline-flex w-full justify-start gap-2 flex-wrap">
                {item.items.map((ii, i) => (
                  <div
                    className="px-1.5 font-mono py-0.5 border text-sm rounded-sm"
                    key={i}
                  >
                    {ii}
                  </div>
                ))}
              </div>
              <p className="opacity-85">{item.description}</p>
            </div>
          </div>

          {/* بخش محتوا */}
          <div className="w-full flex flex-col gap-1 px-4 pb-2">
            <Link
              className="self-start py-1 gap-1 flex justify-start text-blue-500 items-center text-sm hover:text-blue-700 transition-colors"
              target="_blank"
              href={item.link.href}
            >
              <Link2Icon size={18} />
              {"Visit "}
              {item.link.title}
            </Link>
          </div>
        </div>
      ))}
    </Section>
  );
}

export default Edu;
