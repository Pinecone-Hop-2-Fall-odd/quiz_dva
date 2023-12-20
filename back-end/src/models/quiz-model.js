import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  questions: [
    {
      picture: String,
      question: String,
      answers: [
        {
          answer: String,
          isCorrect: Boolean,
        },
      ],
    },
  ],
});

export const QuizModel = mongoose.model("quiz", quizSchema);
