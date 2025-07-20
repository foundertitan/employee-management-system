const express = require('express');
const router = express.Router();
const Employee = require('./models/Employee');

// Fetch single employee data
router.get('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update employee data
router.put('/:id', async (req, res) => {
  const { title, department, currentStatus } = req.body;
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, { title, department, currentStatus }, { new: true });
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete employee data
router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
