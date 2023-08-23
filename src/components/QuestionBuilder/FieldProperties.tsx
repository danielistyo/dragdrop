import InputField from "../common/InputField";
import FormWrapper from "./FormWrapper";

const FieldProperties = () => {
  return (
    <FormWrapper title="Field Properties" id="field_properties">
      <InputField title="Title" placeholder="Enter Title" className="mb-3" />
      <InputField title="Question description" placeholder="Enter your question" type="textarea" />
    </FormWrapper>
  );
};

export default FieldProperties;
