import {
  FaHome,
  FaChartLine,
  FaFileAlt,
  FaSchool,
  FaCreditCard,
  FaBook,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-screen fixed top-16 left-0 bg-white shadow pt-8 p-4">
      {/* Overview */}
      <h2 className="text-lg font-semibold mb-4 text-[#07100D]">Overview</h2>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <FaHome />
          <span className="text-[#B2BEBB]">Home</span>
        </li>

        <li className="flex items-center space-x-2">
          <FaChartLine />
          <span className="text-[#B2BEBB]">Analytics</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaFileAlt />
          <span className="text-[#B2BEBB]">Reports</span>
        </li>
      </ul>

      {/* Integration */}
      <h2 className="text-lg font-semibold mt-6 mb-4 text-[#07100D]">
        Integration
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <FaSchool />
          <span className="text-[#B2BEBB]">School</span>
        </li>
        <li className="flex items-center space-x-2">
          <FaCreditCard />
          <span className="text-[#B2BEBB]">Payment</span>
        </li>
      </ul>

      {/* Management */}
      <h2 className="text-lg font-semibold mt-6 mb-4 text-[#07100D]">
        Management
      </h2>
      <ul className="space-y-2">
        <li className="flex items-center space-x-2">
          <FaBook />
          <span className="text-[#B2BEBB]">Course</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
