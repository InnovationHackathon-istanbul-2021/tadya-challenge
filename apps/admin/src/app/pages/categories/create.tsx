import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useInsertCategoryMutation } from '../../generated/graphql';
import TextInput  from '../../components/ui/form/TextInput';
import Notification from '../../components/ui/Notification';

const Content = styled.div``;

export const CreateCategory = () => {
  const [notification, setNotification] = useState({
    title: '',
    message: '',
    type: ''
  });


  const [insertCategoryMutation, { data, loading, error }] = useInsertCategoryMutation();

  const handleQuery = (values: any, resetForm: any)=> {
    insertCategoryMutation({
      variables: {
        object: {
          name: values.name,
          category_type: 'Product',
          is_active: true,
        }
      }
    }) .then((res: any) => {
      setNotification({
        title: 'Generated Successfully',
        message: 'New Category created successfully.',
        type: 'success',
      })
      resetForm();
      window.location.href = "/categories"
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
    <Content className="flex w-full h-full mx-auto pt-8">
      {notification.title && (<Notification title={notification.title} message={notification.message} type={notification.type} />)}
      <div className="w-full">
        <div>
          <Formik
            initialValues={{
              name: '',
              category_type: ''
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
                        <TextInput type="text" name="name" title="Category Name" placeholder="Enter Category Name" />
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
