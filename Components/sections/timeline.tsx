import React from "react";
import Section from "../section";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Timeline() {
  return (
    <Section>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical -mb-8">
        <li>
          <div className="timeline-middle">
            <BsFillCheckCircleFill />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2020</time>
            <div className="text-lg font-black">how everythings begin?</div>I
            Bought a Premiere Pro course, started my professional video editing
            journey after editing on mobile for a year.
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
            Launched Instagram pages like{" "}
            <a className="external-links" href="https://instagram.com/cwpslxck">
              @cwpslxck
            </a>
            {" & "}
            <a
              className="external-links"
              href="https://instagram.com/vlonefarsi"
            >
              @vlonefarsi
            </a>{" "}
            that gained millions of views.
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
  );
}

export default Timeline;
