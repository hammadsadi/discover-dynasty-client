import { FaLocationDot } from "react-icons/fa6";
import { FaCircleDollarToSlot } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { LuUsers2 } from "react-icons/lu";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const SpotDetails = () => {
  return (
    <div className="container mx-auto ">
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
          <div className="pt-4">
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
              aspernatur rem modi nobis, cum praesentium aliquid recusandae amet
              harum accusamus ullam soluta, exercitationem natus! Architecto
              laudantium deleniti necessitatibus a omnis iure voluptas, non
              natus!
            </p>
            <div className="">
              <p className="flex gap-2 items-center">
                <MdOutlineWatchLater className="text-color-primary text-base" />{" "}
                <span className="text-base">5 Days</span>
              </p>
              <p className="flex gap-2 items-center">
                <LuUsers2 className="text-color-primary text-base" />{" "}
                <span className="text-base">12</span>
              </p>
            </div>
          </div>

          <div>
            <div>booking</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
