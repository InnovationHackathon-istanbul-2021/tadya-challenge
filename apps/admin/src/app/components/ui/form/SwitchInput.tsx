import React from 'react';

interface ISwitchInput {
  title: string,
  name: string,
  toggleClass?: string,
  toggle?: boolean,
  setToggle?: any,
}

const SwitchInput = ({ title, name,  toggle, setToggle, toggleClass }: ISwitchInput) => {
  return (
    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
      <label
        htmlFor={name}
        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
      >
        {title}
      </label>

      <div
        className={`md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-100 rounded-full p-1 cursor-pointer
          ${(toggle ? 'bg-green-100' : null)}
        `}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {/* Switch */}
        <div
          className={
            ` md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out
            ${(toggle ? 'bg-green-500' : 'bg-white')}
            ` +
            (!toggle ? null : toggleClass)
          }
        ></div>
      </div>
    </div>
  );
};

export default SwitchInput;
