import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className="font-medium capitalize text-color-secondary text-base"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-tourists-spot"
                  className="font-medium capitalize text-color-secondary text-base"
                >
                  All Tourists Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-tourists-spot"
                  className="font-medium capitalize text-color-secondary text-base"
                >
                  Add Tourists Spot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-list"
                  className="font-medium capitalize text-color-secondary text-base"
                >
                  My List
                </NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl md:text-2xl font-black text-color-secondary flex gap-0"
          >
            Discover<span className="text-color-primary">D</span>ynasty
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className="font-medium capitalize text-color-secondary text-base"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-tourists-spot"
                className="font-medium capitalize text-color-secondary text-base"
              >
                All Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-tourists-spot"
                className="font-medium capitalize text-color-secondary text-base"
              >
                Add Tourists Spot
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-list"
                className="font-medium capitalize text-color-secondary text-base"
              >
                My List
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="space-x-2">
            <Link
              to="/login"
              className="btn bg-color-primary text-white font-medium capitalize border-none hover:border-none text-base hover:bg-color-primary "
            >
              Login
            </Link>
            <Link
              to="/sign-up"
              className="btn bg-color-primary text-white font-medium capitalize border-none hover:border-none text-base hover:bg-color-primary "
            >
              Register
            </Link>
          </div>
          {/* <div className="space-x-2 flex z-40">
            <Link
              to="/login"
              className="btn bg-color-primary text-white font-medium capitalize border-none hover:border-none text-base hover:bg-color-primary "
            >
              Logout
            </Link>

            <div className="dropdown dropdown-end relative group">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm absolute right-0 bg-base-100 rounded-box w-52 invisible group-hover:visible text-center"
              >
                <li>
                  <h2 className="text-center">Hammad sadi</h2>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
