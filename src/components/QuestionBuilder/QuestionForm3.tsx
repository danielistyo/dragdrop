import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../common/Button";
import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import FileUploader from "../common/FileUploader";

const QuestionForm3 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
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
    <FormWrapper title="Type Soal 3" id={id} onDelete={onDelete}>
      <InputField title="Start Number" type="number" inputClassname="w-auto" />
      <InputField title="End Number" className="mt-3" type="number" inputClassname="w-auto" />

      <FileUploader title="Image" className="mt-3" />

      <div className="text-xs mt-5">Add question</div>
      {questions.map(({ id }) => (
        <div className="flex items-center mt-5" key={id}>
          <InputField onChange={onQuestionChange(id, "question")} placeholder="Question" className="grow" />
          <InputField onChange={onQuestionChange(id, "answer")} placeholder="Answer" className="grow" />
          <div className="ml-auto text-xs text-gray-500 cursor-pointer" onClick={onDeleteQuestion(id)}>
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

export default QuestionForm3;
