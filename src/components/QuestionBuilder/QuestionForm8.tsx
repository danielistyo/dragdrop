import { useState } from "react";
import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";
import { letters } from "../../helpers/letters";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Button from "../common/Button";
import Checkbox, { CheckboxChangeEvent } from "rc-checkbox";

const QuestionForm8 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  const [options, setOptions] = useState<Array<{ id: number; text: string; correct: boolean }>>([]);
  const findOption = (id: number) => {
    return options.find(({ id: optId }) => optId === id);
  };

  const onOptionChange = (id: number) => (e: React.FormEvent<HTMLInputElement>) => {
    const selectedOpt = findOption(id);

    if (!selectedOpt) return;
    const newOptions = options.map((opt) => {
      if (opt.id === id) return { ...opt, text: (e.target as HTMLInputElement).value };
      return opt;
    });
    setOptions(newOptions);
  };

  const onAddOption = () => {
    setOptions([...options, { text: "", correct: false, id: new Date().getTime() }]);
  };

  const onDeleteOption = (id: number) => () => {
    const selectedOpt = findOption(id);
    if (!selectedOpt) return;
    setOptions(options.filter(({ id: optId }) => optId !== id));
  };

  const onCorrectChange = (id: number) => (e: CheckboxChangeEvent) => {
    const selectedOpt = findOption(id);
    if (!selectedOpt) return;
    const newOptions = options.map((opt) => {
      if (opt.id === id) return { ...opt, correct: e.target.checked };
      return opt;
    });
    setOptions(newOptions);
  };
  return (
    <FormWrapper title="Type Soal 8" id={id} onDelete={onDelete}>
      <InputField title="No" type="number" inputClassname="w-auto" />

      <InputField title="Question" className="mt-3" textarea />

      <div className="text-xs mt-5">Options</div>
      {options.map(({ id, text }, idx) => (
        <div className="flex items-center mt-3" key={id}>
          <span className="w-6 h-6 align-middle leading-6  bg-sky-900 text-white text-xs text-center rounded-sm mr-3">
            {letters[idx]}
          </span>
          <div className="mr-3 text-xs">
            <Checkbox className="align-middle leading-3" onChange={onCorrectChange(id)} />{" "}
            <span className="align-middle">True?</span>
          </div>
          <InputField onChange={onOptionChange(id)} value={text} />
          <div className="ml-auto text-xs text-gray-500 cursor-pointer" onClick={onDeleteOption(id)}>
            <TrashIcon className="w-4 inline align-middle" /> <span className="align-middle">Delete</span>
          </div>
        </div>
      ))}
      <div className="mt-2">
        <Button variant="invert" onClick={onAddOption}>
          <PlusIcon className="w-4 inline align-middle" /> <span className="align-middle">Add option</span>
        </Button>
      </div>

      <InputField title="Point Set" className="mt-5" type="number" inputClassname="w-auto" />
    </FormWrapper>
  );
};

export default QuestionForm8;
