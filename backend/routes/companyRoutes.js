const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

// Route to get all companies
router.get("/", companyController.getCompanies);

// Route to get a single company by ID
router.get("/:id", companyController.getCompanyById);

// Route to create a new company
router.post("/", companyController.addCompany);

// Route to update an existing company
router.put("/:id", companyController.updateCompany);

// Route to delete a company
router.delete("/:id", companyController.deleteCompany);

module.exports = router;
