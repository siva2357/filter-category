// server/controllers/project.controller.js

const Project = require('../models/project.model');


exports.getAllProjects = (req, res) => {
  const category = req.query.category;
  const query = category ? { category } : {};
  Project.find(query)
    .then(projects => res.json(projects))
    .catch(err => res.status(500).send(err));
};


exports.getProjectById = (req, res) => {
  Project.findById(req.params.id)
    .then(project => {
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.json(project);
    })
    .catch(err => {
      console.error('Error fetching project:', err);
      res.status(500).json({ error: 'Error fetching project' });
    });
};


exports.createProject = (req, res) => {
  const newProject = new Project({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image
  });

  newProject.save()
    .then(project => res.json(project))
    .catch(err => res.status(400).send(err));
};

exports.updateProject = (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(project => res.json(project))
    .catch(err => res.status(400).send(err));
};

exports.deleteProject = (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'Project deleted successfully' }))
    .catch(err => res.status(400).send(err));
};
