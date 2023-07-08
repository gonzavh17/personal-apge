import React from "react";
import "../assets/Css/Home.css";
import Imagenes from "../Imagenes";

function Home() {
  return (
    <div className="home">
      <div className="home-parent">
        <div className="home-div1">
          <img src={Imagenes.porsche1} alt="" className="home-img" />
        </div>
        <div className="home-div2">
          <img src={Imagenes.porsche2} alt="" className="home-img" />
        </div>
        <div className="home-div3">
          <p className="home-title">My Portfolio</p>
          {/*  <p className='home-description'>Front-end Developer</p> */}
          <p className="home-name">Gonzalo Andrés Asis - Web developer</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
