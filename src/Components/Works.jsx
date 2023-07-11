import React from "react";
import "../assets/Css/Works.css";
import Imagenes from "../Imagenes";

function Works() {
  return (
    <div className="works-container">
      <p className="works-title">Previous Works</p>
      <div class="works-parent">
        <div class="works-div1">
          <div className="works-div__title-container">
            <p className="works-div__title">Movie Mania</p>
          </div>
          <div className="works-div__description-container">
            <p className="works-div__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat officiis omnis, incidunt sequi sapiente similique facilis fuga! Voluptate, excepturi id, earum inventore natus fugiat praesentium eos dignissimos veritatis non cupiditate!
            </p>
            <a href="https://movie-mania-six.vercel.app/">Visitar Web</a>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>The Movie Database</li>
            </ul>
          </div>
        </div>
        <div class="works-div2">
          <img src={Imagenes.porsche3} alt="" className="works-img" />{" "}
        </div>
      </div>

      <div class="works-parent">
        <div class="works-div1">
          <div className="works-div__title-container">
            <p className="works-div__title">NoteApp</p>
          </div>
          <div className="works-div__description-container">
            <p className="works-div__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              porro ipsum quae velit iste doloremque, nemo non ut ex doloribus,
              nobis beatae voluptates laborum numquam itaque, possimus expedita
              repudiandae recusandae!
            </p>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>React</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div class="works-div2">
          <img src={Imagenes.porsche3} alt="" className="works-img" />{" "}
        </div>
      </div>

      <div class="works-parent">
        <div class="works-div1">
          <div className="works-div__title-container">
            <p className="works-div__title">NoteApp</p>
          </div>
          <div className="works-div__description-container">
            <p className="works-div__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              porro ipsum quae velit iste doloremque, nemo non ut ex doloribus,
              nobis beatae voluptates laborum numquam itaque, possimus expedita
              repudiandae recusandae!
            </p>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>React</li>
              <li>Firebase</li>
            </ul>
          </div>
        </div>
        <div class="works-div2">
          <img src={Imagenes.porsche3} alt="" className="works-img" />{" "}
        </div>
      </div>

      <div class="works-parent">
        <div class="works-div1">
          <div className="works-div__title-container">
            <p className="works-div__title">Simple Pomodoro</p>
          </div>
          <div className="works-div__description-container">
            <p className="works-div__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              porro ipsum quae velit iste doloremque, nemo non ut ex doloribus,
              nobis beatae voluptates laborum numquam itaque, possimus expedita
              repudiandae recusandae!
            </p>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <ul>
              <li>Html</li>
              <li>Css</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div class="works-div2">
          <img src={Imagenes.porsche3} alt="" className="works-img" />{" "}
        </div>
      </div>
    </div>
  );
}

export default Works;
