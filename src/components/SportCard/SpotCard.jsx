import { FaLocationDot } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";

import { Link } from "react-router-dom";

const SpotCard = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl dark:bg-red-600 ">
      <div className="relative">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-t-2xl"
          />
        </figure>
        <span className="absolute top-2 right-4 bg-color-primary px-3 py-1 inline-block rounded-md text-sm text-white">
          Winter
        </span>
      </div>
      <div className="card-body bg-white relative -top-4 rounded-t-3xl  ">
        <div className="flex flex-col gap-3 border-b pb-4">
          <h2 className="text-xl font-semibold text-color-sd">
            Lorem ipsum dolor sit amet, consectetur adipisicing
          </h2>
          <p className="flex gap-2 items-center">
            <FaLocationDot className="text-color-primary text-base" />{" "}
            <span className="text-base">Main street, Brooklyn, NY</span>
          </p>
          <p className="flex gap-2 items-center">
            <FaCircleDollarToSlot className="text-color-primary text-base" />{" "}
            <span className="text-base">
              From <span className="font-bold text-color-primary">$400</span>
            </span>
          </p>
        </div>

        <div className="card-actions justify-end pt-1">
          <p className="flex gap-2 items-center">
            <MdOutlineWatchLater className="text-color-primary text-base" />{" "}
            <span className="text-base">5 Days</span>
          </p>
          <p className="flex gap-2 items-center">
            <LuUsers2 className="text-color-primary text-base" />{" "}
            <span className="text-base">12</span>
          </p>
          <Link
            to="/spot-details/76"
            className="flex items-center gap-1 text-base transition-all duration-500 hover:text-color-primary"
          >
            <span className="font-medium">View Details</span>{" "}
            <FaLongArrowAltRight className="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;
