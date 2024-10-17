import React from "react";
import { Input, Textarea } from "@/components/atoms";

interface IFormFieldProps {
  as: "input" | "textarea";
  label: React.ReactNode;
  htmlFor: string;
  name: string;
  type?: string;
  value?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  id: string;
  rows?: number;
  cols?: number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormField: React.FC<IFormFieldProps> = ({
  as = "input",
  label,
  htmlFor,
  name,
  type,
  value,
  required,
  disabled,
  placeholder,
  className,
  id,
  rows,
  cols,
  onChange,
}) => {
  return (
    <div className="form-field">
      {label && (
        <label htmlFor={htmlFor} className="block mb-2 font-semibold">
          {label}
        </label>
      )}

      {as === "input" ? (
        <Input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
          className={className}
          onChange={onChange}
        />
      ) : (
        <Textarea
          name={name}
          id={id}
          rows={rows}
          cols={cols}
          value={value}
          required={required}
          disabled={disabled}
          className={className}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
