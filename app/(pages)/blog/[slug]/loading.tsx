export default function Loading() {
  return (
    <div className="max-w-4xl rtl mx-auto px-4 pb-8">
      <div>
        <header className="pb-8">
          <h1 className="h-12 w-2/3 mb-6 skeleton"></h1>
          <div className="flex items-center justify-between mb-4">
            <div className="w-1/3 h-10 skeleton"></div>
          </div>
        </header>

        <div className="w-full h-[40dvh] skeleton">
        </div>
      </div>
    </div>
  );
}
