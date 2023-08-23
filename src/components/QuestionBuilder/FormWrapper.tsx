import PropTypes from "prop-types";
import { ReactNode } from "react";
import Button from "../common/Button";
import { TrashIcon } from "@heroicons/react/24/outline";

const FormWrapper = ({
  children,
  onSubmit,
  title,
  id,
  onDelete,
}: {
  children: ReactNode;
  onSubmit?: () => void;
  title: string;
  id: string;
  onDelete?: (id: string) => void;
}) => {
  const onTrashClick = () => {
    onDelete?.(id);
  };
  return (
    <div id={id} className="p-4 border mt-3 rounded-sm relative">
      <h4 className="mb-4 text-xs font-bold">{title}</h4>
      {onDelete && <TrashIcon className="w-4 absolute top-3 right-3 cursor-pointer" onClick={onTrashClick} />}
      {children}
      <div className="text-right mt-6">
        <Button rounded onClick={onSubmit}>
          Apply
        </Button>
      </div>
    </div>
  );
};

FormWrapper.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default FormWrapper;
