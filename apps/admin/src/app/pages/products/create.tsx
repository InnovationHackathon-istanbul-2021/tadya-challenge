import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import { useInsertProductMutation, useListProducersQuery } from '../../generated/graphql';
import { useMutation } from '@apollo/client';
import { CREATE_PRODUCT } from './graphql/mutation';

const Content = styled.div``;

export const CreateProduct = () => {
  const [toggle, setToggle] = useState(false);
  const [producerList, setProducerList] = useState([] as any[]);

   const [insertProductMutation, { data, loading, error }] = useInsertProductMutation();
  const handleQuery = (values: any, resetForm: any) => {

    insertProductMutation({
      variables:{
        payload:{
          title: values.title,
          alias: values.title.toString().toLowerCase().replace(/ /g, '-'),
          sku: values.sku,
          price: values.price,
          measure_unit: values.measure_unit,
          quantity: values.quantity,
          description: values.description,
          thumbnail: values.thumbnail,
          producer_id: values.producer_id,
          packing_type: values.packing_type,
          quote_on_call: toggle

        }
      }

    }).then((res: any) => {
      alert('Generated Successfully');
      resetForm();
      window.location.href = "/products"
    })
    .catch((err: any) => {
      resetForm();
      console.log(err);
    })
  };
  console.log({ data, loading, error })
  const toggleClass = ' transform translate-x-5';
  const { data: producersData } = useListProducersQuery({
    variables: {
      offset:0, // value for 'offset'
      limit: 100, // value for 'limit'
    },
  });
  useEffect(() => {
    if (producersData) {
      setProducerList(producersData.producers);
    }
  }, [producersData]);
  return (
    <Content className="flex h-full mx-auto pt-8">
      <div>
        <div>
          <Formik
            initialValues={{
              title: '',
              sku: "",
              producer_id: '3',
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
              <Form className="container mx-auto bg-white shadow rounded">
                <div>
                  <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                    <div className="flex items-center w-11/12 mx-auto">
                      <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                        Add New Product
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
                            Product Title
                          </label>
                          <Field
                            type="text"
                            id="title"
                            name="title"
                            className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"

                          />
                        </div>
                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="producer_id"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Producer / Family
                            </label>
                            <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                              <Field
                                as="select"
                                name="producer_id"
                                id="producer_id"
                                placeholder=""
                                className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-700  text-gray-800 dark:text-gray-100 rounded"
                              >
                                {producerList.map((producer) => <option key={producer.id} value={producer.id}>{producer.title}</option>)}
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
                                className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-700  text-gray-800 dark:text-gray-100 rounded"
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

                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="sku"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Sku
                            </label>
                            <Field
                              type="text"
                              name="sku"

                              id="sku"

                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="price"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Price
                            </label>
                            <Field
                              type="text"
                              id="price"
                              name="price"

                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="quote_on_call"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Quote On Call
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

                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="quantity"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Quantity
                            </label>
                            <Field
                              type="text"
                              id="quantity"
                              name="quantity"

                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="measure_unit"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Measuring Unit
                            </label>
                            <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                              <Field
                                as="select"
                                name="measure_unit"
                                id="measure_unit"

                                className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-700  text-gray-800 dark:text-gray-100 rounded"
                              >
                                <option value="KG">KG</option>
                                <option value="ADET">ADET</option>
                                <option value="GR">GR</option>
                                <option value="ML">ML</option>
                                <option value="LT">LT</option>
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
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="thumbnail"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Image Url
                            </label>
                            <Field
                              type="text"
                              id="thumbnail"
                              name="thumbnail"
                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"

                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="packing_type"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Packing Type
                            </label>
                            <Field
                              type="text"
                              id="packing_type"
                              name="packing_type"
                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"

                            />
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
                      className="bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    </Content>
  );
};
