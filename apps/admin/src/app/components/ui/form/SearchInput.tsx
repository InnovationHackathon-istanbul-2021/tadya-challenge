import React from 'react';
import { Icon } from '../icon/Icon';

interface ISearchInput {
  placeholder?: string,
  value: string,
  styles?: string,
  onChange: any,
}

const SearchInput = ({ value, onChange, styles, placeholder }: ISearchInput) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
        <Icon className="text-gray-500 w-5 h-5" icon={'HiOutlineSearch'} />
        <input
          type="text"
          className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded text-gray-600 placeholder-gray-500"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
