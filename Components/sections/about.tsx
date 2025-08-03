import React from "react";
import Section from "../section";

function About() {
  return (
    <Section title="About">
      <p className="opacity-85">
        I'm currently leading a few personal Instagram projects as a founder and
        content creator, like{" "}
        <a
          className="external-links"
          href="https://instagram.com/vlonefarsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          @vlonefarsi
        </a>
        .
        <br />
        I'm also developing my own startups and SaaS products as a full-time
        developer.
      </p>
    </Section>
  );
}

export default About;
