import { useState } from "react";
import { FaWallet } from "react-icons/fa"; // Importing Wallet Icon

const AdminProfile = () => {
  const [image, setImage] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "Amara",
    lastName: "Metu",
    faculty: "Engineering",
    nationality: "Nigerian",
    courseOfStudy: "Mechatronics Engineering",
    dob: "1998-06-15",
    department: "Petroleum Engineering",
    stateOfOrigin: "Anambra",
    gender: "Female",
    email: "amarachinemetu@gmail.com",
    phoneNumber: "+234 801 234 5678",
    contactAddress: "Lagos, Nigeria",
    contactNumber: "+234 801 234 5678",
    walletAddress: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  // Handle wallet connection (dummy function)
  const handleWalletConnect = () => {
    setWalletConnected(true);
  };

  return (
    <div className="px-72">
      {/* Profile Title */}
      <h1 className="text-3xl font-bold mb-6">Admin Profile</h1>

      {/* Profile Image Section */}
      <div className="flex flex-col items-left mb-6">
        <div className="relative">
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
          ) : (
            <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-700">Upload Image</span>
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageUpload}
          />
        </div>
        <p className="text-lg font-semibold">{`${profileData.firstName} ${profileData.lastName}`}</p>
      </div>

      {/* Profile Information */}
      <div className="flex justify-between w-full mb-6">
        {/* Left Column */}
        <div className="w-1/2 pr-4">
          <div className="mb-4">
            <label className="font-bold">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">Faculty:</label>
            <input
              type="text"
              name="faculty"
              value={profileData.faculty}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">Nationality:</label>
            <input
              type="text"
              name="nationality"
              value={profileData.nationality}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">Course of Study:</label>
            <input
              type="text"
              name="courseOfStudy"
              value={profileData.courseOfStudy}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={profileData.dob}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-4">
          <div className="mb-4">
            <label className="font-bold">Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">Department:</label>
            <input
              type="text"
              name="department"
              value={profileData.department}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">State of Origin:</label>
            <input
              type="text"
              name="stateOfOrigin"
              value={profileData.stateOfOrigin}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">Gender:</label>
            <input
              type="text"
              name="gender"
              value={profileData.gender}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="flex justify-between mb-8">
        <div className="w-1/2 pr-4">
          <div className="mb-4">
            <label className="font-bold">Email:</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>
        <div className="w-1/2 pl-4">
          <div className="mb-4">
            <label className="font-bold">Phone Number:</label>
            <input
              type="text"
              name="phoneNumber"
              value={profileData.phoneNumber}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="font-bold">Contact Address:</label>
            <input
              type="text"
              name="contactAddress"
              value={profileData.contactAddress}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Wallet Section */}
      <h2 className="text-2xl font-bold mb-4">Wallet</h2>
      <div className="flex justify-between items-center mb-8">
        <label className="font-bold">Connect to:</label>
        <div className="relative w-full">
          <input
            type="text"
            name="walletAddress"
            value={profileData.walletAddress}
            onChange={handleInputChange}
            placeholder="MetaMask Wallet Address"
            className="pl-10 pr-4 py-2 border rounded-lg w-3/4"
            disabled={walletConnected}
          />
          <FaWallet className="absolute left-2 top-2 text-gray-500 text-xl" />
        </div>
        <button
          className={`ml-4 px-4 py-2 rounded-lg ${
            walletConnected
              ? "bg-green-500 text-white"
              : "bg-blue-500 text-white"
          }`}
          onClick={handleWalletConnect}
          disabled={walletConnected}
        >
          {walletConnected ? "Connected" : "Connect"}
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
