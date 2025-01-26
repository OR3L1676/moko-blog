import { FaTwitter, FaInstagram, FaFacebook, FaWifi } from "react-icons/fa";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <>
      <div className="grid grid-cols-[3fr,2fr] px-3 sm:px-10 py-2 bg-blue-400">
        <div className="grid grid-cols-[1fr,2fr]">
          <div className="sm:hidden flex justify-start sm:justify-center items-center">
            <Menu version={1} />
          </div>
          <div className="flex justify-start sm:justify-center">
            <h3 className="text-white font-bold font-mono text-4xl shadow-custom-multi shadow-sm">
              Moko
            </h3>
          </div>
          <div className="hidden sm:flex sm:justify-around sm:items-center sm:max-w-[500px] sm:text-white">
            <a href="#" className="font-bold">
              CATEGORIES
            </a>
            <a href="#" className="font-bold">
              DEALS
            </a>
            <a href="#" className="font-bold">
              ABOUT
            </a>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="grid grid-cols-4 gap-6 text-white text-2xl">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaWifi />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 bg-blue-300 h-5 shadow-custom-multi"></div>
      <div className="grid grid-cols-1 bg-blue-200 h-3 shadow-custom-multi"></div>
    </>
  );
};

export default NavBar;
