import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const Countries = ({ country, idx }) => {
  return (
    // <Link to={`/countries/${country.countryName}`}>
    //   <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800 border border-slate-50">
    //     <img
    //       src={country?.photoURL}
    //       alt=""
    //       className="h-80 dark:bg-gray-500 aspect-video"
    //     />
    //     <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
    //       <span className="text-xs uppercase dark:text-gray-600 bg-color-primary w-fit py-2 px-5 text-white">
    //         {country?.countryName}
    //       </span>
    //       <p className="my-6 dark:text-gray-600">
    //         {country?.shortDescription.slice(0, 250)}
    //       </p>
    //     </div>
    //   </div>
    // </Link>
    <Fade>
      <Link to={`/countries/${country.countryName}`}>
        <div
          className={`flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row ${
            idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } p-4 lg:p-8 bg-slate-900/30`}
        >
          <img
            src={country?.photoURL}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 ">
            <span className="text-xs uppercase  bg-color-primary w-fit py-2 px-5 text-white">
              {country?.countryName}
            </span>
            <p className="my-6 text-slate-200">
              {country?.shortDescription.slice(0, 250)}
            </p>
          </div>
        </div>
      </Link>
    </Fade>
  );
};
Countries.propTypes = {
  country: PropTypes.object,
  idx: PropTypes.number,
};
export default Countries;
