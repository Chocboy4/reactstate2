import React from "react";
import { useState } from "react";

const Form = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const submitForm = (e) => {
    e.preventDefault()
    const formData = {emailState,passwordState}
    console.log(formData)

  }
  return (
    <div>
      <form
      onSubmit={submitForm}
        action=""
        className="border rounded bg-slate-100 w-[400px] p-2 shadow-sm m-4"
      >
        <div className="flex items-center justify-between">
          <label htmlFor="email">Email Address:</label>
          <input
            value={emailState}
            onChange={(e) => setEmailState(e.target.value) }
            className="w-[270px] mb-2"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex items-center justify-between">
          <label htmlFor="password">Password:</label>
          <input
          value={passwordState}
          onChange={(e) => setPasswordState(e.target.value) }
            className="w-[270px] mb-2"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <button className="bg-gradient-to-r from-[tomato] to-blue-300 rounded shadow p-2 w-full hover:bg-black">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
