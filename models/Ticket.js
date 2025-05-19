const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: {
    type: String,
    enum: ['open', 'closed'],
    default: 'open'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Ticket', TicketSchema);