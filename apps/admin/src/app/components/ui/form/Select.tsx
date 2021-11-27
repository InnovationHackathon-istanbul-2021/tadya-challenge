import React from 'react';

interface ISelect {
  placeholder?: string,
  value?: string,
  styles?: string,
  onChange?: any,
  options: any,
}

const Select = ({ options, value, onChange, styles, placeholder }: ISelect) => {
  return (
    <select value={value} onChange={(e) => onChange(e)} className="w-full text-sm leading-3 text-gray-500 focus:outline-none">
      {options.length > 0 &&  options.map((opt: any) =>
        <option key={opt} value={opt}>{opt}</option>
      )}
    </select>
  );
};

export default Select;
