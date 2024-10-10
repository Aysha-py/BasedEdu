const StepTwo = () => {
  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">Step 2: Contact Information</h3>
      <form>
        {/* Email Field */}
        <label className="block mb-2">Email Address</label>
        <input
          type="email"
          className="border p-2 mb-4 w-full"
          placeholder="Enter your email"
        />

        {/* Password Field */}
        <label className="block mb-2">Password</label>
        <input
          type="password"
          className="border p-2 mb-4 w-full"
          placeholder="Enter your password"
        />
      </form>
    </div>
  );
};

export default StepTwo;
