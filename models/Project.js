import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  project_title: {
    type: String,
    require: [true, "Add title"],
  },
  project_description: {
    type: String,
    require: [true, "Add icon"],
  },
  project_technologies: {
    type: Array,
    require: [true, "Add icon"],
  }
});

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema, "projects");