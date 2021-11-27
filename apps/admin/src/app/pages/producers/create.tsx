import { Field, Form, Formik } from 'formik';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { INSERT_PRODUCER } from './graphql/mutation';
import { Insert_ProducerMutationVariables } from '../../generated/graphql';

const Content = styled.div``;

export const CreateProducer = () => {
  const [createNewProducer] = useMutation(
    INSERT_PRODUCER,
  );
  const handleQuery = (values: any, resetForm: any)=> {
    createNewProducer({
      variables:{
        payload: {
          title: values.title,
          is_active: true,
          create_offer: true,
          alias : values.title.toString().toLowerCase().replace(/ /g, '-'),
          user: {
            data: {
              first_name: values.first_name,
              last_name: values.last_name,
              email: values.email,
              city: values.city,
              phone_number: values.phone_number,
              username: values.username,
              is_active: true,
              password: values.password,
              alias : `${values.first_name.toLowerCase()}-${values.last_name.toLowerCase()}`
            }
          }
        }
      } as Insert_ProducerMutationVariables
    }) .then((res: any) => {
      alert('Generated Successfully');
      resetForm();
      window.location.href = "/producers"
    })
    .catch((err: any) => {
      resetForm();
      console.log(err);
    });
  };
  return (
    <Content className="flex h-full mx-auto pt-8">

      <div>
        <div>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              city: "Ankara",
              username: "",
              password: "",
              title: "",
              phone_number: ""
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
                        Add New Producer
                      </p>
                    </div>
                  </div>
                  <div className="w-11/12 mx-auto">
                    <div className="container mx-auto">
                      <div className="my-8 mx-auto xl:w-full xl:mx-0">
                      <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                          <label
                            htmlFor="title"
                            className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                          >
                            Producer Title
                          </label>
                          <Field
                            type="text"
                            id="title"
                            name="title"
                            required
                            className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"
                            placeholder="Enter Store Title"
                          />
                        </div>
                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="first_name"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              First Name
                            </label>
                            <Field
                              type="text"
                              name="first_name"
                              required
                              id="first_name"

                              placeholder="Enter First Name"
                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="last_name"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Last Name
                            </label>
                            <Field
                              type="text"
                              id="last_name"
                              name="last_name"
                              placeholder="Enter Last Name"
                              required
                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="email2"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Email
                            </label>
                            <div className="relative">
                              <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="icon icon-tabler icon-tabler-mail"
                                  width={20}
                                  height={20}
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  fill="none"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <rect
                                    x={3}
                                    y={5}
                                    width={18}
                                    height={14}
                                    rx={2}
                                  />
                                  <polyline points="3 7 12 13 21 7" />
                                </svg>
                              </div>
                              <Field
                                id="email2"
                                name="email"
                                required
                                className="w-full border-gray-300  bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-blue-700 font-normal py-3 flex items-center pl-16 text-sm rounded border shadow"
                                placeholder="example@gmail.com"
                              />
                            </div>
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="City"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              City
                            </label>
                            <div className="border border-gray-300 dark:border-gray-700 shadow-sm rounded flex relative">
                              <Field
                                as="select"
                                name="city"
                                required
                                id="City"
                                placeholder=""
                                className="bg-white dark:bg-gray-800 appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-blue-700  text-gray-800 dark:text-gray-100 rounded"
                              >
                                <option value="Istanbul">Istanbul</option>
                                <option value="Ankara">Ankara</option>
                                <option value="Bursa">Bursa</option>
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
                              htmlFor="Username"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Username
                            </label>
                            <Field
                              type="text"
                              id="Username"
                              name="username"
                              required
                              placeholder="Enter Username"
                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="Password"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Password
                            </label>
                            <Field
                              type="text"
                              id="Password"
                              name="password"
                              required
                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                              placeholder="Enter Password"
                            />
                          </div>
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                            <label
                              htmlFor="phone_number"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Phone Number
                            </label>
                            <Field
                              type="text"
                              id="phone_number"
                              name="phone_number"
                              required
                              className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-blue-700 text-gray-800 dark:text-gray-100"
                              placeholder="Enter Phone Number"
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
                    <button
                      onClick={() => resetForm()}
                    className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out">
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
