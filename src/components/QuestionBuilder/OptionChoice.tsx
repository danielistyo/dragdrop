import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { letters } from "../../helpers/letters";
import InputField from "../common/InputField";
import Button from "../common/Button";

type Options = Array<{ id: number; value: string }>;

const OptionChoice = ({ options, onOptionsUpdate }: { options: Options; onOptionsUpdate: (o: Options) => void }) => {
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
    onOptionsUpdate(newOptions);
  };

  const onAddOption = () => {
    onOptionsUpdate([...options, { value: "", id: new Date().getTime() }]);
  };

  const onDeleteOption = (id: number) => () => {
    const selectedOpt = findOption(id);
    if (!selectedOpt) return;
    onOptionsUpdate(options.filter(({ id: optId }) => optId !== id));
  };
  return (
    <>
      <div className="text-xs mt-5">Options</div>
      {options.map(({ id, value }, idx) => (
        <div className="flex items-center mt-3" key={id}>
          <span className="w-6 h-6 align-middle leading-6  bg-sky-900 text-white text-xs text-center rounded-sm mr-3">
            {letters[idx]}
          </span>
          <InputField onChange={onOptionChange(id)} value={value} />
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
    </>
  );
};

export default OptionChoice;
