import { useLoaderData } from "react-router-dom";
import Spot from "../../allSpot/Spot";

const CountrySpots = () => {
  const countrySpots = useLoaderData();
  console.log(countrySpots);

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countrySpots.map((touristSpot) => (
          <Spot key={touristSpot._id} touristSpot={touristSpot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default CountrySpots;
