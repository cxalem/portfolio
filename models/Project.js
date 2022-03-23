import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  project_title: {
    type: String,
    require: [true, "Add title"],
  },
  project_description: {
    type: String,
    require: [true, "Add description"],
  },
  project_technologies: {
    type: Array,
    require: [true, "Add technology"],
  },
  repo: {
    type: String,
    require: [true, "Add repo"],
  },
  deploy: {
    type: String,
    require: [true, "Add repo"],
  }
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema, "projects");