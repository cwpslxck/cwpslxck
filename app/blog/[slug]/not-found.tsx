// app/blog/[slug]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          مطلب یافت نشد
        </h2>
        <p className="text-gray-600 mb-8">
          متأسفانه مطلب مورد نظر شما یافت نشد. ممکن است حذف شده یا آدرس آن تغییر
          کرده باشد.
        </p>
        <div className="space-x-4 space-x-reverse">
          <Link
            href="/blog"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            بازگشت به بلاگ
          </Link>
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}
