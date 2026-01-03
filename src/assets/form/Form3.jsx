import React from "react";

const Form3 = ({ onChange, values, onPrevious, onNext }) => {
  return (
    <form
      onSubmit={onNext}
      className="bg-blue-900 text-white flex flex-col gap-5 px-8 py-10"
    >
      <h2 className="text-xl font-bold mb-2 border-b border-blue-400 pb-2">
        Salary & Experience
      </h2>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium tracking-wide">Experience:</label>
        <select
          onChange={onChange}
          value={values.experience}
          name="experience"
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all cursor-pointer"
          required
        >
          <option value="">Select</option>
          <option value="1 yr">1 yr</option>
          <option value="2 yrs">2 yrs</option>
          <option value="3 yrs">3 yrs</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium tracking-wide">Current CTC:</label>
        <input
          onChange={onChange}
          value={values.currentCTC}
          name="currentCTC"
          type="text"
          placeholder="Enter Current Annual Salary"
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all shadow-inner"
          required
        />
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium tracking-wide">Expected CTC:</label>
        <input
          onChange={onChange}
          value={values.expectedCTC}
          name="expectedCTC"
          type="text"
          placeholder="Enter Expected Annual Salary"
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

export default Form3;
