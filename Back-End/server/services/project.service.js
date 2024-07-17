// server/services/project.service.js

const axios = require('axios');

const baseUrl = 'http://localhost:4000/api/projects';

const ProjectService = {
  getAllProjects: async () => {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching projects');
    }
  },

  getProjectById: async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Project not found');
    }
  },
  
  addProject: async (project) => {
    try {
      const response = await axios.post(baseUrl, project);
      return response.data;
    } catch (error) {
      throw new Error('Error adding project');
    }
  },

  updateProject: async (id, project) => {
    try {
      const response = await axios.put(`${baseUrl}/${id}`, project);
      return response.data;
    } catch (error) {
      throw new Error('Error updating project');
    }
  },

  deleteProject: async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting project');
    }
  }
};

module.exports = ProjectService;
