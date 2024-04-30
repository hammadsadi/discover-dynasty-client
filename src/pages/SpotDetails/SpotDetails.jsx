import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaGlobe, FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { LuUsers2 } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../utils/baseUrl";
import { Fade } from "react-awesome-reveal";
const SpotDetails = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState({});

  // Get Single Spot
  useEffect(() => {
    fetch(`${apiBaseUrl}/spot/${id}`)
      .then((res) => res.json())
      .then((data) => setSpot(data));
  }, [id]);

  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="card card-compact">
        <div className="relative">
          <Fade>
            <figure>
              <img src={spot?.photoURL} alt="Shoes" className=" w-full" />
            </figure>
            <span className="absolute top-2 right-4 bg-color-primary px-3 py-1 inline-block rounded-md text-sm text-white">
              {spot?.seasonality}
            </span>
          </Fade>
        </div>
        <Fade direction="top">
          <div className="p-2 md:p-6 bg-white ">
            <div className="flex md:flex-row flex-col gap-5 md:justify-between md:items-center border-b pb-4">
              <div className="md:space-y-2">
                <h2 className="text-xl md:text-4xl font-semibold text-color-sd">
                  {spot?.touristsSpotName}
                </h2>
                <p className="flex gap-2 items-center">
                  <FaLocationDot className="text-color-primary text-base" />{" "}
                  <span className="text-base">{spot?.location}</span>
                </p>
              </div>
              <div className="md:space-y-2">
                <p className="flex gap-2 items-center text-xl md:text-4xl font-semibold">
                  <span className="text-color-primary">
                    ${spot?.averageCost}
                  </span>
                </p>
                <p className="md:text-xl text-sm text-color-secondary font-semibold">
                  Per Person
                </p>
              </div>
            </div>
            <div className="pt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-3">
                <p className="text-base text-color-opacity">
                  {spot?.shortDescription}
                </p>
                <div className="flex gap-4 flex-wrap mt-3">
                  <p className="flex gap-2 items-center">
                    <MdOutlineWatchLater className="text-color-primary text-base" />{" "}
                    <span className="text-base">5 {spot?.travelTime}</span>
                  </p>
                  <p className="flex gap-2 items-center">
                    <LuUsers2 className="text-color-primary text-base" />{" "}
                    <span className="text-base">
                      {spot?.totalVisitorsPerYear}
                    </span>
                  </p>
                  <p className="flex gap-2 items-center">
                    <FaGlobe className="text-color-primary text-base" />{" "}
                    <span className="text-base">{spot?.countryName}</span>
                  </p>
                </div>
                <div className="mt-5 border-t pt-4">
                  <h2 className="text-2xl font-bold text-color-secondary mb-2">
                    Included/Exclude
                  </h2>
                  <div className="flex flex-wrap gap-10">
                    {/* Include Item */}
                    <div>
                      <ul>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <FaCheck className="text-color-primary text-base" />{" "}
                            <span className="text-base">
                              Pick and Drop Services
                            </span>
                          </p>
                        </li>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <FaCheck className="text-color-primary text-base" />{" "}
                            <span className="text-base">1 Meal Per Day</span>
                          </p>
                        </li>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <FaCheck className="text-color-primary text-base" />{" "}
                            <span className="text-base">
                              Cruise Dinner & Music Event
                            </span>
                          </p>
                        </li>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <FaCheck className="text-color-primary text-base" />{" "}
                            <span className="text-base">
                              Visit 7 Best Places in the City With Group
                            </span>
                          </p>
                        </li>
                      </ul>
                    </div>
                    {/* Exclude Item */}
                    <div>
                      <ul>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <ImCross className="text-color-primary text-base" />{" "}
                            <span className="text-base">
                              Additional Services
                            </span>
                          </p>
                        </li>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <ImCross className="text-color-primary text-base" />{" "}
                            <span className="text-base">Insurance</span>
                          </p>
                        </li>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <ImCross className="text-color-primary text-base" />{" "}
                            <span className="text-base">Food & Drinks</span>
                          </p>
                        </li>
                        <li>
                          {" "}
                          <p className="flex gap-2 items-center">
                            <ImCross className="text-color-primary text-base" />{" "}
                            <span className="text-base">Tickets</span>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex justify-center items-center w-full">
                  <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border">
                    <h1 className="text-2xl font-bold text-center text-color-secondary">
                      Booking Tour
                    </h1>
                    <form className="space-y-6">
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="name"
                          className="block dark:text-gray-600 text-base text-color-sd font-medium"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="email"
                          className="block dark:text-gray-600 text-base text-color-sd font-medium"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="number"
                          className="block dark:text-gray-600 text-base text-color-sd font-medium"
                        >
                          Number
                        </label>
                        <input
                          type="number"
                          name="number"
                          id="number"
                          placeholder="Number"
                          className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
                        />
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="message"
                          className="block dark:text-gray-600 text-base text-color-sd font-medium"
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          id=""
                          rows="2"
                          className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
                        ></textarea>
                      </div>

                      <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize">
                        Book Now
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SpotDetails;
