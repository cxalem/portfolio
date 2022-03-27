import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  project_title: {
    type: String,
    required: [true, "Add title"],
  },
  project_description: {
    type: String,
    required: [true, "Add description"],
  },
  project_technologies: {
    type: Array,
    required: [true, "Add technology"],
  },
  repo: {
    type: String,
    required: [true, "Add Repo"],
  },
  deploy: {
    type: String,
    required: [true, "Add Deploy"],
  }
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema, "projects");