const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const ResponseModel = require("../constant/response.constant");
const db = require("../database/connect");
const createOperatorsPayloadAccordingToPeer =
  require("./utils").createOperatorsPayloadAccordingToPeer;
const createOperatorsPayloadAccordingToConcierge =
  require("./utils").createOperatorsPayloadAccordingToConcierge;
const createOperatorsPayloadAccordingToService =
  require("./utils").createOperatorsPayloadAccordingToService;

exports.SignForm = async (req, res) => {
  const response = new ResponseModel();
  const { signed_to: signedTo, signed_from: signedFrom } = req.body;

  let payload;

  try {
    if (signedFrom === "operators" && signedTo === "peer_ambassador") {
      payload = createOperatorsPayloadAccordingToPeer(
        req.body,
        signedTo,
        signedFrom
      );
      await SignedFromOperatorToPeerAmbassador(payload, res);
    } else if (signedFrom === "operators" && signedTo === "concierge") {
      payload = createOperatorsPayloadAccordingToConcierge(
        req.body,
        signedTo,
        signedFrom
      );
      await SignedOperatorToConcierge(payload, res);
    } else if (signedFrom === "operators" && signedTo === "service_partners") {
      payload = createOperatorsPayloadAccordingToService(
        req.body,
        signedTo,
        signedFrom
      );
      await SignedOperatorToServicePartners(payload, res);
    } else {
      response.setError(
        `Invalid form signing from ${signedFrom} to ${signedTo}`
      );
      response.setStatus(StatusCodes.BAD_REQUEST);
      return res.status(response.status).send(response);
    }
  } catch (err) {
    response.setError(
      `Error signing ${signedFrom} form to ${signedTo}: ${err.message}`
    );
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
};

async function SignedFromOperatorToPeerAmbassador(payload, res) {
  const response = new ResponseModel();
  const {
    user_id,
    peer_ambassador_form_id,
    signed_from,
    signed_to,
    form_id,
    full_name,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
  } = payload;

  try {
    await db.query(
      `INSERT INTO siging_form (
        user_id,
        peer_ambassador_form_id,
        signed_from,
        signed_to,
        operator_form_id,
        full_name,
        force,
        speciality,
        currently_employed,
        birth_date,
        address,
        mental_health_support,
        created_at
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
      )`,
      {
        bind: [
          user_id,
          peer_ambassador_form_id,
          signed_from,
          signed_to,
          form_id,
          full_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          new Date().toISOString(),
        ],
        type: QueryTypes.INSERT,
      }
    );

    await db.query(`DELETE FROM operators WHERE id = $1`, {
      bind: [form_id],
      type: QueryTypes.DELETE,
    });

    response.setData(`Operator form signed successfully to ${signed_to}`);
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(
      `Error signing ${signed_from} form to ${signed_to}: ${err.message}`
    );
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(response);
  }
}

async function SignedOperatorToConcierge(payload, res) {
  const response = new ResponseModel();
  const {
    user_id,
    concierge_form_id,
    signed_from,
    signed_to,
    form_id,
    full_name,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
    created_at,
  } = payload;

  try {
    await db.query(
      `INSERT INTO siging_form (
      user_id,
      concierge_form_id,
          signed_from,
          signed_to,
          operator_form_id,
          full_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          created_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,$13
        )`,
      {
        bind: [
          user_id,
          concierge_form_id,
          signed_from,
          signed_to,
          form_id,
          full_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          created_at,
        ],
        type: QueryTypes.INSERT,
      }
    );

    await db.query(`DELETE FROM operators WHERE id = $1`, {
      bind: [form_id],
      type: QueryTypes.DELETE,
    });
    response.setData(`operator  form signed successfully to ${signed_to}`);
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(
      `Error signing ${signed_from} form to ${signed_to}: ${err}`
    );
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
}

async function SignedOperatorToServicePartners(payload, res) {
  const response = new ResponseModel();
  const {
    user_id,
    service_partner_form_id,
    signed_from,
    signed_to,
    form_id,
    full_name,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
    created_at,
  } = payload;

  try {
    await db.query(
      `INSERT INTO siging_form (
      user_id,
      service_partner_form_id,
          signed_from,
          signed_to,
          operator_form_id,
          full_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          created_at
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12,$13
        )`,
      {
        bind: [
          user_id,
          service_partner_form_id,
          signed_from,
          signed_to,
          form_id,
          full_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          created_at,
        ],
        type: QueryTypes.INSERT,
      }
    );

    await db.query(`DELETE FROM operators WHERE id = $1`, {
      bind: [form_id],
      type: QueryTypes.DELETE,
    });

    response.setData(
      `Service Partners form signed successfully to ${signed_to}`
    );
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(
      `Error signing ${signed_from} form to ${signed_to}: ${err.message}`
    );
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.status).send(response);
  }
}
