import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Popup({ formType, setFormType }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-emerald-700 to-sky-700">
      <div className="bg-white h-[40rem] w-[65rem] rounded-xl flex flex-col items-center overflow-y-scroll overflow-x-hidden">
        <div className="flex mt-2 justify-end w-full mr-4 items-center">
          {formType == 0 && (
            <div className="flex justify-between px-1 w-full">
              <img
                src="../public/tvs.png"
                alt=""
                className="object-contain h-10 w-64"
              />
              <button
                onClick={() => navigate('/')}
                className="h-10 bg-emerald-500 rounded-full w-24 font-bold font-inter text-white"
              >
                Back
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center items-center mt-56">
          <div className="text-3xl font-inter font-bold">
            Are you an existing customer of TVS?
          </div>
          <div className="flex space-x-10 mt-10">
            <button
              onClick={() => setFormType(1)}
              className="bg-green-500 text-white h-10 w-44 rounded-full font-inter font-semibold"
            >
              YES
            </button>
            <button
              onClick={() => setFormType(2)}
              className="bg-red-500 text-white h-10 w-44 rounded-full font-inter font-semibold"
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
