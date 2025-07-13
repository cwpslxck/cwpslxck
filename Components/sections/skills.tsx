import React from "react";
import Section from "../section";

function Skills() {
  const marketing_skills = [
    "Premiere Pro",
    "After Effects",
    "CapCut",
    "Inshot",
  ];
  const web_skills = [
    "ReactJS",
    "NextJS",
    "Typescript",
    "Tailwindcss",
    "ShadcnUI",
    "DaisyUI",
  ];
  return (
    <Section title="Skills">
      <div className="w-full flex flex-wrap gap-2">
        {marketing_skills.map((s, i) => (
          <div className="px-1.5 py-0.5 bg-black rounded-lg text-white" key={i}>
            {s}
          </div>
        ))}
        {web_skills.map((s, i) => (
          <div
            className="px-1.5 py-0.5 bg-violet-900 rounded-lg text-white"
            key={i}
          >
            {s}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
