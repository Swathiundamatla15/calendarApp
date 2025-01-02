const mongoose = require("mongoose");

const communicationSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: [
        "LinkedIn Post",
        "LinkedIn Message",
        "Email",
        "Phone Call",
        "Other",
      ],
    },
    date: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
      required: false,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Communication", communicationSchema);
