import React, { useState } from 'react'
import "./Login.css"
function Login() {
    const[isLogin,setIsLogin]=useState(false)

  return (
    <div className='mContainer'>
    <div className="container">

      {/* LEFT SIDE (STATIC) */}
      <div className="left">
        <img
          src="Login.jpg"
          alt="visual"
        />
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

              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />

              <div className="forgot">Forgot Password?</div>

              <button className="main-btn">Log in</button>
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
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>

              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />

              <button className="main-btn">Create Account</button>
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
  )
}

export default Login