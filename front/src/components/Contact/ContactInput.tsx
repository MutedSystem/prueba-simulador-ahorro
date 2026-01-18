/* eslint-disable no-unused-vars */
import React from 'react';
import { MdOutlineErrorOutline } from 'react-icons/md';

type ContactInputProps = {
  value: string;
  touched: boolean;
  error: string;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const ContactInput = ({ label, id, name, placeholder, type, value, touched, error, onChange, onBlur }: ContactInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-bold text-[14px]">{label} *</label>
      <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} 
        className="w-full px-4 py-2 rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" 
        required={true}
      />
      {error && touched && <small className="text-red-500 text-[12px] flex items-center gap-1">
        <MdOutlineErrorOutline />
        {error}
      </small>}
    </div>
  );
};

export default ContactInput;