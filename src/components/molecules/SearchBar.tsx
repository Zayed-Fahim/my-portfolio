import React from "react";

interface ISearchbarProps {
  className: string;
  placeholder: string;
  icon?: JSX.Element;
  onChange?: () => void;
}

const SearchBar: React.FC<ISearchbarProps> = ({
  className,
  placeholder,
  icon,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={className}
        name="search"
        type="search"
        onChange={onChange}
      />
      {icon}
    </div>
  );
};

export default SearchBar;
