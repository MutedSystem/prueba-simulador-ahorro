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
  disabled?: boolean;
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
  disabled,
  onChange,
  onBlur,
}: SimulatorInputProps) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={id} className="font-bold text-[14px]">{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        className={`w-full px-4 py-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${error && touched ? 'border-red-500' : ''}`}
      />
      {error && touched && <small className="text-red-500">{error}</small>}
      <small className={`text-gray-500 text-sm`}>Ingrese el {label.toLowerCase()}</small>
    </div>
  );
};
export default SimulatorInput;
