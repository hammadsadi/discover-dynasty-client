import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

const Login = () => {
  const { userLogin, userLoginWithGoogle, signInGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleUserLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then(() => {
        toast.success("Login Successful");
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch(() => {
        toast.error("Invalid Email and Password");
      });
  };

  // Handle SignIn With Google
  const handleUserLoginWithGoogle = () => {
    userLoginWithGoogle()
      .then(() => {
        toast.success("Login Successful");
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleSignInWithGithub = () => {
    signInGithub()
      .then(() => {
        toast.success("Login Successful");
        location.state ? navigate(location.state) : navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Fade>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-900/20 shadow-2xl">
          <h1 className="text-2xl font-bold text-center text-slate-200">
            Sign In Your Account
          </h1>
          <form className="space-y-6" onSubmit={handleUserLogin}>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-slate-300 text-base font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300 outline-none"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-slate-300 text-base font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300 outline-none"
              />
            </div>

            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize">
              Login
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
            <p className="px-3 text-sm text-slate-200">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
              onClick={handleUserLoginWithGoogle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 326667 333333"
                className="w-5 h-5 fill-current text-rose-600"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                  fill="#4285f4"
                />
                <path
                  d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                  fill="#34a853"
                />
                <path
                  d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                  fill="#fbbc04"
                />
                <path
                  d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                  fill="#ea4335"
                />
              </svg>
            </button>

            <button
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm"
              onClick={handleSignInWithGithub}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 text-slate-200">
            Dont have an account? &nbsp;
            <Link
              rel="noopener noreferrer"
              to="/sign-up"
              className="underline text-slate-300"
            >
              Create Account
            </Link>
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Login;
