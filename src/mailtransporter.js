const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net", 
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "admin@enebula.in", // generated ethereal user
      pass: "enebula_email@)@)", // generated ethereal password
    },
});


module.exports = transporter;