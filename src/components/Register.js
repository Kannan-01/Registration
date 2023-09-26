import React from "react";
import { TextField, Button, Stack } from "@mui/material";
import "./Register.css";
import { useState } from "react";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpass, setCPass] = useState("");

  const [isUsernameValid, setisUsernameValid] = useState(true);
  const [isEmailValid, setisEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isCpasswordValid, setIsCpasswordValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password || !email || !cpass) {
      alert("Please fill the form completely!");
    } else if (password !== cpass) {
      alert("passwords do not match enter correctly !!");
    } else
      alert(`
             Username : ${username}
             Email : ${email}
             Password ${password}'
             confirmation : ${cpass}
            `);
  };

  const handleReset = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setCPass("");
  };

  const validateInput = (e) => {
    const { value, name } = e.target;
    if (name == "username") {
      const inputUsername = e.target.value;
      setUsername(inputUsername);
      const pattern = /^[a-zA-Z0-9_]+$/;
      const isUsernameValid = pattern.test(inputUsername);
      setisUsernameValid(isUsernameValid);
    } else if (name == "email") {
      const inputEmail = e.target.value;
      setEmail(inputEmail);
      const pattern = /^[\w\.-]+@[\w\.-]+\.\w+$/;
      const isEmailValid = pattern.test(inputEmail);
      setisEmailValid(isEmailValid);
    } else if (name == "password") {
      const inputPassword = e.target.value;
      setPassword(inputPassword);
      const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
      const isPasswordValid = pattern.test(inputPassword);
      setIsPasswordValid(isPasswordValid);
    } else {
      const inputPassword = e.target.value;
      setCPass(inputPassword);
      if (password === inputPassword) {
        setIsCpasswordValid(true);
      } else {
        setIsCpasswordValid(false);
      }
    }
  };

  return (
    <div className="Home">
      <div className="card">
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="Text-area">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              className="Text-field"
              name="username"
              value={username || ""}
              onChange={(e) => validateInput(e)}
            />
          </div>
          {!isUsernameValid && (
            <div className="mb-3 text-danger">*invalid input</div>
          )}

          <div className="Text-area">
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              className="Text-field"
              name="email"
              value={email || ""}
              onChange={(e) => validateInput(e)}
            />
          </div>
          {!isEmailValid && (
            <div className="mb-3 text-danger">* Enter the email correctly</div>
          )}

          <div className="Text-area">
            <TextField
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
              className="Text-field"
              name="password"
              value={password || ""}
              onChange={(e) => validateInput(e)}
            />
          </div>

          {!isPasswordValid && (
            <div className="mb-3 text-danger">*Create a strong password</div>
          )}
          <div className="Text-area">
            <TextField
              type="password"
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
              className="Text-field"
              name="cpass"
              value={cpass || ""}
              onChange={(e) => validateInput(e)}
            />
          </div>
          {!isCpasswordValid && (
            <div className="mb-3 text-danger">* Passwords do not match</div>
          )}

          <div style={{ textAlign: "center" }}>
            <Button type="submit" className="btnstyle" onClick={handleSubmit}>
              Sign Up
            </Button>
            <Button onClick={handleReset} className="btnstyle">
              Reset
            </Button>
          </div>
          <div style={{ textAlign: "center" }}>
            Have an Account ?{" "}
            <a href="" className="links">
              Login Here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
