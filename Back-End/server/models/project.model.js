// server/models/project.model.js

const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model('Project', ProjectSchema);
