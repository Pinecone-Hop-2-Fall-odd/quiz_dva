import { QuizModel } from "../models/quiz-model.js";
 
export const getQuiz = async (req, res) => {
  try {
    const quizs = await QuizModel.find();
 
    res.status(200).json({ quizs: quizs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 
 
export const createQuiz = async (req, res) => {
  try {
    const body = req.body;
 
    console.log(body)
 
    const quiz = await QuizModel.create({
      question: body.question,
      answers: body.answer,
      category: body.category,
    });
 
    res.status(269).json({ quiz });
  } catch (error) {
    res.status(569).json({ error: error.message });
  }
};
 
export const quizzes = async (req, res) => {
  const params = req.params;
 
  try {
    const quizzes = await QuizModel.find({ category: params.lesson });
    res.status(200).json({ quizzes: quizzes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 
// // import { UserModel } from "../models/user-model.js";

// import { GetPublicKeyOrSecret } from "jsonwebtoken";

// import { QuizModel } from "../models/quiz-model.js";

// const country_flas = [
//   { image, isCorrect: true },
//   { image, isCorrect: true },
//   { image, isCorrect: true },
//   { image, isCorrect: true },
//   { image, isCorrect: true },
// ];

// const country = [
//   [
//     { canada: "canada", isCorrect: true },
//     { korean: "korean", isCorrect: false },
//     { japan: "japan", isCorrect: false },
//     { mongolia: "mongolia", isCorrect: false },
//   ],
//   [
//     { brazil: "brazil", isCorrect: true },
//     { qatar: "qatar", isCorrect: false },
//     { iran: "iran", isCorrect: false },
//     { spain: "spain", isCorrect: false },
//   ],
//   [
//     { mexico: "mexico", isCorrect: false },
//     { england: "england", isCorrect: false },
//     { wales: "wales", isCorrect: false },
//     { poland: "poland", isCorrect: true },
//   ],
//   [
//     { argentina: "argentina", isCorrect: true },
//     { germany: "germany", isCorrect: false },
//     { morocco: "morocco", isCorrect: false },
//     { ghana: "ghana", isCorrect: false },
//   ],
//   [
//     { tunisia: "tunisia", isCorrect: false },
//     { france: "france", isCorrect: true },
//     { norway: "norway", isCorrect: false },
//     { china: "china", isCorrect: false },
//   ],
//   [
//     { sweden: "sweden", isCorrect: true },
//     { greece: "greece", isCorrect: false },
//     { russia: "russia", isCorrect: false },
//     { guam: "guam", isCorrect: false },
//   ],
//   [
//     { moldova: "moldova", isCorrect: false },
//     { poland: "poland", isCorrect: false },
//     { italy: "italy", isCorrect: true },
//     { hong_kong: "", isCorrect: false },
//   ],
//   [
//     { taiwan: "taiwan", isCorrect: false },
//     { peru: "peru", isCorrect: true },
//     { israel: "israel", isCorrect: false },
//     { denmark: "denmark", isCorrect: false },
//   ],
//   // country name add
//   [
//     { estonia: "Estonia", isCorrect: false },
//     { poland: "Poland", isCorrect: false },
//     { chile: "Chile", isCorrect: false },
//     { georgia: "Georgia", isCorrect: true },
//   ],
//   [
//     { jamaica: "Jamaica", isCorrect: false },
//     { australia: "Australia", isCorrect: false },
//     { kenya: "Kenya", isCorrect: false },
//     { saudi_Arabia: "Saudi Arabia", isCorrect: true },
//   ],
//   [
//     { italy: "Italy", isCorrect: false },
//     { uganda: "uganda", isCorrect: false },
//     { iraq: "iraq", isCorrect: false },
//     { portugal: "portugal", isCorrect: true },
//   ],
//   [
//     { mexico: "mexico", isCorrect: false },
//     { malaysia: "malaysia", isCorrect: false },
//     { nigeria: "nigeria", isCorrect: true },
//     { turkiye: "turkiye", isCorrect: false },
//   ],
//   [
//     { united_kingdom: "united_kingdom", isCorrect: false },
//     { sri_lanka: "sri_lanka", isCorrect: false },
//     { croatia: "croatia", isCorrect: false },
//     { finland: "finland", isCorrect: true },
//   ],
//   [
//     { pakistan: "pakiskan", isCorrect: false },
//     { belgium: "belgium", isCorrect: false },
//     { colombia: "colombia", isCorrect: false },
//     { new_zealand: "new_zeealand", isCorrect: true },
//   ],
//   [
//     { egypt: "egypt", isCorrect: false },
//     { somalia: "somalia", isCorrect: false },
//     { philippines: "philippines", isCorrect: false },
//     { kazakhstan: "kazakhstan", isCorrect: true },
//   ],
//   [
//     { thailand: "thailand", isCorrect: true },
//     { cuba: "cuba", isCorrect: false },
//     { tanzania: "tanzania", isCorrect: false },
//     { mali: "mali", isCorrect: false },
//   ],
//   [
//     { iceland: "iceland", isCorrect: true },
//     { uruguay: "uruguay", isCorrect: false },
//     { angola: "angola", isCorrect: false },
//     { fiji: "fiji", isCorrect: false },
//   ],
//   [
//     { togo: "togo", isCorrect: true },
//     { serbia: "serbia", isCorrect: false },
//     { laos: "laos", isCorrect: false },
//     { libya: "libya", isCorrect: false },
//   ],
  
//   [
//     { jordan: "jordan", isCorrect: false },
//     { finland: "finland", isCorrect: false },
//     { slovanka: "slovanka", isCorrect: true },
//     { eritrea: "eritrea", isCorrect: false },
//   ],
//   [
//     { ireland: "ireland", isCorrect: false },
//     { oman: "oman", isCorrect: true },
//     { kuwait: "kuwait", isCorrect: false },
//     { panama: "panama", isCorrect: false },
//   ],
// ];

// // export const getAllUsers = async (req, res) => {
// //     const users_data = await UserModel.find({});
// //     res.status(200).json({ users: users_data })
// // }

// // export const getUser = (req, res) => {
// //     const params = req.params;

// //     const filteredUser = users.filter((cur) => cur.id === params.id);

// //     if (filteredUser.length === 0) {
// //         res.status(405).json({ message: "User not found" });
// //     } else {
// //         res.status(200).json({ user: filteredUser[0] });
// //     }
// // }

// // export const createUser = async (req, res) => {
// //     const body = req.body;
// // console.log(body)
// //     await UserModel.create({
// //         userName: body.userName,
// //         email: body.email,
// //         password: body.password,
// //         createdOn: new Date(),
// //     });

// //     res.status(200).json({ status:true})
// // }






