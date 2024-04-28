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
      title: "Sundarban National Park",
      subtitle:
        "Sundarban National park is one of the heritage site in sundarban",
      image:
        "https://www.holidify.com/images/cmsuploads/compressed/Beauty_of_sundarban_04_20220509173753.jpg",
    },
    {
      id: 2,
      title: "Tour To Cox's Bazar",
      subtitle:
        "Back to coxs bazar sea beach. Enjoy Sunset and night beach, Overnight at Cox's Bazar.",
      image:
        "https://cdn.bangladeshscenictours.com/wp-content/uploads/2019/11/Exploring-Coxs-Bazar.jpg",
    },
    {
      id: 3,
      title: "Bustling Bangkok A Vibrant City Exploration",
      subtitle:
        "Embark on an unforgettable journey through Bangkok, where ancient traditions meet modern marvels.",
      image:
        "https://airfare.com.bd/wp-content/uploads/2023/04/bangkok-tour-package.jpg",
    },
    {
      id: 4,
      title: "Borobudur Sunrise from setumbu Hill",
      subtitle:
        "Check out three of the best sites in Yogyakarta on this trip to Merapi Volcano, Prambanan Temples, and Borobudur Temple.",
      image:
        "https://www.novo-monde.com/app/uploads/2023/05/yogyakarta-borobudur3-1024x680.jpg",
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
              delay: 9000,
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
                <Hero heroData={hData} />
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
