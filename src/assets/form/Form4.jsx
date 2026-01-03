import React from "react";

const Form4 = ({ onChange, onPrevious, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-blue-900 text-white flex flex-col gap-6 px-8 py-10"
    >
      <h2 className="text-xl font-bold mb-2 border-b border-blue-400 pb-2">
        Documents Upload
      </h2>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium tracking-wide">
          Upload Cover Letter :
        </label>
        <input
          onChange={onChange}
          name="CoverLetter"
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.png"
          className="block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100 transition-all cursor-pointer"
        />
      </div>

      <div className="flex flex-col gap-2 text-sm">
        <label className="font-medium tracking-wide">Upload Resume :</label>
        <input
          onChange={onChange}
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.png"
          className="block w-full text-sm text-gray-300
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100 transition-all cursor-pointer"
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
          className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-2 rounded-full transition-all active:scale-95 shadow-lg uppercase tracking-wider text-sm"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form4;
