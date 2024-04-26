import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
  };
  return (
    <div className="my-10 border border-red-400">
      <h1 className="text-3xl text-center mb-5 font-bold">Register Now!</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto border border-red-400">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <small className="text-red-500 mt-2">
                This field is required
              </small>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              {...register("photo", { required: true })}
            />
            {errors.photo && (
              <small className="text-red-500 mt-2">
                This field is required
              </small>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="text-red-500 mt-2">
                This field is required
              </small>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <small className="text-red-500 mt-2">
                This field is required
              </small>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
