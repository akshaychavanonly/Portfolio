const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure the transporter
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "akshayfury@gmail.com", // Your Gmail address
//     pass: "Coolakshay@01", // Your Gmail password or App Password
//   },
// });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Setup email data
  const mailOptions = {
    from: email,
    to: "akshayfury@gmail.com",
    subject: "New Contact Form Submission",
    text: `You have received a new message from your website contact form.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send({
        success: false,
        message: "An error occurred while sending the email.",
      });
    }
    console.log("Email sent: " + info.response);
    res
      .status(200)
      .send({ success: true, message: "Form submitted successfully" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
