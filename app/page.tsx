import CalculateAge from "@/Components/calculateAge";
import Section from "@/Components/section";
import Image from "next/image";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const skills = [
    "Reactjs",
    "Nextjs",
    "Tailwindcss",
    "Typescript",
    "CursorAI",
    "ShadcnUI",
    "DaisyUI",
  ];

  return (
    <>
      <Section>
        <div className="flex justify-between items-start p-2 md:p-6">
          <div className="w-[80%]">
            <p className="text-3xl md:text-6xl font-black">Hi, i'm Amin👋🏻</p>
            <p className="text-xl">
              <CalculateAge />
              -year-old digital creator, frontend developer
              <br />
              Interested in startups, arts, video editing
            </p>
          </div>
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
      <Section title="About">
        <p className="opacity-85">
          I'm currently working on{" "}
          <a
            className="external-links"
            href="https://x.com/yxnstudio"
            target="_blank"
          >
            @YXNstudio
          </a>
          . A platform for new-generation artists that help them manage theire
          works & sell products & post job applications and many more features.
        </p>
      </Section>
      <Section title="Skills">
        <div className="w-full flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <div
              className="px-1.5 py-0.5 bg-black rounded-lg text-white"
              key={i}
            >
              {skill}
            </div>
          ))}
        </div>
      </Section>
      <Section classNameWrapper="flex flex-col gap-4" title="Work Experience">
        <Link
          href={"https://x.com/yxnstudio"}
          target="_blank"
          className="w-full border bg-white border-black/10 rounded-md min-h-28 flex justify-between items-start p-4 gap-4  "
        >
          <div className="w-12">
            <Image
              draggable="false"
              className="rounded-full aspect-square object-contain"
              alt="Brand Picture"
              src={"/images/yxnstudio.jpg"}
              width={60}
              height={60}
            />
          </div>
          <div className="w-full h-full">
            <div className="w-full justify-between flex pb-2">
              <div>
                <p className="font-extrabold">YXN Studio</p>
                <p className="text-sm">Founder</p>
              </div>
              <div className="text-sm opacity-80">July 2023 - Present</div>
            </div>
            <div>
              jfkds lkdjflsj fldks jfs j lfjdsj fljdf lsdjf lksdjf lkdsjf
              lkdjkldfj slkdfj sdlkfj slkjslkf jsdlk sldkjflk sj
            </div>
          </div>
        </Link>
      </Section>
      <Section>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical -mb-8">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">how everythings begin?</div>I
              bought a Premier Pro course from a random man and started my
              profesional carier in video editing while i edit with my phone
              before
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2021</time>
              <div className="text-lg font-black">on my way to coding</div>
              Covid kickes in and i had a lots of time to try new things :)
              <br />I figured out how{" "}
              <a
                className="external-links"
                target="_blank"
                href="https://multitheftauto.com/"
              >
                Mta
              </a>{" "}
              game works
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">
                web development & branding
              </div>
              i started few instagram pages
              <br />
              such as @cwpslxck, @trxpfa and hit some views on it
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">time to make money bruh</div>i
              started to learn React.js
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2025</time>
              <div className="text-lg font-black">is this the year?</div>
              make some real connections with web developers and started
            </div>
            {/* <hr /> */}
          </li>
        </ul>
      </Section>
      <Section>
        <div className="flex flex-col items-center gap-3 py-6">
          <p className="text-3xl md:text-6xl font-black">Get In Touch</p>
          <Link href={"mailto:cwpslxck@gmail.com"}>
            <Mail />
          </Link>
        </div>
      </Section>
    </>
  );
}
