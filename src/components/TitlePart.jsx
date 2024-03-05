import React from "react";
import { BsQuote } from "react-icons/bs";

function TitlePart({ title }) {
  return (
    <div className="text-4xl w-full mb-2 flex justify-center items-start md:items-center">
      <BsQuote className="text-yellow-500" size={30} />
      <span className="hodhod">{title}</span>
    </div>
  );
}

export default TitlePart;
