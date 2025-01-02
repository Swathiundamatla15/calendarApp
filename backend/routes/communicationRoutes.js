const express = require("express");
const router = express.Router();
const communicationController = require("../controllers/communicationController");

// Route to log a new communication
router.post("/", communicationController.logCommunication);

// Route to get all communications
router.get("/", communicationController.getAllCommunications);

// Route to get communication logs for a specific company
router.get("/:companyId", communicationController.getCommunicationsByCompany);

// Route to delete a communication log
router.delete("/:communicationId", communicationController.deleteCommunication);

// Route to update a communication log
router.put("/:communicationId", communicationController.updateCommunication);
router.get('/frequency', async (req, res) => {
    const { company } = req.query;
  
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
