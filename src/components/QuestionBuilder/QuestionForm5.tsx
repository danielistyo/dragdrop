import { useState } from "react";
import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import QuestionAnswerChoice from "./QuestionAnswerChoice";
import OptionChoice from "./OptionChoice";

const QuestionForm5 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  const [options, setOptions] = useState<Array<{ id: number; value: string }>>([]);
  const [questions, setQuestions] = useState<Array<{ id: number; value: string; answer: string }>>([]);

  return (
    <FormWrapper title="Type Soal 5" id={id} onDelete={onDelete}>
      <InputField title="No" type="number" inputClassname="w-auto" />

      <InputField title="Question" className="mt-3" textarea />

      <OptionChoice options={options} onOptionsUpdate={setOptions} />

      <QuestionAnswerChoice questions={questions} options={options} onQuestionsChange={setQuestions} />

      <InputField title="Point Set" className="mt-5" type="number" inputClassname="w-auto" />
    </FormWrapper>
  );
};

export default QuestionForm5;
