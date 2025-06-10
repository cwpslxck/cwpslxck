export default function Loading() {
  return (
    <div className="grid grid-cols-2 gap-4 px-5 py-8 rtl">
      <div className="w-full border bg-white border-black/10 rounded-md flex flex-col justify-between items-start overflow-hidden">
        {/* Thumbnail Section */}
        <div className="w-full inset-0">
          <div className="aspect-video load !rounded-none h-full"></div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-3 py-4 px-2">
          <div className="load w-2/3 mb-3">عنوان پست شماره یک</div>
          <div className="load mb-4 line-clamp-2 text-sm">
            نیست نمیست منستنم تیمنست بمنسیت بمنسیت بمنسیت بمنیستب منیستب منیست
            نمست بمنس منت منیستمنیستب منسیلمنلکمن بایمنملتکبیمنتکمنمس کیمسنبتل
            مبیست لکمنیببرمنسیذکمند
          </div>
          <div className="flex items-center justify-between">
            <time className="text-sm load px-3 py-1 !rounded-full">
              تست تست تست
            </time>
          </div>
        </div>
      </div>
      <div className="w-full border bg-white border-black/10 rounded-md flex flex-col justify-between items-start gap-4 overflow-hidden">
        {/* Thumbnail Section */}
        <div className="w-full inset-0">
          <div className="aspect-video load !rounded-none h-full"></div>
        </div>

        {/* Content Section */}
        <div className="px-2">
          <div className="flex items-center justify-between mb-2">
            <time className="text-sm load px-3 py-1 !rounded-full">
              تست تست تست
            </time>
          </div>

          <div className="load w-2/3 mb-3">عنوان پست شماره یک</div>

          <div className="load mb-4 line-clamp-2 text-sm">
            نیست نمیست منستنم تیمنست بمنسیت بمنسیت بمنسیت بمنیستب منیستب منیست
            نمست بمنس منت منیستمنیستب منسیلمنلکمن بایمنملتکبیمنتکمنمس کیمسنبتل
            مبیست لکمنیببرمنسیذکمند
          </div>
        </div>
      </div>
    </div>
  );
}
