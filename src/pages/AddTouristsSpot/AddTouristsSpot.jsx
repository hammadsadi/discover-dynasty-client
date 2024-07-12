import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { apiBaseUrl } from "../../utils/baseUrl";
import toast from "react-hot-toast";
import { useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";
import { makeUserName, uploadImageToCloudinary } from "../../utils/helper";
import { Fade } from "react-awesome-reveal";
import { ImSpinner10 } from "react-icons/im";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  const [uploaderSpin, setUploaderSpin] = useState(false);
  const navigation = useNavigation();
  const handleCreateTouristsSpot = async (e) => {
    e.preventDefault();
    const form = e.target;
    const touristsSpotName = form.touristsSpotName.value;
    const photoURL = form.photoURL.files[0];
    const countryName = form.countryName.value;
    const location = form.location.value;
    const averageCost = parseInt(form.averageCost.value);
    const seasonality = form.seasonality.value;
    const travelTime = form.travelTime.value;
    const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
    const shortDescription = form.shortDescription.value;
    const userEmail = user.email || "Not Set";
    const userName = makeUserName(user.displayName);

    if (
      !touristsSpotName ||
      !photoURL ||
      !countryName ||
      !location ||
      !averageCost ||
      !seasonality ||
      !travelTime ||
      !totalVisitorsPerYear ||
      !shortDescription
    ) {
      return toast.error("All Fields Area Required!");
    }
    try {
      setUploaderSpin(true);
      const imgUpload = await uploadImageToCloudinary(photoURL);
      const spotInfo = {
        touristsSpotName,
        photoURL: imgUpload.data.secure_url,
        countryName,
        location,
        averageCost,
        seasonality,
        travelTime,
        totalVisitorsPerYear,
        shortDescription,
        userEmail,
        userName,
      };
      // Send Data to Client
      fetch(`${apiBaseUrl}/spot`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(spotInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Spot Created Successful");
            setUploaderSpin(false);
            e.target.reset();
          } else {
            setUploaderSpin(false);
          }
        });
    } catch (error) {
      setUploaderSpin(false);
      console.log(error.message);
    }
  };

  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      <Fade>
        <div className="flex justify-center items-center w-full my-4">
          <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-800 bg-slate-900/20">
            <h1 className="text-2xl font-bold text-slate-200 text-center">
              Create Tourists Spot
            </h1>
            <form className="space-y-6" onSubmit={handleCreateTouristsSpot}>
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
                >
                  <option disabled selected>
                    Chose Country
                  </option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="thailand">Thailand</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="vietnam">Vietnam</option>
                  <option value="cambodia">Cambodia</option>
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
                  id="location"
                  placeholder="Location"
                  className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300 outline-none"
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
                  id="averageCost"
                  placeholder="Average Cost"
                  className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300 outline-none"
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
                  className="select w-full px-4 py-3 rounded-md border text-slate-300 bg-[#121212]  focus:outline-color-primary"
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
                  className="block text-slate-300 text-base font-medium"
                >
                  Travel Time
                </label>
                <input
                  type="number"
                  name="travelTime"
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
                  id=""
                  rows="2"
                  className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300 outline-none"
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
                  <span> Add</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default AddTouristsSpot;
