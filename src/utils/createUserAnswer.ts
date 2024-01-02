import { IQuestions, ITasks } from "../constants/questions";
export interface IReturnData {
  [key: number]: string | string[];
}

export const bringingUserResponseToCorrectView = (
  userAnswers: ITasks[]
): IReturnData => {

  let questionsArray:string[] = [];
  const result: IReturnData = {};

  for (const answer of userAnswers) {
    if (answer.questions) {
      const filteredQuestions: IQuestions[] = answer.questions.filter(
        (question) => question.checked === true
      );
      if (filteredQuestions.length > 1) {
        for (const question of filteredQuestions) {
            questionsArray.push(question.question);
        }
        result[answer.id] = questionsArray;
      } else {
        for (const question of filteredQuestions) {
          result[answer.id] = question.question;
        }
      }
    } else if (answer.value) {
      result[answer.id] = answer.value;
    }
    questionsArray = [];
  }
//   console.log(result)
//   console.log(compareAnswers(result,answer))
  return result;
};