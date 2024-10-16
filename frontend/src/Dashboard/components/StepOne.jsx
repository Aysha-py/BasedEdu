import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StepOne = ({ nextStep, formData, setFormData }) => {
  const navigate = useNavigate();
  const cities = [
    "Lagos",
    "Abuja",
    "Port Harcourt",
    "Kano",
    "Ibadan",
    "Enugu",
    "Benin City",
    "Jos",
    "Abeokuta",
    "Uyo",
    "Kaduna",
    "Ilorin",
    "Owerri",
    "Onitsha",
    "Asaba",
    "Warri",
    "Calabar",
    "Akure",
    "Makurdi",
    "Minna",
  ];

  const institutions = [
    "University of Lagos",
    "University of Nigeria, Nsukka",
    "Obafemi Awolowo University",
    "Ahmadu Bello University",
    "Covenant University",
    "Federal University of Technology, Akure",
    "University of Ibadan",
  ];

  const [errors, setErrors] = useState({});

  // Validation function
  const validateFields = () => {
    let errors = {};
    if (!formData.institution) {
      errors.institution = "Institution is required";
    }
    if (!formData.country) {
      errors.country = "Country is required";
    }
    if (!formData.city) {
      errors.city = "City is required";
    }
    if (!formData.postCode) {
      errors.postCode = "Post code is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      nextStep(); // Call the parent's nextStep function
    }
  };

  return (
    <div className="p-6">
      {/* Back arrow and Register Institution text */}
      <div className="flex items-center mb-6">
        <FaArrowLeft
          className="text-black cursor-pointer mr-2"
          onClick={() => navigate("/")} // Navigate to home page
        />
        <h2 className="text-2xl font-semibold">Register Institution</h2>
      </div>

      {/* Centered paragraph */}
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold">Welcome to School</h3>
        <p className="text-gray-600">Enter institution information below</p>
      </div>

      {/* Form Content */}
      <form className="mx-auto max-w-md">
        <label className="block mb-2">Name of Institution</label>
        <select
          className={`border p-2 mb-4 w-full ${
            errors.institution ? "border-red-500" : ""
          }`}
          value={formData.institution}
          onChange={(e) => setFormData("institution", e.target.value)}
        >
          <option value="">Select your institution</option>
          {institutions.map((institution, index) => (
            <option key={index} value={institution}>
              {institution}
            </option>
          ))}
        </select>
        {errors.institution && (
          <p className="text-red-500 text-sm">{errors.institution}</p>
        )}

        <label className="block mb-2">Country</label>
        <select
          className={`border p-2 mb-4 w-full ${
            errors.country ? "border-red-500" : ""
          }`}
          value={formData.country}
          onChange={(e) => setFormData("country", e.target.value)}
        >
          <option value="Nigeria">Nigeria</option>
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country}</p>
        )}

        <label className="block mb-2">City</label>
        <select
          className={`border p-2 mb-4 w-full ${
            errors.city ? "border-red-500" : ""
          }`}
          value={formData.city}
          onChange={(e) => setFormData("city", e.target.value)}
        >
          <option value="">Select your city</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

        <label className="block mb-2">Post Code</label>
        <input
          type="text"
          className={`border p-2 mb-4 w-full ${
            errors.postCode ? "border-red-500" : ""
          }`}
          value={formData.postCode}
          onChange={(e) => setFormData("postCode", e.target.value)}
          placeholder="Enter post code"
        />
        {errors.postCode && (
          <p className="text-red-500 text-sm">{errors.postCode}</p>
        )}

        <label className="block mb-2">Email Address</label>
        <input
          type="email"
          className={`border p-2 mb-4 w-full ${
            errors.email ? "border-red-500" : ""
          }`}
          value={formData.email}
          onChange={(e) => setFormData("email", e.target.value)}
          placeholder="Enter email address"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleNext}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

// Define prop types
StepOne.propTypes = {
  nextStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default StepOne;
