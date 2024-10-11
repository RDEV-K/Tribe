const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const db = require("../database/connect");
const bcrypt = require("bcryptjs");
const ResponseModel = require("../constant/response.constant.js");
const CreateJwtToken = require("../middleware/authentication");
const { generateOtp, getOtpExpiryTime } = require("./utils");
const { sendEmail } = require("../mailer/mail");
const constant = require("../constant/const");

exports.Register = async (req, res) => {
  const response = new ResponseModel();
  try {
    const { first_name, last_name, email, password, role, phone_number } =
      req.body;
    console.log(req.body);
    
    const userExists = await db.query(
      `SELECT email FROM users WHERE email = $1`,
      {
        bind: [email],
        type: QueryTypes.SELECT,
      }
    );

    if (userExists.length > 0) {
      response.setError("User with this email already exists");
      response.setStatus(StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const time = new Date().toISOString();
    const otp = generateOtp();
    const otpExpiresAt = getOtpExpiryTime();
    const mailpayload = {
      name: first_name,
      verificationCode: otp,
      email: email,
    };
    // await sendEmail(email, constant.VERIFICATION_EMAIL_SUBJECT, mailpayload);

    await db.query(
      `INSERT INTO users(
           first_name,
           last_name,
           email,
           password,
           role,
           phone_number,
           otp,
           otpexpiresat,
           created_at
        )
        VALUES
        (
           $1,
           $2,
           $3,
           $4,
           $5,
           $6,
           $7,
           $8,
            $9
        )`,
      {
        bind: [
          first_name,
          last_name,
          email,
          hashedPassword,
          role,
          phone_number,
          otp,
          otpExpiresAt,
          time,
        ],
        type: QueryTypes.INSERT,
      }
    );

    response.setData("User created successfully");
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.Login = async (req, res) => {
  const response = new ResponseModel();
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      response.setData("Email or password is missing");
      response.setStatus(StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    const user = await db.query(
      `SELECT id, first_name, last_name, email, password, role, is_active, otpExpiresAt FROM users WHERE email=$1`,
      {
        bind: [email],
        type: QueryTypes.SELECT,
      }
    );

    if (!user[0]) {
      response.setData(`User with email ${email} not found`);
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }

    if (!user[0].is_active) {
      const otpExpiresAt = new Date(user[0].otp_expires_at);
      const now = new Date();

      const minutesUntilExpiration = (otpExpiresAt - now) / 60000;

      if (minutesUntilExpiration > 0 && minutesUntilExpiration < 10) {
        response.setData("Verify your account to continue");
        response.setStatus(StatusCodes.FORBIDDEN);
        return res.status(StatusCodes.FORBIDDEN).json(response);
      } else {
        const otp = generateOtp();
        const newExpiresAt = getOtpExpiryTime();

        await db.query(
          `UPDATE users SET otp = $1, otpExpiresAt = $2 WHERE email = $3`,
          {
            bind: [otp, newExpiresAt, email],
            type: QueryTypes.UPDATE,
          }
        );

        const mailPayload = {
          name: user[0].first_name,
          verificationCode: otp,
          email: email,
        };
        // await sendEmail(
        //   email,
        //   constant.VERIFICATION_EMAIL_SUBJECT,
        //   mailPayload
        // );

        response.setData(
          "A new OTP has been sent to your email. Please verify your account."
        );
        response.setStatus(StatusCodes.OK);
        return res.status(StatusCodes.OK).json(response);
      }
    }

    const isMatch = await bcrypt.compare(password, user[0].password);
    if (!isMatch) {
      response.setData("Incorrect email or password");
      response.setStatus(StatusCodes.UNAUTHORIZED);
      return res.status(StatusCodes.UNAUTHORIZED).json(response);
    }

    const payload = {
      id: user[0].id,
      name: user[0].first_name,
      email: user[0].email,
      role: user[0].role.toUpperCase(),
    };

    const token = CreateJwtToken(payload);
    const usr = {
      id: user[0].id,
      name: user[0].first_name,
      email: user[0].email,
      role: user[0].role.toUpperCase(),
      token: token,
    };

    response.setData(usr);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json({
      message: `${user[0].email} logged in successfully`,
      response,
    });
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.VerifyAccount = async (req, res) => {
  const response = new ResponseModel();
  try {
    const { email, otp } = req.body;

    const user = await db.query(
      `SELECT otp, otpExpiresAt, is_active FROM users WHERE email = $1`,
      {
        bind: [email],
        type: QueryTypes.SELECT,
      }
    );

    if (user.length === 0) {
      response.setError("User not found");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }

    const { otp: storedOtp, otp_expires_at, is_active } = user[0];

    if (is_active) {
      response.setError("Account is already verified");
      response.setStatus(StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    const currentTime = new Date();
    const otpCreatedAt = new Date(otp_expires_at);

    if (storedOtp !== otp) {
      response.setError("Invalid OTP");
      response.setStatus(StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    const expirationTime = 10 * 60 * 1000; // 10 minutes in milliseconds
    if (currentTime - otpCreatedAt > expirationTime) {
      response.setError("OTP has expired");
      response.setStatus(StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    await db.query(
      `UPDATE users SET otp = NULL, otpExpiresAt = NULL, is_active = TRUE WHERE email = $1`,
      {
        bind: [email],
        type: QueryTypes.UPDATE,
      }
    );

    response.setData("Account verified successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.ResendOtp = async (req, res) => {
  const response = new ResponseModel();
  try {
    const { email } = req.body;

    const user = await db.query(
      `SELECT email, is_active FROM users WHERE email = $1`,
      {
        bind: [email],
        type: QueryTypes.SELECT,
      }
    );

    if (user.length === 0) {
      response.setError("User not found");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }

    const { is_active } = user[0];

    if (is_active) {
      response.setError("Account is already verified");
      response.setStatus(StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(response);
    }

    const otp = generateOtp();
    const mailPayload = {
      name: user[0].first_name,
      verificationCode: otp,
      email: email,
    };

    await sendEmail(email, constant.VERIFICATION_EMAIL_SUBJECT, mailPayload);

    await db.query(`UPDATE users SET otp = $1 WHERE email = $2`, {
      bind: [otp, email],
      type: QueryTypes.UPDATE,
    });

    response.setData("OTP has been resent successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};
