const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const db = require("../database/connect");
const ResponseModel = require("../constant/response.constant.js");
const utils = require("./utils");

exports.CreateConcierge = async (req, res) => {
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
    why_concierge,
    hours_per_month,
    number_of_operators,
    transition_services,
    areas_of_support,
    uncomfortable_topics,
  } = req.body;
  const { status, isSubmitted } = await utils.IsFormSubmitted(
    db,
    user_id,
    "concierge"
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
      `INSERT INTO concierge(
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
          why_concierge,
          hours_per_month,
          number_of_operators,
          transition_services,
          areas_of_support,
          uncomfortable_topics,
          time,
        ],
        type: QueryTypes.INSERT,
      }
    );

    response.setData("Concierge created successfully");
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetConcierges = async (req, res) => {
  const response = new ResponseModel();
  try {
    const concierge = await db.query(
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
    why_concierge,
    hours_per_month,
    number_of_operators,
    transition_services,
    areas_of_support,
    uncomfortable_topics,
    status,
    created_at
FROM
    concierge
WHERE status IN ('pending', 'approved');
`,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(concierge);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(err.messag);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};
exports.GetTotalConcierge = async (req, res) => {
  const response = new ResponseModel();
  try {
    const total_concierge = await db.query(
      `select count(*) from concierge WHERE status='approved'`,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(total_concierge);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(err.message);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetConcierge = async (req, res) => {
  const response = new ResponseModel();
  const id = req.user.id;
  try {
    const concierge_user = await db.query(
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
    why_concierge,
    hours_per_month,
    number_of_operators,
    transition_services,
    areas_of_support,
    uncomfortable_topics,
    status,
    created_at
    FROM concierge WHERE user_id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(concierge_user);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).json(response);
  }
};

exports.UpdateConciergeStatus = async (req, res) => {
  const response = new ResponseModel();
  const { id, status } = req.body;

  try {
    await db.query(`UPDATE concierge SET status=$1 WHERE id=$2`, {
      bind: [status, id],
      type: QueryTypes.UPDATE,
    });
    response.setData("Concierge status updated successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.DeleteConcierge = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;

  try {
    await db.query(`DELETE FROM concierge WHERE id=$1`, {
      bind: [id],
      type: QueryTypes.DELETE,
    });
    response.setData("Concierge form deleted successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.UpdateConcierge = async (req, res) => {
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
    why_concierge,
    hours_per_month,
    number_of_operators,
    transition_services,
    areas_of_support,
    uncomfortable_topics,
  } = req.body;

  try {
    await db.query(
      `UPDATE concierge SET 
      full_name=$1,
      phone_number=$2,
      email=$3,
      service_branch=$4,
      contact_number=$5,
      birth_date=$6,
      how_heard_about_us=$7,
     why_concierge=$8,
     hours_per_month=$9,
     number_of_operators=$10,
      transition_services=$11,
     areas_of_support=$12,
     uncomfortable_topics=$13,
      created_at=$14
     WHERE id=$15`,
      {
        bind: [
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
          updated_at,
          id,
        ],
        type: QueryTypes.UPDATE,
      }
    );

    const [updatedConcierge] = await db.query(
      `SELECT * FROM concierge WHERE id=$1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );

    response.setData(updatedConcierge);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetConciergeFormStatus = async (req, res) => {
  const response = new ResponseModel();
  const user_id = req.user.id;

  try {
    const [formCount] = await db.query(
      `SELECT COUNT(*) AS count FROM concierge WHERE user_id = $1`,
      {
        bind: [user_id],
        type: QueryTypes.SELECT,
      }
    );

    let ConciergeFormStatus;
    if (formCount.count === "1") {
      ConciergeFormStatus = await db.query(
        `SELECT id,status 
         FROM concierge 
         WHERE user_id = $1 AND status IN ('pending', 'approved', 'rejected') ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    } else if (formCount.count > 1) {
      ConciergeFormStatus = await db.query(
        `SELECT id,status 
         FROM concierge 
         WHERE user_id = $1 AND status IN ('pending', 'approved') ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    }

    if (ConciergeFormStatus.length > "0") {
      response.setData(ConciergeFormStatus);
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

exports.getSingedToConciergeUser = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;

  try {
    const [conciergeUser] = await db.query(
      `SELECT c.full_name, c.email, c.phone_number
       FROM concierge c
       JOIN siging_form s ON c.id = s.concierge_form_id
       WHERE s.user_id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );

    if (!conciergeUser) {
      response.setError("No matching form found.");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }

    response.setData(conciergeUser);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetConciergeFormAssignedToOperator = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;

  try {
    const [operatorForm] = await db.query(
      `SELECT id,operator_form_id, user_id, full_name, force, speciality, currently_employed, birth_date, address, mental_health_support, status
       FROM siging_form 
       WHERE concierge_form_id = $1 ORDER BY id DESC LIMIT 1`,
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
