import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";

const QuestionForm4 = ({ id, onDelete }: { id: string; onDelete: (id: string) => void }) => {
  return (
    <FormWrapper title="Type Soal 4" id={id} onDelete={onDelete}>
      <InputField title="No" type="number" inputClassname="w-auto" />

      <InputField title="Question" className="mt-3" textarea />
      <InputField title="Answer" className="mt-3" />

      <InputField title="Point Set" className="mt-3" type="number" inputClassname="w-auto" />
    </FormWrapper>
  );
};

export default QuestionForm4;
