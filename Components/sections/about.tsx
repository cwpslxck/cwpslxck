import React from "react";
import Section from "../section";

function About() {
  return (
    <Section title="About">
      <p className="opacity-85">
        I'm currently leading a few personal Instagram projects as a founder and
        content strategist, including{" "}
        <a
          className="external-links"
          href="https://instagram.com/vlonefarsi"
          target="_blank"
          rel="noopener noreferrer"
        >
          @vlonefarsi
        </a>
        {", "}
        <a
          className="external-links"
          href="https://instagram.com/trxpfa"
          target="_blank"
          rel="noopener noreferrer"
        >
          @trxpfa
        </a>
        {" and "}
        <a
          className="external-links"
          href="https://instagram.com/trxpfa"
          target="_blank"
          rel="noopener noreferrer"
        >
          @trxpfa
        </a>
        .
        <br />
        I'm also trying to launch a SaaS to help new-generation artists grow
        more easily.
      </p>
    </Section>
  );
}

export default About;
