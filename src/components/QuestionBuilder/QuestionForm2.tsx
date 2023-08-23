import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import { useState } from "react";

const QuestionForm2 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  const [questions, setQuestions] = useState<string>("");
  const [startNum, setStartNum] = useState<number>();
  const [endNum, setEndNum] = useState<number>();
  const onNumChange = (func: (num: number) => void) => (e: Event) => {
    func(parseInt((e.target as HTMLInputElement).value));
  };
  const onQuestionsChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setQuestions((e.target as HTMLTextAreaElement).value);
  };

  const onSubmit = () => {
    if (!startNum || !endNum) {
      alert("Fill numbers first.");
      return;
    }
    // validate the questions by checking the existence of **
    const answerTags = [...questions.matchAll(/\*\*/g)];
    const totalAnswer = endNum - startNum + 1;
    if (answerTags.length % 2 === 1 || !answerTags.length)
      alert("There is wrong question answer. Please cover the answer with ** in the front and back.");
    else if (answerTags.length / 2 < totalAnswer)
      alert(`You should add ${totalAnswer - Math.floor(answerTags.length / 2)} more answers in question box.`);
  };
  return (
    <FormWrapper onSubmit={onSubmit} title="Type Soal 2"  id={id} onDelete={onDelete}>
      <InputField onChange={onNumChange(setStartNum)} title="Start Number" type="number" inputClassname="w-auto" />
      <InputField
        onChange={onNumChange(setEndNum)}
        title="End Number"
        className="mt-3"
        type="number"
        inputClassname="w-auto"
      />
      <InputField title="Title" className="mt-3" />
      <InputField title="Point Set" className="mt-3" type="number" inputClassname="w-auto" />

      <InputField
        onChange={onQuestionsChange}
        className="mt-3"
        textarea
        title="Question"
        placeholder="Write the questions. And add ** before and after the answer. For example: Today is **raining**"
      />
    </FormWrapper>
  );
};

export default QuestionForm2;
