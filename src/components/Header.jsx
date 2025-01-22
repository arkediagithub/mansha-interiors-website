import { IconMenuDeep } from "@tabler/icons-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { randomId, useHeadroom } from "@mantine/hooks";
import logo from "../assets/logo.png";

const Header = () => {
  const pinned = useHeadroom({ fixedAt: 120 });
  const navigate = useNavigate();

  const menuLinks = [
    {
      id: randomId(),
      to: "/",
      label: "Home",
    },
    {
      id: randomId(),
      to: "/about",
      label: "About Us",
    },
    {
      id: randomId(),
      to: "/projects",
      label: "Projects",
    },
    {
      id: randomId(),
      to: "/services",
      label: "Services",
    },
    {
      id: randomId(),
      to: "/team",
      label: "Our Team",
    },
    {
      id: randomId(),
      to: "/contact",
      label: "Contact",
    },
    {
      id: randomId(),
      to: "/faqs",
      label: "FAQs",
    },
  ];

  return (
    <header
      className="shadow-lg"
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
            <img src={logo} alt="logo" className="w-16 aspect-square" />
          </Link>
        </div>

        {/* desktop links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {menuLinks.map((link) => (
              <li
                key={link.id}
                className="rounded-full overflow-hidden"
              >
                <NavLink to={link.to}>
                  <h6 className="">{link.label}</h6>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end">
          <button
            className="btn btn-outline rounded-full max-md:mr-2 max-lg:hidden"
            onClick={() => navigate("/contact")}
          >
            <h6>Get in Touch</h6>
          </button>

          {/* drawer button */}
          <label
            htmlFor="my-drawer"
            className="btn drawer-button btn-ghost lg:hidden"
          >
            <IconMenuDeep stroke={2} />
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

          {/* mobile navigation */}
          {/* drawer sidebar content*/}
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {menuLinks.map((link) => (
              <li key={link.id} className="rounded-full overflow-hidden">
                <NavLink to={link.to}><h6>{link.label}</h6></NavLink>
              </li>
            ))}
            <li>
              <button
                className="btn btn-outline mt-4"
                onClick={() => navigate("/contact")}
              >
                <h6>Get in Touch</h6>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
