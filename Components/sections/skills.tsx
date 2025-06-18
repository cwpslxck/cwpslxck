import React from "react";
import Section from "../section";

function Skills() {
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
    <Section title="Skills">
      <div className="w-full flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div className="px-1.5 py-0.5 bg-black rounded-lg text-white" key={i}>
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
