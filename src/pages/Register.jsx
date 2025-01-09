import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, updateUserProfile, setReload } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, name, photo } = data;

    // password verification
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      setError(
        "Password must contains at least one uppercase and lowercase letter"
      );
      return;
    }
    setError("");

    // create user with email and password
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // update user name and photo
        updateUserProfile(name, photo).then(() => {
          setReload(true);
          // navigate to home
          navigate("/");
        });

        if (result.user) {
          toast.success("Register account successful");
        }
      })
      .catch((error) => {
        console.log(error.message);
        if (error) {
          toast.error("Email already in use");
        }
      });
  };
  return (
    <div className="my-10">
      <h1 className="text-3xl text-center mb-5 font-bold">Register Now!</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
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
            {error && <small className="text-red-500 mt-2">{error}</small>}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green-400 text-green-100 hover:bg-transparent hover:border hover:border-green-400 hover:text-green-400 w-full">
              Register
            </button>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link className="text-blue-500 font-bold" to="/login">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
