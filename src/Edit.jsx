import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Blur1 from "./parts/blur1";
import Header from "./parts/header";

import ProjectsPart from "./components/ProjectsPart";
import TitlePart from "./components/TitlePart";

export default function Edit() {
  return (
    <>
      <Blur1 />
      <Header />
      <div className="w-full h-full md:h-[400px] flex flex-col-reverse md:flex-row-reverse">
        <div className="md:text-right text-center h-1/2 md:h-full md:w-full w-full p-4 flex flex-col justify-center items-center md:items-start">
          <h2 className="text-4xl">
            <Link to={`/`}>🚀</Link>
          </h2>
          <h2 className="hodhod text-4xl ">
            من
            <p className="hodhod inline-block text-5xl px-1 ">امین</p>
            هستم
          </h2>
          <div id="biog" className="hodhod text-4xl w-full md:w-2/3">
            ادیتور و ویژوال آرتیست ساکن ایران، درحال یادگیری
            <div>
              <p>بلندر</p>
            </div>
            <div>
              <p>افترافکتز</p>
            </div>
            هستم و به
            <div>
              <p>پریمیر</p>
            </div>
            <div>
              <p>کپکات</p>
            </div>
            تسلط دارم
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
      {/* header end */}
      <main className="w-full flex justify-center">
        <div className="w-full max-w-5xl px-4">
          <div className="py-4 w-full">
            <TitlePart title={"نمونه کارها"} />
            <div className="w-full">
              <div className="w-full font grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-16 sm:pt-0 gap-24 sm:gap-4 md:gap-4">
                {/*  */}
                <ProjectsPart
                  key={1}
                  url={""}
                  text={"hahah"}
                  title={"are"}
                  img={"hdhd"}
                />
                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
