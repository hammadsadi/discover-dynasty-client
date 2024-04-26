// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import Hero from "../../components/Hero/Hero";
const Home = () => {
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

  return (
    <div>
      {/* Hero */}
      <section>
        <div>
          <Swiper
            loop={true}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
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

      {/* UUUUUU */}
      <section>h2lorem4</section>
    </div>
  );
};

export default Home;
