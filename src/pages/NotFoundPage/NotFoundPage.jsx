import { Link, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-3">
      <h2 className="text-3xl text-color-secondary md:text-5xl">Sorry</h2>
      <h3 className="text-2xl text-color-secondary md:text-3xl">
        {error.status} {error.statusText}
      </h3>
      <Link
        to="/"
        className="btn bg-color-primary text-white font-medium capitalize border-none hover:border-none text-base hover:bg-color-primary "
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
