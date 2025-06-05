import CalculateAge from "@/Components/calculateAge";
import Section from "@/Components/section";
import Image from "next/image";
import { Mail } from "lucide-react";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";

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
              <div className="text-sm opacity-80">Jul 2023 - Present</div>
            </div>
            <div>
              a platform for new-generation artists to make connections &
              <br />
              find jobs & sell products and make arts!
            </div>
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
            <div>
              Linkedin-like multilingual Iranian social network with focus on
              approved content
            </div>
          </div>
        </Link>
      </Section>
      <Section>
        <p className="text-center font-bold">SOCIAL MEDIA STATUS</p>
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex justify-center items-center flex-col">
            <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
              61
            </div>
            <p>Github Followers</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
              7
            </div>
            <p>Twitch Follower</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
              22
            </div>
            <p>Youtube Videos</p>
          </div>
        </div>
      </Section>
      <Section>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical -mb-8">
          <li>
            <div className="timeline-middle">
              <BsFillCheckCircleFill />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2020</time>
              <div className="text-lg font-black">how everythings begin?</div>I
              Bought a Premiere Pro course, started my professional video
              editing journey after editing on mobile for a year.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BsFillCheckCircleFill />
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2021</time>
              <div className="text-lg font-black">on my way to coding</div>
              COVID lockdown led me to explore new skills. Learned how{" "}
              <a
                className="external-links"
                target="_blank"
                href="https://multitheftauto.com/"
              >
                MTA
              </a>{" "}
              game server development works.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BsFillCheckCircleFill />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2023</time>
              <div className="text-lg font-black">web & branding era</div>
              Launched Instagram pages{" "}
              <a
                className="external-links"
                href="https://instagram.com/cwpslxck"
              >
                @cwpslxck
              </a>
              ,{" "}
              <a
                className="external-links"
                href="https://instagram.com/vlonefarsi"
              >
                @vlonefarsi
              </a>{" "}
              that gained significant traction and views.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BsFillCheckCircleFill />
            </div>
            <div className="timeline-end md:mb-10">
              <time className="font-mono italic">2024</time>
              <div className="text-lg font-black">time to make money bruh</div>i
              Began learning React.js to turn skills into income opportunities.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <BsFillCheckCircleFill />
            </div>
            <div className="timeline-start mb-10 md:text-end">
              <time className="font-mono italic">2025</time>
              <div className="text-lg font-black">is this the year?</div>
              Building connections in web development and taking projects to the
              next level.
            </div>
            {/* <hr /> */}
          </li>
        </ul>
      </Section>
      <Section>
        <div className="flex flex-col items-center gap-3 py-6">
          <Link
            className="px-4 hover:scale-105 transition-transform py-2 bg-gradient-to-l from-zinc-700 via-zinc-900 to-zinc-950 text-white items-center inline-flex gap-2 rounded-lg"
            href={"mailto:cwpslxck@gmail.com"}
          >
            <Mail size={18} />
            <p>Let's Connect</p>
          </Link>
          <p className="text-3xl md:text-6xl font-black">Get In Touch</p>
          <div className="text-center text-base md:text-xl">
            Ready to collaborate? Reach out via
            <br />
            <a className="text-blue-500" href="mailto:cwpslxck@gmail.com">
              cwpslxck@gmail.com
            </a>{" "}
            or
            <br />
            connect with me on X
          </div>
        </div>
      </Section>
    </>
  );
}
