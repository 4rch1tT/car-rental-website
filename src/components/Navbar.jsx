import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-white text-midnight shadow-xl border border-gray">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm font-poppins dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/fleet">Fleet</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className=" text-3xl text-blue font-bold font-libre-baskerville"
        >
          Rentr
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-poppins text-xl px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fleet">Fleet</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/sign-up">
          <button className="btn bg-primary font-poppins rounded-3xl">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
