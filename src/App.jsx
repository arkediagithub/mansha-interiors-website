import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppLayout from "./layout/AppLayout";

import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUsPage from "./pages/AboutUsPage";
import FaqsPage from "./pages/FaqsPage";
import GalleryPage from "./pages/GalleryPage";
import CareersPage from "./pages/CareersPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import SingleGalleryPage from "./pages/SingleGalleryPage";
import LandscapeServicePage from "./pages/LandscapeServicePage";
import InteriorServicePage from "./pages/InteriorServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
      },
      {
        path: "services",
        children: [
          {
            index: true,
            element: <Navigate to="interior" replace />,
          },
          {
            path: "interior",
            element: <InteriorServicePage />,
          },
          {
            path: "landscape",
            element: <LandscapeServicePage />,
          },
          {
            path: "architecture",
            element: <ArchitecturePage />,
          },
        ],
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "gallery/:id",
        element: <SingleGalleryPage />,
      },
      {
        path: "testimonials",
        element: <TestimonialsPage />,
      },
      {
        path: "careers",
        element: <CareersPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "faqs",
        element: <FaqsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return (
    <>
      <HelmetProvider>
        <RouterProvider router={router} />
        {/* <SmoothScrolling></SmoothScrolling> */}
      </HelmetProvider>
    </>
  );
}
