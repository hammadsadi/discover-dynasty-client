import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiBaseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";
import { uploadImageToCloudinary } from "../../utils/helper";
import { ImSpinner10 } from "react-icons/im";

const UpdateSpot = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState({});
  const [uploaderSpin, setUploaderSpin] = useState(false);

  // Get Single Spot
  useEffect(() => {
    fetch(`${apiBaseUrl}/update-my-spot-list/${id}`)
      .then((res) => res.json())
      .then((data) => setSpot(data));
  }, [id]);

  const handleUpdateTouristsSpot = async (e) => {
    e.preventDefault();
    const form = e.target;
    const touristsSpotName = form.touristsSpotName.value;
    const updatePhotoURL = form.photoURL.files[0];
    const countryName = form.countryName.value;
    const location = form.location.value;
    const averageCost = parseInt(form.averageCost.value);
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const shortDescription = form.shortDescription.value;

    try {
      setUploaderSpin(true);
      let updatePhoto = spot?.photoURL;
      if (updatePhotoURL) {
        const newPhoto = await uploadImageToCloudinary(updatePhotoURL);
        updatePhoto = newPhoto?.data?.secure_url;
      }

      const spotInfo = {
        touristsSpotName,
        photoURL: updatePhoto,
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
            setUploaderSpin(false);
            toast.success("Spot Updated Successful");
          } else {
            setUploaderSpin(false);
          }
        });
    } catch (error) {
      setUploaderSpin(true);
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center w-full my-4">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-900/20">
          <h1 className="text-2xl font-bold text-center text-slate-200">
            Update Tourists Spot
          </h1>
          <form className="space-y-6" onSubmit={handleUpdateTouristsSpot}>
            {/* Tourist Spot Name */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="touristsSpotName"
                className="block text-slate-300 text-base font-medium"
              >
                Tourists Spot Name
              </label>
              <input
                type="text"
                name="touristsSpotName"
                defaultValue={spot?.touristsSpotName}
                id="touristsSpotName"
                placeholder=" Tourists Spot Name"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300  outline-none"
              />
            </div>
            {/* Tourist Image */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="photoURL"
                className="block text-slate-300 text-base font-medium"
              >
                Photo URL
              </label>
              <input
                type="file"
                name="photoURL"
                id="photoURL"
                placeholder="photo URL"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 bg-[#121212] text-slate-300 outline-none"
              />
            </div>

            {/* Country Name */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="countryName"
                className="block text-slate-300 text-base font-medium"
              >
                Country Name
              </label>
              <select
                className="select w-full px-4 py-3 rounded-md border  text-slate-300 bg-[#121212] focus:outline-color-primary "
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
                className="block text-slate-300 text-base font-medium"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                defaultValue={spot?.location}
                id="location"
                placeholder="Location"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300  outline-none"
              />
            </div>

            {/* Average Cost */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="averageCost"
                className="block text-slate-300 text-base font-medium"
              >
                Average Cost
              </label>
              <input
                type="number"
                name="averageCost"
                defaultValue={spot?.averageCost}
                id="averageCost"
                placeholder="Average Cost"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300  outline-none"
              />
            </div>
            {/* Seasonality */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="seasonality"
                className="block text-slate-300 text-base font-medium"
              >
                Seasonality
              </label>
              <select
                className="select w-full px-4 py-3 rounded-md border text-slate-300 bg-[#121212]  focus:outline-color-primary "
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
                className="block text-slate-300 text-base font-medium"
              >
                Travel Time
              </label>
              <input
                type="number"
                name="travelTime"
                defaultValue={spot?.travelTime}
                id="travelTime"
                placeholder="Travel Time"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300  outline-none"
              />
            </div>

            {/* Total Visitors Per Year*/}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="totalVisitorsPerYear"
                className="block text-slate-300 text-base font-medium"
              >
                Total Visitors Per Year
              </label>
              <input
                type="number"
                name="totalVisitorsPerYear"
                defaultValue={spot?.totalVisitorsPerYear}
                id="totalVisitorsPerYear"
                placeholder="Total Visitors Per Year"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300  outline-none"
              />
            </div>
            {/* short description */}
            <div className="space-y-1 text-sm">
              <label
                htmlFor="shortDescription"
                className="block text-slate-300 text-base font-medium"
              >
                Short Description
              </label>
              <textarea
                name="shortDescription"
                defaultValue={spot?.shortDescription}
                id=""
                rows="2"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300  outline-none"
                placeholder="Short Description"
              ></textarea>
            </div>

            <button
              className={` w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize flex justify-center items-center ${
                uploaderSpin ? "bg-color-primary/30 cursor-not-allowed" : ""
              }`}
            >
              {uploaderSpin ? (
                <ImSpinner10 className="animate-spin" />
              ) : (
                <span> Update Spot</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateSpot;
