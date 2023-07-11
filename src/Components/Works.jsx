import React from "react";
import "../assets/Css/Works.css";
import Imagenes from "../Imagenes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDatabase} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faReact,
  faBootstrap,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

function Works() {
  return (
    <div className="works-container">
      <p className="works-title">Previous Works</p>

      <div class="works-parent">
        <div class="works-div1">
          <div className="works-div__title-container">
            <p className="works-div__title">Weather App</p>
          </div>
          <div className="works-div__description-container">
            <p className="works-div__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              officiis omnis, incidunt sequi sapiente similique facilis fuga!
              Voluptate, excepturi id, earum inventore natus fugiat praesentium
              eos dignissimos veritatis non cupiditate!
            </p>
            <div className="works-link-container">
              <a
                href="https://weather-app-14iy.vercel.app/"
                className="works-link"
              >
                <FontAwesomeIcon icon={faArrowRight} /> Visit
              </a>
            </div>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <span className="technologies-span">
              <FontAwesomeIcon icon={faHtml5} /> Html5
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faCss3} /> Css3
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faReact} /> React
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faDatabase} /> WeatherApi
            </span>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              officiis omnis, incidunt sequi sapiente similique facilis fuga!
              Voluptate, excepturi id, earum inventore natus fugiat praesentium
              eos dignissimos veritatis non cupiditate!
            </p>
            <div className="works-link-container">
              <a
                href="https://pomodoro-app-woad-eight.vercel.app/"
                className="works-link"
              >
                <FontAwesomeIcon icon={faArrowRight} /> Visit
              </a>
            </div>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <span className="technologies-span">
              <FontAwesomeIcon icon={faHtml5} /> Html5
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faCss3} /> Css3
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faReact} /> React
            </span>
          </div>
        </div>
        <div class="works-div2">
          <img src={Imagenes.porsche3} alt="" className="works-img" />{" "}
        </div>
      </div>

      <div class="works-parent">
        <div class="works-div1">
          <div className="works-div__title-container">
            <p className="works-div__title">Movie Mania</p>
          </div>
          <div className="works-div__description-container">
            <p className="works-div__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              officiis omnis, incidunt sequi sapiente similique facilis fuga!
              Voluptate, excepturi id, earum inventore natus fugiat praesentium
              eos dignissimos veritatis non cupiditate!
            </p>
            <div className="works-link-container">
              <a
                href="https://movie-mania-six.vercel.app/"
                className="works-link"
              >
                <FontAwesomeIcon icon={faArrowRight} /> Visit
              </a>
            </div>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <span className="technologies-span">
              <FontAwesomeIcon icon={faHtml5} /> Html5
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faCss3} /> Css3
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faReact} /> React
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faDatabase} /> The Movie Data Base
            </span>
          </div>
        </div>
        <div class="works-div2">
          <img src={Imagenes.porsche3} alt="" className="works-img" />{" "}
        </div>
      </div>

      <div class="works-parent">
        <div class="works-div1">
          <div className="works-div__title-container">
            <p className="works-div__title">Note App</p>
          </div>
          <div className="works-div__description-container">
            <p className="works-div__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              officiis omnis, incidunt sequi sapiente similique facilis fuga!
              Voluptate, excepturi id, earum inventore natus fugiat praesentium
              eos dignissimos veritatis non cupiditate!
            </p>
            <div className="works-link-container">
              <a
                href="https://notes-app-gamma-brown.vercel.app/"
                className="works-link"
              >
                <FontAwesomeIcon icon={faArrowRight} /> Visit
              </a>
            </div>
          </div>
          <p className="technologies-title">Technolgies</p>
          <div className="works-div__technolgies-container">
            <span className="technologies-span">
              <FontAwesomeIcon icon={faHtml5} /> Html5
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faCss3} /> Css3
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faReact} /> React
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faBootstrap} /> Bootstrap
            </span>
            <span className="technologies-span">
              <FontAwesomeIcon icon={faDatabase} /> Firestore
            </span>
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
