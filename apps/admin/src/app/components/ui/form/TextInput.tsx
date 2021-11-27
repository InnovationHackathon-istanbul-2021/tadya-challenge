import styled from 'styled-components';
import React from 'react';
import { Field } from 'formik';

const Content = styled.div``;

interface ITextInput {
  title: string,
  name: string,
  type: string,
  placeholder?: string,
  value?: string,
  styles?: string,
  onChange?: unknown,
  icon?: any,
}

const TextInput = ({ type, title, name, icon, value, onChange, styles, placeholder }: ITextInput) => {
  return (
    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
      <label
        htmlFor={name}
        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
      >
        {title}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
            {icon}
          </div>
        )}
        <Field
          type={type}
          id={name}
          name={name}
          required
          className={ styles + " w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
