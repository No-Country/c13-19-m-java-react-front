import React from "react";

type InputType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "checkbox"
  | "button"
  | "submitButton"
  | "select";

interface InputContainerProps {
  type: InputType;
  placeholder: string;
  errorMessage?: string;
  suffix?: string | React.ReactElement;
  prefix?: string | React.ReactElement;
  valueContainerName: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  label?: string;
  regexpPattern?: RegExp;
  counters?: { min?: number; max?: number };
  formatter?: (
    value: number | undefined,
    info: { userTyping: boolean; input: string }
  ) => string;
  parser?: (displayValue: string | undefined) => number;
  defaultValue?: number | string;
  noFeedback?: boolean;
  optionsList?: Array<any>;
  canSearch?: boolean;
  onSearch?: (value: string) => void;
  checked?: boolean;
  onClear?: () => void;
  buttonType?:
    | "link"
    | "text"
    | "ghost"
    | "dashed"
    | "default"
    | "primary"
    | undefined;
  danger?: boolean;
  ghost?: boolean;
  shape?: "circle" | "round" | "default";
  iconOrReactElement?: React.ReactElement;
  isButtonLoading?: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({
  type,
  placeholder,
  errorMessage,
  suffix,
  prefix,
  valueContainerName,
  style,
  onClick,
  onChange,
  required,
  disabled,
  label,
  regexpPattern,
  counters,
  formatter,
  parser,
  defaultValue,
  noFeedback,
  optionsList,
  canSearch,
  onSearch,
  checked,
  onClear,
  buttonType,
  danger,
  ghost,
  shape,
  iconOrReactElement,
  isButtonLoading,
}) => {
  return (
    <div>
      {/* Renderizar diferentes tipos de componentes según el tipo */}
      {type === "text" ||
      type === "number" ||
      type === "email" ||
      type === "password" ? (
        <input
          type={type}
          placeholder={placeholder}
          // ... otras propiedades de entrada
          className="p-2 border rounded-md"
        />
      ) : type === "checkbox" ? (
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">{placeholder}</span>
        </label>
      ) : type === "button" || type === "submitButton" ? (
        <button
          type={type === "submitButton" ? "submit" : "button"}
          // ... otras propiedades del botón
          className={`${
            danger ? "bg-red-500" : "bg-blue-500"
          } text-white font-bold py-2 px-4 rounded`}
        >
          {placeholder}
        </button>
      ) : type === "select" ? (
        <select
          // ... otras propiedades del select
          className="p-2 border rounded-md"
        >
          {optionsList &&
            optionsList.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      ) : null}
    </div>
  );
};

export default InputContainer;
