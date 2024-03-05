import React from "react";

function PricePart({ img, title, text, url }) {
  return (
    <a
      target="_blank"
      href={url}
      className="mt-0 sm:mt-16 bg-neutral-800 hover:bg-neutral-700 transition-colors rounded-xl px-4 py-4 space-y-2"
    >
      <img
        className="w-full h-40 object-cover -mt-20 bg-neutral-200 rounded-xl"
        src={img}
        alt="Price Tumbnail"
      />
      <h4 className="text-center hodhod text-4xl">{title}</h4>
      <div>
        <p className="line-clamp-3 opacity-60 text-base">{text}</p>
      </div>
    </a>
  );
}

export default PricePart;
