import styled from 'styled-components';
import React from 'react';
import { Field } from 'formik';
import { Icon } from '../icon/Icon';

const Content = styled.div``;

interface ISelectInput {
  title?: string,
  name?: string,
  placeholder?: string,
  value?: string,
  styles?: string,
  onChange?: unknown,
  options: any,
}

const SelectInput = ({ options, title, name, value, onChange, styles, placeholder }: ISelectInput) => {
  return (
    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
      <label
        htmlFor={name}
        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
      >
        {title}
      </label>
      <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
        <Field
          as="select"
          name={{name}}
          required
          id={{name}}
          placeholder={placeholder}
          className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-700  text-gray-800 dark:text-gray-100 rounded"
        >
          {options.length > 0 &&  options.map((opt: any) =>
            <option key={opt.id} value={opt.id}>{opt.title}</option>
          )}
        </Field>
        <div
          className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
        >
          <Icon className="text-gray-500 w-5 h-5" icon={'HiOutlineSelector'} />
        </div>
      </div>
    </div>
  );
};

export default SelectInput;
