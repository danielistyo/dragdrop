import PropTypes from "prop-types";
import { ReactNode, useMemo } from "react";

const Button = ({
  children,
  variant = "main",
  className = "",
  rounded = false,
  ...props
}: {
  className?: string;
  variant?: "main" | "dark" | "invert";
  children: ReactNode;
  rounded?: boolean;
  [key: string]: unknown;
}) => {
  const variants = useMemo(
    () => ({
      main: "bg-[#2588f4] text-[#fff]",
      dark: "bg-[#114e8c] text-[#fff]",
      invert: "bg-[#fff] text-[#000] border-2 rounded-s border-[#8ea2b0]",
    }),
    []
  );
  const classes = useMemo(
    () => ["px-5 text-xs py-1.5", variants[variant], rounded ? "rounded-xl" : "rounded-sm", className].join(" "),
    [variant, className, rounded, variants]
  );
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["main", "dark", "invert"]),
};

export default Button;
