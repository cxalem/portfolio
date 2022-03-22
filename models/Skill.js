import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  skill_title: {
    type: String,
    require: [true, "Add title"],
  },
  skill_icon: {
    type: String,
    require: [true, "Add icon"],
  }
});

export default mongoose.models.Skill ||
  mongoose.model("Skill", SkillSchema);