import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    // login user
    login(email, password)
      .then((result) => {
        console.log(result.user);
        if (result.user) {
          toast.success("Login successful");
        }
        // navigate after login
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result.user);
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  const handleGithubLogin = () => {
    githubLogin().then((result) => {
      console.log(result.user);
      navigate(`${location.state ? location.state : "/"}`);
    });
  };

  return (
    <div className="my-10 border border-red-400">
      <h1 className="text-3xl text-center mb-5 font-bold">Please Login!</h1>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto border border-red-400">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
            <p className="text-center mt-3">
              Do not have an account?{" "}
              <Link className="text-blue-500 font-bold" to="/register">
                Register
              </Link>
            </p>
          </div>
        </form>

        <div className="flex items-center mb-5 mx-8 space-x-1">
          <div className="flex-1 border border-green-400 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3  text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 border border-green-400 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>

        <div className=" space-y-3 mb-6 px-8">
          <button
            onClick={handleGoogleLogin}
            className="btn bg-green-400 text-green-100 hover:bg-white hover:border hover:border-green-400 hover:text-green-400 w-full"
          >
            <FaGoogle />
            Login with Google
          </button>
          <button
            onClick={handleGithubLogin}
            className="btn bg-green-400 text-green-100 hover:bg-white hover:border hover:border-green-400 hover:text-green-400 w-full"
          >
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
