import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { LuNotebookText } from "react-icons/lu";

function Footer() {
  return (
    <div className="w-full right-0 left-0 z-50 flex justify-center fixed bottom-0 bg-gradient-to-b from-transparent p-2 to-white">
      <div className="bg-white/80 border text-black max-w-xl px-6 text-xl border-black/10 backdrop-blur-xl rounded-full h-14 w-full flex justify-between items-center">
        <Link href={"/"}>
          <GrHomeRounded />
        </Link>
        <Link href={"/blog"}>
          <LuNotebookText />
        </Link>
        <Link target="_blank" href={"https://github.com/cwpslxck"}>
          <BsGithub />
        </Link>
        <Link target="_blank" href={"https://instagram.com/cwpslxck"}>
          <BsInstagram />
        </Link>
        <Link target="_blank" href={"https://github.com/cwpslxck"}>
          <BsTwitterX />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
