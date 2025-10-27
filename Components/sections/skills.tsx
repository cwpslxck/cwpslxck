import React from "react";
import Section from "../section";

function Skills() {
  const soft_skills = ["Git", "Swagger", "Figma", "ThreeJS", "React-Query"];
  const hard_skills = [
    "NextJS",
    "Expo React-Native",
    "Tailwindcss",
    "ShadcnUI",
  ];
  return (
    <Section title="Skills">
      <div className="w-full flex justify-center flex-wrap gap-2">
        {hard_skills.map((s, i) => (
          <div
            className="px-1.5 py-0.5 border hover:bg-violet-600 hover:text-white duration-300 hover:border-violet-600 border-violet-300 rounded-lg"
            key={i}
          >
            {s}
          </div>
        ))}
        {soft_skills.map((s, i) => (
          <div
            className="px-1.5 py-0.5 border border-zinc-400 hover:bg-black hover:border-black hover:text-white rounded-lg duration-300"
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
