import { useState } from "react";
import ModalAllQuestion from "../components/ModalAllQuestion";
import ModalOneQuestion from "../components/ModalOneQuestion";

const FourthLab = () => {
  const [visableAllQuestion, setVisableAllQuestion] = useState<boolean>(false);
  const [visableOneQuestion, setVisableOneQuestion] = useState<boolean>(false);

  const handleChangeVisable = (visable: boolean) => {
    setVisableAllQuestion(visable);
  };

  const handleChangeOneQuestionVisable = (visable: boolean) => {
    setVisableOneQuestion(visable);
  };

  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center gap-10">
      <p className="text-5xl">Выберите как вы хотите проходить форму?</p>
      <div className="flex gap-10">
        <button
          className="text-3xl py-4 px-7 border-black border-[2px] rounded-xl hover:bg-black hover:text-white transition-all ease-in"
          onClick={() => setVisableAllQuestion(true)}
        >
          Все вопросы сразу
        </button>
        <ModalAllQuestion
          setVisable={handleChangeVisable}
          visible={visableAllQuestion}
        />
        <button
          className="text-3xl py-4 px-7 border-black border-[2px] rounded-xl hover:bg-black hover:text-white transition-all ease-in"
          onClick={() => handleChangeOneQuestionVisable(true)}
        >
          По одному вопросу
        </button>
        <ModalOneQuestion
          handleOnClose={handleChangeOneQuestionVisable}
          visible={visableOneQuestion}
        />
      </div>
    </main>
  );
};

export default FourthLab;
