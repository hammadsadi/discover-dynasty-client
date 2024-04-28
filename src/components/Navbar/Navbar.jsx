import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);
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
  return (
    <div>
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
                  className="font-medium capitalize text-color-secondary text-base dark:text-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-tourists-spots"
                  className="font-medium capitalize text-color-secondary text-base dark:text-white"
                >
                  All Tourists Spot
                </NavLink>
              </li>
              {user && (
                <>
                  <li>
                    <NavLink
                      to="/add-tourist-spot"
                      className="font-medium capitalize text-color-secondary text-base dark:text-white"
                    >
                      Add Tourists Spot
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/my-list"
                      className="font-medium capitalize text-color-secondary text-base dark:text-white"
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
                className="font-medium capitalize text-color-secondary text-base dark:text-white"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-tourists-spots"
                className="font-medium capitalize text-color-secondary text-base dark:text-white"
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
                    className="font-medium capitalize text-color-secondary text-base dark:text-white"
                  >
                    Add Tourists Spot
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/my-list"
                    className="font-medium capitalize text-color-secondary text-base dark:text-white"
                  >
                    My List
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
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
                    <h2 className="text-center font-bold">
                      {user.displayName}
                    </h2>
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
    </div>
  );
};

export default Navbar;
