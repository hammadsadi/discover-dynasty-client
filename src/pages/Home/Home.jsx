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
import TourGuide from "../../components/TourGuide/TourGuide";
import Blog from "../../components/Blog/Blog";
import Countries from "../../components/Countries/Countries";
import { useEffect, useState } from "react";
import { apiBaseUrl } from "../../utils/baseUrl";
const Home = () => {
  const spots = useLoaderData();
  const navigation = useNavigation();
  const [countryList, setCountryList] = useState([]);

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
  let newsInfo = [
    {
      id: 1,
      title: "Sundarban National Park",
      desc: "Sundarbans National Park is a large coastal mangrove forest, shared by India and Bangladesh. The area is home to the Royal Bengal tiger, plus other endangered species such as the estuarine crocodile and Ganges River dolphin. Boats from Khulna city travel south along the river to a quiet mangrove beach at Kotka. Here, a watchtower offers views of the forest and its birds and animals. ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sundarban_Tiger.jpg/1200px-Sundarban_Tiger.jpg",
    },
    {
      id: 2,
      title: "Siem Reap Cambodia",
      desc: "Siem Reap, city, northwestern Cambodia. It is Cambodia’s second largest city, and the capital of Siem Reap province. It lies along the Siem Reap River, an artificial river created by the ancient kings of the Khmer (Cambodian) empire, and just north of Tonle Sap, the great lake at the heart of  ",
      image:
        "https://afar.brightspotcdn.com/dims4/default/87a7073/2147483647/strip/true/crop/3000x1592+0+295/resize/1440x764!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.us-west-2.amazonaws.com%2Fbrightspot%2F34%2F8c%2F0a3f548947909b5b8d79b935b03f%2Ftravelguides-siemreap-guitarphotographer-shutterstock.jpg",
    },
    {
      id: 3,
      title: "A Quick Guide to the Mekong Delta",
      desc: "Typically skipped off Vietnam itineraries, the Mekong Delta is often regarded as a vast wetland with not much to offer. Well, I’m here to convince you that it is certainly worth exploring! With nature reserves, ancient traditions and tropical islands, the Mekong Delta offers so much to see and do that you could spend weeks road tripping around. This travel guide to the Mekong Delta will help you to plan your own trip to explore the nature and culture of southern Vietnam.",
      image: "https://statics.vinpearl.com/mekong-delta-map-3_1687877161.jpeg",
    },
    {
      id: 4,
      title: "Bokor National Park",
      desc: "Preah Monivong Bokor National Park is a national park in southern Cambodia's Kampot Province that was established in 1993 and covers 1,544.58 km². In 2003, it was designated as an ASEAN Heritage Park. It is located in the Dâmrei Mountains, forming the southeastern parts of the Cardamom Mountains",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a7/84/76/phnom-bokor-national.jpg?w=1200&h=1200&s=1",
    },
  ];
  const tourGuide = [
    { id: 1, image: "image1.jpg", name: "Destination A", position: "First" },
    { id: 2, image: "image2.jpg", name: "Destination B", position: "Second" },
    { id: 3, image: "image3.jpg", name: "Destination C", position: "Third" },
  ];
  useEffect(() => {
    fetch(`${apiBaseUrl}/counties`)
      .then((res) => res.json())
      .then((data) => setCountryList(data));
  }, []);
  if (navigation.state === "loading") {
    return <Loader />;
  }
  // Get All Countries

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
              "Discover Your Next Adventure Explore Our Top Tourist Spots"
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {spots.map((data) => (
            <SpotCard key={data._id} spot={data} />
          ))}
        </div>
      </section>
      {/* Country Section */}
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0 ">
        <div>
          <SectionTitle
            title={"Explore Top Destination"}
            subTitle={
              "Embark on an Unforgettable Journey Explore Our Top Destinations"
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-4">
          {countryList?.map((country) => (
            <Countries key={country._id} country={country} />
          ))}
        </div>
      </section>
      {/* Tour Guide */}
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0 ">
        <div>
          <SectionTitle
            title={"Tour Guide"}
            subTitle={
              "Your ultimate guide to Bangkok's top attractions, hotels, dining, and events. Discover insider tips and curated itineraries for an unforgettable journey through the vibrant streets of Thailand's capital"
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <TourGuide />
          <TourGuide />
          <TourGuide />
        </div>
      </section>

      {/* News and Blogs */}
      <section className="container mx-auto my-16 md:my-24 px-2 md:px-0 ">
        <div>
          <SectionTitle
            title={"Latest News"}
            subTitle={
              "Amazing news & blog for every update from Discover Dynasty"
            }
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {newsInfo.map((news) => (
            <Blog key={news.id} news={news} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
