import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  skill_title: {
    type: String,
    required: [true, "Add title"],
  },
  skill_icon: {
    type: String,
    required: [true, "Add icon"],
  }
});

export default mongoose.models.Skill ||
  mongoose.model("Skill", SkillSchema, "skills");