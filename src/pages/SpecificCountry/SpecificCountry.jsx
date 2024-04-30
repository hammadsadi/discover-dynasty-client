import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { apiBaseUrl } from "../../utils/baseUrl";
import { useNavigation, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import SpecificSingleCountry from "../../components/SpecificSingleCountry/SpecificSingleCountry";

const SpecificCountry = () => {
  const [relatedCountries, setRelatedCountries] = useState([]);
  const navigation = useNavigation();
  const { country } = useParams();

  //   Get Specific Countries
  useEffect(() => {
    fetch(`${apiBaseUrl}/counties/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setRelatedCountries(data);
        console.log(data);
      });
  }, [country]);
  if (navigation.state === "loading") {
    return <Loader />;
  }
  return (
    <div>
      {/* Tourists Spots Section */}
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0 ">
        <div>
          <SectionTitle title={"Country Related Spots"} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols- lg:grid-cols-4 gap-5">
          {/* {relatedCountries.map((data) => (
            <SpecificSingleCountry
              key={data._id}
              spot={data}
              isCountry={true}
              isDesc={true}
            />
          ))} */}
          {relatedCountries.map((data) => (
            <SpecificSingleCountry
              key={data._id}
              spot={data}
              isCountry={true}
              isDesc={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SpecificCountry;
