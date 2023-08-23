import PropTypes from "prop-types";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { letters } from "../../helpers/letters";
import InputField from "../common/InputField";
import Button from "../common/Button";

type Questions = Array<{ id: number; value: string; answer: string }>;

const QuestionAnswerChoice = ({
  questions,
  options,
  onQuestionsChange,
  useLabelOption = false,
}: {
  options: Array<{ id: number; value: string }>;
  questions: Questions;
  onQuestionsChange: (q: Questions) => void;
  useLabelOption?: boolean;
}) => {
  const findQuestion = (id: number) => {
    return questions.find(({ id: questionId }) => questionId === id);
  };

  const onQuestionChange = (id: number) => (e: React.FormEvent<HTMLInputElement>) => {
    const selectedQuestion = findQuestion(id);

    if (!selectedQuestion) return;
    const newQuestion = questions.map((question) => {
      if (question.id === id) return { ...question, value: (e.target as HTMLInputElement).value };
      return question;
    });
    onQuestionsChange(newQuestion);
  };

  const onAddQuestion = () => {
    onQuestionsChange([...questions, { value: "", id: new Date().getTime(), answer: "" }]);
  };

  const onDeleteQuestion = (id: number) => () => {
    const selectedQuestion = findQuestion(id);
    if (!selectedQuestion) return;
    onQuestionsChange(questions.filter(({ id: questionId }) => questionId !== id));
  };
  return (
    <>
      <div className="text-xs mt-5">Questions & Answers</div>
      {questions.map(({ id, value }) => (
        <div className="flex items-center mt-3" key={id}>
          <select className="bg-gray-200 rounded-sm px-2 py-1 text-xs mr-3">
            <option>Answer</option>
            {options.map((opt, idx) => (
              <option key={idx} value={opt.value}>
                {useLabelOption ? opt.value : letters[idx]}
              </option>
            ))}
          </select>
          <InputField
            onChange={onQuestionChange(id)}
            value={value}
            placeholder="Enter question"
            className="min-w-[300px]"
          />
          <div className="ml-auto text-xs text-gray-500 cursor-pointer" onClick={onDeleteQuestion(id)}>
            <TrashIcon className="w-4 inline align-middle" /> <span className="align-middle">Delete</span>
          </div>
        </div>
      ))}
      <div className="mt-2">
        <Button variant="invert" onClick={onAddQuestion}>
          <PlusIcon className="w-4 inline align-middle" /> <span className="align-middle">Add question & answer</span>
        </Button>
      </div>
    </>
  );
};

QuestionAnswerChoice.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string })),
  questions: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, value: PropTypes.string, answer: PropTypes.string })
  ),
  onQuestionsChange: PropTypes.func,
  useLabelOption: PropTypes.bool,
};

export default QuestionAnswerChoice;
