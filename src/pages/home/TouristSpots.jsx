import { useEffect, useState } from "react";
import Spot from "../allSpot/Spot";
import { Link } from "react-router-dom";

const TouristSpots = () => {
  const [touristSpots, setTouristSpots] = useState([]);

  useEffect(() => {
    fetch("https://b9a10-wanderlust-server.vercel.app/touristSpots")
      .then((res) => res.json())
      .then((data) => setTouristSpots(data));
  }, []);

  return (
    <div className="my-10 space-y-6">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center">Wanderlust Wonders</h2>
        <p className="text-center max-w-xl mx-auto mt-5">
          Uncover the beauty of our destination top tourist spots with
          Wanderlust Wonders. Let your curiosity guide you as you explore these
          enchanting locations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {touristSpots.slice(0, 6).map((touristSpot) => (
          <Spot key={touristSpot._id} touristSpot={touristSpot}></Spot>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/allSpot">
          <button className="btn mt-6 bg-green-400 text-green-100 hover:bg-transparent hover:border hover:border-green-400 hover:text-green-400 font-bold">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSpots;
