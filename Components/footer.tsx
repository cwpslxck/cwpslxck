import {
  HouseIcon,
  ImagesIcon,
  LinkedinIcon,
  NotebookTextIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa6";
import { PiTiktokLogoBold } from "react-icons/pi";
import { RiTiktokLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="w-full px-2 md:px-0 right-0 left-0 pb-4 z-50 flex justify-center fixed bottom-0 bg-gradient-to-b from-transparent to-white">
      <div className="bg-white/5 px-6 border text-black max-w-xl text-xl border-black/10 backdrop-blur-xl rounded-full h-14 w-full flex justify-between items-center">
        <Link
          title="Visit home page"
          className="size-12 rounded-full flex items-center justify-center"
          href={"/"}
        >
          <HouseIcon />
        </Link>
        <Link
          title="Visit design page"
          className="size-12 rounded-full flex items-center justify-center"
          href={"/design"}
        >
          <ImagesIcon />
        </Link>
        <Link
          title="Visit my Tiktok"
          className="size-12 rounded-full flex items-center justify-center"
          target="_blank"
          href={"/tiktok"}
        >
          <RiTiktokLine size={28} />
        </Link>
        <Link
          title="Visit my LinkedIn"
          className="size-12 rounded-full flex items-center justify-center"
          target="_blank"
          href={"/linkedin"}
        >
          <LinkedinIcon />
        </Link>
        <Link
          title="Visit my X (Twitter)"
          className="size-12 rounded-full flex items-center justify-center"
          target="_blank"
          href={"/x"}
        >
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
