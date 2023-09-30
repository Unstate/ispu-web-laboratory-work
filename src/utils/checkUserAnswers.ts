import { IAnswers } from "../constants/answers";
import { IReturnData } from "./createUserAnswer";

export const compareAnswers = (
  userAnswers: IReturnData,
  answer: IAnswers
): number => {
  let result = 0;

  // Проходим по ключам объекта userAnswers
  for (const key in userAnswers) {
    if (userAnswers.hasOwnProperty(key)) {
      const userAnswer = userAnswers[key];
      const correctAnswer = answer[key];

      if (Array.isArray(userAnswer) && Array.isArray(correctAnswer)) {
        // Если оба значения являются массивами, сравниваем их элементы
        for (const element of userAnswer) {
          if (correctAnswer.includes(element)) {
            result++;
          }
        }
      } else if (userAnswer === correctAnswer) {
        // Если значения равны
        result++;
      }
    }
  }

  return result;
};
