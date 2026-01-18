import React from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';

type ContactCheckboxProps = {
  label: string;
  id: string;
  name: string;
  checked: boolean;
  error?: string;
  touched?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const ContactCheckbox = ({ label, id, name, checked, error, touched, onChange, onBlur }: ContactCheckboxProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <input type="checkbox" id={id} name={name} checked={checked} className="w-4 h-4 decoration-primary" onChange={onChange} onBlur={onBlur} />
        <label htmlFor={id} className="font-bold text-[14px] cursor-pointer">{label} *</label>
      </div>
      {error && touched && <small className="text-red-500 text-[12px] flex items-center gap-1">
        <MdOutlineErrorOutline />
        {error}
      </small>}
    </>
  );
};

export default ContactCheckbox;