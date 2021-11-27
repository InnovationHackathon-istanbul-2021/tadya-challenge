import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { INSERT_PRODUCER } from './graphql/mutation';
import { Insert_ProducerMutationVariables } from '../../generated/graphql';
import TextInput  from '../../components/ui/form/TextInput';
import SelectInput from '../../components/ui/form/SelectInput';
import Notification from '../../components/ui/Notification';

const Content = styled.div``;

export const CreateCategory = () => {
  const [notification, setNotification] = useState({
    title: '',
    message: '',
    type: ''
  });

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
      setNotification({
        title: 'Generated Successfully',
        message: 'New Category created successfully.',
        type: 'success',
      })
      resetForm();
      window.location.href = "/producers"
    })
    .catch((err: any) => {
      resetForm();
      setNotification({
        title: 'Generated Failed',
        message: 'New Category created failed.',
        type: 'error',
      })
      console.log(err);
    });
    setTimeout(() => {
      setNotification({
        title: '',
        message: '',
        type: '',
      })
    }, 3000);
  };

  return (
    <Content className="flex h-full mx-auto pt-8">
      {notification.title && (<Notification title={notification.title} message={notification.message} type={notification.type} />)}
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
                        Add New Category
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
                          <TextInput type="email" icon={'HiOutlineMail'} styles="pl-16" name="email" title="Email" placeholder="example@gmail.com" />
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
