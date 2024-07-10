// backend/routes/student.route.js
const express = require("express");
const router = express.Router();
const studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", async (req, res, next) => {
  try {
    const data = await studentSchema.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// READ Students
router.get("/", async (req, res, next) => {
  try {
    const data = await studentSchema.find();
    res.json(data);
  } catch (error) {
    return next(error);
  }
});

// UPDATE Student
router
  .route("/update-student/:id")
  // Get Single Student
  .get(async (req, res, next) => {
    try {
      const data = await studentSchema.findById(req.params.id);
      res.json(data);
    } catch (error) {
      return next(error);
    }
  })
  // Update Student Data
  .put(async (req, res, next) => {
    try {
      const data = await studentSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.json(data);
      console.log("Student updated successfully!");
    } catch (error) {
      return next(error);
    }
  });

// DELETE Student
router.delete("/delete-student/:id", async (req, res, next) => {
  try {
    const data = await studentSchema.findByIdAndRemove(req.params.id);
    res.status(200).json({ msg: data });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
