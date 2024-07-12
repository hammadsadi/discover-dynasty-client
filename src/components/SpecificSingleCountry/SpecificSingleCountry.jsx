import { FaLocationDot } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { FaLongArrowAltRight, FaGlobe } from "react-icons/fa";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const SpecificSingleCountry = ({ spot, idx }) => {
  return (
    <div className="bg-slate-900/20 flex flex-col justify-between">
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
        <p className="text-base text-slate-300">
          {spot?.shortDescription.slice(0, 100)}
        </p>
        <p className="flex gap-2 items-center">
          <FaGlobe className="text-color-primary text-base" />{" "}
          <span className="text-base text-slate-300">{spot?.countryName}</span>
        </p>
        <p className="flex gap-2 items-center">
          <FaLocationDot className="text-color-primary text-base" />{" "}
          <span className="text-base text-slate-300">{spot?.location}</span>
        </p>
        <p className="flex gap-2 items-center">
          <FaCircleDollarToSlot className="text-color-primary text-base" />{" "}
          <span className="text-base text-slate-300">
            From{" "}
            <span className="font-bold text-color-primary">
              ${spot?.averageCost}
            </span>
          </span>
        </p>
      </div>
      <div className="card-actions justify-end p-4">
        <Link
          to={`/spot-details/${spot?._id}`}
          className="flex items-center gap-1 text-base text-slate-300 transition-all duration-500 hover:text-color-primary"
        >
          <span className="font-medium">View Details</span>{" "}
          <FaLongArrowAltRight className="" />
        </Link>
      </div>
    </div>
  );
};
SpecificSingleCountry.propTypes = {
  spot: PropTypes.object.isRequired,
  idx: PropTypes.number,
};
export default SpecificSingleCountry;
