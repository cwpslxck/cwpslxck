import React from "react";
import Section from "../section";

function Status() {
  return (
    <Section>
      <p className="text-center font-bold">SOCIAL MEDIA STATUS</p>
      <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex justify-center items-center flex-col">
          <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
            60+
          </div>
          <p>Github Followers</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
            7+
          </div>
          <p>Twitch Follower</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
            20+
          </div>
          <p>Youtube Videos</p>
        </div>
      </div>
    </Section>
  );
}

export default Status;
