import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <nav>
          <span id="logo">YOUR LOGO</span>
          <div id="link">
            <li id="list">Home</li>
            <li id="list">About</li>
            <li id="list">Product</li>
            <li id="list">Service</li>
            <li id="list">Login</li>
          </div>
          <button id="btn">Sign Up</button>
        </nav>
        <div className="content">
          <h3 className="heading">3D GlassoMorphism</h3>
          <h1 className="heading2">LANDING PAGE</h1>
          <p className="maintext">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fugit
            tempora, debitis non aliquam temporibus adipisci quasi illum
            recusandae doloremque dolorem! Fugiat voluptate porro assumenda
            consectetur sequi vitae, mollitia ratione, voluptatibus odit aliquam
            eius?
          </p>
          <button id="mainBtn">Click Here</button>
        </div>
      </div>
    </>
  );
};

export default Home;
