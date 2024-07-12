import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Fade } from "react-awesome-reveal";
import { uploadImageToCloudinary } from "../../utils/helper";
import { ImSpinner10 } from "react-icons/im";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [uploaderSpin, setUploaderSpin] = useState(false);
  const navigate = useNavigate();
  const handleSubmitCreateAccountForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.files[0];
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

    try {
      setUploaderSpin(true);
      const imgUpload = await uploadImageToCloudinary(photoURL);
      // Create User
      registerUser(email, password)
        .then((res) => {
          toast.success("User Create Successfully");
          console.log(res.user);
          // Update User Profile
          updateProfile(res.user, {
            displayName: name,
            photoURL: imgUpload?.data?.secure_url,
          })
            .then((rs) => {
              setUploaderSpin(false);
            })
            .catch((err) => {
              setUploaderSpin(false);
            });
          e.target.reset();
          navigate("/login");
          setUploaderSpin(false);
        })
        .catch((err) => {
          toast.error(err.message);
          setUploaderSpin(false);
        });
    } catch (error) {
      console.log(error.message);
      setUploaderSpin(false);
    }
  };
  return (
    <Fade>
      <div className="flex justify-center items-center w-full h-screen">
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-slate-900/20 shadow-2xl">
          <h1 className="text-2xl font-bold text-center text-slate-200">
            Create Account
          </h1>
          <form className="space-y-6" onSubmit={handleSubmitCreateAccountForm}>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="name"
                className="block text-slate-300 text-base font-medium"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 text-slate-300 outline-none"
              />
            </div>
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
                htmlFor="photoURL"
                className="block text-slate-300 text-base font-medium"
              >
                Photo URL
              </label>
              <input
                type="file"
                name="photoURL"
                id="photoURL"
                placeholder="photo URL"
                className="w-full px-4 py-3 rounded-md border border-slate-900/20 focus:border-color-primary transition-all duration-300 bg-[#121212] text-slate-300 outline-none"
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

            {/* <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize">
              Register
            </button> */}
            <button
              className={` w-full p-3 text-center rounded-sm dark:text-gray-50 bg-color-primary text-white font-medium capitalize flex justify-center items-center ${
                uploaderSpin ? "bg-color-primary/30 cursor-not-allowed" : ""
              }`}
            >
              {uploaderSpin ? (
                <ImSpinner10 className="animate-spin" />
              ) : (
                <span> Sign Up</span>
              )}
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 text-slate-200">
            Already have an account? &nbsp;
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="underline text-slate-300"
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
