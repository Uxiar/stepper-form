import React from "react";

const Form2 = ({ onChange, values, onNext, onPrevious }) => {
  return (
    <form
      onSubmit={onNext}
      className="bg-blue-900 text-white flex flex-col gap-5 px-8 py-10"
    >
      <h2 className="text-xl font-bold mb-2 border-b border-blue-400 pb-2">
        Professional Details
      </h2>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium">Gender:</label>
        <select
          name="gender"
          value={values.gender}
          onChange={onChange}
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all cursor-pointer"
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium">Application for role:</label>
        <select
          name="role"
          value={values.role}
          onChange={onChange}
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all cursor-pointer"
          required
        >
          <option value="">Select</option>
          <option value="React.js">React.js</option>
          <option value="java">Java</option>
          <option value="Angular.Js">Angular.Js</option>
          <option value="Technical Support">Technical Support</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium">Company Name:</label>
        <input
          name="companyName"
          value={values.companyName}
          onChange={onChange}
          type="text"
          placeholder="Enter Company Name"
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all shadow-inner"
          required
        />
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium">Designation:</label>
        <input
          name="Designation"
          value={values.Designation}
          onChange={onChange}
          type="text"
          placeholder="Enter Designation"
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all shadow-inner"
          required
        />
      </div>

      <div className="flex justify-between items-center mt-6 gap-4">
        <button
          type="button"
          onClick={onPrevious}
          className="bg-gray-400/20 hover:bg-gray-400/40 text-white font-semibold px-6 py-2 rounded-full transition-all active:scale-95"
        >
          Previous
        </button>

        <button
          type="submit"
          className="bg-white text-blue-900 font-bold px-10 py-2 rounded-full hover:bg-gray-100 transition-all active:scale-95 shadow-lg"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Form2;
