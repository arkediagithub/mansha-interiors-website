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
        path: "projects",
        element: <ProjectsPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "teams",
        element: <TeamPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "about",
        element: <AboutUsPage />,
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
