import { Field, Form, Formik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { INSERT_PRODUCER } from './graphql/mutation';
import { Insert_ProducerMutationVariables } from '../../generated/graphql';
import TextInput  from '../../components/ui/form/TextInput';
import SelectInput from '../../components/ui/form/SelectInput';

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

  const emailIcon = (
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
  )
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
                        <TextInput type="text" name="title" title="Producer Title" placeholder="Enter Store Title" />
                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                          <TextInput type="text" name="first_name" title="First Name" placeholder="Enter First Name" />
                          <TextInput type="text" name="last_name" title="Last Name" placeholder="Enter Last Name" />
                          <TextInput type="email" icon={emailIcon} styles="pl-16" name="email" title="Email" placeholder="example@gmail.com" />
                          <SelectInput
                            name="city"
                            title="City"
                            placeholder=""
                            options={[
                              {id: 'Istanbul', title: 'Istanbul'},
                              {id: 'Ankara', title: 'Ankara'},
                              {id: 'Bursa', title: 'Bursa'},
                            ]}
                          />
                          <TextInput type="text" name="username" title="Username" placeholder="Enter Username" />
                          <TextInput type="password" name="password" title="Password" placeholder="Enter Password" />
                          <TextInput type="text" name="phone_number" title="Phone Number" placeholder="Enter Phone Number" />
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
