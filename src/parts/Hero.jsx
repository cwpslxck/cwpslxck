import React from "react";
import {
  TbBrandFramerMotion,
  TbBrandNextjs,
  TbBrandReact,
  TbDeviceMobileStar,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="w-full h-full md:h-[400px] flex flex-col-reverse md:flex-row-reverse">
        <div className="md:text-right text-center h-1/2 md:h-full md:w-full w-full p-4 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl">
            <Link to={`/edit`}>🚀</Link>
          </h2>
          <h2 className="hodhod text-4xl ">
            سـلام! من
            <p className="hodhod inline-block text-5xl px-1 "> امـین </p>
            هستم
          </h2>
          <div id="biog" className="hodhod text-4xl w-full md:w-2/3">
            برنامه نویس
            <div>
              <p>
                <TbDeviceMobileStar /> فرانت اند
              </p>
            </div>
            وب، درحال یادگیــری
            <div>
              <p>
                <TbBrandFramerMotion /> فریمر موشن
              </p>
            </div>
            هستم و به
            <div>
              <p>
                <TbBrandNextjs /> نکست
              </p>
            </div>
            <div>
              <p>
                <TbBrandReact /> ری اکت
              </p>
            </div>
            تسـلـط دارم
          </div>
        </div>
        <div className="h-1/2 md:h-full md:w-full w-full px-8 sm:px-4 py-4 flex justify-center items-end md:justify-end md:items-center">
          <motion.img
            whileHover={{
              scale: 0.9,
              rotate: -5,
            }}
            whileTap={{
              scale: 0.8,
              rotate: -5,
            }}
            className="w-full sm:w-2/3 md:w-1/2"
            src="hero.png"
            alt="Hero Logo"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
