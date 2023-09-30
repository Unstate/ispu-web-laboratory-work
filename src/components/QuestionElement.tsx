import { FC, memo } from "react";
import { IoMdCheckmark } from 'react-icons/io';
import { IQuestions } from "../constants/questions";

var Test = memo(IoMdCheckmark)

interface QuestionElementProps {
  type: "withQuestions" | "withoutQuestions";
  index: number;
  title: string;
  questions?: IQuestions[];
  checked?: boolean;
  onClick: (id:number) => void;
  onChange: (id:number,e: React.ChangeEvent<HTMLInputElement>) => void
  id: number;
  value?: string 
}

const QuestionElement: FC<QuestionElementProps> = memo(({
  type,
  index,
  title,
  questions,
  onClick,
  onChange,
  id,
  value
}) => {

  return (
    <>
      {type === "withQuestions" ? (
        <div className="flex flex-col gap-5">
          <p>
            {index}. {title}
          </p>
          <div className="flex flex-col gap-5">
            {questions?.map((question) => (
              <div key={question.id} className="checkBoxContainer  flex items-center space-x-[10px]">
                <button
                  onClick={() => onClick(question.id)}
                  className={`${
                    question.checked
                      ? "after:border-white after:border-[0 2px 2px 0] lafter:eft-[7px] relative h-[22px] w-[22px] rounded-[2px] border-[2px] border-[#160F29] bg-[#160F29] after:absolute after:left-[3px] after:top-[-1px] after:block after:h-[10px] after:w-[6px] after:rotate-45 after:transform after:border-solid after:lg:left-[6px] after:lg:top-[1px] after:2xl:left-[3px] after:2xl:top-[-1px] flex justify-center items-center"
                      : "h-[22px] w-[22px] rounded-[2px] border-[2px] border-[#160F29]"
                  }`}
                >
                  {question.checked && <Test className='w-[20px] h-[20px] rounded-full text-white ' />}
                </button>
                <p>{question.question}</p>
              </div>
            ))}
            
          </div>
        </div>
      ) : (
        <div className="flex gap-5 items-center">
          <p>
            {index}. {title}
          </p>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(id, e)}
            className="border-black border-[2px] p-1 flex items-center justify-center"
          ></input>
        </div>
      )}
    </>
  );
});

export default QuestionElement;
