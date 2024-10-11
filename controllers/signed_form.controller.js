const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const ResponseModel = require("../constant/response.constant");
const db = require("../database/connect");
const { sign } = require("jsonwebtoken");

exports.GetSignedForms = async (req, res) => {
  const response = new ResponseModel();
  const { signed_to, signed_from } = req.body;

  try {
    if (signed_to == "concierge" && signed_from == "operators") {
      await GetSignedOperatorForms(signed_from, signed_to, res);
    } else if (signed_to == "peer_ambassador" && signed_from == "operators") {
      await GetSignedConciergeForms(signed_from, signed_to, res);
    } else if (signed_to == "service_partners" && signed_from == "operators") {
      await GetSignedPeerAmbassadorForms(signed_from, signed_to, res);
    } else {
      response.setError(`Error : ${err.message}`);
      response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
      return res.status(response.status).send(response);
    }
  } catch (err) {
    response.setError(`Error : ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
};

async function GetSignedOperatorForms(signed_from, signed_to, res) {
  const response = new ResponseModel();

  try {
    const signed_operator_forms = await db.query(
      `SELECT
          id,  
          signed_from,
          full_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          created_at
      FROM siging_form
      WHERE signed_from=$1 AND signed_to=$2`,
      {
        bind: [signed_from, signed_to],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(signed_operator_forms);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error : ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
}

async function GetSignedConciergeForms(signed_from, signed_to, res) {
  const response = new ResponseModel();

  try {
    const signed_concierge_forms = await db.query(
      `SELECT  
          signed_from,
          signed_to,
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
          created_at
       FROM siging_form
       WHERE signed_from=$1 AND sigend_to=$2`,
      {
        bind: [signed_from, signed_to],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(signed_concierge_forms);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
}

async function GetSignedPeerAmbassadorForms(signed_from, signed_to, res) {
  const response = new ResponseModel();

  try {
    const peer_ambassador = await db.query(
      `SELECT 
        id,
        signed_from,
        signed_to,
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
        created_at
    FROM siging_form
    WHERE signed_to=$1 AND signed_from=$2`,
      {
        bind: [signed_to, signed_from],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(peer_ambassador);
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(`Error : ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
}

async function GetSignedServicePartnersForms(signed_from, signed_to, res) {
  const response = new ResponseModel();

  try {
    const signedServices = await db.query(
      `SELECT 
         id,
          signed_to,
          signed_from,
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
          created_at
       FROM siging_form
       WHERE signed_from=$1 AND signed_to=$2`,
      {
        bind: [signed_from, signed_to],
        type: QueryTypes.INSERT,
      }
    );

    response.setData(signedServices);
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(`Error : ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
}

exports.GetAllSignedForms = async (req, res) => {
  const response = new ResponseModel();

  try {
    const operatorsForms = await db.query(
      `SELECT 
      id,
      user_id,
      full_name,
	    force,
	    speciality,
	    currently_employed,
	    birth_date,
	    address,
	    mental_health_support,
      status
	    created_at
  FROM siging_form`,
      {
        type: QueryTypes.SELECT,
      }
    );

    const conciergeForms = await db.query(
      `SELECT 
    id,
    signed_from,
    user_id,
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
      FROM siging_form`,
      {
        type: QueryTypes.SELECT,
      }
    );

    const peerAmbassadorForms = await db.query(
      `SELECT 
           id, 
           signed_from, 
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
       FROM siging_form`,
      {
        type: QueryTypes.SELECT,
      }
    );

    const servicePartnersForms = await db.query(
      `SELECT 
        id,
        user_id,
        signed_from,
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
     FROM siging_form`,
      {
        type: QueryTypes.SELECT,
      }
    );

    const allSignedForms = {
      operators: operatorsForms,
      concierge: conciergeForms,
      peer_ambassadors: peerAmbassadorForms,
      service_partners: servicePartnersForms,
    };

    response.setData(allSignedForms);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error : ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
};
