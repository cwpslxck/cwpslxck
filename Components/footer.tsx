import Link from "next/link";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import { LuNotebookText } from "react-icons/lu";

function Footer() {
  return (
    <div className="w-full px-2 md:px-0 right-0 left-0 pb-4 z-50 flex justify-center fixed bottom-0 bg-gradient-to-b from-transparent to-white">
      <div className="bg-white/70 px-4 border text-black max-w-xl text-xl border-black/10 backdrop-blur-xl rounded-full h-14 w-full flex justify-between items-center">
        <Link
          title="Visit home page"
          className="size-12 rounded-full flex items-center justify-center"
          href={"/"}
        >
          <GrHomeRounded />
        </Link>
        <Link
          title="Visit blog page"
          className="size-12 rounded-full flex items-center justify-center"
          href={"/blog"}
        >
          <LuNotebookText />
        </Link>
        <Link
          title="Visit my Github"
          className="size-12 rounded-full flex items-center justify-center"
          target="_blank"
          href={"https://github.com/cwpslxck"}
        >
          <BsGithub />
        </Link>
        <Link
          title="Visit my LinkedIn"
          className="size-12 rounded-full flex items-center justify-center"
          target="_blank"
          href={"https://www.linkedin.com/in/aminzare2005/"}
        >
          <FiLinkedin />
        </Link>
        <Link
          title="Visit my X (Twitter)"
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
