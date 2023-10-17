/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Speedometer from "../components/Speedometer";



function Result() {
    
    const searchParams = new URLSearchParams(window.location.search);
    const result = searchParams.get("result");  
    const interestRate = searchParams.get("interestRate");
  
    console.log(result)

    return (
      <div className="min-h-screen bg-[url('/public/bgg.avif')] bg-cover flex flex-col justify-center items-center  ">
        <div className="bg-white h-[40rem] w-[65rem] rounded-xl flex flex-col items-center overflow-y-scroll">
          <div className="flex justify-end px-2 w-full">
            <img
              src="../public/tvs.png"
              alt=""
              className="object-contain h-20 w-64"
            />
          </div>
          <div className="mt-10 h-56">
            <Speedometer speed={result} />
          </div>
          <div>
            {result <= 40 && (
              <div className="flex flex-col gap-4 items-center">
                <h1 className="font-inter font-bold text-4xl text-green-700">
                  Low Risk!
                </h1>

                <h2 className="font-inter font-bold text-sm tracking-wider p-10 max-w-3xl">
                  We are pleased to share the results of our credit risk
                  assessment. Based on our analysis, you exhibit a very low
                  credit risk, indicating your eligibility for a loan. Should
                  you choose to apply, you can be considered for a loan with the
                  favorable standard {interestRate}% interest rate. We
                  appreciate your responsible financial behavior and welcome any
                  inquiries or applications you may have.
                </h2>
              </div>
            )}

            {result > 40 && result < 70 && (
              <div className="flex flex-col items-center gap-4">
                <h1 className="font-inter font-bold text-4xl text-yellow-500">
                  Medium Risk!
                </h1>
                <h2 className="font-inter font-bold text-sm tracking-wider p-10 max-w-3xl">
                  We appreciate your interest in our credit risk assessment.
                  Following our analysis, your credit risk is moderately
                  elevated. Nevertheless, we are committed to assisting you and
                  are pleased to offer you a loan with an adjusted interest rate
                  of {interestRate}%. This ensures that you can still access the
                  financing you need while reflecting the associated risk
                  factors. Please feel free to contact us for further details or
                  to discuss your financial options.
                </h2>
              </div>
            )}

            {result >= 70 && (
              <div className="flex flex-col items-center gap-4">
                <h1 className="font-inter font-bold text-4xl text-red-500">
                  High Risk!
                </h1>
                <h2 className="font-inter font-bold tracking-wider text-sm p-10 max-w-3xl">
                  After a thorough credit risk assessment, we regret to inform
                  you that your credit risk is assessed as{" "}
                  <span className="text-red-500">very high. </span>
                  Unfortunately, we are unable to approve your loan application
                  at this time. We recommend consulting with a bank or financial
                  advisor to explore alternative financing options that may
                  better align with your current financial situation. If you
                  have any questions or require further assistance, please do
                  not hesitate to contact us.
                </h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Result;
