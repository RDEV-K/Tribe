const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const db = require("../database/connect");
const ResponseModel = require("../constant/response.constant.js");
const utils = require("./utils");

exports.CreatePeerAmbassador = async (req, res) => {
  const response = new ResponseModel();

  const {
    user_id,
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
    transitionServices,
    areas_of_support,
    uncomfortable_topics,
  } = req.body;

  const { status, isSubmitted } = await utils.IsFormSubmitted(
    db,
    user_id,
    "peer_ambassador"
  );

  if (isSubmitted) {
    response.setError(
      `User already has a ${status} form and can only submit a new form if the existing form is rejected`
    );
    response.setStatus(StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(response);
  }

  try {
    const time = new Date().toISOString();
    await db.query(
      `INSERT INTO peer_ambassador(
      user_id,
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
      $9,
      $10,
      $11,
      $12,
      $13,
      $14,
      $15
    )`,
      {
        bind: [
          user_id,
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
          transitionServices,
          areas_of_support,
          uncomfortable_topics,
          time,
        ],
        type: QueryTypes.INSERT,
      }
    );

    response.setData("Peer Ambassador form created successfully");
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(`Error! ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetPeerAmbassadors = async (req, res) => {
  const response = new ResponseModel();
  try {
    const peer_ambassadors = await db.query(
      `select
    id,
    user_id,
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
  FROM peer_ambassador`,
      {
        type: QueryTypes.SELECT,
      }
    );

    response.setData(peer_ambassadors);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error! ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetTotalPeerAmbassadors = async (req, res) => {
  const response = new ResponseModel();
  try {
    const total_peer_ambassadors = await db.query(
      `select count(*) from peer_ambassador WHERE status='approved'`,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(total_peer_ambassadors);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error! ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetPeerAmbassador = async (req, res) => {
  const response = new ResponseModel();
  const id = req.user.id;
  try {
    const peer_ambassador_user = await db.query(
      `SELECT 
    id,
    user_id,
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
  FROM peer_ambassador WHERE user_id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(peer_ambassador_user);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).json(response);
  }
};

exports.UpdatePeerAmbassadorStatus = async (req, res) => {
  const response = new ResponseModel();
  const { status, id } = req.body;
  try {
    await db.query(`UPDATE peer_ambassador SET status=$1 WHERE id=$2`, {
      bind: [status, id],
      type: QueryTypes.UPDATE,
    });
    response.setData("Peer Ambassador form status updated successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.DeletePeerAmbassador = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;
  try {
    await db.query(`DELETE FROM peer_ambassador WHERE id=$1`, {
      bind: [id],
      type: QueryTypes.DELETE,
    });
    response.setData("Peer Ambassador form deleted successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.UpdatePeerAmbassador = async (req, res) => {
  const response = new ResponseModel();
  const updated_at = new Date().toISOString();
  const {
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
  } = req.body;
  try {
    await db.query(
      `UPDATE peer_ambassador SET
        full_name = $1,
        phone_number = $2,
        email = $3,
        service_branch = $4,
        contact_number = $5,
        birth_date = $6,
        how_heard_about_us = $7,
        why_peer_ambassador = $8,
        hours_per_month = $9,
        number_of_operators = $10,
        transition_services = $11,
        areas_of_support = $12,
        uncomfortable_topics = $13,
        updated_at = $14
      WHERE id = $15`,
      {
        bind: [
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
          updated_at,
          id,
        ],
        type: QueryTypes.UPDATE,
      }
    );

    const [updatedPeerAmbassador] = await db.query(
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
           updated_at
       FROM peer_ambassador WHERE id=$1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(updatedPeerAmbassador);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetPeerAmbassadorFormStatus = async (req, res) => {
  const response = new ResponseModel();
  const user_id = req.user.id;

  try {
    const [formCount] = await db.query(
      `SELECT COUNT(*) AS count FROM peer_ambassador WHERE user_id = $1`,
      {
        bind: [user_id],
        type: QueryTypes.SELECT,
      }
    );

    let peerAmbassadorFormStatus;
    if (formCount.count === "1") {
      peerAmbassadorFormStatus = await db.query(
        `SELECT id,status 
         FROM peer_ambassador 
         WHERE user_id = $1 AND status IN ('pending', 'approved', 'rejected') ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    } else if (formCount.count > 1) {
      peerAmbassadorFormStatus = await db.query(
        `SELECT id,status 
         FROM peer_ambassador 
         WHERE user_id = $1 AND status IN ('pending', 'approved') ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    }

    if (peerAmbassadorFormStatus.length > "0") {
      response.setData(peerAmbassadorFormStatus);
      response.setStatus(StatusCodes.OK);
      return res.status(StatusCodes.OK).json(response);
    } else {
      response.setError("No matching form found.");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetSignedToPeerUser = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;

  try {
    const [peerAmbassadorUser] = await db.query(
      `SELECT pa.full_name, pa.email, pa.phone_number, pa.contact_number
       FROM peer_ambassador pa
       JOIN siging_form s ON pa.id = s.peer_ambassador_form_id
       WHERE s.user_id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );

    if (!peerAmbassadorUser) {
      response.setError("No matching form found.");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }

    response.setData(peerAmbassadorUser);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetPeerAmbassadorFormAssignedToOperator = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;

  try {
    const [operatorForm] = await db.query(
      `SELECT id,operator_form_id, user_id, full_name, force, speciality, currently_employed, birth_date, address, mental_health_support, status
       FROM siging_form 
       WHERE peer_ambassador_form_id = $1 ORDER BY id DESC LIMIT 1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );

    if (!operatorForm) {
      response.setError("No matching form found.");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }

    response.setData(operatorForm);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};
