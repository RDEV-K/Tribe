const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const db = require("../database/connect");
const ResponseModel = require("../constant/response.constant.js");

exports.GetConciergePendingForms = async (req, res) => {
  const response = new ResponseModel();
  try {
    const pending_concierge_forms = await db.query(
      `SELECT
     id,
    full_name,
    phone_number,
    email,
    service_branch,
    contact_number,
    birth_date,
    how_heard_about_us,
    why_concierge,
    hours_per_month,
    number_of_operators,
    transition_services,
    areas_of_support,
    uncomfortable_topics,
    status,
    created_at
            FROM concierge
            WHERE status = 'pending'
            `,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(pending_concierge_forms);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).send(response);
  } catch (err) {
    response.setError(`Error getting pending concierge forms: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(response);
  }
};

exports.GetPeerAmbassadorPendingForms = async (req, res) => {
  const response = new ResponseModel();

  try {
    const pending_peer_ambassador_forms = await db.query(
      `SELECT
  id,
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
    status,
    created_at
            FROM peer_ambassador
            WHERE status = 'pending'
            `,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(pending_peer_ambassador_forms);
    response.setStatus(StatusCodes.OK);
    return res.status(response.getStatus()).send(response);
  } catch (err) {
    response.setError(
      `Error getting pending peer ambassador forms: ${err.message}`
    );
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).send(response);
  }
};

exports.GetServicePartnerPendingForms = async (req, res) => {
  const response = new ResponseModel();
  try {
    const pending_service_partner_forms = await db.query(
      `SELECT
       id,
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
        status,
        created_at
                FROM service_partners
                WHERE status = 'pending'
                `,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(pending_service_partner_forms);
    response.setStatus(StatusCodes.OK);
    return res.status(response.getStatus()).send(response);
  } catch (err) {
    response.setError(
      `Error getting pending service partner forms: ${err.message}`
    );
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).send(response);
  }
};

exports.GetAllPendingOperators = async (req, res) => {
  const response = new ResponseModel();
  try {
    const pending_operators = await db.query(
      `SELECT
        id,
	      first_name,
	      last_name,
	      force,
	      speciality,
	      currently_employed,
	      birth_date,
      	address,
      	mental_health_support,
        status,
      	created_at
      FROM operators
      WHERE status = 'pending'
      `,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(pending_operators);
    response.setStatus(StatusCodes.OK);
    return res.status(response.getStatus()).send(response);
  } catch (err) {
    response.setError(`Error getting pending operators: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).send(response);
  }
};
