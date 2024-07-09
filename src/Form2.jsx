import React, { useState } from "react";

const Form2 = () => {
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [phoneNoState, setphoneNoState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const submit2 = (e) => {
    e.preventDefault();
    const formData2 = {
      firstNameState,
      lastNameState,
      phoneNoState,
      emailState,
      passwordState,
    };
    console.log(formData2);
  };
  return (
    <>
      <div className="w-[400px]">
        <h1 className="text-center bg-orange-300 text-red-500">
          Resgistration
        </h1>
        <form
          onSubmit={submit2}
          action=""
          className='border rounded bg-slate-100 w-[400px] p-2 shadow-sm m-4"'
        >
          <label htmlFor="FirstName">First name:</label>
          <input
          value={firstNameState}
          onChange={(e) => setFirstNameState(e.target.value)}
            className="w-[270px] mb-2"
            type="text"
            name=""
            id=""
            placeholder="Enter your First name"
          />
          <br />
          <label htmlFor="LastName">Last name:</label>
          <input
          value={lastNameState}
          onChange={(e) => setLastNameState(e.target.value)}
            className="w-[270px] mb-2"
            type="text"
            name=""
            id=""
            placeholder="Enter your Last name"
          />
          <br />
          <label htmlFor="PhoneNo">Phone No:</label>
          <input
          value={phoneNoState}
          onChange={(e) => setphoneNoState(e.target.value)}
            className="w-[270px] mb-2"
            type="number"
            name=""
            id=""
            placeholder="Enter your phone number"
          />
          <br />
          <label htmlFor="Email">Email:</label>
          <input
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
            className="w-[270px] mb-2"
            type="email"
            name=""
            id=""
            placeholder="Enter your Email address"
          />
          <br />
          <label htmlFor="Password">Password:</label>
          <input
          value={passwordState}
          onChange={(e) => setPasswordState(e.target.value)}
            className="w-[270px] mb-2"
            type="text"
            name=""
            id=""
            placeholder="Enter your password"
          />
          <button className="bg-red-300 text-center w-full font-bold hover:bg-black hover:text-white">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Form2;
