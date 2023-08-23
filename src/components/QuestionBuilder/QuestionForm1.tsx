import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "../common/Button";
import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const QuestionForm1 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  const [options, setOptions] = useState<Array<{ value: string; answer: boolean; id: number }>>([]);

  const findOption = (id: number) => {
    return options.find(({ id: optId }) => optId === id);
  };
  const onOptionChange = (id: number) => (e: React.FormEvent<HTMLInputElement>) => {
    const selectedOpt = findOption(id);

    if (!selectedOpt) return;
    const newOptions = options.map((opt) => {
      if (opt.id === id) return { ...opt, value: (e.target as HTMLInputElement).value };
      return opt;
    });
    setOptions(newOptions);
  };

  const onAddOption = () => {
    setOptions([...options, { answer: false, value: "", id: new Date().getTime() }]);
  };

  const onDeleteOption = (id: number) => () => {
    const selectedOpt = findOption(id);
    if (!selectedOpt) return;
    setOptions(options.filter(({ id: optId }) => optId !== id));
  };

  const onAnswerSelected = (id: number) => () => {
    const selectedOpt = findOption(id);

    if (!selectedOpt) return;

    const newOptions = options.map((opt) => {
      if (opt.id === id) return { ...opt, answer: true };
      return { ...opt, answer: false };
    });
    setOptions(newOptions);
  };
  return (
    <FormWrapper title="Type Soal 1" id={id} onDelete={onDelete}>
      <InputField title="No" type="number" inputClassname="w-auto" />
      <InputField title="Question" textarea className="mt-3" inputClassname="h-36" placeholder="Enter your question" />
      <InputField title="Point Set" className="mt-3" type="number" inputClassname="w-auto" />

      <div className="text-xs mt-5">Set Correct answer</div>
      {options.map(({ id, value }) => (
        <div className="flex items-center mt-5" key={id}>
          <input type="radio" className="mr-3" onChange={onAnswerSelected(id)} name="options" value={value} />
          <InputField onChange={onOptionChange(id)} />
          <div className="ml-auto text-xs text-gray-500 cursor-pointer" onClick={onDeleteOption(id)}>
            <TrashIcon className="w-4 inline align-middle" /> <span className="align-middle">Delete</span>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <Button variant="invert" onClick={onAddOption}>
          <PlusIcon className="w-4 inline align-middle" /> <span className="align-middle">Add option</span>
        </Button>
      </div>
    </FormWrapper>
  );
};

export default QuestionForm1;
