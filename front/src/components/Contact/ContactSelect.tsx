import React from 'react'

type ContactSelectProps = {
  label: string;
  id: string;
  name: string;
  options: Option[];
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

type Option = {
  label: string;
  value: string;
  isDefault?: boolean;
}

const ContactSelect = ({ label, id, name, options, value, onChange }: ContactSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor={id}>{label}</label>
        <select id={id} name={name} value={value} onChange={onChange} required={true}>
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
    </div>
  )
}

export default ContactSelect