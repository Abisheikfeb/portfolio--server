const mongoose = require('mongoose');

// Define schema for view counts
const viewSchema = new mongoose.Schema({
  projectId: {
    type: Number,
    required: true,
    unique: true,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const View = mongoose.model('View', viewSchema);

module.exports = View;

