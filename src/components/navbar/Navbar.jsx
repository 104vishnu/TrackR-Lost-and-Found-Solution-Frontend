import React, { useEffect, useState } from "react";
import newRequest from "../../utils/newRequest";
import { Navigate } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(true);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  console.log(active);

  // const navigate = Navigate();
  // const isActive =()=>{
  //   if(currentUser)
  //   setActive(true);
  // else
  // setActive(false);
  // };

  // useEffect(()=>{
  //   isActive();
  // },[]);

  const handleLogout = async () => {
    try {
      await newRequest.post("/v1/auth/logout");
      localStorage.setItem("currentUser", null);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="navbar">
      <div className="nav1">
        <span className="nav1A"> Department </span>
        <span className="nav1A"> Library </span>
        <span className="nav1A"> Events </span>
      </div>

      <div className="nav2">
          <img src="images/nittlogo.png" alt="" />
        
          <p>National Institute of Technology, Trichy</p>
          <p>राष्ट्रीय प्रौद्योगिकी संस्थान, तिरुचिरापल्ली</p>
      
      </div>

      <div className="nav3">
        <span className="nav3a"> webmail </span>
        {!active ? (
          <span className="nav3a"> login </span>
        ) : (
          <span className="nav3a" onClick={handleLogout}> logout </span>
        )}

        <span className="nav3a"> register </span>
      </div>
    </div>
  );
}

export default Navbar;
