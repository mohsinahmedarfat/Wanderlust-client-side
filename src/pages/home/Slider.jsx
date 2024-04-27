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
          <img className="w-full flex items-center" src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full flex items-center" src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full flex items-center" src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full flex items-center" src={slider4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
