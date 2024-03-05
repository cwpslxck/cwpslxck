import { Link, useRouteError } from "react-router-dom";
import Blur1 from "./parts/blur1";
import { TbError404 } from "react-icons/tb";
import Header from "./parts/header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-full w-full">
      <Blur1 />
      <Header />
      <div className="h-60 w-full flex items-end justify-center">
        <div className="flex justify-center items-center flex-col">
          <TbError404 size={40} />
          <h3 className="mb-4">صفحه مورد نظر شما پیدا نشد :(</h3>
          <div>
            <button>
              <Link
                to={`/`}
                className="px-4 py-2 rounded-xl text-neutral-950 bg-yellow-300"
              >
                پورتفولیو وب
              </Link>
            </button>
            <button>
              <Link
                to={`/edit`}
                className="px-4 py-2 rounded-xl text-neutral-950 bg-yellow-300"
              >
                پورتفولیو ادیت
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
