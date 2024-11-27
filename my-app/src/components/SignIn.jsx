// SignIn.jsx
import React, { useState } from "react";
import './SignIn.css';
import LoginFormFile from "./LoginFormFile";

const SignIn = ({ onSubmit }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit({ email, password });
  // };

  return (
    <div className="sign-in-container">
      {/*<form onSubmit={handleSubmit}>*/}
        <h2>Sign In</h2>
        {/*<label htmlFor="email">Email:</label>*/}
        {/*<input*/}
        {/*  type="email"*/}
        {/*  id="email"*/}
        {/*  value={email}*/}
        {/*  onChange={(e) => setEmail(e.target.value)}*/}
        {/*  required*/}
        {/*/>*/}
        {/*<label htmlFor="password">Password:</label>*/}
        {/*<input*/}
        {/*  type="password"*/}
        {/*  id="password"*/}
        {/*  value={password}*/}
        {/*  onChange={(e) => setPassword(e.target.value)}*/}
        {/*  required*/}
        {/*/>*/}
        <div>
          <LoginFormFile />
        </div>
        {/*<button type="submit">Sign In</button>*/}
      {/*</form>*/}
    </div>
  );
};

export default SignIn;
