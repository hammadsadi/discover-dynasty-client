import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SpotCard from "../../components/SportCard/SpotCard";

const AllTouristsSpot = () => {
  const spots = useLoaderData();
  return (
    <div>
      {/* All Tourists Spots */}
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0">
        <SectionTitle
          title={"All Tourists Spots"}
          subTitle={
            "is rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. "
          }
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {spots.map((data) => (
            <SpotCard key={data._id} spot={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllTouristsSpot;
