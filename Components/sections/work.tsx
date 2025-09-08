import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../section";
import { WORK_ITEMS } from "@/constants/items";
import { Link2Icon } from "lucide-react";

function Work() {
  return (
    <Section classNameWrapper="flex flex-col gap-4" title="Work Experience">
      {WORK_ITEMS.map((item, i) => (
        <div
          key={i}
          className="flex flex-col w-full group justify-center items-center gap-2 bg-white p-6 border border-black/10 rounded-xl hover:translate-y-[1px] duration-300"
        >
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={item.image}
                alt={item.compony}
                width={30}
                height={30}
                className="size-10 rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{item.position}</span>
                <span className="tracking-wider text-sm font-extralight opacity-85">
                  {item.compony}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <p>{item.description}</p>
            <Link
              className="self-start py-1 gap-1 flex justify-start text-blue-500 items-center text-sm"
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

export default Work;
