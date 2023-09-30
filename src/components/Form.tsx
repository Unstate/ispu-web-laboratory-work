import { FC } from "react";

interface FormProps {
  allQuestions: boolean;
}

const Form:FC<FormProps> = ({ allQuestions }) => {
  return (
    <>{allQuestions ? <div>Все вопросы</div> : <div>По одному вопросу</div>}</>
  );
};

export default Form;
