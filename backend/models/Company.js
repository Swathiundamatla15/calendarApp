const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    linkedinProfile: {
      type: String,
      required: false,
    },
    emails: {
      type: [String], // Ensure this is an array of strings
      required: true,
      match: /.+\@.+\..+/,
    },
    phoneNumbers: {
      type: [String], // Ensure this is an array of strings
      required: false,
    },
    comments: {
      type: String,
      required: false,
    },
    communicationPeriodicity: {
      type: String,
      default: "2 weeks",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
