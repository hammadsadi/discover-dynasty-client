import { Link } from "react-router-dom";

const Countries = ({ country }) => {
  console.log(country);
  return (
    <Link to="/">
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800 border border-slate-50">
        <img
          src={country?.photoURL}
          alt=""
          className="h-80 dark:bg-gray-500 aspect-video"
        />
        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
          <span className="text-xs uppercase dark:text-gray-600 bg-color-primary w-fit py-2 px-5 text-white">
            {country?.countryName}
          </span>
          <p className="my-6 dark:text-gray-600">
            {country?.shortDescription.slice(0, 250)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Countries;
