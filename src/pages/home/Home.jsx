import Booking from "./Booking";
import Slider from "./Slider";
import TouristSpots from "./TouristSpots";

const Home = () => {
  return (
    <div className="space-y-10 my-10">
      <Slider></Slider>
      <TouristSpots></TouristSpots>
      <Booking></Booking>
    </div>
  );
};

export default Home;
