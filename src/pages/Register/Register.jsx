import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Fade } from "react-awesome-reveal";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmitCreateAccountForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    let user = { name, email, password, photoURL };
    // Al Field Validation
    if (!name || !email || !password || !photoURL) {
      return toast.error("All Fields Are Required");
    }
    // Password Validate
    if (password.length < 6) {
      return toast.error("Password Length must be at least 6 character");
    }
    // Password Uppercase Check
    if (!/[A-Z]/.test(password)) {
      return toast.error("Must have a Uppercase letter in the password");
    }
    // Password Lowercase Check
    if (!/[a-z]/.test(password)) {
      return toast.error("Must have a Lowercase letter in the password");
    }

    // Create User
    registerUser(email, password)
      .then((res) => {
        toast.success("User Create Successfully");
        console.log(res.user);
        // Update User Profile
        updateProfile(res.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then((rs) => {})
          .catch((err) => {});
        e.target.reset();
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <Fade>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800 border">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>
          <form className="space-y-6" onSubmit={handleSubmitCreateAccountForm}>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="name"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="photoURL"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="photo URL"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block dark:text-gray-600 text-base text-color-sd font-medium"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border text-gray-800 focus:outline-color-primary"
              />
            </div>

            <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize">
              Register
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Already have an account? &nbsp;
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline dark:text-gray-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default Register;
