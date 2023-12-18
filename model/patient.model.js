import mongoose, { Schema } from"mongoose";

const PatientSchema = new Schema({
  surname: {
    type: String,
    required: true,
  },
  othernames: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["M", "F"],
    required: true,
  },
  Ijumber: {
    type: String,
    required: true,
  },
  residential_address: {
    type: String,
    required: true,
  },
  emergencyContact: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    relationship: {
      type: String,
      required: true,
    },
  },
});
export default mongoose.models.PATIENT || mongoose.model('PATIENT', PatientSchema);