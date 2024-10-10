const StepThree = () => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">Step 3: Review and Submit</h3>
      <form>
        {/* Review Information */}
        <p className="mb-4">Please review your details before submitting:</p>

        <div className="border p-4 mb-4">
          <p>
            <strong>Username:</strong> johndoe
          </p>{" "}
          {/* Replace with actual data */}
          <p>
            <strong>Email:</strong> johndoe@example.com
          </p>{" "}
          {/* Replace with actual data */}
        </div>

        {/* Terms and Conditions */}
        <div className="mb-4">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms" className="ml-2">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StepThree;
