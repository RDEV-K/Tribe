const nodeMailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const constants = require("../constant/const");
const config = require("../config/config");

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "salikhan8458@gmail.com",
    pass: "gvfm utdh enwv ivze",
  },
});

const sendEmail = async (email, subject, payload = {}) => {
  try {
    let emailTemplatePath;
    console.log(
      `subject: ${subject}, constants.VERIFICATION_EMAIL_SUBJECT: ${constants.VERIFICATION_EMAIL_SUBJECT}`
    );

    switch (subject) {
      case constants.VERIFICATION_EMAIL_SUBJECT:
        emailTemplatePath = path.join(
          __dirname,
          "templates",
          "verification_email.html"
        );
        break;
      case "welcome":
        emailTemplatePath = path.join(
          __dirname,
          "email-templates",
          "welcome-email.html"
        );
        break;
      case constants.FORGOT_PASSWORD_SUBJECT:
        emailTemplatePath = path.join(
          __dirname,
          "email-templates",
          "password-reset-email.html"
        );
        break;
      default:
        throw new Error(`Unknown email type: ${subject}`);
    }

    let emailTemplate = fs.readFileSync(emailTemplatePath, "utf-8");

    Object.keys(payload).forEach((key) => {
      emailTemplate = emailTemplate.replace(
        new RegExp(`{{${key}}}`, "g"),
        payload[key]
      );
    });

    await transporter.sendMail({
      from: config.USER,
      to: email,
      subject: subject,
      html: emailTemplate,
    });

    return `Email sent successfully to ${email}`;
  } catch (err) {
    console.error("Error sending email:", err);
    throw new Error(err);
  }
};

module.exports = { sendEmail };
