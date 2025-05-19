const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// Create ticket
router.post('/', async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;