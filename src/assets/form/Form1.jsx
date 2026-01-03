import React from "react";

const Form1 = ({ onChange, values, onClick }) => {
  return (
    <form
      onSubmit={onClick}
      className="bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col gap-6 px-8 py-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold mb-2 border-b border-blue-400 pb-2">
        Personal Details
      </h2>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold tracking-wide ml-1">
          Enter Name
        </label>
        <input
          value={values.name}
          name="name"
          onChange={onChange}
          type="text"
          placeholder="Enter name"
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all shadow-inner"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold tracking-wide ml-1">
          Enter Number
        </label>
        <input
          value={values.number}
          name="number"
          onChange={onChange}
          type="number"
          placeholder="Enter Mobile Number"
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all shadow-inner"
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold tracking-wide ml-1">
          Enter Gmail
        </label>
        <input
          value={values.email}
          name="email"
          onChange={onChange}
          type="email"
          placeholder="Enter Email"
          className="rounded-lg px-4 py-2 text-black outline-none border-2 border-transparent focus:border-blue-400 transition-all shadow-inner"
          required
        />
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-white text-blue-900 font-bold px-10 py-2 rounded-full hover:bg-gray-200 active:scale-95 transition-all shadow-lg"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Form1;
