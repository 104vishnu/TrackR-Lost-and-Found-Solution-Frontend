import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.scss';
import newRequest from "../../utils/newRequest.js";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/v1/auth/register", {
        name,
        email,
        mobile,
        address,
        password,
      });
      navigate("/login");
    } catch (err) {
      console.log('Errroooor in registrrrr front');
      console.log(err);
    }
  };
  return (
    <div className="register">
      <div className="regiterA">
       
          <img src="images/nittlogo.png" alt="" />

          <h1>Register</h1>
     
      </div>

      <div className="registerB">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter Your Full Name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="webmail">Email</label>
          <input
            name="email"
            id="webmail"
            type="text"
            placeholder="Enter Your webmail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="mobile">Mobile</label>
          <input
            name="mobile"
            id="mobile"
            type="text"
            placeholder="Enter Your mobile"
            onChange={(e) => setMobile(e.target.value)}
          />

          <label htmlFor="hosteladd">Hostel Address</label>
          <input
            name="hosteladd"
            id="hosteladd"
            type="text"
            placeholder="Enter Your hosteladdress"
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter Your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>

        <p>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
