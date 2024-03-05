import React from "react";
import TitlePart from "../components/TitlePart";
import PricePart from "../components/PricePart";

function Prices() {
  return (
    <div className="py-4 w-full">
      <TitlePart title={"قیمت پروژه ها"} />
      <div className="w-full">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-16 sm:pt-0 gap-24 sm:gap-4 md:gap-4">
          <PricePart
            img={"3.png"}
            title={"وبسایت شرکتی"}
            text={
              "سایت شرکتی، یک پلتفرم آنلاین است که برای نمایش اطلاعات، محصولات، خدمات و فعالیت های یک شرکت به مخاطبان و مشتریان ایجاد می شود."
            }
            price={"4,000,000"}
            offer={false}
          />
          <PricePart
            img={"1.png"}
            title={"وبسایت فروشگاهی"}
            text={
              "به وب‌سایتی که به کاربران اجازه می‌دهد تا کالاها، خدمات و محصولات دیجیتالی فیزیکی یا مجازی را از طریق اینترنت تهیه کرده و به فروش برساند، وب سایت فروشگاهی گفته می‌شود."
            }
            price={"5,500,000"}
            offer={true}
          />
          <PricePart
            img={"2.png"}
            title={"وب اپلیکیشن"}
            text={
              "وب اپلیکیشن هایی که در بستر وب فعالیت میکنند و کاری فراتر از نمایش یک محصول یا خدمت دارند که اکثرا به کمک کتابخانه های جاوااسکریپت نوشته میشوند."
            }
            price={"8,000,000"}
            offer={false}
          />
        </div>
      </div>
      {/* <a
        target="_blank"
        href="https://t.me/cwpslxck"
        className="w-full block h-40 rounded-xl my-4 hodhod text-4xl"
      >
        <div className="h-full w-full from-neutral-800 to-neutral-800/80 bg-gradient-to-b rounded-xl">
          <div className="w-full h-full bg-center bg-contain bg-no-repeat bg-[url('/banner.png')]"></div>
        </div>
      </a> */}
    </div>
  );
}

export default Prices;
