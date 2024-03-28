import React, { ChangeEvent } from 'react';
import classNames from "classnames";

interface InputFieldProps {
  label: string;
  value: string;
  size?: "small" | "medium" | "large";
  textColor?: string;
  onChange: (value: string) => void;
}

const InputField = ({ label, value, onChange,size="medium",textColor }:InputFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder={label}
        value={value}
        onChange={handleChange}
        className={classNames()}
        style={textColor ? { color: textColor } : {}}
      />
    </div>
  );
};

export default InputField;
