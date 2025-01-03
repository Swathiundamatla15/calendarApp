const express = require("express");
const router = express.Router();
const communicationController = require("../controllers/communicationController");
const mongoose = require("mongoose");

// Route to log a new communication
router.post("/", communicationController.logCommunication);

// Route to get all communications
router.get("/", communicationController.getAllCommunications);

// Route to get communication logs for a specific company
router.get("/:id", communicationController.getCommunicationsByCompany);

// Route to delete a communication log
router.delete("/:id", communicationController.deleteCommunication);

// Route to update a communication log
router.put("/:id", communicationController.updateCommunication);

// Route to get communication frequency by type
router.get('/frequency', async (req, res) => {
  const { company } = req.query;

  // Validate company ID if provided
  if (company && !mongoose.Types.ObjectId.isValid(company)) {
    return res.status(400).json({ message: "Invalid company ID" });
  }

  try {
    let query = {};

    if (company) {
      query.company = company;
    }

    const communications = await Communication.find(query);

    res.status(200).json(communications);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving communications", error });
  }
});

module.exports = router;
