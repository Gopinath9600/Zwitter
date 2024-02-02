import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Zwitter</h1>
          <h6>Let's Scroll through the World</h6>
        </div>
      </div>

      {/* <Login/> or </SignUp>*/}
      <Signup />
      {/* <Login /> */}
    </div>
  );
};

function Login() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Don't have an account. Sign up!
          </span>
          <button className="button infoButton" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

function Signup() {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            className="infoInput"
            name="password"
          />
          <input
            type="text"
            placeholder="Confirm Password"
            className="infoInput"
            name="confirmpass"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;

{
  /* <h3>{ isSignUp?"Sign Up":"Log In" }</h3>

{isSignUp && (
        <div>
            <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange={handleChange} value={data.firstname} />
            <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange={handleChange} value={data.lastname}/>

        </div>
    )
}

<div>
    <input type="text" placeholder='Username' className='infoInput' name='username' onChange={handleChange} value={data.username}/>
</div>
<div>
    <input type="password" placeholder='Password' className='infoInput' name='password' onChange={handleChange} value={data.password}/>
    {isSignUp && (
        
        <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpass' onChange={handleChange} value={data.confirmpass}/>
        
    )}
    
</div>

<span
    style={{
        display: confirmPass? "none":"block", 
        color: 'red', 
        fontSize: '12px', 
        alignSelf: 'flex-end', 
        marginRight: "5px"
    }}
>
    *Confirm Password is not same*
</span>

<div>
    <span
        style={{
            fontSize: "12px",
            cursor: "pointer",
            textDecoration: "underline",
        }}
        onClick={() => {
            resetForm();
            setIsSignUp((prev) => !prev);
        }}
    >
        {isSignUp
            ? "Already have an account? Login"
            : "Don't have an account? Sign up"}
    </span>
    <button
        className="button infoButton"
        type="Submit"
        disabled={loading}
    >
        {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"} 
    </button>
</div>

</form>
</div> */
}
