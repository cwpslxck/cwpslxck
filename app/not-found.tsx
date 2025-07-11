import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className=" min-h-[60vh] flex flex-col justify-center items-center gap-4">
      <p className="text-8xl font-black">404</p>
      <p>Page doesn't found</p>
      <div className="flex gap-2">
        <Link href={"/"} className="bg-black text-white px-6 rounded py-2">
          Home
        </Link>
        <Link href={"/blog"} className="border px-6 rounded py-2">
          Blog
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
