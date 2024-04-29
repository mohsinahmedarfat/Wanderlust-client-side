import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateSpot = () => {
  const spot = useLoaderData();
  const navigate = useNavigate();
  console.log(spot);
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
  } = spot;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (updateSpot) => {
    console.log(updateSpot);

    fetch(`http://localhost:5000/touristSpots/${spot._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Spot updated successfully");
          navigate("/myList");
        }
      });
  };
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center mb-5 font-bold">
        Update Tourist Spot
      </h1>
      <div className="card shrink-0 w-full  shadow-2xl bg-base-100 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
                defaultValue={image}
                className="input input-bordered"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tourist Spot Name</span>
              </label>
              <input
                type="text"
                placeholder="Tourist spot name"
                className="input input-bordered"
                defaultValue={tourists_spot_name}
                {...register("tourists_spot_name", { required: true })}
              />
              {errors.tourists_spot_name && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input
                type="text"
                placeholder="Country name"
                className="input input-bordered"
                defaultValue={country_name}
                {...register("country_name", { required: true })}
              />
              {errors.country_name && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
                defaultValue={location}
                {...register("location", { required: true })}
              />
              {errors.location && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered"
                defaultValue={short_description}
                {...register("short_description", { required: true })}
              />
              {errors.short_description && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Average Cost</span>
              </label>
              <input
                type="text"
                placeholder="$"
                className="input input-bordered"
                defaultValue={average_cost}
                {...register("average_cost", { required: true })}
              />
              {errors.average_cost && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seasonality</span>
              </label>
              <input
                type="text"
                placeholder="ex. summer / winter"
                className="input input-bordered"
                defaultValue={seasonality}
                {...register("seasonality", { required: true })}
              />
              {errors.seasonality && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Travel Time</span>
              </label>
              <input
                type="text"
                placeholder="Days"
                className="input input-bordered"
                defaultValue={travel_time}
                {...register("travel_time", { required: true })}
              />
              {errors.travel_time && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Total Visitors Per Year</span>
              </label>
              <input
                type="text"
                placeholder="Numbers"
                className="input input-bordered"
                defaultValue={total_visitors_per_year}
                {...register("total_visitors_per_year", { required: true })}
              />
              {errors.total_visitors_per_year && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-400 text-green-100 hover:bg-white hover:border hover:border-green-400 hover:text-green-400">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
