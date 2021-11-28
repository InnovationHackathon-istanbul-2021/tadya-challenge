import React, { useState } from "react";
import { Icon } from './icon/Icon';

const Notification = ({title, type, message}: any) => {
  const [flag, setFlag] = useState(true);
  return (
    <div className={flag ? "xl:w-4/12 fixed mx-auto sm:mx-0 sm:w-6/12 md:w-6/12 w-10/12 bg-white shadow-lg rounded flex pr-4 left-0 sm:left-auto right-0 sm:top-0 sm:mr-6 mt-16 sm:mt-6 mb-6 dark:bg-gray-800 sm:mb-0 transition duration-150 ease-in-out translate-show" : "translate-hide"}>
      <div role="alert" aria-label="Close" className="cursor-pointer absolute right-0 mr-2 mt-2 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-500 transition duration-150 ease-in-out" onClick={() => setFlag(false)}>
        <Icon className="text-gray-500 w-5 h-5" icon={'HiX'} />
      </div>
      <div className="px-5 border-r border-gray-300 dark:border-gray-700 flex items-center justify-center text-green-400">
        {type === 'success' ? (
          <Icon className="text-green-400 w-8 h-8" icon={'HiOutlineCheckCircle'} />
        ):(
          <Icon className="text-red-400 w-8 h-8" icon={'HiOutlineXCircle'} />
        )}
      </div>
      <div className="flex flex-col justify-center pl-4 py-4">
        <p className="text-sm text-gray-800 dark:text-gray-100 font-semibold">{title}</p>
        <p className="text-xs text-gray-600 dark:text-gray-400 font-normal">{message}</p>
      </div>
      <style>
        {`
          .translate-show{
              transform : translateX(0%);
          }
          .translate-hide{
              transform : translateX(150%);
          }
        `}
      </style>{" "}
    </div>
  );
};

export default Notification;
