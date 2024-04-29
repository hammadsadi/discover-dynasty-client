import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  // handleUserLogOut
  const handleUserLogOut = () => {
    userLogout()
      .then(() => {
        toast.success("User Logout Successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // Handle Change Theme
  const handleChangeTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  // Set Theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    let lsTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", lsTheme);
  }, [theme]);
  return (
    <div className="navbar bg-base-100 container mx-auto z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            <li>
              <NavLink
                to="/"
                className="font-medium capitalize text-base  dark:bg-gray-50"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-tourists-spots"
                className="font-medium capitalize text-base  dark:bg-gray-50"
              >
                All Tourists Spot
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to="/add-tourist-spot"
                    className="font-medium capitalize text-base dark:text-white"
                  >
                    Add Tourists Spot
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-list"
                    className="font-medium capitalize text-base dark:text-white"
                  >
                    My List
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl md:text-2xl font-black text-color-secondary dark:text-white flex gap-0"
        >
          Discover<span className="text-color-primary">D</span>ynasty
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className="font-medium capitalize  text-base dark:text-white"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-tourists-spots"
              className="font-medium capitalize text-base dark:text-white"
            >
              All Tourists Spot
            </NavLink>
          </li>
          {user && (
            <>
              {" "}
              <li>
                <NavLink
                  to="/add-tourist-spot"
                  className="font-medium capitalize text-base dark:text-white"
                >
                  Add Tourists Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-list"
                  className="font-medium capitalize  text-base dark:text-white"
                >
                  My List
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate mr-2">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            onChange={handleChangeTheme}
          />

          {/* sun icon */}
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <div className="space-x-2 flex z-40">
            <div className="dropdown dropdown-end relative group transition-all duration-5000">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar "
              >
                <div className="w-10 rounded-full ">
                  <img alt={user.displayName} src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm absolute right-0 bg-base-100 rounded-box w-52 invisible group-hover:visible text-center transition-all duration-5000"
              >
                <li>
                  <h2 className="text-center font-bold">{user.displayName}</h2>
                </li>
                <li>
                  <Link
                    className="text-center inline-block bg-color-primary text-white font-medium capitalize border-none hover:border-none text-base hover:bg-color-primary "
                    onClick={handleUserLogOut}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="space-x-2 flex">
            <Link
              to="/login"
              className="btn bg-color-primary text-white font-medium capitalize border-none hover:border-none text-base hover:bg-color-primary "
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="btn bg-color-primary text-white font-medium capitalize border-none hover:border-none text-base hover:bg-color-primary hidden md:flex"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
