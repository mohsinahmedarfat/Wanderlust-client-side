import { createContext } from "react";
import { Link } from "react-router-dom";

export const CountryContext = createContext(null);

const Country = ({ country }) => {
  const { country_name, image, description } = country;

  return (
    <div className="card bg-base-100 shadow-xl group border border-transparent hover:border hover:border-green-400">
      <Link to={`/countries/${country_name}`}>
        <figure>
          <img
            className="h-[266px] rounded-t-2xl"
            src={image}
            alt="tourist spot"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl group-hover:text-green-500">
            {country_name}
          </h2>
          <p className="group-hover:text-green-500">
            <span className="font-semibold ">Description:</span> {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
