import React from "react";
import Section from "../section";
import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { DisplayVersion } from "../displayVersion";

function Connect() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-3 py-6">
        <Link
          download={true}
          className="px-4 hover:scale-105 transition-transform py-2 bg-gradient-to-l from-zinc-700 via-zinc-900 to-zinc-950 text-white items-center inline-flex gap-2 rounded-lg"
          href={"/downloads/aminzare-resume.pdf"}
        >
          <Download size={18} />
          <p>Download CV Resume File</p>
        </Link>
        <p className="text-3xl md:text-6xl font-black">Get In Touch</p>
        <div className="text-center text-base md:text-xl">
          Ready to talk? Reach me out via
          <br />
          <a className="text-blue-500" href="mailto:cwpslxck@gmail.com">
            cwpslxck@gmail.com
          </a>{" "}
          or
          <br />
          connect with me on X
        </div>
        <div className="w-full pt-6 text-sm font-light flex justify-center items-center">
          Amin Zare - <DisplayVersion />
        </div>
      </div>
    </Section>
  );
}

export default Connect;
