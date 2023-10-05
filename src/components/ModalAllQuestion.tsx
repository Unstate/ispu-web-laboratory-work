import { FC, memo } from "react";
import QuestionElement from "./QuestionElement";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { bringingUserResponseToCorrectView } from "../utils/createUserAnswer";
import { compareAnswers } from "../utils/checkUserAnswers";
import { answer } from "../constants/answers";
import { CiFaceFrown, CiFaceMeh, CiFaceSmile } from "react-icons/ci";
import { useModalQuestions } from "../hooks/useModalQuestions";

interface ModalAllQuestionProps {
  visible: boolean;
  setVisable: (visable: boolean) => void;
}

const ModalAllQuestion: FC<ModalAllQuestionProps> = memo(
  ({ visible, setVisable }) => {
    const {
      handleOnChangeWithoutQuestions,
      handleOnClick,
      setUserResult,
      setVisibleAnswers,
      userAnswers,
      userResult,
      visibleAnswers,
    } = useModalQuestions();
    return (
      <>
        {visible && (
          <aside
            className="min-h-screen w-full bg-[#000000d9] fixed top-0 left-0 z-10 flex items-center justify-center"
            onClick={() => setVisable(false)}
          >
            {visibleAnswers ? (
              <>
                <div
                  className={`w-[80%] h-[200px] rounded-xl overflow-auto p-5 flex flex-col gap-10 items-center ${
                    userResult > 8
                      ? "bg-[#98FB98]"
                      : userResult < 8 && userResult > 5
                      ? "bg-[#FFFF99]"
                      : userResult < 5
                      ? "bg-[#EE204D]"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
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
                      onClick={() => setVisable(false)}
                    />
                  </div>
                  <div className="flex items-center gap-10">
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
              </>
            ) : (
              <>
                <div
                  className="w-[80%] h-[800px] bg-white rounded-xl overflow-auto p-5 flex flex-col gap-10 items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  <div className="w-full flex items-center justify-center gap-10">
                    <p className="text-4xl text-center">
                      Тест по знанию HTML, CSS, JS
                    </p>
                    <AiOutlineClose
                      className="w-10 h-10 hover:text-red-500 hover:cursor-pointer transition-all ease-in"
                      onClick={() => setVisable(false)}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    {userAnswers.map((task) => (
                      <div key={task.id}>
                        <QuestionElement
                          type={
                            task.questions
                              ? "withQuestions"
                              : "withoutQuestions"
                          }
                          index={task.id}
                          title={task.title}
                          onClick={handleOnClick}
                          onChange={handleOnChangeWithoutQuestions}
                          questions={task?.questions}
                          id={task.id}
                          value={task.value}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    className="py-5 px-10 uppercase border-black border-[2px] rounded-lg hover:bg-[#FF5824] hover:text-white hover:border-[#FF5824] hover:cursor-pointer transition-all ease-in text-lg"
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
                </div>
              </>
            )}
          </aside>
        )}
      </>
    );
  }
);

export default ModalAllQuestion;
