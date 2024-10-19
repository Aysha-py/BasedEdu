import { useState } from "react";
import Navbar from "../Dashboard/components/Navbar";
import Sidebar from "../Dashboard/components/Sidebar";
import StepOne from "../Dashboard/components/StepOne";
import StepTwo from "../Dashboard/components/StepTwo";
import StepThree from "../Dashboard/components/StepThree";
import Stepper from "../Dashboard/components/Stepper";

const Signup = () => {
  const [step, setStep] = useState(1);

  // Form data state (collect data from all steps)
  const [formData, setFormData] = useState({
    institution: "",
    country: "Nigeria",
    city: "",
    postCode: "",
    email: "",
    schoolLevel: "",
    faculty: "",
    department: "",
    course: "",
  });

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const previousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleFormDataChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            nextStep={nextStep}
            formData={formData}
            setFormData={handleFormDataChange}
          />
        );
      case 2:
        return (
          <StepTwo
            nextStep={nextStep}
            previousStep={previousStep}
            setFormData={handleFormDataChange}
            formData={formData}
          />
        );
      case 3:
        return <StepThree previousStep={previousStep} formData={formData} />;
      default:
        return (
          <StepOne
            nextStep={nextStep}
            formData={formData}
            setFormData={handleFormDataChange}
          />
        );
    }
  };

  return (
    <div className="flex">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="ml-[25%] w-[75%] h-screen pt-20 p-8 ">
        <Stepper currentStep={step} />
        {renderStep()}
      </div>
    </div>
  );
};

export default Signup;
