import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";

const UpdateSpot = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState({});
  console.log(spot);

  // Get Single Spot
  useEffect(() => {
    fetch(`${apiBaseUrl}/update-my-spot-list/${id}`)
      .then((res) => res.json())
      .then((data) => setSpot(data));
  }, [id]);

  const handleUpdateTouristsSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const touristsSpotName = form.touristsSpotName.value;
    const photoURL = form.photoURL.value;
    const countryName = form.countryName.value;
    console.log(countryName);
    const location = form.location.value;
    const averageCost = parseInt(form.averageCost.value);
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const shortDescription = form.shortDescription.value;

    const spotInfo = {
      touristsSpotName,
      photoURL,
      countryName,
      location,
      averageCost,
      seasonality,
      travelTime,
      totalVisitorsPerYear,
      shortDescription,
    };
    // Send Data to the server
    fetch(`${apiBaseUrl}/update-my-spot-list/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(spotInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Spot Updated Successful");
        }
      });
  };
  return (
    <div>
      <div className="flex justify-center items-center w-full my-4">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border">
          <h1 className="text-2xl font-bold text-center">
            Update Tourists Spot
          </h1>
          <form className="space-y-6" onSubmit={handleUpdateTouristsSpot}>
            {/* Tourist Spot Name */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="touristsSpotName"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Tourists Spot Name
              </label>
              <input
                type="text"
                name="touristsSpotName"
                defaultValue={spot?.touristsSpotName}
                id="touristsSpotName"
                placeholder=" Tourists Spot Name"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>
            {/* Tourist Image */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="photoURL"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                defaultValue={spot?.photoURL}
                id="photoURL"
                placeholder="photo URL"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>

            {/* Country Name */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="countryName"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Country Name
              </label>
              <select
                className="select w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary "
                name="countryName"
                defaultValue={spot.countryName}
              >
                <option disabled selected>
                  Chose Country
                </option>
                <option
                  value="bangladesh"
                  selected={spot.countryName === "bangladesh" ? true : false}
                >
                  Bangladesh
                </option>
                <option
                  value="thailand"
                  selected={spot.countryName === "thailand" ? true : false}
                >
                  Thailand
                </option>
                <option
                  value="indonesia"
                  selected={spot.countryName === "indonesia" ? true : false}
                >
                  Indonesia
                </option>
                <option
                  value="malaysia"
                  selected={spot.countryName === "malaysia" ? true : false}
                >
                  Malaysia
                </option>
                <option
                  value="vietnam"
                  selected={spot.countryName === "vietnam" ? true : false}
                >
                  Vietnam
                </option>
                <option
                  value="cambodia"
                  selected={spot.countryName === "cambodia" ? true : false}
                >
                  Cambodia
                </option>
              </select>
            </div>

            {/* Location */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="location"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={spot?.location}
                id="location"
                placeholder="Location"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>

            {/* Average Cost */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="averageCost"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Average Cost
              </label>
              <input
                type="number"
                name="averageCost"
                defaultValue={spot?.averageCost}
                id="averageCost"
                placeholder="Average Cost"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>
            {/* Seasonality */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="seasonality"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Seasonality
              </label>
              <select
                className="select w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary "
                name="seasonality"
                defaultValue={spot?.seasonality}
              >
                <option disabled selected>
                  Seasonality
                </option>
                <option
                  value="summer"
                  selected={spot.seasonality === "summer" ? true : false}
                >
                  Summer
                </option>
                <option
                  value="winter"
                  selected={spot.seasonality === "winter" ? true : false}
                >
                  Winter
                </option>
              </select>
            </div>

            {/* Travel Time*/}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="travelTime"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Travel Time
              </label>
              <input
                type="number"
                name="travelTime"
                defaultValue={spot?.travelTime}
                id="travelTime"
                placeholder="Travel Time"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>

            {/* Total Visitors Per Year*/}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="totalVisitorsPerYear"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Total Visitors Per Year
              </label>
              <input
                type="number"
                name="totalVisitorsPerYear"
                defaultValue={spot?.totalVisitorsPerYear}
                id="totalVisitorsPerYear"
                placeholder="Total Visitors Per Year"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>
            {/* short description */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="shortDescription"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Short Description
              </label>
              <textarea
                name="shortDescription"
                defaultValue={spot?.shortDescription}
                id=""
                rows="2"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
                placeholder="Short Description"
              ></textarea>
            </div>

            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;
