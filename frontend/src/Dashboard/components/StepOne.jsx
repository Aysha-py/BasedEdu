import { useState, useEffect } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [cities, setCities] = useState([]);
  const [institutions] = useState([
    "University of Lagos",
    "University of Nigeria, Nsukka",
    "Obafemi Awolowo University",
    "Ahmadu Bello University",
    "Covenant University",
    "Federal University of Technology, Akure",
    "University of Ibadan",
  ]);
  const [selectedCountry, setSelectedCountry] = useState("Nigeria");
  const [selectedInstitution, setSelectedInstitution] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/NG/cities`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "your-rapidapi-key-here", // Replace with your actual API key
            "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();

      // Log the data to see the response format
      console.log("Cities API Response: ", data);

      // Set the cities if available
      if (data.data && Array.isArray(data.data)) {
        setCities(data.data.map((city) => city.name));
      } else {
        console.error("No city data found.");
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  // Validation function
  const validateFields = () => {
    let errors = {};
    if (!selectedInstitution) {
      errors.institution = "Institution is required";
    }
    if (!selectedCountry) {
      errors.country = "Country is required";
    }
    if (!selectedCity) {
      errors.city = "City is required";
    }
    if (!postCode) {
      errors.postCode = "Post code is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      console.log("Proceed to Step 2");
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

      {/* Stepper */}
      <div className="flex justify-center items-center mb-8">
        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white">
            <FaCheck />
          </div>
          <span className="mx-2">Register School</span>
        </div>

        <div className="w-24 h-[2px] bg-gray-300"></div>

        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300"></div>
          <span className="mx-2">Upload Courses</span>
        </div>

        <div className="w-24 h-[2px] bg-gray-300"></div>

        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300"></div>
          <span className="mx-2">Register Lecturers</span>
        </div>
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
          value={selectedInstitution}
          onChange={(e) => setSelectedInstitution(e.target.value)}
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
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="Nigeria">Nigeria</option>
          {/* Add more country options if needed */}
        </select>
        {errors.country && (
          <p className="text-red-500 text-sm">{errors.country}</p>
        )}

        <label className="block mb-2">City</label>
        <select
          className={`border p-2 mb-4 w-full ${
            errors.city ? "border-red-500" : ""
          }`}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select your city</option>
          {cities.length > 0 ? (
            cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))
          ) : (
            <option value="">Loading cities...</option>
          )}
        </select>
        {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}

        <label className="block mb-2">Post Code</label>
        <input
          type="text"
          className={`border p-2 mb-4 w-full ${
            errors.postCode ? "border-red-500" : ""
          }`}
          value={postCode}
          onChange={(e) => setPostCode(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default StepOne;
