import { useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const AllSpot = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center mb-5 font-bold">
        See All Tourist Spots
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {touristSpots.map((touristSpot) => (
          <Spot key={touristSpot._id} touristSpot={touristSpot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default AllSpot;
