// import required modules
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import SpotCard from "../../components/SportCard/SpotCard";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../Loader/Loader";
const Home = () => {
  const spots = useLoaderData();
  const navigation = useNavigation();

  let heroInfo = [
    {
      id: 1,
      title: "Explore the Ancient Temples of Angkor Wat",
      subtitle:
        "Discover the mystique of Angkor Wat's ancient ruins, an architectural marvel spanning centuries.",
      image:
        "https://images.squarespace-cdn.com/content/v1/629b6ec76c0cc40a4e21a895/d9276351-a9a7-47ff-a4c7-16bc7eb3d774/Bayon_Temple_Angkor_Park_Cambodia_Travelynne.png",
    },
    {
      id: 2,
      title: "Dive into the Pristine Waters of Palawan",
      subtitle:
        "Experience the unparalleled beauty of Palawan's crystal-clear waters and vibrant marine life.",
      image: "palawan.jpg",
    },
    {
      id: 3,
      title: "Indulge in Street Food Delights of Penang",
      subtitle:
        "Savor the diverse flavors of Penang's bustling street food scene, a gastronomic adventure awaits!",
      image: "penang_street_food.jpg",
    },
    {
      id: 4,
      title: "Embark on a Trek through the Lush Jungles of Borneo",
      subtitle:
        "Immerse yourself in the untouched wilderness of Borneo's rainforests, home to rare wildlife and breathtaking landscapes.",
      image: "borneo_jungle.jpg",
    },
  ];
  if (navigation.state === "loading") {
    return <Loader />;
  }

  return (
    <div>
      {/* Hero */}
      <section>
        <div>
          <Swiper
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {heroInfo.map((hData) => (
              <SwiperSlide key={hData.id}>
                <Hero />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Tourists Spots Section */}
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0 ">
        <div>
          <SectionTitle
            title={"Tourists Spots"}
            subTitle={
              "is rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus. Suspendissendt blandit interdum. Sed pellentesque at nunc eget consectetur."
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {spots.map((data) => (
            <SpotCard key={data._id} spot={data} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
