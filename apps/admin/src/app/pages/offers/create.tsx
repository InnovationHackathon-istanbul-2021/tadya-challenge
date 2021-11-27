import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import {
  useInsertProductMutation,
  useListProducersQuery,
} from '../../generated/graphql';
import { ModalExample } from './modal';

const Content = styled.div``;

export const CreateOffers = () => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setDate(startDate.getDate() + 7) as unknown as Date
  );

  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate);
  }, [endDate]);

  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate);
  }, [startDate]);
  const handleQuery = (values: any, resetForm: any) => {
    console.log(values);

    // .then((res: any) => {
    //   alert('Generated Successfully');
    //   resetForm();
    //   window.location.href = '/products';
    // })
    // .catch((err: any) => {
    //   resetForm();
    //   console.log(err);
    // });
  };

  const toggleClass = ' transform translate-x-5';

  return (
    <Content className="flex pt-8">
      <Formik
        initialValues={{
          title: '',
          sku: '',
          producer_id: 'None',
          price: '',
          measure_unit: '',
          quantity: '',
          description: '',
          thumbnail: '',
          category_id: '',
          packing_type: '',
        }}
        onSubmit={async (values, { resetForm }) => {
          handleQuery(values, resetForm);
        }}
        render={({ values, errors, touched, handleSubmit, resetForm }) => (
          <Form className="container w-6/12 bg-white shadow rounded">
            <div>
              <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                <div className="flex items-center w-11/12 mx-auto">
                  <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Add New Offer
                  </p>
                </div>
              </div>
              <div className="w-11/12 mx-auto">
                <div className="container mx-auto">
                  <div className="my-8 mx-auto xl:w-full xl:mx-0">
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="title"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Offer Title
                      </label>
                      <Field
                        type="text"
                        id="title"
                        name="title"
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"
                      />
                    </div>
                    <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                      <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6 ">
                        <label
                          htmlFor="sku"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Start Date
                        </label>
                        <div className="relative">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: any) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="react-datepicker-left"
                    />
                </div>
                      </div>
                      <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6 relative w-40">
                        <label
                          htmlFor="price"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          End Date
                        </label>
                        <div className="relative">
                    <DatePicker
                        selected={endDate}
                        className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-500  text-gray-800 dark:text-gray-100 rounded"
                        onChange={(date:any) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        nextMonthButtonLabel=">"
                        previousMonthButtonLabel="<"
                        popperClassName="react-datepicker-right"
                    />
                </div>
                      </div>
                      <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                        <label
                          htmlFor="category_id"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Category
                        </label>
                        <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                          <Field
                            as="select"
                            name="category_id"
                            id="category_id"
                            placeholder=""
                            className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-500  text-gray-800 dark:text-gray-100 rounded"
                          >
                            <option value="None">None</option>
                          </Field>
                          <div
                            className="px-4 flex items-center border-l border-gray-300 dark:border-gray-700 flex-col justify-center text-gray-500
                                      dark:text-gray-400 absolute right-0 bottom-0 top-0 mx-auto z-20 pointer-events-none "
                          >
                            <svg
                              tabIndex={0}
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-up"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 15 12 9 18 15" />
                            </svg>
                            <svg
                              tabIndex={0}
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-chevron-down"
                              width={16}
                              height={16}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col mb-6">
                      <label
                        htmlFor="description"
                        className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                      >
                        Description
                      </label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"
                      />
                    </div>
                    <div className="flex flex-col mb-6">
                      <button
                onClick={() => setShowModal(true)}
                  className="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                  type="button"
                >
                  Add Products
                </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
                <button
                  onClick={() => resetForm()}
                  className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
                <button
                  //onClick={() => handleSubmit()}
                  className="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </Form>
        )}
      />
            {showModal? <ModalExample/>: ''}

    </Content>
  );
};
