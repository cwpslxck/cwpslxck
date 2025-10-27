import React from "react";
import Section from "../section";

function Status() {
  return (
    <Section>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex justify-center items-center flex-col">
          <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
            +180
          </div>
          <p>Github Followers</p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-7xl font-extrabold tracking-tight drop-shadow-xl">
            +2400
          </div>
          <p>Instagram Followers</p>
        </div>
      </div>
    </Section>
  );
}

export default Status;
