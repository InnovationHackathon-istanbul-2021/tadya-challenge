import React from 'react';
import { Field } from 'formik';

interface ITextAreaInput {
  title: string,
  name: string,
  placeholder?: string,
  value?: string,
  styles?: string,
  onChange?: unknown,
}

const TextAreaInput = ({ title, name, value, onChange, styles, placeholder }: ITextAreaInput) => {
  return (
    <div className="flex flex-col mb-6">
      <label
        htmlFor={name}
        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
      >
        {title}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaInput;
