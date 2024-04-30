/* eslint-disable react/no-unescaped-entities */
import slider1 from "../../assets/slider-1.jpg";
import slider2 from "../../assets/slider-2.jpg";
import slider3 from "../../assets/slider-3.jpg";
import slider4 from "../../assets/slider-4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper max-h-[500px]"
      >
        <SwiperSlide>
          <div className="relative bg-black rounded-2xl">
            <img
              className="w-full h-[500px] md:h-[400px] lg:h-[500px] rounded-2xl opacity-60"
              src={slider1}
              alt=""
            />
            <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Explore the Wonders of the World with Us!
              </h1>
              <p className="text-white">
                Embark on an unforgettable journey to discover breathtaking
                landscapes, vibrant cultures, and hidden gems across the globe.
                Let us be your guide to extraordinary adventures and
                unforgettable memories. Start your adventure today!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-black rounded-2xl">
            <img
              className="w-full h-[500px] md:h-[400px] lg:h-[500px] rounded-2xl opacity-60"
              src={slider2}
              alt=""
            />
            <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Discover Your Next Adventure
              </h1>
              <p className="text-white">
                Escape the ordinary and dive into a world of exploration and
                wonder. From majestic mountains to pristine beaches, let your
                wanderlust lead the way. Whether you seek thrill or tranquility,
                we have got the perfect destination waiting just for you. Let
                the adventure begin!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-black rounded-2xl">
            <img
              className="w-full h-[500px] md:h-[400px] lg:h-[500px] rounded-2xl opacity-60"
              src={slider3}
              alt=""
            />
            <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Unlock the World's Wonders
              </h1>
              <p className="text-white">
                Open the door to a world of enchantment and discovery. Immerse
                yourself in diverse cultures, stunning landscapes, and
                unforgettable experiences. With every journey, create memories
                that will last a lifetime. Let's unlock the wonders of the world
                together!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-black rounded-2xl">
            <img
              className="w-full h-[500px] md:h-[400px] lg:h-[500px] rounded-2xl opacity-60"
              src={slider4}
              alt=""
            />
            <div className="text-center space-y-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Journey Beyond Boundaries
              </h1>
              <p className="text-white">
                Break free from the ordinary and step into a realm of endless
                possibilities. Explore distant lands, immerse yourself in rich
                cultures, and create memories that transcend borders. Join us as
                we venture beyond boundaries and discover the beauty of our
                world, one destination at a time.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
