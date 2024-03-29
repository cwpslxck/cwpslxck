import React from "react";
import TitlePart from "../components/TitlePart";
import ProjectsPart from "../components/ProjectsPart";

function Projects() {
  return (
    <div className="py-4 w-full">
      <TitlePart title={"نمونه کارها"} />
      <div className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-16 sm:pt-0 gap-24 sm:gap-4 md:gap-4">
          <ProjectsPart
            key={1}
            url={"https://vlonesticker.ir"}
            img={"4.png"}
            text={
              "پروژه ویلون استیکر یک فروشگاه وردپرسی است که من مسعولیت برندینگ و طراحی کامل وبسایت را بر عهده داشتم"
            }
            title={"ویلون استیکر"}
          />
          <ProjectsPart
            key={1}
            url={"https://trapfa.ir"}
            img={"4.png"}
            text={
              "این پروژه یک پلتفرم خبری و تبلیغاتی در زمینه موسیقی رپ و زمینه های مرتبط با آن است"
            }
            title={"پلتفرم ترپفا"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
