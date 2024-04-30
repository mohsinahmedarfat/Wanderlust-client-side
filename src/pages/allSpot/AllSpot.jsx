import { MdKeyboardArrowRight } from "react-icons/md";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import Spot from "./Spot";

const AllSpot = () => {
  const touristSpots = useLoaderData();
  console.log(touristSpots);

  const handleAscending = () => {
    touristSpots.sort(function (a, b) {
      if (a.average_cost > b.average_cost) {
        return 1;
      } else if (a.average_cost < b.average_cost) {
        return -1;
      } else {
        return 0;
      }
    });
  };

  const handleDescending = () => {
    touristSpots.sort(function (a, b) {
      if (a.average_cost > b.average_cost) {
        return -1;
      } else if (a.average_cost < b.average_cost) {
        return +1;
      } else {
        return 0;
      }
    });
  };

  return (
    <div className="my-10">
      <ScrollRestoration></ScrollRestoration>
      <h1 className="text-3xl text-center font-bold">See All Tourist Spots</h1>

      <div className="dropdown dropdown-right mb-10">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-green-400 text-green-100 hover:bg-transparent hover:border hover:border-green-400 hover:text-green-400"
        >
          Dropdown <MdKeyboardArrowRight className="text-xl" />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a onClick={handleAscending}>Ascending</a>
          </li>
          <li>
            <a onClick={handleDescending}>Descending</a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {touristSpots.map((touristSpot) => (
          <Spot key={touristSpot._id} touristSpot={touristSpot}></Spot>
        ))}
      </div>
    </div>
  );
};

export default AllSpot;
