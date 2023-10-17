import { Link } from "react-router-dom";

function App() {

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <div className="h-24 flex  items-center justify-between max-w-6xl mx-auto">
        <span className="p-4 flex items-center">
          <img
            src="../public/tvs.png"
            alt="tvs.png"
            className="object-fill h-14 w-72"
          />
        </span>

        <span>
          <img
            src="../public/sidelogo.jpg"
            alt="sidelogo.png"
            className="h-24 "
          />
        </span>
      </div>

      <div className="border border-b border-slate-400 max-w-6xl mx-auto mt-2 mb-2 "></div>

      <div className="flex justify-center  items-center">
        <div className="mr-24">
          <img src="../public/leftimg.jpg" className="w-[250rem] ml-16" />
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-sky-600 rounded-lg mt-5 mr-10 flex flex-col items-center">
          <div className="flex justify-center mt-2 ">
            <h2 className="text-4xl font-inter font-bold text-white tracking-wide p-4 mt-2">
              Credit Risk Evaluation
            </h2>
          </div>

          <div className="p-6 text-white">
            <p className="text-sm font-inter text-muted font-semibold">
              {" "}
              Elevate your financial foresight with our advanced credit risk
              evaluation service. We harness the power of sophisticated
              analytics and data-driven insights to provide you with a
              comprehensive assessment of your creditworthiness. Our platform
              goes beyond traditional methods, offering a holistic view of your
              financial profile to empower you with the knowledge needed for
              informed decisions. Whether youre applying for a loan, mortgage,
              or credit card, trust us to deliver accurate, transparent, and
              personalized credit risk evaluations, paving the way for a secure
              and prosperous financial journey.
            </p>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img src="../public/speed.png" alt="" className="" />
            <div className="mt-5 bg-gradient-to-br text-center pt-2  from-sky-300 to-green-500 h-10 w-44 mb-7 rounded-full text-white font-inter font-bold">
              <Link to="/form">Calculate Risk</Link>
            </div>
          </div>
          <div className="p-2">
            <p className="text-xs font-inter text-white font-semibold">
              <span className = "text-slate-700">
              Privacy Policy: 
              </span>
              {" "}
              Any of your personal information submitted will
              not be sold, shared, or rented to others. We use this information
              to call you & send updates about our company and offers that we
              provide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

