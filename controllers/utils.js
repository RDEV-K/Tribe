const bcrypt = require("bcryptjs");
const { QueryTypes } = require("sequelize");
const crypto = require("crypto");

exports.hashPassword = (password) => {
  try {
    return bcrypt.hash(password, 10);
  } catch (error) {
    console.error("Error in hashing password------ ", error);
    return error;
  }
};

exports.verifyPassword = (password, userPassword) => {
  return bcrypt.compare(password, userPassword);
};

const created_at = new Date().toISOString();

exports.createOperatorsPayloadAccordingToPeer = (
  body,
  signedTo,
  signedFrom
) => {
  const {
    user_id,
    peer_ambassador_form_id,
    first_name,
    last_name,
    form_id,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
  } = body;

  return {
    user_id,
    peer_ambassador_form_id,
    signed_to: signedTo,
    signed_from: signedFrom,
    form_id,
    full_name: `${first_name} ${last_name}`,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
    created_at,
  };
};

exports.createOperatorsPayloadAccordingToService = (
  body,
  signedTo,
  signedFrom
) => {
  const {
    user_id,
    service_partner_form_id,
    first_name,
    last_name,
    form_id,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
  } = body;

  return {
    user_id,
    service_partner_form_id,
    signed_to: signedTo,
    signed_from: signedFrom,
    form_id,
    full_name: `${first_name} ${last_name}`,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
    created_at,
  };
};

exports.createOperatorsPayloadAccordingToConcierge = (
  body,
  signedTo,
  signedFrom
) => {
  const {
    user_id,
    concierge_form_id,
    first_name,
    last_name,
    form_id,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
  } = body;

  return {
    user_id,
    concierge_form_id,
    signed_to: signedTo,
    signed_from: signedFrom,
    form_id,
    full_name: `${first_name} ${last_name}`,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
    created_at,
  };
};

exports.createPeerAmbassadorPayload = (body, signedTo, signedFrom) => {
  const {
    user_id,
    full_name,
    phone_number,
    form_id,
    email,
    service_branch,
    contact_number,
    birth_date,
    how_heard_about_us,
    why_peer_ambassador,
    hours_per_month,
    number_of_operators,
    transition_services,
    areas_of_support,
    uncomfortable_topics,
  } = body;

  return {
    user_id,
    signed_to: signedTo,
    signed_from: signedFrom,
    form_id,
    full_name,
    phone_number,
    email,
    service_branch,
    contact_number,
    birth_date,
    how_heard_about_us,
    why_peer_ambassador,
    hours_per_month,
    number_of_operators,
    transition_services,
    areas_of_support,
    uncomfortable_topics,
    created_at,
  };
};

exports.createServicePartnersPayload = (body, signedTo, signedFrom) => {
  const {
    user_id,
    organization_name,
    phone_number,
    form_id,
    address,
    web_url,
    point_of_contact_name,
    point_of_contact_email,
    how_heard_about_us,
    veteran_specific_services,
    service_provided,
    description,
  } = body;

  return {
    user_id,
    signed_to: signedTo,
    signed_from: signedFrom,
    form_id,
    organization_name,
    phone_number,
    address,
    web_url,
    point_of_contact_name,
    point_of_contact_email,
    how_heard_about_us,
    veteran_specific_services,
    service_provided,
    description,
    created_at,
  };
};

exports.IsFormSubmitted = async (db, user_id, tableName) => {
  try {
    const allowedTables = [
      "operators",
      "concierge",
      "peer_ambassador",
      "service_partners",
    ];
    if (!allowedTables.includes(tableName)) {
      throw new Error("Invalid table name");
    }

    // Select the most recent row based on the ID
    const [result] = await db.query(
      `SELECT id, status FROM ${tableName} WHERE user_id = $1 ORDER BY id DESC LIMIT 1`,
      {
        bind: [user_id],
        type: QueryTypes.SELECT,
      }
    );

    const status = result ? result.status : null;

    const isSubmitted = status !== null && status !== "rejected";

    return { status, isSubmitted };
  } catch (err) {
    return { status: null, isSubmitted: false };
  }
};

exports.generateOtp = () => {
  return crypto.randomInt(100000, 999999).toString();
};
exports.getOtpExpiryTime = () => {
  return new Date(Date.now() + 10 * 60 * 1000);
};
