import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      console.log(email);
      console.log(password);
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Login Success:", res.data);
      navigate("/home");
    } catch (error) {
      console.log("Login Error:", error.response?.data);
    }
  };

  const handleSignup = async () => {
    try {
      console.log(email);
      console.log(password);
      // console.log(name)
      const name = firstName +" "+ lastName;

      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Signup Success:", res.data);
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setIsLogin(true); // switch to login
    } catch (error) {
      console.log("Signup Error:", error.response?.data);
    }
  };
  return (
    <div className="mContainer">
      <div className="container">
        {/* LEFT SIDE (STATIC) */}
        <div className="left">
          <img src="Login.jpg" alt="visual" />
        </div>

        {/* RIGHT SIDE (DYNAMIC) */}
        <div className="right">
          <div className="form-box">
            {/* 🔁 TOGGLE BASED ON STATE */}
            {isLogin ? (
              <>
                <h1>Log in</h1>
                <p>
                  Don't have an account?{" "}
                  <span onClick={() => setIsLogin(false)} className="link">
                    Create an Account
                  </span>
                </p>

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className="forgot">Forgot Password?</div>

                <button className="main-btn" onClick={handleLogin}>
                  Log in
                </button>
              </>
            ) : (
              <>
                <h1>Create an Account</h1>
                <p>
                  Already have an account?{" "}
                  <span onClick={() => setIsLogin(true)} className="link">
                    Log in
                  </span>
                </p>

                <div className="name-row">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="main-btn" onClick={handleSignup}>
                  Create Account
                </button>
              </>
            )}

            {/* COMMON PART */}

            <div className="divider">or</div>

            <div className="social">
              <button>Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
