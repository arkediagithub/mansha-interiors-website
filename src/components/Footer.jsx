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
          <p className="text-base">
            We have an exceptional range of services to help you. Keeping in
            view various necessities of our honoured clients, we provide
            creative designing services. We give our best efforts to design your
            dreams.
          </p>
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
