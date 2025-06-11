import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="rtl min-h-[60vh] flex flex-col justify-center items-center gap-8">
      <p className="text-6xl font-bold">پست پیدا نشد!</p>
      <div className="flex gap-2">
        <Link href={"/blog"} className="bg-black text-white px-6 rounded py-2">
          بلاگ
        </Link>
        <Link href={"/"} className="border px-6 rounded py-2">
          خانه
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
