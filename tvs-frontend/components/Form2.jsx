/* eslint-disable react/prop-types */


function Form2({formType, setFormType, secondForm, setSecondForm}) {

    const handleChange2 = (e) => {
      const { name, value } = e.target;
      setSecondForm((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const handleSubmit2 = async (e) => {
      e.preventDefault();

      try {
        // Make a POST request to the local server
        const response = await fetch("http://127.0.0.1:8000/tvsinfo/global/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(secondForm),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        //reset the form aftera a successful post request is made

        /*  eslint-disable-next-line */
        navigate(`/result?result=${response.body.result}`);

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
          <form onSubmit={handleSubmit2}>
            <h2 className="text-3xl font-inter font-semibold text-gray-600">
              Financial Information
            </h2>
            <p className="font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
              Borrowing and payment history data of the customer
            </p>
            <div className="border border-b-2 mb-7 border-black" />
            {/* First grid div*/}
            <div className="grid grid-cols-3 gap-x-20 gap-y-7">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                  Disbursed Amount
                </label>

                <input
                  type="number"
                  value={secondForm.disbursed_amount}
                  onChange={handleChange2}
                  name="disbursed_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Disbursed Amount"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Asset cost
                </label>

                <input
                  type="number"
                  value={secondForm.asset_cost}
                  onChange={handleChange2}
                  name="asset_cost"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Asset cost"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Loan to value ratio
                </label>

                <input
                  type="number"
                  value={secondForm.loan_to_value_ratio}
                  onChange={handleChange2}
                  name="loan_to_value_ratio"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="LTV"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Primary disbursed amount
                </label>

                <input
                  type="number"
                  value={secondForm.primary_disbursed_amount}
                  onChange={handleChange2}
                  name="primary_disbursed_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="PDA"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className=" ml-2 font-semibold tracking-wide text-sm font-inter">
                  Primary current balance
                </label>

                <input
                  type="number"
                  value={secondForm.primary_current_balance}
                  onChange={handleChange2}
                  name="primary_current_balance"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Primary current balance"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Primary sanctioned amount
                </label>

                <input
                  type="number"
                  value={secondForm.primary_sanctioned_amount}
                  onChange={handleChange2}
                  name="primary_sanctioned_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="PSA"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Primary overdue accounts
                </label>

                <input
                  type="number"
                  value={secondForm.primary_overdue_accounts}
                  onChange={handleChange2}
                  name="primary_overdue_accounts"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Primary active accounts
                </label>

                <input
                  type="number"
                  value={secondForm.primary_active_accounts}
                  onChange={handleChange2}
                  name="primary_active_accounts"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Rate of Interest"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Primary number of accounts
                </label>

                <input
                  type="number"
                  value={secondForm.primary_number_of_accounts}
                  onChange={handleChange2}
                  name="primary_number_of_accounts"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Primary installment accounts
                </label>

                <input
                  type="number"
                  value={secondForm.primary_installment_amount}
                  onChange={handleChange2}
                  name="primary_installment_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Secondary disbursed amount
                </label>

                <input
                  type="number"
                  value={secondForm.secondary_disbursed_amount}
                  onChange={handleChange2}
                  name="secondary_disbursed_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Secondary current balance
                </label>

                <input
                  type="number"
                  value={secondForm.secondary_current_balance}
                  onChange={handleChange2}
                  name="secondary_current_balance"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Secondary sanctioned amount
                </label>

                <input
                  type="number"
                  value={secondForm.secondary_sanctioned_amount}
                  onChange={handleChange2}
                  name="secondary_sanctioned_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Secondary number of accounts
                </label>

                <input
                  type="number"
                  value={secondForm.secondary_number_of_accounts}
                  onChange={handleChange2}
                  name="secondary_number_of_accounts"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Secondary active accounts
                </label>

                <input
                  type="number"
                  value={secondForm.secondary_active_accounts}
                  onChange={handleChange2}
                  name="secondary_active_accounts"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Secondary installment accounts
                </label>

                <input
                  type="number"
                  value={secondForm.secondary_installment_amount}
                  onChange={handleChange2}
                  name="secondary_installment_amount"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="0"
                />
              </div>

              <div className="col-span-3 h-[2rem]" />
            </div>
            <h2 className="text-3xl font-inter font-semibold text-gray-600">
              Credit and Score Information
            </h2>
            <p className="ml-1 font-inter text-sm font-semibold mt-1 mb-2 text-slate-500">
              Past loans data of the customer
            </p>
            <div className="border border-b-2 mb-7 border-black" />
            {/* First grid div*/}
            <div className="grid grid-cols-3 gap-x-20 gap-y-7">
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Perform CNS score
                </label>

                <input
                  type="number"
                  value={secondForm.perform_cns_score}
                  onChange={handleChange2}
                  name="perform_cns_score"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Credit information bureau score"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Delinquent accounts
                </label>

                <input
                  type="number"
                  value={secondForm.deliquent_accounts}
                  onChange={handleChange2}
                  name="deliquent_accounts"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="In last 6 months"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  New accounts
                </label>

                <input
                  type="number"
                  value={secondForm.new_accounts}
                  onChange={handleChange2}
                  name="new_accounts"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="In last 6 months"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Number of inquiries
                </label>

                <input
                  type="number"
                  value={secondForm.number_of_inquiries}
                  onChange={handleChange2}
                  name="number_of_inquiries"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Number of inquiries"
                />
              </div>
              <div className="flex flex-col space-y-2 items-start justify-center">
                <label className="ml-2 font-semibold tracking-wide text-sm font-inter">
                  Employment Type
                </label>

                <input
                  type="text"
                  value={secondForm.employment_type}
                  onChange={handleChange2}
                  name="employment_type"
                  required
                  className="border border-black ml-2 h-10 w-60 p-3 rounded-lg text-sm"
                  placeholder="Salaried / Self-Employment"
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

export default Form2;
