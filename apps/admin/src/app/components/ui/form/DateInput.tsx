import styled from 'styled-components';
import React from 'react';
import DatePicker from 'react-datepicker';

const Content = styled.div``;

interface IDateInput {
  title: string,
  name: string,
  selectDate: any,
  endDate: any,
  startDate: any,
  setDate: any,
}

const DateInput = ({ selectDate, endDate, title, name, startDate, setDate }: IDateInput) => {
  return (
    <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6 relative w-40">
      <label
        htmlFor={name}
        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
      >
        {title}
      </label>
      <div className="relative">
        <DatePicker
          selected={selectDate}
          className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-500  text-gray-800 dark:text-gray-100 rounded"
          onChange={(date:any) => setDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          nextMonthButtonLabel=">"
          previousMonthButtonLabel="<"
          popperClassName="react-datepicker-right"
        />
      </div>
    </div>
  );
};

export default DateInput;
