const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  projectId: { type: Number, required: true, unique: true },  // Unique ID for each project
  views: { type: Number, default: 0 },  // Initial view count is 0
});

module.exports = mongoose.model('View', viewSchema);
