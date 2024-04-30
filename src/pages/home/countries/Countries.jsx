import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://b9a10-wanderlust-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="my-10 space-y-6">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-center ">
          Tour Booking Made Simple
        </h2>
        <p className="text-center max-w-xl mx-auto mt-5">
          Discover the ease and convenience of booking your next adventure with
          us. With our intuitive platform, planning your dream vacation has
          never been easier.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((country) => (
          <Country key={country._id} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
