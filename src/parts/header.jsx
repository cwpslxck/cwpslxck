import React from "react";
import { BsInstagram, BsGithub, BsTelegram } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full z-30 h-24 px-4 py-4 sticky top-0 flex justify-center">
      <ul className="bg1blur w-full sm:w-2/3 md:w-1/2 h-full rounded-full px-6 sm:px-12 flex justify-between items-center">
        <Link to={`/`} className="h-full py-3 flex justify-center">
          <img src="cwpslxck.png" className="h-full w-auto invert" alt="" />
        </Link>
        <div className="h-full flex justify-end items-center gap-3">
          <a target="_blank" href="https://instagram.com/cwpslxck" className="">
            اینستاگرام
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Header;
