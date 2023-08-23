import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import { useState } from "react";
import Button from "../common/Button";

const QuestionForm7 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  const [questions, setQuestions] = useState<Array<{ question: string; answer: boolean; id: number }>>([]);

  const findOption = (id: number) => {
    return questions.find(({ id: optId }) => optId === id);
  };
  const onQuestionChange = (id: number, prop: "question" | "answer") => (e: React.FormEvent<HTMLInputElement>) => {
    const selectedOpt = findOption(id);

    if (!selectedOpt) return;
    const newOptions = questions.map((opt) => {
      if (opt.id === id) return { ...opt, [prop]: (e.target as HTMLInputElement).value };
      return opt;
    });
    setQuestions(newOptions);
  };

  const onAddOption = () => {
    setQuestions([...questions, { answer: false, question: "", id: new Date().getTime() }]);
  };

  const onDeleteQuestion = (id: number) => () => {
    const selectedOpt = findOption(id);
    if (!selectedOpt) return;
    setQuestions(questions.filter(({ id: optId }) => optId !== id));
  };

  return (
    <FormWrapper title="Type Soal 7" id={id} onDelete={onDelete}>
      <InputField title="Start Number" type="number" inputClassname="w-auto" />
      <InputField title="End Number" className="mt-3" type="number" inputClassname="w-auto" />

      <div className="text-xs mt-5">Add question</div>
      {questions.map(({ id }) => (
        <div className="flex items-start mt-5" key={id}>
          <InputField onChange={onQuestionChange(id, "question")} placeholder="Description" className="grow" />
          <InputField
            onChange={onQuestionChange(id, "answer")}
            placeholder="Write the questions. And add ** before and after the answer. For example: Today is **raining**"
            className="grow-[3]"
            textarea
          />
          <div className="text-xs text-gray-500 cursor-pointer mt-2 ml-2" onClick={onDeleteQuestion(id)}>
            <TrashIcon className="w-4 inline align-middle" /> <span className="align-middle">Delete</span>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <Button variant="invert" onClick={onAddOption}>
          <PlusIcon className="w-4 inline align-middle" /> <span className="align-middle">Add question</span>
        </Button>
      </div>

      <InputField title="Point Set" className="mt-3" type="number" inputClassname="w-auto" />
    </FormWrapper>
  );
};

export default QuestionForm7;
