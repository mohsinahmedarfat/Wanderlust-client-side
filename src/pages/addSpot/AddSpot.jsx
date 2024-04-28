import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddSpot = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (touristSpot) => {
    console.log(touristSpot);

    fetch("http://localhost:5000/touristSpots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(touristSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Tourist spot added successfully");
        }
      });
    reset();
  };

  return (
    <div className="my-10">
      <h1 className="text-3xl text-center mb-5 font-bold">
        Add a Tourist Spot
      </h1>
      <div className="card shrink-0 w-full  shadow-2xl bg-base-100 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                placeholder="Image URL"
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
                className="input input-bordered"
                defaultValue="$"
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
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSpot;
