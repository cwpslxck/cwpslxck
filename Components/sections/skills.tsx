import React from "react";
import Section from "../section";

function Skills() {
  const marketing_skills = [
    "Premiere Pro",
    "After Effects",
    "Photoshop",
    "CapCut",
    "Figma",
  ];
  const web_skills = ["NextJS", "Tailwindcss", "ShadcnUI", "ThreeJS"];
  return (
    <Section title="Skills">
      <div className="w-full flex justify-center flex-wrap gap-2">
        {marketing_skills.map((s, i) => (
          <div className="px-1.5 py-0.5 bg-black rounded-lg text-white" key={i}>
            {s}
          </div>
        ))}
        {web_skills.map((s, i) => (
          <div
            className="px-1.5 py-0.5 bg-violet-700 rounded-lg text-white"
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
