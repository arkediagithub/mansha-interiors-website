import { IconMenu } from "@tabler/icons-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useHeadroom } from "@mantine/hooks";
import logo from "../assets/logo.png";

const Header = () => {
  const pinned = useHeadroom({ fixedAt: 120 });
  const navigate = useNavigate();

  return (
    <header
      className="shadow-md"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transform: `translate3d(0, ${pinned ? 0 : `-110px`}, 0)`,
        transition: "transform 400ms ease",
      }}
    >
      <div className="navbar bg-base-100 px-4">
        <div className="navbar-start">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 w-12" />
          </Link>
        </div>

        {/* desktop links */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/teams"}>Teams</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/faqs"}>FAQs</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button
            className="btn btn-outline max-md:mr-2 max-md:hidden"
            onClick={() => navigate("/contact")}
          >
            Get a Quote
          </button>

          {/* drawer button */}
          <label
            htmlFor="my-drawer"
            className="btn drawer-button btn-ghost md:hidden"
          >
            <IconMenu stroke={2} />
          </label>
        </div>
      </div>
      {/* drawer */}
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {/* drawer sidebar content*/}
          {/* mobile navigation */}
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/projects"}>Projects</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/teams"}>Teams</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/faqs"}>FAQs</NavLink>
            </li>
            <li>
              <button
                className="btn btn-outline mt-4"
                onClick={() => navigate("/contact")}
              >
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
