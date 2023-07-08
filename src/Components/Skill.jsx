import React from "react";
import "../assets/Css/Skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Skill() {
  return (
    <div className="skill-container">
      <div className="skill-title_container">
        <p className="skill-title">Skills</p>
        <p className="skill-description">Mi nivel técnico</p>
      </div>
      <div className="skill-grid-container">
        <div className="skill-parent">
          <div className="skill-div1">
            <div className="skill-card">
              <p className="skill-card_title">Front-end Developer</p>
              <ul>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Html</li>
                </span>

                <p className="skill-level">Advanced</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Css</li>
                </span>

                <p className="skill-level">Skillfull</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Javascript</li>
                </span>

                <p className="skill-level">Skillfull</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Git</li>
                </span>

                <p className="skill-level">Intermediate</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>React</li>
                </span>

                <p className="skill-level">Skillfull</p>
              </ul>
            </div>
          </div>
          <div className="skill-div2">
            <div className="skill-card">
              <p className="skill-card_title">Back-End Developer</p>
              <ul className="skill-list">
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Node Js</li>
                </span>
                <p className="skill-level">Intermediate</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Firebase</li>
                </span>
                <p className="skill-level">Intermediate</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Python</li>1
                </span>
                <p className="skill-level">Learning</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>Mongo DB</li>
                </span>

               

                <p className="skill-level">Learning</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} />
                  <li>SQL</li>
                </span>

                <p className="skill-level">Learning</p>
                <span className="skill-span">
                  <FontAwesomeIcon icon={faCheck} /><li>Express JS</li>
                </span>

                <p className="skill-level">Learning</p>
              </ul>
            </div>
          </div>
          <div className="skill-div3">
            <div className="skill-card">
              <p className="skill-card_title">Aditional Skills</p>
              <ul>
                <span className="skill-span">
                <FontAwesomeIcon icon={faCheck} />
                <li>Linux</li>
                </span>
               
                <p className="skill-level">Intermediate</p>
                <span className="skill-span">
                <FontAwesomeIcon icon={faCheck} />
                <li>Español</li>
                </span>
                
                <p className="skill-level">Native Speaker</p>
                <span className="skill-span">
                <FontAwesomeIcon icon={faCheck} />
                <li>Ingles</li>
                </span>
                
                <p className="skill-level">Fluent Speaker</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
