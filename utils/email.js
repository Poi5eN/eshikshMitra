const nodemailer = require('nodemailer')


  
  const sendEmail = async (toEmail, subject, htmlContent) => {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
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