import { FaLocationDot } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import PropTypes from "prop-types";
// import { Fade } from "react-awesome-reveal";
import postDefaultImage from "../../assets/images/image-not-found.jpg";

import { Link } from "react-router-dom";

const SpotCard = ({ spot, idx }) => {
  console.log(spot?.photoURL);
  // console.log(spot);
  return (
    <div className=" bg-slate-900/30  flex flex-col justify-between rounded-t-2xl">
      <div className="relative">
        <figure>
          <img
            src={spot?.photoURL}
            alt={spot.touristsSpotName}
            className="rounded-t-2xl"
          />
        </figure>
        <span className="absolute top-2 right-4 bg-color-primary px-3 py-1 inline-block rounded-md text-sm text-white">
          {spot?.seasonality}
        </span>
      </div>

      <div className="flex flex-col gap-3 border-b p-4 flex-grow">
        <h2 className="text-xl font-semibold text-slate-200">
          {spot?.touristsSpotName}
        </h2>

        <p className="flex gap-2 items-center">
          <FaLocationDot className="text-color-primary text-base" />{" "}
          <span className="text-base">{spot?.location}</span>
        </p>
        <p className="flex gap-2 items-center">
          <FaCircleDollarToSlot className="text-color-primary text-base" />{" "}
          <span className="text-base">
            From{" "}
            <span className="font-bold text-color-primary">
              ${spot?.averageCost}
            </span>
          </span>
        </p>
      </div>

      <div className="card-actions justify-between p-4">
        <p className="flex gap-2 items-center">
          <MdOutlineWatchLater className="text-color-primary text-base" />{" "}
          <span className="text-base"> {spot?.travelTime}</span>
        </p>
        <p className="flex gap-2 items-center">
          <LuUsers2 className="text-color-primary text-base" />{" "}
          <span className="text-base">{spot?.totalVisitorsPerYear}</span>
        </p>

        <Link
          to={`/spot-details/${spot?._id}`}
          className="flex items-center gap-1 text-base transition-all duration-500 hover:text-color-primary"
        >
          <span className="font-medium">View Details</span>{" "}
          <FaLongArrowAltRight className="" />
        </Link>
      </div>
    </div>
  );
};

SpotCard.propTypes = {
  spot: PropTypes.object.isRequired,
  idx: PropTypes.number,
};

export default SpotCard;
