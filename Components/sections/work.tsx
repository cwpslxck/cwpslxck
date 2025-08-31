import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../section";

function Work() {
  return (
    <Section classNameWrapper="flex flex-col gap-4" title="Work Experience">
      <Link
        href={"https://instagram.com/yxnstudio"}
        target="_blank"
        className="w-full border bg-white border-black/10 rounded-md min-h-28 flex justify-between items-start p-4 gap-4  "
      >
        <div className="w-12">
          <Image
            draggable="false"
            className="rounded-full aspect-square object-contain"
            alt="Brand Picture"
            src={"/images/yxn.jpg"}
            width={60}
            height={60}
          />
        </div>
        <div className="w-full h-full">
          <div className="w-full justify-between flex pb-2">
            <div>
              <p className="font-extrabold">YXN</p>
              <p className="text-sm">Founder</p>
            </div>
            <div className="text-sm opacity-80">LUNCH SOON</div>
          </div>
          <p>Small creative team with focus on building cool genz app</p>
        </div>
      </Link>
      <Link
        href={"https://website.learnpov.com"}
        target="_blank"
        className="w-full border bg-white border-black/10 rounded-md min-h-28 flex justify-between items-start p-4 gap-4  "
      >
        <div className="w-12">
          <Image
            draggable="false"
            className="rounded-full aspect-square object-contain"
            alt="Brand Picture"
            src={"/images/learnpov.jpg"}
            width={60}
            height={60}
          />
        </div>
        <div className="w-full h-full">
          <div className="w-full justify-between flex pb-2">
            <div>
              <p className="font-extrabold">Learn POV</p>
              <p className="text-sm">1/2 Frontend team</p>
            </div>
            <div className="text-sm opacity-80">Apr 2025 - Present</div>
          </div>
          <p>
            Linkedin-like multilingual Iranian social network with focus on
            approved content
          </p>
        </div>
      </Link>
    </Section>
  );
}

export default Work;
