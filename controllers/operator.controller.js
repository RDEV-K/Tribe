const { StatusCodes } = require("http-status-codes");
const { QueryTypes } = require("sequelize");
const db = require("../database/connect");
const ResponseModel = require("../constant/response.constant.js");
const utils = require("./utils");

exports.CreateOperator = async (req, res) => {
  const response = new ResponseModel();

  const {
    user_id,
    first_name,
    last_name,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
  } = req.body;

  const { status, isSubmitted } = await utils.IsFormSubmitted(
    db,
    user_id,
    "operators"
  );

  if (isSubmitted) {
    response.setError(
      `User already has a ${status} form and can only submit a new form if the existing form is rejected.`
    );
    response.setStatus(StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(response);
  }
  try {
    const time = new Date().toISOString();
    await db.query(
      `INSERT INTO operators(
      user_id,
    first_name,
    last_name,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
    created_at
    )
    VALUES(
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7,
      $8,
      $9,
      $10
    )`,
      {
        bind: [
          user_id,
          first_name,
          last_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          time,
        ],
        type: QueryTypes.INSERT,
      }
    );

    response.setData("Operator form created successfully");
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (err) {
    response.setError(`Error! ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetOperators = async (req, res) => {
  const response = new ResponseModel();
  try {
    const operators = await db.query(
      `select
      id,
      user_id,
	first_name,
	last_name,
	force,
	speciality,
	currently_employed,
	birth_date,
	address,
	mental_health_support,
  status
	created_at
from
	operators`,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(operators);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetTotalOperators = async (req, res) => {
  const response = new ResponseModel();
  try {
    const total_operators = await db.query(
      `select count(*) from operators WHERE status='approved'`,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(total_operators);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(err.message);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetOperator = async (req, res) => {
  const response = new ResponseModel();
  const id = req.user.id;
  try {
    const operator = await db.query(
      `SELECT id, user_id, first_name, last_name, force, speciality, currently_employed, birth_date, address, mental_health_support, status FROM operators WHERE user_id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(operator);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).json(response);
  }
};

exports.UpdateOperatorStatus = async (req, res) => {
  const response = new ResponseModel();
  const { status, id } = req.body;

  try {
    await db.query(`UPDATE operators SET status = $1 WHERE id = $2`, {
      bind: [status, id],
      type: QueryTypes.UPDATE,
    });
    response.setData("Operator form status updated successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.DeleteOperator = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;
  try {
    await db.query(`DELETE FROM operators WHERE id = $1`, {
      bind: [id],
      type: QueryTypes.DELETE,
    });
    response.setData("Operator form deleted successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.UpdateOperator = async (req, res) => {
  const response = new ResponseModel();
  const updated_at = new Date().toISOString();
  const {
    id,
    first_name,
    last_name,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support,
  } = req.body;

  console.log(
    id,
    first_name,
    last_name,
    force,
    speciality,
    currently_employed,
    birth_date,
    address,
    mental_health_support
  );

  try {
    await db.query(
      `UPDATE operators SET
         first_name=$1,
         last_name=$2,
         force=$3,
         speciality=$4,
         currently_employed=$5,
         birth_date=$6,
         address=$7,
         mental_health_support=$8,
         updated_at=$9
       WHERE id = $10`,
      {
        bind: [
          first_name,
          last_name,
          force,
          speciality,
          currently_employed,
          birth_date,
          address,
          mental_health_support,
          updated_at,
          id,
        ],
        type: QueryTypes.UPDATE,
      }
    );

    const [updatedOperator] = await db.query(
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
           updated_at
       FROM operators
       WHERE id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(updatedOperator);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetOperatorFormStatus = async (req, res) => {
  const response = new ResponseModel();
  const user_id = req.user.id;

  try {
    const [formCount] = await db.query(
      `SELECT COUNT(*) AS count FROM operators WHERE user_id = $1`,
      {
        bind: [user_id],
        type: QueryTypes.SELECT,
      }
    );

    let operatorFormStatus = [];
    if (formCount && formCount.count === "1") {
      operatorFormStatus = await db.query(
        `SELECT id, status 
         FROM operators 
         WHERE user_id = $1 AND status IN ('pending', 'approved', 'rejected') 
         ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    } else if (formCount && formCount.count > 1) {
      operatorFormStatus = await db.query(
        `SELECT id, status 
         FROM operators 
         WHERE user_id = $1 AND status IN ('pending', 'approved') 
         ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    }

    if (operatorFormStatus && operatorFormStatus.length > 0) {
      response.setData(operatorFormStatus);
      response.setStatus(StatusCodes.OK);
      return res.status(StatusCodes.OK).json(response);
    } else {
      response.setError("No matching forms found.");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.getSignedOperator = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;
  try {
    const [operator] = await db.query(
      `SELECT id, user_id, first_name, last_name, force, speciality, currently_employed, birth_date, address, mental_health_support, status FROM operators WHERE id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(operator);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).json(response);
  }
};
