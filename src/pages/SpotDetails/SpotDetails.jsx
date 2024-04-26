import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaGlobe, FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import { LuUsers2 } from "react-icons/lu";
const SpotDetails = () => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <div className="card card-compact">
        <div className="relative">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
              className="rounded-t-2xl w-full"
            />
          </figure>
          <span className="absolute top-2 right-4 bg-color-primary px-3 py-1 inline-block rounded-md text-sm text-white">
            Winter
          </span>
        </div>
        <div className="p-2 md:p-6 bg-white ">
          <div className="flex md:flex-row flex-col gap-5 md:justify-between md:items-center border-b pb-4">
            <div className="md:space-y-2">
              <h2 className="text-xl md:text-4xl font-semibold text-color-sd">
                Lorem ipsum dolor sit amet, consectetur adipisicing
              </h2>
              <p className="flex gap-2 items-center">
                <FaLocationDot className="text-color-primary text-base" />{" "}
                <span className="text-base">Main street, Brooklyn, NY</span>
              </p>
            </div>
            <div className="md:space-y-2">
              <p className="flex gap-2 items-center text-xl md:text-4xl font-semibold">
                <span className="text-color-primary">$400</span>
              </p>
              <p className="md:text-xl text-sm text-color-secondary font-semibold">
                Per Person
              </p>
            </div>
          </div>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
              <p className="text-base text-color-opacity">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                vero fuga sint minima eligendi, iste officia. Dolore, aperiam
                sint. Dicta corporis, suscipit incidunt dolore nisi amet earum
                deleniti labore ipsum recusandae totam excepturi minus animi
                cumque, dolorem ad sunt! Tenetur voluptatibus praesentium
                doloremque quasi nihil, ut provident dolores quidem? Sequi illum
                aut natus minima blanditiis hic similique, odio, ipsam assumenda
                repellendus suscipit illo ipsa? Neque repudiandae ipsum
                accusantium quidem nulla at odio veniam consectetur explicabo
                aspernatur rem modi nobis, cum praesentium aliquid recusandae
                amet harum accusamus ullam soluta, exercitationem natus!
                Architecto laudantium deleniti necessitatibus a omnis iure
                voluptas, non natus!
              </p>
              <div className="flex gap-4 flex-wrap mt-3">
                <p className="flex gap-2 items-center">
                  <MdOutlineWatchLater className="text-color-primary text-base" />{" "}
                  <span className="text-base">5 Days</span>
                </p>
                <p className="flex gap-2 items-center">
                  <LuUsers2 className="text-color-primary text-base" />{" "}
                  <span className="text-base">12</span>
                </p>
                <p className="flex gap-2 items-center">
                  <FaGlobe className="text-color-primary text-base" />{" "}
                  <span className="text-base">Bangladesh</span>
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
                          <span className="text-base">Additional Services</span>
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
      </div>
    </div>
  );
};

export default SpotDetails;
