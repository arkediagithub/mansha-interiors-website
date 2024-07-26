import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen" data-theme="light">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Outlet />
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
