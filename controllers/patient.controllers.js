import PATIENT from "../model/patient.model.js";
export const AddPatient = async (req, res) => {
  try {
    const patient = new PATIENT(req.body);
    const savedPatient = await PATIENT.save();
    res.status(200).json({
      success: true,
      data: savedPatient,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const GetPatients = async (req, res) => {
  try {
    const patients = await PATIENT.find();
    res.status(200).json({
      success: true,
      data: patients,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const GetPatient = async (req, res) => {
  try {
    const patient = await PATIENT.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
