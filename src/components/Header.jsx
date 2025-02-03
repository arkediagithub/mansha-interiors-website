import { IconMenuDeep } from "@tabler/icons-react";
import { Link, NavLink } from "react-router-dom";
import { randomId, useHeadroom } from "@mantine/hooks";
import logo from "../assets/logo.png";

const Header = () => {
  const pinned = useHeadroom({ fixedAt: 120 });

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
      // subMenu: [
      //   { id: randomId(), to: "/team", label: "Our Team" },
      //   { id: randomId(), to: "/faqs", label: "FAQs" },
      // ],
    },
    // {
    //   id: randomId(),
    //   to: "/team",
    //   label: "Our Team",
    // },
    {
      id: randomId(),
      to: "/studio",
      label: "Studio",
    },
    {
      id: randomId(),
      to: "/services",
      label: "Services",
    },
    {
      id: randomId(),
      to: "/gallery",
      label: "Design Gallery",
    },
    {
      id: randomId(),
      to: "/testimonials",
      label: "Testimonials",
    },
    {
      id: randomId(),
      to: "/careers",
      label: "Careers",
    },
    {
      id: randomId(),
      to: "/contact",
      label: "Contact",
    },
  ];

  const mobileMenuLinks = [
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
      to: "/studio",
      label: "Studio",
    },
    {
      id: randomId(),
      to: "/services",
      label: "Services",
    },
    {
      id: randomId(),
      to: "/gallery",
      label: "Design Gallery",
    },
    {
      id: randomId(),
      to: "/careers",
      label: "Careers",
    },
    {
      id: randomId(),
      to: "/contact",
      label: "Contact",
    },
  ];

  // Function to close the mobile drawer
  const closeDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };

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
      <div className="navbar bg-base-100 px-5">
        {/* logo */}
        <div className="flex-1">
          <Link to="/">
            <img src={logo} alt="logo" className="w-16 lg:w-20 aspect-square" />
          </Link>
        </div>

        {/* desktop menu links */}
        <div className="navbar-center flex-none">
          <ul className="menu menu-horizontal px-1 gap-2 max-lg:hidden text-lg">
            {menuLinks.map((link) =>
              link.subMenu ? (
                <li key={link.id}>
                  <div className="dropdown dropdown-hover dropdown-end rounded-full">
                    <NavLink
                      to={link.to}
                      tabIndex={0}
                      className="font-league-spartan-variable"
                    >
                      {link.label}
                    </NavLink>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-md top-[110%]"
                    >
                      {link.subMenu.map((subLink) => (
                        <li key={subLink.id}>
                          <NavLink
                            to={subLink.to}
                            className="font-league-spartan-variable"
                          >
                            {subLink.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.id} className="rounded-full overflow-hidden">
                  <NavLink to={link.to}>
                    <h6>{link.label}</h6>
                  </NavLink>
                </li>
              )
            )}
          </ul>

          {/* mobile menu button */}
          <label
            htmlFor="my-drawer"
            className="btn drawer-button btn-ghost lg:hidden"
          >
            <IconMenuDeep stroke={2} />
          </label>
        </div>
      </div>

      {/* mobile menu links */}
      <div className="drawer z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {mobileMenuLinks.map((link) => (
              <li key={link.id} className="rounded-full overflow-hidden">
                <NavLink
                  to={link.to}
                  className="font-unbounded-variable"
                  onClick={closeDrawer}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
