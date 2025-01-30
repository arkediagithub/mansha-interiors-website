import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import FloatingSocialIcons from "../components/FloatingSocialIcons";
import RandomQuote from "../components/RandomQuote";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen" data-theme="light">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Outlet />
        <ScrollToTop />
        <FloatingSocialIcons />
      </main>
      <RandomQuote />
      <Footer />
    </div>
  );
};

export default AppLayout;
