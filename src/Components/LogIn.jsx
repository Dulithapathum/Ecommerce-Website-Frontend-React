import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passtype, setPasstype] = useState(false);

  const showHddle = () => {
    setPasstype(!passtype);
  };

  const loginSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="bg-slate-200 h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center bg-white max-w-[400px] w-full px-10 py-5  mx-auto rounded">
        <h2 className="text-3xl font-bold pb-10">LogIn</h2>
        <form action="/" className="flex flex-col gap-3 w-full">
          <label className="input-box">
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>

          <label className="input-box flex items-center">
            <input
              type={passtype ? "text" : "password"}
              placeholder="Password"
              className="input"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {passtype ? (
              <FiEye className="text-blue-500 text-lg " onClick={showHddle} />
            ) : (
              <FiEyeOff
                className="text-slate-500 text-lg "
                onClick={showHddle}
              />
            )}
          </label>

          <button
            type="submit"
            className="submit-btn"
            onClick={() => {
              loginSubmit();
            }}
          >
            LogIn
          </button>

          <h5 className="text-center">
            Dont't have an Account
            <Link to="/signup" className="font-semibold underline pl-1">
              SignUp
            </Link>{" "}
          </h5>
        </form>
      </div>
    </div>
  );
};
