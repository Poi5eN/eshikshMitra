const nodemailer = require('nodemailer')


  
  // Create a function to send an email
  const sendEmail = async (toEmail, subject, htmlContent) => {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      // auth: {
      //   user: 'karan07200119@gmail.com',
      //   pass: 'wzzthlkezgnfniif'
      // },
      auth: {
        user: 'corplyxtechnologies000@gmail.com',
        pass: 'fgrp negr wgew djns'
      },
    });

    try {

  
      const mailOptions = {
        from: 'corplyxtechnologies000@gmail.com',
        to: toEmail,
        subject: subject,
        html: htmlContent,
      };
    
      await transporter.sendMail(mailOptions);
    }
    catch (error) {
      console.log(error);
    }

  };

module.exports = sendEmail


// const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'karan07200119@gmail.com',
//       pass: 'wzzthlkezgnfniif'
//     },
//   });
  
//   // Create a function to send an email
//   const sendEmail = (toEmail, subject, htmlContent) => {
//     const mailOptions = {
//       from: 'karan07200119@gmail.com',
//       to: toEmail,
//       subject: subject,
//       html: htmlContent,
//     };
  
//     return transporter.sendMail(mailOptions);
//   };

// module.exports = sendEmail;