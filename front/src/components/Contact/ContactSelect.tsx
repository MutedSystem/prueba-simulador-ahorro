import React from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';

type ContactSelectProps = {
  label: string;
  id: string;
  name: string;
  error: string;
  touched: boolean;
  options: Option[];
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur: (e: React.FocusEvent<HTMLSelectElement>) => void;
};

type Option = {
  label: string;
  value: string;
  isDefault?: boolean;
};

const ContactSelect = ({ label, id, name, error, touched, options, value, onChange, onBlur }: ContactSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-[14px]">{label} *</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full px-4 py-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
        required={true}
      >
        {options.map((option) => (
          <option
            key={`${label}-${id}-${option.value}`}
            value={option.value}
            disabled={option.isDefault || false}
            hidden={option.isDefault || false}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && touched && <small className="text-red-500 text-[12px] flex items-center gap-1">
        <MdOutlineErrorOutline />
        {error}
      </small>}
    </div>
  );
};

export default ContactSelect;