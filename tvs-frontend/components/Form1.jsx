/* eslint-disable react/prop-types */
function Form1({formType, setFormType, formData, setFormData}) {


    const handleChange1 = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit1 = async (e) => {
      e.preventDefault();

      try {
        // Make a POST request to the local server
        const response = await fetch("http://127.0.0.1:8000/tvsinfo/local/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log(formData);

        /*  eslint-disable-next-line */
        navigate(
          `/result?result=${response.body.result}&interestRate=${response.body.interestRate}`
        );

        // Handle success, e.g., show a success message
        console.log("Form submitted successfully!");
      } catch (error) {
        // Handle errors, e.g., show an error message
        console.error("There was an error submitting the form:", error.message);
      }
    };
  return (
    <div className="min-h-screen overflow-hidden flex justify-center items-center bg-gradient-to-br from-emerald-700 to-sky-700">
      <div className="bg-white h-[40rem] w-[65rem] rounded-xl flex flex-col items-center overflow-y-scroll overflow-x-hidden">
              <div className="flex mt-2 justify-end w-full mr-4 items-center mb-10">
                   {formType != 0 && (
            <div className="flex justify-between px-1 w-full">
              <img
                src="../public/tvs.png"
                alt=""
                className="object-contain h-10 w-64"
              />
              <button
                onClick={() => setFormType(0)}
                className="h-10 bg-emerald-500 rounded-full w-24 font-bold font-inter text-white"
              >
                Back
              </button>
            </div>
          )}
        </div>
          <form onSubmit={handleSubmit1} className="">
            <h2 className="text-3xl font-inter font-semibold text-gray-600">
              Loan and Repayment Information
            </h2>
            <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
              Borrowing and payment history data of the customer
            </p>
            <div className="border border-b-2 mb-7 border-black" />
            {/* First grid div*/}
            <div className="grid grid-cols-3 gap-x-20 gap-y-7">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                  12 months bounce history
                </label>

                <input
                  type="number"
                  value={formData.twelve_month_bounce_history}
                  onChange={handleChange1}
                  name="twelve_month_bounce_history"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of times bounced"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Maximum MOB
                </label>

                <input
                  type="number"
                  value={formData.maximum_mob}
                  onChange={handleChange1}
                  name="maximum_mob"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Monthly Outstanding Balance"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Bounced while repaying
                </label>

                <input
                  type="number"
                  value={formData.bounced_while_repaying}
                  onChange={handleChange1}
                  name="bounced_while_repaying"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of times"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  EMI
                </label>

                <input
                  type="number"
                  value={formData.emi}
                  onChange={handleChange1}
                  name="emi"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="EMI"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                  Loan Amount
                </label>

                <input
                  type="number"
                  value={formData.loan_amount}
                  onChange={handleChange1}
                  name="loan_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Total Loan Amount"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Tenure
                </label>

                <input
                  type="number"
                  value={formData.tenure}
                  onChange={handleChange1}
                  name="tenure"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Tenure"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Advanced EMI Paid
                </label>

                <input
                  type="number"
                  value={formData.advance_emi_paid}
                  onChange={handleChange1}
                  name="advance_emi_paid"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of times"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Rate of Interest
                </label>

                <input
                  type="number"
                  value={formData.roi}
                  onChange={handleChange1}
                  name="roi"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Rate of Interest"
                />
              </div>

              <div className="col-span-3 h-[2rem]" />
            </div>
            <h2 className="text-3xl font-inter font-semibold text-gray-600">
              Customer and Loan History
            </h2>
            <p className="ml-1 font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
              Past loans data of the customer
            </p>
            <div className="border border-b-2 mb-7 border-black" />
            {/* First grid div*/}
            <div className="grid grid-cols-3 gap-x-20 gap-y-7">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <h2 className="font-semibold tracking-wide text-sm font-inter">
                  Bounced in first EMI
                </h2>
                <div className="ml-2 flex items-center justify-start space-x-4 h-10 w-60 border border-1 border-slate-800 rounded-lg">
                  <input
                    type="radio"
                    value={formData.bounced_in_first_emi}
                    onChange={handleChange1}
                    name="bounced_in_first_emi"
                    required
                    className="border border-black ml-2 h-10  p-3 rounded-lg text-sm"
                  />
                  <label className="font-inter ">True</label>
                  <input
                    type="radio"
                    value={formData.bounced_in_first_emi}
                    onChange={handleChange1}
                    name="bounced_in_first_emi"
                    required
                    checked
                    className="border border-black ml-2 h-10  p-3 rounded-lg text-sm"
                  />
                  <label className="font-inter ">False</label>
                </div>
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Age when loan taken
                </label>

                <input
                  type="number"
                  value={formData.age}
                  onChange={handleChange1}
                  name="age"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Age"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Total loans taken
                </label>

                <input
                  type="number"
                  value={formData.total_loans_taken}
                  onChange={handleChange1}
                  name="total_loans_taken"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of loans taken"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Total secured loans
                </label>

                <input
                  type="number"
                  value={formData.total_secured_loans}
                  onChange={handleChange1}
                  name="total_secured_loans"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of secured loans"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Total unsecured loans
                </label>

                <input
                  type="number"
                  value={formData.total_unsecured_loans}
                  onChange={handleChange1}
                  name="total_unsecured_loans"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of unsecured loans"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Maximum loan sanctioned
                </label>

                <input
                  type="number"
                  value={formData.maximum_loan_sanctioned}
                  onChange={handleChange1}
                  name="maximum_loan_sanctioned"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="For a two-wheeler"
                />
              </div>

              <div className="col-span-3 h-[2rem]" />
            </div>
            <h2 className="text-3xl font-inter font-semibold text-gray-600">
              Due history
            </h2>
            <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
              Last 6 months passed due frequency of customer
            </p>
            <div className="border border-b-2 mb-7 border-black" />

            <div className="grid grid-cols-3 gap-x-20 gap-y-7">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  30 days
                </label>

                <input
                  type="number"
                  value={formData.thirty_days}
                  onChange={handleChange1}
                  name="thirty_days"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of times"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  60 days
                </label>

                <input
                  type="number"
                  value={formData.sixty_days}
                  onChange={handleChange1}
                  name="sixty_days"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of times"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  90 days
                </label>

                <input
                  type="number"
                  value={formData.ninety_days}
                  onChange={handleChange1}
                  name="ninety_days"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of times"
                />
              </div>
              <div className="col-span-3 h-[2rem]" />
            </div>

            <h2 className="text-3xl font-inter font-semibold text-gray-600">
              Two-wheeler and dealer information
            </h2>
            <p className="ml-1 font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
              History of the two-wheeler vehicle purchased by customer
            </p>
            <div className="border border-b-2 mb-7 border-black" />

            <div className="grid grid-cols-3 gap-x-20 gap-y-7">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Dealer code
                </label>

                <input
                  type="number"
                  value={formData.dealer_code}
                  onChange={handleChange1}
                  name="dealer_code"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="2.000000"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Product code
                </label>

                <input
                  type="text"
                  value={formData.product_code}
                  onChange={handleChange1}
                  name="product_code"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="SC/MO/MC/TL/RETOP"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Age of the vehicle
                </label>

                <input
                  type="number"
                  value={formData.age_of_vehicle}
                  onChange={handleChange1}
                  name="age_of_vehicle"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Age of vehicle"
                />
              </div>
              <div className="col-span-3 h-[2rem]" />
            </div>

            <h2 className="text-3xl font-inter font-semibold text-gray-600">
              Weight of Evidence
            </h2>
            <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
              Small description of the group type here
            </p>
            <div className="border border-b-2 mb-3 border-black" />
            {/* First grid div*/}
            <div className="grid grid-cols-3 gap-x-20 gap-y-7">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Employment Type
                </label>

                <input
                  type="text"
                  value={formData.employment_type}
                  onChange={handleChange1}
                  name="employment_type"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Salaried / Self-Employed"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Resident Type
                </label>

                <input
                  type="text"
                  value={formData.resident_type}
                  onChange={handleChange1}
                  name="resident_type"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Resident Type"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Tier
                </label>

                <input
                  type="number"
                  value={formData.tier}
                  onChange={handleChange1}
                  name="tier"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="TIER 1/2/3/4"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Gender
                </label>

                <input
                  type="text"
                  value={formData.gender}
                  onChange={handleChange1}
                  name="gender"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Male / Female / Other"
                />
              </div>

              <div className="col-span-3 h-[2rem]" />
            </div>
            <div className="flex justify-center items-center p-3">
              <button
                type="submit"
                className="h-12  w-56 rounded-full bg-orange-400 text-white font-inter font-bold tracking-widest text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}

export default Form1;
