/* eslint-disable react/prop-types */


export default function Component({
  
  username,
  register,
  // formState,
  state = false,
}) {
  // const {
  //   // errors,
  //   // isDirty,  
  //   // touchedFields,
  //   // dirtyFields,
  //   // isValid,
  //   // isSubmitting,
  //   // isSubmitted,
  //   // isSubmitSuccessful,
  //   // submitCount,
  // } = formState;
  return (
    <>
      <div className = "flex flex-col">
        
         
            <label htmlFor={username}>{username} </label>
          <input
            className="border border-black rounded-lg h-10 p-4"
              type="number"
              id={username}
              name={username} // Add the 'name' attribute
              {...register(username, {
                valueAsNumber: true,
                // required: {
                //   // Use a string for the 'required' message
                //   value: true,
                //   message: "This field is required",
                },
                // validate: (fieldValue) => {
                //   return (
                //     fieldValue !== "xyz@gmail.com" ||
                //     "Enter a different email address"
                //   );
                // },
                  // }
                )
            }
              required
            />
           
          
        
      </div>
    </>
  );
}
