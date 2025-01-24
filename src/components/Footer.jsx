import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { socialMedia } from "../data/socialMedia";

const Footer = () => {
  return (
    <footer>
      <div
        data-theme="dark"
        className="footer bg-base-200 text-base-content p-4 sm:p-6 md:p-8 lg:p-12"
      >
        <aside className="max-w-md">
          <div className="w-[70px] h-[70px]">
            <img src={logo} alt="logo" className="h-full w-full" />
          </div>
          <ul className="text-base">
            <li>
              <strong className="font-unbounded-variable">Email: </strong>
              <Link
                to={"mailto:mi@manshainteriors.com"}
                className="hover:text-accent"
              >
                mi@manshainteriors.com
              </Link>
            </li>
            <li>
              <strong className="font-unbounded-variable">
                Phone Number:{" "}
              </strong>
              <Link to={"tel:+919609930991"} className="hover:text-accent">
                9609930991
              </Link>
              /
              <Link to={"tel:+919832049481"} className="hover:text-accent">
                9832049481
              </Link>
            </li>
            <li>
              <strong className="font-unbounded-variable">Timing: </strong>
              <span>Monday-Friday: 10AM-7PM</span>
            </li>
            <li>
              <strong className="font-unbounded-variable">Location: </strong>
              <span>Shop 33, 2nd Floor, The Planet Mall, Siliguri</span>
            </li>
          </ul>
        </aside>

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Services
          </h6>
          <p className="text-base">Space Planning</p>
          <p className="text-base">Interior Design</p>
          <p className="text-base">Architecture Design</p>
          <p className="text-base">Design Consultation</p>
          <p className="text-base">Renovation and Remodeling</p>
        </nav>

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Quick Links
          </h6>
          {/* <Link to={"/"} className="link link-hover text-base">
            Home
          </Link> */}
          <Link to={"/about"} className="link link-hover text-base">
            About Us
          </Link>
          <Link to={"/projects"} className="link link-hover text-base">
            Projects
          </Link>
          <Link to={"/services"} className="link link-hover text-base">
            Services
          </Link>
          <Link to={"/faqs"} className="link link-hover text-base">
            FAQs
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title opacity-80 text-white tracking-widest">
            Follow Us
          </h6>

          {socialMedia.map((social) => (
            <Link
              key={social.id}
              to={social.to}
              className="link link-hover text-base"
            >
              {social.label}
            </Link>
          ))}
        </nav>
      </div>

      <div
        data-theme="dark"
        className="footer footer-center bg-base-200 text-base-content p-4 border-t"
      >
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Mansha Interiors
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
