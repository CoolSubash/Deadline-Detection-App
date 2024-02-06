// sendNotification.js
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const sendnotification = (deadline, timeApproaching) => {
  const { taskName } = deadline;
 
  // Email configuration using nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'subashneupane2022@gmail.com',
      pass: 'ypvwgcpohzfnrbuq',
    },
  });

  const mailOptions = {
    from: 'subashneupane2022@gmail.com',
    to: "subashneupane2026@gmail.com",
    subject: `Deadline Notification for Task: ${taskName}`,
    text: `Your task '${taskName}' is approaching the deadline in less than ${timeApproaching} hours.`,
  };
  

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });



//   Twilio

// Your AccountSID and Auth Token from console.twilio.com
const accountSid = 'AC77321ae7df504f0aef94c016337c5191';
const authToken = 'd9eb6b0913547bd451383067c0e56e9d';




// Create a Twilio client instance
const client = twilio(accountSid, authToken);

// Send a message using ES6 Promise syntax
client.messages
  .create({
    body: 'Congratulation Bimal On your Selection for Summer Internship 2025 from amazon.',
    to: '+19803014299', // Text your number
    from: '+18558971021', // From a valid Twilio number
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error('Error sending message:', error));


  
};

export default sendnotification;
