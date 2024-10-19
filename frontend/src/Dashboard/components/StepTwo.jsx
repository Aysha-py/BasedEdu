import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import Heading from "./Heading";

const StepTwo = ({ nextStep, previousStep, formData, setFormData }) => {
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    let errors = {};
    if (!formData.schoolLevel) {
      errors.schoolLevel = "School level is required";
    }
    if (!formData.faculty) {
      errors.faculty = "Faculty is required";
    }
    if (!formData.department) {
      errors.department = "Department is required";
    }
    if (!formData.course) {
      errors.course = "Course is required";
    }
    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      nextStep();
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <Heading
          header={"Welcome to School"}
          text={"Register School Courses"}
        />

        <form>
          {/* School Level Field */}
          <label className="block mb-2">School Level</label>
          <select
            className={`border p-2 mb-4 w-full ${
              errors.schoolLevel ? "border-red-500" : ""
            }`}
            value={formData.schoolLevel}
            onChange={(e) => setFormData("schoolLevel", e.target.value)} // Update the field correctly
          >
            <option value="">Select your school level</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
          {errors.schoolLevel && (
            <p className="text-red-500 text-sm">{errors.schoolLevel}</p>
          )}

          {/* Faculty Field */}
          <label className="block mb-2">Faculty</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.faculty ? "border-red-500" : ""
            }`}
            value={formData.faculty}
            onChange={(e) => setFormData("faculty", e.target.value)} // Correct the field update
            placeholder="Enter your faculty"
          />
          {errors.faculty && (
            <p className="text-red-500 text-sm">{errors.faculty}</p>
          )}

          {/* Department Field */}
          <label className="block mb-2">Department</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.department ? "border-red-500" : ""
            }`}
            value={formData.department}
            onChange={(e) => setFormData("department", e.target.value)} // Correct the field update
            placeholder="Enter your department"
          />
          {errors.department && (
            <p className="text-red-500 text-sm">{errors.department}</p>
          )}

          {/* Course Field */}
          <label className="block mb-2">Course</label>
          <input
            type="text"
            className={`border p-2 mb-4 w-full ${
              errors.course ? "border-red-500" : ""
            }`}
            value={formData.course}
            onChange={(e) => setFormData("course", e.target.value)} // Correct the field update
            placeholder="Enter your course"
          />
          {errors.course && (
            <p className="text-red-500 text-sm">{errors.course}</p>
          )}

          {/* Continue Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={handleNext}
            >
              Continue
            </button>
          </div>

          {/* Back Button */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="bg-gray-600 text-white px-4 py-2 rounded"
              onClick={previousStep}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Define prop types
StepTwo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  previousStep: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired, // Ensure setFormData is passed down
};

export default StepTwo;
