import React from "react";

import "../../../styles/About/Route/Graduation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

const Graduation = () => {
  return (
    <>
      <div className="graduation">
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>3</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>Department of technology, Shivaji University</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              />
              &nbsp;&nbsp;15/06/2017 - 15/03/2022
            </h2>
            <p>
              Pursued B.Tech in Computer Science Engineering from 'Department of
              technology'.where I developed a strong foundation in software
              development and problem-solving. I'm passionate about leveraging
              my skills to create innovative solutions and constantly eager to
              learn and grow in the tech industry. Through various projects,
              including my portfolio, I've honed my abilities and am excited to
              contribute to dynamic and challenging environments.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
