import { FaSearch } from "react-icons/fa";
import Weboja from "../../assets/Weboja.png";
import image from "../../assets/image.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#FFFFFF] flex items-center justify-between px-6 fixed top-0 z-50 shadow">
      <div className="flex items-center space-x-4">
        <img src={Weboja} alt="Logo" className="w-10 h-10" />
        <span className="text-2xl font-semibold">School</span>
      </div>

      <div className="flex items-center space-x-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search school or person"
            className="border border-[#97AAA3] rounded-full px-8 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-[#1C4637] placeholder-[#1C4637]"
          />
          <FaSearch className="absolute left-3 top-2 text-gray-500 h-4 w-4" />
        </div>
        <span className="font-semibold border-r-2 pr-4">Admin</span>
        <img
          src={image}
          alt="Admin"
          className="w-10 h-10 rounded-full object-cover p-1"
        />
      </div>
    </div>
  );
};

export default Navbar;
