import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import AppLayout from "./layout/AppLayout";
import SmoothScrolling from "./components/SmoothScrolling";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutUsPage from "./pages/AboutUsPage";
import FaqsPage from "./pages/FaqsPage";
import GalleryPage from "./pages/GalleryPage";
import CareersPage from "./pages/CareersPage";
import StudioPage from "./pages/StudioPage";
import TestimonialsPage from "./pages/TestimonialsPage";

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
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "studio",
        element: <StudioPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "projects",
        element: <ProjectsPage />,
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
        <SmoothScrolling>
          <RouterProvider router={router} />
        </SmoothScrolling>
      </HelmetProvider>
    </>
  );
}
