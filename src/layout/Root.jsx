import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../pages/shared/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 lg:max-w-4xl xl:max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Root;
