import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import TextAreaInput from '../../components/ui/form/TextareaInput';
import { Form, Formik } from 'formik';

const Content = styled.div``;
export const GiveFeedback = () => {
  return (
    <Content className="absolute bg-gray-300 w-full h-full overflow-auto	 ">
      <div className="mx-auto flex-auto w-6/12">
        <div className="flex text-xl  justify-center font-semibold pb-8">
          <div className="flex items-center justify-center py-8 bg-gray-300 px-4">
            <div className="bg-white rounded-lg xl:w-10/12 md:w-11/12 w-full px-5 py-10 sm:py-10 sm:px-10">
              <div className="bg-white rounded pb-6 xl:px-24 px-4 flex items-center justify-center">
                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-900">
                  Tadya Customer Satisfaction Score
                </h1>
              </div>

              <div className="bg-gray-50 rounded py-6 xl:px-24 px-4 flex items-center justify-center">
                <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 items-center">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <p className="text-base text-white">1</p>
                    </div>
                    <p className="text-base leading-4 ml-6 md:ml-3 lg:ml-6  text-green-600">
                      Product
                    </p>
                  </div>
                  <div className="mx-8 sm:block hidden ">
                    <svg
                      width="47"
                      height="2"
                      viewBox="0 0 47 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1"
                        x2="47"
                        y2="1"
                        stroke="#059669"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center sm:mt-0 mt-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <p className="text-base text-white">2</p>
                    </div>
                    <p className="text-base leading-4 ml-6 md:ml-3 lg:ml-6 text-blue-500">
                      Producer
                    </p>
                  </div>
                  <div className="sm:mx-4  md:mx-8 sm:block hidden">
                    <svg
                      width="47"
                      height="2"
                      viewBox="0 0 47 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line
                        y1="1"
                        x2="47"
                        y2="1"
                        stroke="#9CA3AF"
                        stroke-width="2"
                        stroke-dasharray="5 5"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center md:mt-0 mt-4">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <p className="text-base text-gray-900">3</p>
                    </div>
                    <p className="text-base leading-4 ml-6 md:ml-3 lg:ml-6 text-gray-900">
                      Tadya
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-base leading-6 mt-4 text-gray-600">
                  <b> Thank you </b>
                  for taking the Customer Satisfaction Survey. The survey should
                  take less than five minutes of your time to complete. Thanks
                  again for your assistance with this. Please rate your
                  satisfaction level with each of the following statements.
                </p>
                <p>
                  <div className="grid sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 items-center">
                    <div className=" w-full mt-4 relative mb-5">
                      <Rating
                        initialRating={1}
                        emptySymbol={<FaRegStar className="w-5 h-5" />}
                        fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                          <FaStar className="w-5 h-5" />
                        ))}
                      />
                      <div className="text-sm font-light	">Terrible</div>
                    </div>
                    <div className=" w-full mt-4 relative mb-5">
                      <Rating
                        initialRating={2}
                        emptySymbol={<FaRegStar className="w-5 h-5" />}
                        fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                          <FaStar className="w-5 h-5" />
                        ))}
                      />
                      <div className="text-sm font-light	">Bad</div>
                    </div>
                    <div className=" w-full mt-4 relative mb-5">
                      <Rating
                        initialRating={3}
                        emptySymbol={<FaRegStar className="w-5 h-5" />}
                        fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                          <FaStar className="w-5 h-5" />
                        ))}
                      />
                      <div className="text-sm font-light	">Ok</div>
                    </div>
                    <div className=" w-full mt-4 relative mb-5">
                      <Rating
                        initialRating={4}
                        emptySymbol={<FaRegStar className="w-5 h-5" />}
                        fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                          <FaStar className="w-5 h-5" />
                        ))}
                      />
                      <div className="text-sm font-light	">Good</div>
                    </div>
                    <div className=" w-full mt-4 relative mb-5">
                      <Rating
                        initialRating={5}
                        emptySymbol={<FaRegStar className="w-5 h-5" />}
                        fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                          <FaStar className="w-5 h-5" />
                        ))}
                      />
                      <div className="text-sm font-light	">Great</div>
                    </div>
                  </div>
                </p>
              </div>
              <Formik
                initialValues={{}}
                enableReinitialize={true}
                onSubmit={async (values, { resetForm }) => {
                  console.log(values);
                }}
                render={({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  resetForm,
                }) => (
                  <Form>
                    <div className="w-full md:flex items-center justify-between mt-7">
                      <div className="md:w-3/5 w-full">
                        <label
                          className="text-base font-semibold leading-4 text-center text-gray-800"
                          id="breakfast"
                        >
                          How was the Product Quality By Producer?
                        </label>
                        <div className=" w-full mt-4 relative mb-5">
                          <Rating
                            initialRating={0}
                            emptySymbol={<FaRegStar className="w-5 h-5" />}
                            fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                              <FaStar className="w-5 h-5" />
                            ))}
                          />
                        </div>
                        <TextAreaInput
                          name="description"
                          title="Other Comments"
                          placeholder="Enter Comments/Note/Question"
                        />
                      </div>
                    </div>
                    <div className="w-full md:flex items-center justify-between">
                      <div className="md:w-3/5 w-full">
                        <label
                          className="text-base font-semibold leading-4 text-center text-gray-800"
                          id="breakfast"
                        >
                          How was the Packing Quality By Producer?
                        </label>
                        <div className=" w-full mt-4 relative mb-5">
                          <Rating
                            initialRating={0}
                            emptySymbol={<FaRegStar className="w-5 h-5" />}
                            fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                              <FaStar className="w-5 h-5" />
                            ))}
                          />
                        </div>
                        <TextAreaInput
                          name="description"
                          title="Other Comments"
                          placeholder="Enter Comments/Note/Question"
                        />
                      </div>
                    </div>
                    <div className="w-full md:flex items-center justify-between">
                      <div className="md:w-3/5 w-full">
                        <label
                          className="text-base font-semibold leading-4 text-center text-gray-800"
                          id="breakfast"
                        >
                          How was the Communication By Producers?
                        </label>
                        <div className=" w-full mt-4 relative mb-5">
                          <Rating
                            initialRating={0}
                            emptySymbol={<FaRegStar className="w-5 h-5" />}
                            fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                              <FaStar className="w-5 h-5" />
                            ))}
                          />
                        </div>
                        <TextAreaInput
                          name="description"
                          title="Other Comments"
                          placeholder="Enter Comments/Note/Question"
                        />
                      </div>
                    </div>
                    <div className="w-full md:flex items-center justify-between">
                      <div className="md:w-3/5 w-full">
                        <label
                          className="text-base font-semibold leading-4 text-center text-gray-800"
                          id="breakfast"
                        >
                          Other/Notes/Comments
                        </label>

                        <TextAreaInput
                          name="description"
                          title=""
                          placeholder="Enter Comments/Note/Question"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between space-x-2 flex-row mt-12">
                      <button className="text-base font-medium leading-4 py-3.5 px-6 bg-blue-500 rounded  text-center text-white hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none w-2/3 sm:w-auto">
                        Continue
                      </button>
                    </div>
                  </Form>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
