import React from "react";
import Section from "../section";
// import Link from "next/link";
// import { Download, Mail } from "lucide-react";
import { DisplayVersion } from "../displayVersion";

function Connect() {
  return (
    <Section>
      <div className="flex flex-col items-center gap-3 py-6">
        {/* <Link
          className="px-4 hover:scale-105 transition-transform py-2 bg-gradient-to-l from-zinc-700 via-zinc-900 to-zinc-950 text-white items-center inline-flex gap-2 rounded-lg"
          href={"/downloads/aminzare-resume.pdf"}
          target="_blank"
        >
          <Download size={18} />
          <h2>Download Farsi CV Resume File</h2>
        </Link> */}
        <p className="text-3xl md:text-6xl font-black">Get In Touch</p>
        <p className="text-center text-base md:text-xl">
          Ready to talk? Reach me out via
          <br />
          <a
            title="Email me for projects & connection"
            className="text-blue-500 hover:underline"
            href="mailto:2005aminzare@gmail.com"
          >
            2005aminzare@gmail.com
          </a>{" "}
          or
          <br />
          connect with me on LinkedIn
        </p>
        <div className="w-full pt-6 text-sm font-light flex justify-center items-center">
          Amin Zare - <DisplayVersion />
        </div>
      </div>
    </Section>
  );
}

export default Connect;
