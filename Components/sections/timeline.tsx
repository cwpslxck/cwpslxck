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
            <div className="text-lg font-black">how everythings begin?</div>
            bought a Premiere Pro course and started my pro video editing
            journey after editing on mobile for years
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
            COVID lockdown led me to explore new skills and i learned how online
            game server development works
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
            Launched few instagram brands that reached millions of views
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
            <div className="text-lg font-black">time to make money 😭</div>I
            Started learning NextJS to turn skills into income opportunities
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
            <div className="text-lg font-black">IS THIS THE YEAR?</div>
            Building connections, contributing on open-source projects and
            reaching to the next levels
          </div>
          {/* <hr /> */}
        </li>
      </ul>
    </Section>
  );
}

export default Timeline;
