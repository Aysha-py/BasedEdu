import { useState } from "react";
import PropTypes from "prop-types";

const StepThree = ({ previousStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let errors = {};
    if (!formData.lecturerName) {
      errors.lecturerName = "Lecturer name is required";
    }
    if (!formData.employmentId) {
      errors.employmentId = "Employment ID is required";
    }
    if (!formData.walletId) {
      errors.walletId = "Wallet ID is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.faculty) {
      errors.faculty = "Faculty is required";
    }
    if (!formData.department) {
      errors.department = "Department is required";
    }
    if (!formData.courses) {
      errors.courses = "Courses are required";
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      console.log("Proceed to submission or next steps...");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-4 text-center">
          Step 3: Lecturer Information
        </h3>
        <form>
          {/* Lecturer Name */}
          <label className="block mb-2">Name of Lecturer</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.lecturerName ? "border-red-500" : ""
            }`}
            value={formData.lecturerName}
            onChange={(e) => setFormData("lecturerName", e.target.value)}
            placeholder="Enter lecturer's name"
          />
          {errors.lecturerName && (
            <p className="text-red-500 text-sm">{errors.lecturerName}</p>
          )}

          {/* Employment ID */}
          <label className="block mb-2">Employment ID</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.employmentId ? "border-red-500" : ""
            }`}
            value={formData.employmentId}
            onChange={(e) => setFormData("employmentId", e.target.value)}
            placeholder="Enter employment ID"
          />
          {errors.employmentId && (
            <p className="text-red-500 text-sm">{errors.employmentId}</p>
          )}

          {/* Wallet ID */}
          <label className="block mb-2">Wallet ID</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.walletId ? "border-red-500" : ""
            }`}
            value={formData.walletId}
            onChange={(e) => setFormData("walletId", e.target.value)}
            placeholder="Enter wallet ID"
          />
          {errors.walletId && (
            <p className="text-red-500 text-sm">{errors.walletId}</p>
          )}

          {/* Email Address */}
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
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          {/* Faculty */}
          <label className="block mb-2">Faculty</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.faculty ? "border-red-500" : ""
            }`}
            value={formData.faculty}
            onChange={(e) => setFormData("faculty", e.target.value)}
            placeholder="Enter faculty"
          />
          {errors.faculty && (
            <p className="text-red-500 text-sm">{errors.faculty}</p>
          )}

          {/* Department */}
          <label className="block mb-2">Department</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.department ? "border-red-500" : ""
            }`}
            value={formData.department}
            onChange={(e) => setFormData("department", e.target.value)}
            placeholder="Enter department"
          />
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department}</p>
          )}

          {/* Courses */}
          <label className="block mb-2">Courses</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.courses ? "border-red-500" : ""
            }`}
            value={formData.courses}
            onChange={(e) => setFormData("courses", e.target.value)}
            placeholder="Enter courses"
          />
          {errors.courses && (
            <p className="text-red-500 text-sm">{errors.courses}</p>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded"
              onClick={previousStep}
            >
              Previous
            </button>
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Define prop types
StepThree.propTypes = {
  previousStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default StepThree;
