import { useCallback, useState } from "react";
import { ITasks, tasks } from "../constants/questions";

export const useModalQuestions = () => {
  const [userAnswers, setUserAnswers] = useState<ITasks[]>(tasks);
  const [visibleAnswers, setVisibleAnswers] = useState<boolean>(false);
  const [userResult, setUserResult] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const handleOnClick = useCallback((id: number) => {
    setUserAnswers((prevUserAnswers) => {
      const updatedUserAnswers = prevUserAnswers.map((task) => {
        const updatedQuestions = task.questions?.map((question) => {
          if (question.id === id) {
            return { ...question, checked: !question.checked };
          }
          return question;
        });

        // Возвращаем обновленную задачу с обновленными вопросами
        return { ...task, questions: updatedQuestions };
      });

      return updatedUserAnswers;
    });
  }, []);

  const handleOnChangeWithoutQuestions = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserAnswers(
      userAnswers.map((answer) =>
        answer.id === id ? { ...answer, value: e.target.value } : answer
      )
    );
  };
  return {
    userAnswers,
    handleOnClick,
    handleOnChangeWithoutQuestions,
    userResult,
    setUserResult,
    currentQuestion,
    setCurrentQuestion,
    visibleAnswers,
    setVisibleAnswers
  };
};
