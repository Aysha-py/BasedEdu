import { useState } from "react";
import Navbar from "../Dashboard/components/Navbar";
import Sidebar from "../Dashboard/components/Sidebar";
import StepOne from "../Dashboard/components/StepOne";
import StepTwo from "../Dashboard/components/StepTwo";
import StepThree from "../Dashboard/components/StepThree";

const Signup = () => {
  const [step, setStep] = useState(1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content - registration steps */}
      <div className="ml-[25%] w-[75%] h-screen pt-20 p-8 bg-gray-50">
        {" "}
        {/* Adjusted margins */}
        {renderStep()}
        <div className="mt-8 flex justify-between">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-gray-600 text-white px-4 py-2 rounded"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              onClick={() => setStep(step + 1)}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
