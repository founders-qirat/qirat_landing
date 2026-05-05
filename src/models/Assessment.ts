// import mongoose from "mongoose";

// const AssessmentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   whatsapp: String,
//   answers: Object,
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Assessment ||
//   mongoose.model("Assessment", AssessmentSchema);






import mongoose from "mongoose";

const AssessmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    whatsapp: {
      type: String,
      required: true,
    },

    answers: [
      {
        question: String,
        answer: String,
      },
    ],
  },
  {
    timestamps: true, // auto adds createdAt & updatedAt
  }
);

export default mongoose.models.Assessment ||
  mongoose.model("Assessment", AssessmentSchema);