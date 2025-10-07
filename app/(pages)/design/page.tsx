import { GALLERY_ITEMS } from "@/constants/items";
import Image from "next/image";

export default async function DesignsPage() {
  return (
    <div className="px-5 py-8 max-w-sm mx-auto">
      <div className="flex flex-col gap-4">
        {GALLERY_ITEMS.reverse().map((item, i) => (
          <div key={item.url} className="w-full flex gap-2 flex-col">
            <Image
              alt={item.title}
              src={item.url}
              width={200}
              height={200}
              className="w-full h-auto rounded-xl"
              draggable="false"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
