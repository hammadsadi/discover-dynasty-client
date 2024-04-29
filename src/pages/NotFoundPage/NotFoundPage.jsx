import { Link, useRouteError } from "react-router-dom";
import Lottie from "lottie-react";
import notFound from "../../assets/notfound.json";
const NotFoundPage = () => {
  const error = useRouteError();
  const customStyle = {
    width: "300px",
  };
  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-3">
      <Lottie animationData={notFound} loop={true} style={customStyle} />
      <h3 className="text-2xl text-color-secondary md:text-3xl">
        {error.statusText}
      </h3>
      <Link
        to="/"
        className="  text-black font-medium capitalize border-none hover:border-none text-base hover:text-color-primary hover:underline"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
