import { ScrollRestoration } from "react-router-dom";
import Booking from "./Booking";
import Slider from "./Slider";
import TouristSpots from "./TouristSpots";
import Travelers from "./Travelers";
import { Fade, Slide } from "react-awesome-reveal";
import Countries from "./countries/Countries";

const Home = () => {
  return (
    <div className="space-y-36 my-10">
      <ScrollRestoration></ScrollRestoration>
      <Slider></Slider>
      <Fade>
        <TouristSpots></TouristSpots>
      </Fade>
      <Slide>
        <Booking></Booking>
      </Slide>
      <Fade>
        <Countries></Countries>
      </Fade>
      <Slide direction="right">
        <Travelers></Travelers>
      </Slide>
    </div>
  );
};

export default Home;
