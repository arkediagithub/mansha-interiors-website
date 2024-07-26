import { Link } from "react-router-dom";
import MetaTags from "../components/MetaTags";

const NotFoundPage = () => {
  return (
    <>
      <MetaTags title="Mansha Interior | 404 | Page Not Found" />
      <div className="flex h-screen flex-col bg-white">
        <img
          src="https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-[40vh] w-full object-cover"
        />

        <div className=" flex-1flex items-center justify-center">
          <div className="mx-auto max-w-xl px-4 py-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We can&apos;t find that page.
            </h1>

            <p className="my-4 text-gray-500">
              Try searching again, or return home to start from the beginning.
            </p>

            <Link to="/" role="button" className="btn btn-primary">
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
