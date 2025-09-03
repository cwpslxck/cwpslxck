import { GALLERY_ITEMS } from "@/constants/gallery";
import Image from "next/image";

export default async function GalleryPage() {
  return (
    <div className="px-5 py-8">
      <div className="columns-2 space-y-4 gap-4">
        {GALLERY_ITEMS.map((item, i) => (
          <div
            key={i}
            className="w-full flex gap-2 flex-col break-inside-avoid"
          >
            <Image
              alt={item.title}
              src={item.url}
              width={200}
              height={200}
              className="w-full h-auto rounded-xl"
              draggable="false"
              loading="lazy"
            />
            {/* {item?.stats && (
              <div className="h-7 rounded-md w-fit bg-black text-white px-3">
                {item?.stats}
              </div>
            )} */}
          </div>
        )).reverse()}
      </div>
    </div>
  );
}
