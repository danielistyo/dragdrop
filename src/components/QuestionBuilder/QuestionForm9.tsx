import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import { useState } from "react";
import QuestionAnswerChoice from "./QuestionAnswerChoice";

const options = [
  { id: 1, value: "True" },
  { id: 2, value: "False" },
  { id: 3, value: "Not Given" },
];
const QuestionForm9 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  const [questions, setQuestions] = useState<Array<{ id: number; value: string; answer: string }>>([]);

  return (
    <FormWrapper title="Type Soal 9" id={id} onDelete={onDelete}>
      <InputField title="No" type="number" inputClassname="w-auto" />

      <QuestionAnswerChoice useLabelOption questions={questions} options={options} onQuestionsChange={setQuestions} />

      <InputField title="Point Set" className="mt-3" type="number" inputClassname="w-auto" />
    </FormWrapper>
  );
};

export default QuestionForm9;
