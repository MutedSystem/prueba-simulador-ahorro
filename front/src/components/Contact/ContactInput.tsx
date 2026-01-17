import React from 'react'

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
}

const ContactInput = ({ label, id, name, placeholder, type, value, touched, error, onChange, onBlur }: ContactInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type} 
        id={id} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        onBlur={onBlur} 
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        required={true}
      />
      {error && touched && <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default ContactInput