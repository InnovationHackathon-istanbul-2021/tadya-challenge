import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { useInsertProductMutation, useListProducersQuery } from '../../generated/graphql';
import TextInput from '../../components/ui/form/TextInput';
import SelectInput from '../../components/ui/form/SelectInput';
import SwitchInput from '../../components/ui/form/SwitchInput';
import TextAreaInput from '../../components/ui/form/TextareaInput';
import Notification from '../../components/ui/Notification';

const Content = styled.div``;

export const CreateProduct = () => {
  const [notification, setNotification] = useState({
    title: '',
    message: '',
    type: ''
  });
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
      setNotification({
        title: 'Generated Successfully',
        message: 'New Product created successfully.',
        type: 'success',
      })
      resetForm();
      window.location.href = "/products"
    })
    .catch((err: any) => {
      resetForm();
      setNotification({
        title: 'Generated Failed',
        message: 'New Product created failed.',
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
      {notification.title && (<Notification title={notification.title} message={notification.message} type={notification.type} />)}
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
                        <TextInput type="text" name="title" title="Product Title" placeholder="Enter Product Title" />
                        <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                          <SelectInput name="producer_id" title="Producer / Family" options={producerList} />
                          <SelectInput name="category_id" title="Category" options={[]} />
                          <TextInput type="text" name="sku" title="Sku" placeholder="Enter Sku" />
                          <TextInput type="number" name="price" title="Price" placeholder="Enter Price" />
                          <SwitchInput title="Quote On Call" name="quote_on_call" toggle={toggle} toggleClass={toggleClass} setToggle={setToggle} />
                          <TextInput type="text" name="quantity" title="Quantity" placeholder="Enter Quantity" />
                          <SelectInput
                            name="measure_unit"
                            title="Measuring Unit"
                            options={[
                              {id: 'KG', title: 'KG'},
                              {id: 'ADET', title: 'ADET'},
                              {id: 'GR', title: 'GR'},
                              {id: 'ML', title: 'ML'},
                              {id: 'LT', title: 'LT'},
                            ]}
                          />
                          <TextInput type="text" name="thumbnail" title="Image Url" placeholder="Enter Image Url" />
                          <TextInput type="text" name="packing_type" title="Packing Type" placeholder="Enter Packing Type" />
                        </div>
                        <TextAreaInput name="description" title="Description" placeholder="Enter Description" />
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
        </div>
      </div>
    </Content>
  );
};
