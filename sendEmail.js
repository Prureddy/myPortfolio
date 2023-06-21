const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'prucourses8861@gmail.com',
    pass: 'Pruthvi@2003'
  }
});

// Handle POST request to send email
app.post('/sendEmail', (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'pruthvisreddy8861@gmail.com', // Replace with the owner's email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      res.sendStatus(500);
    } else {
      console.log('Email sent:', info.response);
      res.sendStatus(200);
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
