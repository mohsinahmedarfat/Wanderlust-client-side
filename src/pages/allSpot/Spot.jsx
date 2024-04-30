import { Link } from "react-router-dom";

const Spot = ({ touristSpot }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    average_cost,
    total_visitors_per_year,
    travel_time,
    seasonality,
  } = touristSpot;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[266px] lg:h-56 xl:h-[266px]"
          src={image}
          alt="tourist spot"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{tourists_spot_name}</h2>
        <p>
          <span className="font-semibold">Average cost:</span> {average_cost}
        </p>
        <p>
          <span className="font-semibold">Total visitors per year:</span>{" "}
          {total_visitors_per_year}
        </p>
        <p>
          <span className="font-semibold">Travel time:</span> {travel_time}
        </p>
        <p>
          <span className="font-semibold">Seasonality:</span> {seasonality}
        </p>
        <div className="mt-3">
          <Link to={`/spot/${_id}`}>
            <button className="btn w-full bg-green-400 text-green-100 hover:bg-transparent hover:border hover:border-green-400 hover:text-green-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Spot;
