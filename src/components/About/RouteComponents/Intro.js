import React from "react";

import "../../../styles/About/Route/Intro.scss";
const Intro = () => {
  return (
    <>
      <div className="about-intro">
        <div className="about-intro__container">
          <div className="about-intro__header">
            <h2 className="about-intro__number">
              0<span>1</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              H<span>ello</span>.
            </h1>
          </div>
          <div className="about-intro__description">
            <p data-aos="fade-right">
              I am <span>Akshay Chavan</span>
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              Hello! I am a passionate and dedicated software developer with a
              strong background in Computer Science, having completed my BTech
              from the Department of Technology, Shivaji University. My journey
              in the tech world has been both exciting and enriching, giving me
              a diverse skill set that spans multiple programming languages and
              technologies.{" "}
            </p>
            <p data-aos="fade-right" data-aos-delay="400">
              During my academic and professional journey, I have gained
              proficiency in languages like C, C++, and Java, and developed
              expertise in web technologies including HTML5, CSS, JavaScript,
              React, Node.js, and MongoDB. I have a solid foundation in database
              management with experience in MySQL and Oracle.{" "}
            </p>
            <p data-aos="fade-right" data-aos-delay="600">
              My practical experience includes an impactful internship at
              Multimix Solutions (Kolhapur), where I worked on various graphic
              design projects, utilizing tools such as Premiere Pro, Photoshop,
              and After Effects. Additionally, my internship at Growmore
              Technoline India Pvt Ltd further honed my technical and project
              management skills.
            </p>
            <p data-aos="fade-right" data-aos-delay="800">
              I have also completed a comprehensive 1-month internship program
              on Big Data Analytics with Pantech E-Learning and IEEE SB Chapter,
              NITK. This program equipped me with the skills to analyze and
              derive insights from large datasets using advanced tools and
              technologies like Hadoop and Python.{" "}
            </p>
            <p data-aos="fade-right" data-aos-delay="800">
              My commitment to continuous learning and professional development
              led me to complete an 8-week online training on Web Development
              from Internshala, where I excelled and was recognized as a top
              performer. This training covered a wide array of topics including
              HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, and React.{" "}
            </p>
            <p data-aos="fade-right" data-aos-delay="800">
              I am excited to bring my expertise and enthusiasm to new
              challenges and opportunities, aiming to contribute effectively to
              the tech community and create impactful solutions.{" "}
            </p>

            <div className="about-intro__emoji">:&nbsp;</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
