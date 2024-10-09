import React from "react";

interface ITextAreaProps {
  name: string;
  id: string;
  rows?: number;
  cols?: number;
  className?: string;
  value?: string;
  required?: boolean;
  spellCheck?: boolean;
  wrap?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<ITextAreaProps> = ({
  name,
  id,
  rows,
  cols,
  className,
  value,
  spellCheck,
  required,
  wrap,
  disabled,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      id={id}
      rows={rows}
      cols={cols}
      className={className}
      value={value}
      spellCheck={spellCheck}
      required={required}
      wrap={wrap}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Textarea;
