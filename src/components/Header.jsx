import { IconMenuDeep } from "@tabler/icons-react";
import { Link, NavLink } from "react-router-dom";
import { randomId, useHeadroom } from "@mantine/hooks";
import logo from "../assets/mansha-logo-w-no-bg.png";

const Header = () => {
  const pinned = useHeadroom({ fixedAt: 120 });

  // const menuLinks = [
  //   {
  //     id: randomId(),
  //     to: "/",
  //     label: "Home",
  //   },
  //   {
  //     id: randomId(),
  //     to: "/about",
  //     label: "About Us",
  //   },
  //   // {
  //   //   id: randomId(),
  //   //   to: "/team",
  //   //   label: "Our Team",
  //   // },
  //   // {
  //   //   id: randomId(),
  //   //   to: "/studio",
  //   //   label: "Studio",
  //   // },
  //   // {
  //   //   id: randomId(),
  //   //   to: "/services",
  //   //   label: "Services",
  //   //   subMenu: [
  //   //     { id: randomId(), to: "/residential", label: "Residential" },
  //   //     { id: randomId(), to: "/commercial", label: "Commercial" },
  //   //     { id: randomId(), to: "/architecture", label: "Architecture" },
  //   //   ],
  //   // },
  //   {
  //     id: randomId(),
  //     to: "/gallery",
  //     label: "Design Gallery",
  //   },
  //   {
  //     id: randomId(),
  //     to: "/testimonials",
  //     label: "Testimonials",
  //   },
  //   {
  //     id: randomId(),
  //     to: "/careers",
  //     label: "Careers",
  //   },
  //   {
  //     id: randomId(),
  //     to: "/contact",
  //     label: "Contact",
  //   },
  // ];

  const menuLinksLeft = [
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
      to: "/gallery",
      label: "Design Gallery",
    },
  ];

  const menuLinksRight = [
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
    // {
    //   id: randomId(),
    //   to: "/studio",
    //   label: "Studio",
    // },
    // {
    //   id: randomId(),
    //   to: "/services",
    //   label: "Services",
    // },
    // { id: randomId(), to: "/residential", label: "Residential Services" },
    // { id: randomId(), to: "/commercial", label: "Commercial Services" },
    // { id: randomId(), to: "/architecture", label: "Architecture Services" },
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
        <div className="navbar-start flex-1 lg:hidden">
          <Link to="/">
            <img src={logo} alt="logo" className="w-16 lg:w-20 aspect-square" />
          </Link>
        </div>

        {/* desktop menu links */}
        <div className="navbar-center hidden lg:flex flex-1 justify-center items-center gap-4">
          {/* <ul className="menu menu-horizontal px-1 gap-2 text-lg">
            {menuLinks.map((link) =>
              link.subMenu ? (
                <li key={link.id}>
                  <div className="dropdown dropdown-hover dropdown-bottom rounded-full">
                    <div
                      tabIndex={0}
                      className="font-league-spartan-variable cursor-default"
                    >
                      {link.label}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-md -left-[10%]"
                    >
                      {link.subMenu.map((subLink) => (
                        <li key={subLink.id}>
                          <NavLink
                            to={subLink.to}
                            className="font-league-spartan-variable text-lg rounded-full"
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
          </ul> */}

          {/* desktop menu links left */}
          <ul className="menu menu-horizontal px-1 gap-2 text-base">
            {menuLinksLeft.map((link) => (
              <li key={link.id} className="rounded-full overflow-hidden">
                <NavLink to={link.to}>
                  <h6>{link.label}</h6>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* desktop logo */}
          <Link to="/">
            <img src={logo} alt="logo" className="w-16 lg:w-20 aspect-square" />
          </Link>

          {/* desktop menu links right */}
          <ul className="menu menu-horizontal px-1 gap-2 text-base">
            {menuLinksRight.map((link) => (
              <li key={link.id} className="rounded-full overflow-hidden">
                <NavLink to={link.to}>
                  <h6>{link.label}</h6>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile menu button */}
        <div className="navbar-end lg:hidden">
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
            <li className="pointer-events-none">
              <Link to="/" className="hover:bg-transparent pt-0">
                <img src={logo} alt="logo" className="w-16 aspect-square" />
              </Link>
            </li>
            {mobileMenuLinks.map((link) => (
              <li key={link.id} className="rounded-full overflow-hidden mb-1">
                <NavLink
                  to={link.to}
                  className="font-league-spartan-variable text-lg"
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
