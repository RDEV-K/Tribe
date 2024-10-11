const { StatusCodes } = require("http-status-codes");
const ResponseModel = require("../constant/response.constant.js");
const { QueryTypes } = require("sequelize");
const db = require("../database/connect");
const utils = require("./utils");
exports.CreateServicePartner = async (req, res) => {
  const response = new ResponseModel();

  const {
    user_id,
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
  } = req.body;
  const { status, isSubmitted } = await utils.IsFormSubmitted(
    db,
    user_id,
    "service_partners"
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
      `INSERT INTO service_partners(
      user_id,
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
       $12
     )`,
      {
        bind: [
          user_id,
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
          time,
        ],
        type: QueryTypes.INSERT,
      }
    );

    response.setData("Service Partner form created successfully");
    response.setStatus(StatusCodes.CREATED);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    response.setError(`Error! ${error}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetServicePartners = async (req, res) => {
  const response = new ResponseModel();
  try {
    const service_partners = await db.query(
      `SELECT 
        id,
        user_id,
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
     FROM service_partners`,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(service_partners);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    response.setError(error.messag);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetTotalServices = async (req, res) => {
  const response = new ResponseModel();
  try {
    const total_service_partners = await db.query(
      `select count(*) from service_partners WHERE status='approved'`,
      {
        type: QueryTypes.SELECT,
      }
    );
    response.setData(total_service_partners);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(err.message);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetServicePartner = async (req, res) => {
  const response = new ResponseModel();
  const id = req.user.id;
  try {
    const servicePartner = await db.query(
      `SELECT 
        id,
        user_id,
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
     FROM service_partners WHERE user_id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );
    response.setData(servicePartner);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(response.getStatus()).json(response);
  }
};

exports.UpdateServicePartnerStatus = async (req, res) => {
  const response = new ResponseModel();
  const { id, status } = req.body;
  try {
    await db.query(`UPDATE service_partners SET status=$1 WHERE id=$2`, {
      bind: [status, id],
      type: QueryTypes.UPDATE,
    });
    response.setData("Service Partner form status updated successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    response.setError(`Error! ${error}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.DeleteServicePartner = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;
  try {
    await db.query(`DELETE FROM service_partners WHERE id=$1`, {
      bind: [id],
      type: QueryTypes.DELETE,
    });
    response.setData("Service Partner form deleted successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    response.setError(`Error! ${error}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.UpdateServicePartner = async (req, res) => {
  const response = new ResponseModel();
  const updated_at = new Date().toISOString();
  const {
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
  } = req.body;
  try {
    await db.query(
      `UPDATE service_partners SET 
      organization_name=$1,
      phone_number=$2,
      address=$3,
      web_url=$4,
      point_of_contact_name=$5,
      point_of_contact_email=$6,
      how_heard_about_us=$7,
      veteran_specific_services=$8,
      service_provided=$9,
      description=$10,
      updated_at=$11
      WHERE id=$12`,
      {
        bind: [
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
          updated_at,
          id,
        ],
        type: QueryTypes.UPDATE,
      }
    );
    response.setData("Service Partner form updated successfully");
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (error) {
    response.setError(`Error! ${error}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetServicePartnerFormStatus = async (req, res) => {
  const response = new ResponseModel();
  const user_id = req.user.id;

  try {
    const [formCount] = await db.query(
      `SELECT COUNT(*) AS count FROM service_partners WHERE user_id = $1`,
      {
        bind: [user_id],
        type: QueryTypes.SELECT,
      }
    );

    let servicePartnerFormStatus;
    if (formCount.count === "1") {
      servicePartnerFormStatus = await db.query(
        `SELECT id,status 
         FROM service_partners 
         WHERE user_id = $1 AND status IN ('pending', 'approved', 'rejected') ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    } else if (formCount.count > 1) {
      servicePartnerFormStatus = await db.query(
        `SELECT id,status 
         FROM service_partners 
         WHERE user_id = $1 AND status IN ('pending', 'approved') ORDER BY id DESC LIMIT 1`,
        {
          bind: [user_id],
          type: QueryTypes.SELECT,
        }
      );
    }

    if (servicePartnerFormStatus.length > "0") {
      response.setData(servicePartnerFormStatus);
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

exports.GetSignedToServicePartnerUser = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;

  try {
    const [servicePartner] = await db.query(
      `SELECT sp.organization_name,sp.phone_number,sp.address, sp.point_of_contact_email, sp.phone_number
       FROM service_partners sp
       JOIN siging_form s ON sp.id = s.service_partner_form_id
       WHERE s.user_id = $1`,
      {
        bind: [id],
        type: QueryTypes.SELECT,
      }
    );

    if (!servicePartner) {
      response.setError("No matching form found.");
      response.setStatus(StatusCodes.NOT_FOUND);
      return res.status(StatusCodes.NOT_FOUND).json(response);
    }

    response.setData(servicePartner);
    response.setStatus(StatusCodes.OK);
    return res.status(StatusCodes.OK).json(response);
  } catch (err) {
    response.setError(`Error: ${err.message}`);
    response.setStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
  }
};

exports.GetServicePartnerFormAssignedToOperator = async (req, res) => {
  const response = new ResponseModel();
  const id = req.params.id;

  try {
    const [operatorForm] = await db.query(
      `SELECT id,operator_form_id, user_id, full_name, force, speciality, currently_employed, birth_date, address, mental_health_support, status
       FROM siging_form 
       WHERE service_partner_form_id = $1 ORDER BY id DESC LIMIT 1`,
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
