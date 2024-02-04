import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import newRequest from '../../utils/newRequest.js';

function Login() {



  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

const handleSubmit = async (e)=>
{
  e.preventDefault();
  try{

    console.log(email,password);
    const res = await newRequest.post("/v1/auth/login",{email,password});
    console.log(res);
    localStorage.setItem("currentUser", JSON.stringify(res.data));
    console.log('login complete');
    navigate("/lostitems");

  }
  catch (err) {
    console.log('error in login frontend page ')
  }

}

  return (
    <div className="login">

        <div className="loginA">
            <img src="images/nittlogo.png" alt="" />
            <h1>Login</h1>
        </div>

        <div className="loginB">
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="email">UserId</label>
                <input name="email" type="text" id='email' placeholder='Enter webmail' onChange={(e)=> setEmail(e.target.value)} />

                <label htmlFor="password">Passsword</label>
                <input name="password" type="password" id='passsword' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)} />

                <button type='submit'>LOGIN</button>


            </form>
            <p> Not a member? <span>Register Now</span> </p>
        </div>
    </div>
  )
}

export default Login