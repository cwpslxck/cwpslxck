import Link from "next/link";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { LuNotebookText } from "react-icons/lu";

function Footer() {
  return (
    <div className="w-full right-0 left-0 pb-4 z-50 flex justify-center fixed bottom-0 bg-gradient-to-b from-transparent to-white">
      <div className="bg-white/70 px-4 border text-black max-w-xl text-xl border-black/10 backdrop-blur-xl rounded-full h-14 w-full flex justify-between items-center">
        <Link
          className="size-12 rounded-full flex items-center justify-center"
          href={"/"}
        >
          <GrHomeRounded />
        </Link>
        <Link
          className="size-12 rounded-full flex items-center justify-center"
          href={"/blog"}
        >
          <LuNotebookText />
        </Link>
        <Link
          className="size-12 rounded-full flex items-center justify-center"
          target="_blank"
          href={"https://github.com/cwpslxck"}
        >
          <BsGithub />
        </Link>
        <Link
          className="size-12 rounded-full flex items-center justify-center"
          target="_blank"
          href={"https://x.com/cwpslxck"}
        >
          <BsTwitterX />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
