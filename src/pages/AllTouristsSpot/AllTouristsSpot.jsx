import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SpotCard from "../../components/SportCard/SpotCard";

const AllTouristsSpot = () => {
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
          <SpotCard />
          <SpotCard />
          <SpotCard />
          <SpotCard />
          <SpotCard />
          <SpotCard />
        </div>
      </section>
    </div>
  );
};

export default AllTouristsSpot;
