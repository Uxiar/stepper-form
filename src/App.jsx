import React, { useState } from "react";
import StepperForm1 from "./assets/form/Form1";
import StepperForm2 from "./assets/form/Form2";
import StepperForm3 from "./assets/form/Form3";
import StepperForm4 from "./assets/form/Form4";
import emailjs from "@emailjs/browser";

const App = () => {
  const [num, setNum] = useState(1);
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    gender: "",
    role: "",
    companyName: "",
    Designation: "",
    expericence: "",
    currentCTC: "",
    expectedCTC: "",
    CoverLetter: null,
    resume: null,
  });

  const [submitModal, setSubmitModal] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setNum((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setNum((prev) => prev - 1);
  };

  const handleInput = (e) => {
    const { name, type, files, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const submitHander = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_j7lmng6",
        "template_4ixknt7",
        { ...data },
        "mLD-MQfuZ8yCtlmzk"
      )
      .then(
        () => {
          setSubmitModal(true);
          setData({
            name: "",
            number: "",
            email: "",
            gender: "",
            role: "",
            companyName: "",
            Designation: "",
            expericence: "",
            currentCTC: "",
            expectedCTC: "",
            CoverLetter: null,
            resume: null,
          });
          setNum(1);
        },
        (error) => {
          console.log("Email error:", error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="relative bg-slate-200 min-h-screen flex flex-col items-center justify-center p-4">
      {submitModal && (
        <div
          onClick={() => setSubmitModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-2xl shadow-2xl text-center max-w-sm w-full"
          >
            <p className="text-blue-900 font-bold text-lg">
              Application Submitted Successfully!
            </p>
            <button
              onClick={() => setSubmitModal(false)}
              className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-md flex flex-col gap-3">
        <div className="flex items-center justify-center my-10 px-4">
          <div className="flex items-center w-full max-w-sm relative justify-between">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2 z-0"></div>

            <div
              className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold border-2 transition-all duration-300 ${
                num === 1
                  ? "bg-black text-white border-black scale-110 shadow-lg"
                  : `${
                      num > 1
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300"
                    }`
              }`}
            >
              1
            </div>

            <div
              className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold border-2 transition-all duration-300 ${
                num === 2
                  ? "bg-black text-white border-black scale-110 shadow-lg"
                  : `${
                      num > 2
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300"
                    }`
              }`}
            >
              2
            </div>

            <div
              className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold border-2 transition-all duration-300 ${
                num === 3
                  ? "bg-black text-white border-black scale-110 shadow-lg"
                  : `${
                      num > 3
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300"
                    }`
              }`}
            >
              3
            </div>

            <div
              className={`relative z-10 w-10 h-10 flex items-center justify-center rounded-full font-bold border-2 transition-all duration-300 ${
                num === 4
                  ? "bg-black text-white border-black scale-110 shadow-lg"
                  : `${
                      num > 4
                        ? "bg-black text-white border-black"
                        : "bg-white text-black border-gray-300"
                    }`
              }`}
            >
              4
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {num === 1 && (
            <StepperForm1
              onChange={handleInput}
              values={data}
              onClick={handleNext}
            />
          )}
          {num === 2 && (
            <StepperForm2
              onChange={handleInput}
              values={data}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {num === 3 && (
            <StepperForm3
              onChange={handleInput}
              values={data}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {num === 4 && (
            <StepperForm4
              onChange={handleInput}
              onPrevious={handlePrevious}
              onSubmit={submitHander}
            />
          )}
        </div>
        <div className="flex items-center justify-center">
          <p className="font-semibold">Step {num} out of 4</p>
        </div>
      </div>
    </div>
  );
};

export default App;
