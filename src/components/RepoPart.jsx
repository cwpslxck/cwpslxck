import React from "react";
import { BsGithub } from "react-icons/bs";

function RepoPart({ url, repo }) {
  return (
    <div className="Rpart w-full h-14 rounded-xl bg-neutral-800 hover:bg-neutral-700 transition-colors">
      <div className="h-full w-full px-4 flex flex-row-reverse justify-between items-center text-xl">
        <p className="">{repo}</p>
        <div className="flex justify-center items-center gap-2 text-2xl">
          <a target="_blank" href={url}>
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default RepoPart;
