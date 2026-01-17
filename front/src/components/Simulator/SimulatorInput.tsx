/* eslint-disable no-unused-vars */
import React from "react";

type SimulatorInputProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const SimulatorInput = ({
  label,
  id,
  name,
  value,
  error,
  placeholder,
  touched,
  onChange,
  onBlur,
}: SimulatorInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && touched && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default SimulatorInput;
