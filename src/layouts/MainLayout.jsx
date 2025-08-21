import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {pathname !== "/" && <Breadcrumb />}
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;
