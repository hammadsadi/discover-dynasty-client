import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SpotCard from "../../components/SportCard/SpotCard";
import { apiBaseUrl } from "../../utils/baseUrl";
import { useState } from "react";

const AllTouristsSpot = () => {
  const spotData = useLoaderData();
  const [spots, setSpots] = useState(spotData);

  // Hnadle Soring
  const handleSort = (e) => {
    const cost = parseInt(e.target.value);
    fetch(`${apiBaseUrl}/sorting/${cost}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  };
  return (
    <div>
      {/* All Tourists Spots */}
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0">
        <SectionTitle
          title={"All Tourists Spots"}
          subTitle={"Unveil Hidden Gems Explore Our Must-See Tourist Spots "}
        />
        <div className="max-w-64 mx-auto mb-5">
          <div className="space-y-1 text-sm">
            <label
              htmlFor="countryName"
              className="block text-base text-slate-200 font-medium"
            >
              Sort By Cost
            </label>
            <select
              className="select w-full px-4 py-3 rounded-md border text-slate-300 bg-slate-900  focus:outline-color-primary "
              name="countryName"
              onChange={handleSort}
            >
              <option disabled selected>
                Sort
              </option>
              <option value="300" className="">
                Average Cost Under 300$
              </option>
              <option value="500">Average Cost Under 500$</option>
              <option value="1000">Average Cost Under 1000$</option>
              <option value="1500">Average Cost Under 1500$</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {spots.map((data, idx) => (
            <SpotCard key={data._id} spot={data} idx={idx} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllTouristsSpot;
