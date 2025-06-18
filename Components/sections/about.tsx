import React from "react";
import Section from "../section";

function About() {
  return (
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
  );
}

export default About;
