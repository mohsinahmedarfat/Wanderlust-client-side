import { ScrollRestoration, useLoaderData } from "react-router-dom";

const SpotDetails = () => {
  const spot = useLoaderData();
  const {
    image,
    tourists_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    total_visitors_per_year,
    travel_time,
    seasonality,
    name,
    email,
  } = spot;
  return (
    <div className="my-10 space-y-5">
      <ScrollRestoration />
      <p className="text-slate-400">{country_name}</p>
      <h1 className="text-5xl font-bold">{tourists_spot_name}</h1>
      <div className="flex gap-4">
        <div>
          <p className="text-slate-400">Average cost</p>
          <h4 className="text-2xl font-bold text-green-400">{average_cost}</h4>
        </div>
        <div className="bg-gray-200 w-[1px]"></div>
        <div>
          <p className="text-slate-400">Travel time</p>
          <p className="font-semibold">{travel_time}</p>
        </div>
        <div className="bg-gray-200 w-[1px]"></div>
        <div>
          <p className="text-slate-400">Seasonality</p>
          <p className="font-semibold">{seasonality}</p>
        </div>
        <div className="bg-gray-200 w-[1px]"></div>
        <div>
          <p className="text-slate-400">
            Total visitors <small>/ per year</small>
          </p>
          <p className="font-semibold">{total_visitors_per_year}</p>
        </div>
        <div className="bg-gray-200 w-[1px]"></div>
        <div>
          <p className="text-slate-400">Location</p>
          <p className="font-semibold">{location}</p>
        </div>
      </div>
      <img className="h-[800px] w-full" src={image} alt="" />
      <div className="space-y-3">
        <h3 className="text-3xl font-semibold">Short description</h3>
        <p>{short_description}</p>
      </div>
      <div className="space-y-3">
        {/*  */}
        <div className="flex flex-col justify-center p-6 shadow-md rounded-xl sm:px-12">
          <h3 className="mx-auto mb-3 text-xl font-semibold">Added by</h3>
          <div className="space-y-4 text-center divide-y divide-gray-700">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{name}</h2>
              <p className="px-5 text-xs sm:text-base text-gray-400">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
