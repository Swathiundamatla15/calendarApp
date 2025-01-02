const Communication = require("../models/Communication");
const Company = require("../models/Company");

// Log a new communication
exports.logCommunication = async (req, res) => {
  const { companyId, type, date, notes } = req.body;

  try {
    const communication = new Communication({
      company: companyId,
      type,
      date,
      notes,
    });

    await communication.save();

    // Update the company's next communication date if necessary
    await Company.findByIdAndUpdate(companyId, {
      $set: { nextCommunication: date },
    });

    res
      .status(201)
      .json({ message: "Communication logged successfully", communication });
  } catch (error) {
    res.status(500).json({ message: "Error logging communication", error });
  }
};

// Retrieve communication logs for a specific company
exports.getCommunicationsByCompany = async (req, res) => {
  const { companyId } = req.params;

  try {
    const communications = await Communication.find({
      company: companyId,
    }).populate("company");
    res.status(200).json(communications);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving communications", error });
  }
};

// Retrieve all communications
exports.getAllCommunications = async (req, res) => {
  try {
    const communications = await Communication.find().populate("company");
    res.status(200).json(communications);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving communications", error });
  }
};

// Delete a communication log
exports.deleteCommunication = async (req, res) => {
  const { id } = req.params;

  try {
    await Communication.findByIdAndDelete(id);
    res.status(200).json({ message: "Communication deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting communication", error });
  }
};

// Update a communication log
exports.updateCommunication = async (req, res) => {
  const { id } = req.params;
  const { type, date, notes } = req.body;

  try {
    const updatedCommunication = await Communication.findByIdAndUpdate(
      id,
      { type, date, notes },
      { new: true }
    );

    if (!updatedCommunication) {
      return res.status(404).json({ message: "Communication not found" });
    }

    res.status(200).json(updatedCommunication);
  } catch (error) {
    res.status(500).json({ message: "Error updating communication", error });
  }
};
// Retrieve communication frequency by type
exports.getCommunicationFrequency = async (req, res) => {
  try {
    const frequencyData = await Communication.aggregate([
      {
        $group: {
          _id: "$type",  // Group by communication type
          count: { $sum: 1 }  // Count occurrences of each type
        }
      },
      {
        $project: {
          _id: 0,  // Exclude the _id field
          method: "$_id",  // Rename _id to method
          count: 1  // Include the count field
        }
      }
    ]);

    res.status(200).json(frequencyData);
  } catch (error) {
    console.error("Error fetching frequency data:", error);  // More detailed logging
    res.status(500).json({
      message: "Error fetching communication frequency",
      error: error.message || error,
    });
  }
};
