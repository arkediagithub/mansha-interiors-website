import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";
import pageNotFoundImage from "../assets/404image.svg";
import SectionWrapper from "../components/SectionWrapper";

const NotFoundPage = () => {
  return (
    <>
      <MetaTags
        title="Page Not Found - Mansha Interiors"
        description="Oops! The page you’re looking for isn’t here. Return to Mansha Interiors and explore our expert design services."
      />
      <SectionWrapper className="">
        <div className="h-[85vh] grid grid-cols-1 lg:grid-cols-2 place-content-center gap-8 lg:gap-0">
          <img
            src={pageNotFoundImage}
            alt="page not found image"
            className="w-full object-cover lg:order-2 pointer-events-none"
          />

          <div className="flex flex-col justify-center gap-4 lg:pr-20">
            <h1 className="text-3xl md:text-5xl font-semibold m-0 p-0 text-roti-300">
              Something is not right<span className="tracking-widest">...</span>
            </h1>
            <p className="text-xl text-gray-300">
              Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you
              think this is an error contact support.
            </p>
            <Link
              to="/"
              role="button"
              className="btn btn-outline text-lg lg:w-fit"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default NotFoundPage;
