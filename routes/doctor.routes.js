const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctor.controller");

router.get("/", doctorController.getAllDoctors);
router.post("/add-doctor", doctorController.addDoctor);
router.get("/remove-doctor/:id", doctorController.removeDoctor);
router.post("/update-doctor/:id", doctorController.updateDoctor);
router.post("/login-doctor", doctorController.checkLoginDoctor);

module.exports = router;
