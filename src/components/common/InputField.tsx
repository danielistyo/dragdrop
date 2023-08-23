import PropTypes from "prop-types";
import { useMemo } from "react";

const InputField = ({
  title = "",
  className = "",
  inputClassname = "",
  textarea,
  ...otherProps
}: {
  title?: string;
  className?: string;
  inputClassname?: string;
  textarea?: boolean;
  [x: string]: unknown;
}) => {
  const mergerClasses = useMemo(() => "block w-full border px-4 py-2 text-xs " + inputClassname, [inputClassname]);
  return (
    <div className={className}>
      {title && <label className="block w-full mb-2 text-xs">{title}</label>}
      {textarea ? (
        <textarea className={mergerClasses} {...otherProps} />
      ) : (
        <input className={mergerClasses} {...otherProps} />
      )}
    </div>
  );
};

InputField.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  inputClassname: PropTypes.string,
  type: PropTypes.string,
};

export default InputField;
