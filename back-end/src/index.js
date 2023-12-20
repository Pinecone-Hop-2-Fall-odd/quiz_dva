import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import { userRouter } from "./routes/user-routes.js";
import { quizRouter } from "./routes/quiz-routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(quizRouter)

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://Dva:20080331@dva.sk2v9oe.mongodb.net/Database')
    console.log('database connected1');
}

connectDb();

app.listen(8000, () => {
    console.log(`Your server running on: http://localhost:8000`)
})
