import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="rtl min-h-[60vh] flex flex-col justify-center items-center gap-4">
      <p className="text-6xl font-bold mb-4">پست پیدا نشد!</p>
      <p className="text-center">
        ممکنه پست پاک شده باشه یا به آدرس دیگه ای منتقل شده باشه. <br />
        چند لحظه دیگه دوباره امتحان کن!
      </p>
      <div className="flex gap-2">
        <Link
          title="Visit blog page"
          href={"/blog"}
          className="bg-black text-white px-6 rounded py-2"
        >
          بلاگ
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
