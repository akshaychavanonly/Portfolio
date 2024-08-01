import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "../../styles/Contact/Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popupMessage, setPopupMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact", // Update this URL if needed
        formData
      );
      if (response.data.success) {
        setPopupMessage(response.data.message);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setPopupMessage("");
        }, 3000); // Hide the popup message after 3 seconds
      }
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__header">
          <h1>
            <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              O
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              N
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="200"
            >
              A
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-offset="200"
            >
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1200"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1400"
              data-aos-offset="200"
            >
              .
            </span>
          </h1>
        </div>
        <div className="contact__container">
          <div className="contact__details">
            <div className="contact__form" data-aos="fade-up">
              <form onSubmit={handleSubmit}>
                <p className="contact__form-group">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Enter name"
                    required
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="Enter email"
                    required
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="message">Concern: </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="contact__message"
                    cols="20"
                    rows="5"
                    placeholder="Type your message"
                  ></textarea>
                </p>
                <button type="submit" className="contact__send-btn">
                  Send
                </button>
              </form>
              {popupMessage && (
                <div className="popup-message">{popupMessage}</div>
              )}
            </div>
          </div>
          <div className="contact__info" data-aos="fade-up">
            <h3 className="contact__info-title">Let's Connect</h3>
            <div className="contact__info-details">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                  <p>
                    <span>Address:&nbsp;&nbsp;</span>Sunshine bungalow, lane
                    no-5, near early foods, lake view city, lohegaon pune-411047
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <p>
                    <span>Phone:</span>&nbsp;&nbsp;(+91) 9112998857
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <p>
                    <span>Email:&nbsp;&nbsp;</span>csakshay2000@gmail.com
                  </p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faSquareCheck} size="2x" />
                  <span>FREELANCE</span>
                </li>
              </ul>
            </div>
            <div className="contact__social">
              <p className="contact__linkedin">
                <a
                  href="https://www.linkedin.com/in/akshay-chavan-90a019225/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </p>
              <p className="contact__github">
                <a
                  href="https://github.com/akshaychavanonly"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
