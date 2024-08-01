import React from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Akshay Chavan.</span> <br /> Highly passoinate
                  Full-Stack Developer who builds lively websites.
                </p>
              </Link>
            </div>
            {/* <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>6 month of experience.</span>
                  <br />I have 6 months of experience in developing highly
                  responsive frontend of websites using React.js and Bootstrap.
                </p>
              </Link>
            </div> */}
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>Growmore Technoline</span> - Full-Stack Developer{" "}
                  </li>
                  <li>
                    <span>Multimix Solutions</span> - Graphic Designer{" "}
                  </li>
                  <li>
                    <span>Pentech E-Learning IEEE</span> - Data Analyst{" "}
                  </li>
                  <li>
                    <span>Internshala</span> - Web Developer{" "}
                  </li>
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                <p>
                  <span>Department of technology, Shivaji University </span>
                  <br />I recently completed my B.Tech in Computer Science from
                  the Department of Technology, where I developed a strong
                  foundation in software development and problem-solving. I'm
                  passionate about leveraging my skills to create innovative
                  solutions and constantly eager to learn and grow in the tech
                  industry. Through various projects, including my portfolio,
                  I've honed my abilities and am excited to contribute to
                  dynamic and challenging environments.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
