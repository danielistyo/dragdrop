import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import { useState } from "react";
import FileUploader from "../common/FileUploader";
import OptionChoice from "./OptionChoice";
import QuestionAnswerChoice from "./QuestionAnswerChoice";

const QuestionForm6 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  const [options, setOptions] = useState<Array<{ id: number; value: string }>>([]);
  const [questions, setQuestions] = useState<Array<{ id: number; value: string; answer: string }>>([]);

  return (
    <FormWrapper title="Type Soal 6" id={id} onDelete={onDelete}>
      <InputField title="Start Number" type="number" inputClassname="w-auto" />
      <InputField title="End Number" className="mt-3" type="number" inputClassname="w-auto" />

      <FileUploader title="Image" className="mt-3" />

      <OptionChoice options={options} onOptionsUpdate={setOptions} />

      <QuestionAnswerChoice questions={questions} options={options} onQuestionsChange={setQuestions} />

      <InputField title="Point Set" className="mt-3" type="number" inputClassname="w-auto" />
    </FormWrapper>
  );
};

export default QuestionForm6;
