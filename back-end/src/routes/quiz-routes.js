import express from "express";
import { getQuiz, createQuiz, quizzes } from "../controlles/quiz-controller.js";

export const quizRouter = express.Router();

quizRouter.get("/quiz", getQuiz);
quizRouter.get("/quiz/:lesson", quizzes);
quizRouter.post("/quiz", createQuiz);