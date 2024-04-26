const AddTouristsSpot = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full my-4">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border">
          <h1 className="text-2xl font-bold text-center">
            Create Tourists Spot
          </h1>
          <form className="space-y-6">
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
              <input
                type="email"
                name="countryName"
                id="countryName"
                placeholder="Country Name"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
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
                id="averageCost"
                placeholder="Average Cost"
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
              >
                <option disabled selected>
                  Seasonality
                </option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
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
                id=""
                rows="2"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
                placeholder="Short Description"
              ></textarea>
            </div>

            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
