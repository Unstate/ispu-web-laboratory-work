import React, { FC } from "react";
import { IoMdArrowBack, IoMdCheckmark } from "react-icons/io";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { compareAnswers } from "../utils/checkUserAnswers";
import { bringingUserResponseToCorrectView } from "../utils/createUserAnswer";
import { answer } from "../constants/answers";
import { AiOutlineClose } from "react-icons/ai";
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from "react-icons/ci";
import { useModalQuestions } from "../hooks/useModalQuestions";

interface ModalOneQuestionProps {
  visible: boolean;
  handleOnClose: (visible: boolean) => void;
}

const ModalOneQuestion: FC<ModalOneQuestionProps> = ({
  visible,
  handleOnClose,
}) => {
  const {
    currentQuestion,
    handleOnChangeWithoutQuestions,
    handleOnClick,
    setCurrentQuestion,
    setUserResult,
    setVisibleAnswers,
    visibleAnswers,
    userAnswers,
    userResult,
  } = useModalQuestions();
  return (
    <>
      {visible && (
        <aside
          className="flex justify-center items-center bg-[#000000d9] fixed top-0 left-0 w-full min-h-screen"
          onClick={() => handleOnClose(false)}
        >
          <div
            className={`flex items-center justify-center gap-40 bg-white rounded-xl w-[80%] h-[300px] `}
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <button
              disabled={1 === currentQuestion ? true : false}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentQuestion((prev) => prev - 1);
              }}
            >
              <BsFillArrowLeftCircleFill
                className={`w-[60px] h-[60px] hover:text-[#FF5824] transition-all cursor-pointer ease-in ${
                  1 === currentQuestion
                    ? "text-gray-500 hover:text-gray-500 hover:cursor-default"
                    : ""
                } ${visibleAnswers ? "hidden" : ""}`}
              />
            </button>
            {!visibleAnswers ? (
              <div className="w-[600px]">
                {userAnswers.map(
                  (task) =>
                    task.id === currentQuestion && (
                      <div
                        key={task.id}
                        className={`flex gap-3 ${
                          task.questions ? "flex-col" : ""
                        }`}
                      >
                        <p>{task.title}</p>
                        <div className="flex flex-col gap-4">
                          {task.questions?.map((question) => (
                            <div key={question.id} className="flex gap-3">
                              <button
                                onClick={() => handleOnClick(question.id)}
                                className={`${
                                  question.checked
                                    ? "after:border-white after:border-[0 2px 2px 0] lafter:eft-[7px] relative h-[22px] w-[22px] rounded-[2px] border-[2px] border-[#160F29] bg-[#160F29] after:absolute after:left-[3px] after:top-[-1px] after:block after:h-[10px] after:w-[6px] after:rotate-45 after:transform after:border-solid after:lg:left-[6px] after:lg:top-[1px] after:2xl:left-[3px] after:2xl:top-[-1px] flex justify-center items-center"
                                    : "h-[22px] w-[22px] rounded-[2px] border-[2px] border-[#160F29]"
                                }`}
                              >
                                {question.checked && (
                                  <IoMdCheckmark className="w-[20px] h-[20px] rounded-full text-white " />
                                )}
                              </button>
                              <p
                                onClick={() => handleOnClick(question.id)}
                                className="hover:cursor-pointer select-none"
                              >
                                {question.question}
                              </p>
                            </div>
                          ))}
                        </div>
                        <div className="flex">
                          {!task.questions && (
                            <input
                              className="border-black border-[1px] rounded-lg text-xl p-3 w-full"
                              type="text"
                              value={task.value}
                              onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                              ) => handleOnChangeWithoutQuestions(task.id, e)}
                            />
                          )}
                        </div>
                      </div>
                    )
                )}
                {visibleAnswers && <div>Ответы</div>}
                {userAnswers.length === currentQuestion && (
                  <button
                    className="flex justify-center items-center hover:bg-[#FF5824] hover:cursor-pointer transition-all ease-in hover:text-white py-3 hover:border-[#FF5824] text-xl border-black border-[1px] rounded-md w-full"
                    onClick={() => {
                      setUserResult(
                        compareAnswers(
                          bringingUserResponseToCorrectView(userAnswers),
                          answer
                        )
                      );
                      setVisibleAnswers(true);
                    }}
                  >
                    Проверить
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-10">
                <div
                  className={`w-full flex items-center justify-center gap-10`}
                >
                  <IoMdArrowBack
                    className="w-10 h-10 hover:text-red-500 hover:cursor-pointer transition-all ease-in"
                    onClick={() => {
                      setVisibleAnswers(false);
                    }}
                  />
                  <p className="text-4xl text-center">Результаты</p>
                  <AiOutlineClose
                    className="w-10 h-10 hover:text-red-500 hover:cursor-pointer transition-all ease-in"
                    onClick={() => handleOnClose(false)}
                  />
                </div>
                <div className="flex items-center gap-16">
                  {userResult > 8 ? (
                    <CiFaceSmile className="w-[60px] h-[60px]" />
                  ) : userResult < 8 && userResult > 5 ? (
                    <CiFaceMeh className="w-[60px] h-[60px]" />
                  ) : userResult < 5 ? (
                    <CiFaceFrown className="w-[60px] h-[60px]" />
                  ) : (
                    ""
                  )}
                  <p className="text-2xl">Ваши баллы: {userResult}</p>
                </div>
              </div>
            )}

            <button
              disabled={userAnswers.length === currentQuestion ? true : false}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setCurrentQuestion((prev) => prev + 1);
              }}
            >
              <BsFillArrowRightCircleFill
                className={`w-[60px] h-[60px] hover:text-[#FF5824] transition-all cursor-pointer ease-in ${
                  userAnswers.length === currentQuestion
                    ? "text-gray-500 hover:text-gray-500 hover:cursor-default"
                    : ""
                } ${visibleAnswers ? "hidden" : ""}`}
              />
            </button>
          </div>
        </aside>
      )}
    </>
  );
};

export default ModalOneQuestion;
/*
    создать состояние в котором показывается номер того вопроса, который отображается в данный момент.
    По клику на кнопки сетается либо prev => prev - 1 либо prev => prev + 1. отображается у меня объект вопросов
    типо вот так {object[currentQuestion]}
*/
