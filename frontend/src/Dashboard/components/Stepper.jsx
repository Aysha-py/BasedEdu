import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";

const Stepper = ({ currentStep }) => {
  const steps = [
    "Register School",
    "Upload Courses",
    "Register Lecturers",
    "Register Students",
  ];

  return (
    <div className="flex justify-center items-center mb-8">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep > index + 1
                ? "bg-blue-600 text-white"
                : currentStep === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {currentStep > index + 1 ? <FaCheck /> : index + 1}
          </div>
          <span className="mx-2">{step}</span>
          {index < steps.length - 1 && (
            <div className="w-24 h-[2px] bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
};

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
