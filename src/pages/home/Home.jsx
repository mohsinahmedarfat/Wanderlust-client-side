import { ScrollRestoration } from "react-router-dom";
import Booking from "./Booking";
import Slider from "./Slider";
import TouristSpots from "./TouristSpots";
import Travelers from "./Travelers";

const Home = () => {
  return (
    <div className="space-y-36 my-10">
      <ScrollRestoration></ScrollRestoration>
      <Slider></Slider>
      <TouristSpots></TouristSpots>
      <Booking></Booking>
      <Travelers></Travelers>
    </div>
  );
};

export default Home;
