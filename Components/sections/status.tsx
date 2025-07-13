import React from "react";
import Section from "../section";

function Status() {
  return (
    <Section>
      <p className="text-center font-bold">SOCIAL MEDIA STATUS</p>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center items-center flex-col">
          <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
            15
          </div>
          <p>reels with +100k views</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
            4
          </div>
          <p>reels with +1M views</p>
        </div>
      </div>
    </Section>
  );
}

export default Status;
