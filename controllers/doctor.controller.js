const Doctor = require("../models/doctor.model");

exports.getAllDoctors = async (req, res) => {
  const students = await Doctor.find();
  console.log(students);
  res.send(students);
};

exports.addDoctor = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: "Missing required fields." });
  }

  try {
    const newDoctor = await Doctor.create({
      name,
      email,
      password,
    });

    console.log("Added student:", newDoctor);
    const doctors = await Doctor.find();
    res.send(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to add student." });
  }
};

exports.removeDoctor = async (req, res) => {
  await Doctor.deleteOne({ _id: req.params.id });
  res.redirect("/");
};

exports.updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: "Missing required fields." });
  }

  try {
    await Doctor.updateOne(
      { _id: id },
      {
        name,
        email,
        password,
      }
    );

    const students = await Doctor.find();
    res.send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to update student." });
  }
};

exports.checkLoginDoctor = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Missing email or password." });
  }

  try {
    const doctor = await Doctor.findOne({ email, password });

    if (!doctor) {
      return res.status(401).send({ error: "Invalid email or password." });
    }

    res.send({
      message: "Login successful",
      doctor: {
        id: doctor._id,
        name: doctor.name,
        email: doctor.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to login." });
  }
};
