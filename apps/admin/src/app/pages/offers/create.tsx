import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import _ from 'lodash';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { ModalExample } from './modal';
import TextInput from '../../components/ui/form/TextInput';
import SelectInput from '../../components/ui/form/SelectInput';
import TextAreaInput from '../../components/ui/form/TextareaInput';
import DateInput from '../../components/ui/form/DateInput';
import Notification from '../../components/ui/Notification';
import { useInsertOfferMutation } from '../../generated/graphql';

const Content = styled.div``;

export const CreateOffers = () => {
  const [showModal, setShowModal] = useState(false);
  const [notification, setNotification] = useState({
    title: '',
    message: '',
    type: ''
  });
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setDate(startDate.getDate() + 7) as unknown as Date
  );
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (startDate > endDate) setStartDate(endDate);
  }, [endDate]);

  useEffect(() => {
    if (startDate > endDate) setEndDate(startDate);
  }, [startDate]);
  const [insertOfferMutation, { data, loading, error }] = useInsertOfferMutation();
  const handleQuery = (values: any, resetForm: any) => {
    console.log(values);
    insertOfferMutation({
      variables: {
        object: {
          start_date: values.start_date,
          end_date: values.end_date,
          producer_id: product?.producer_id,
          is_active: true,
          offer_products: {
            data: {
              id: product?.product_id,
              price: product?.price,
              quantity: product?.stock,
              is_active: true,
            }
          }
        }
      }
    }).
    then((res: any) => {
      alert('Generated Successfully');
      setNotification({
        title: 'Generated Successfully',
        message: 'New Offer created successfully.',
        type: 'success',
      })
      resetForm();
      window.location.href = '/products';
    })
    .catch((err: any) => {
      resetForm();
      setNotification({
        title: 'Generated Failed',
        message: 'New Offer created failed.',
        type: 'error',
      })
      console.log(err);
    });
  };
  const handleSelectProduct = ({ producer_id, ...data }: any) => {
    const selectProducts: any[] = [];

    Object.entries(data).forEach(([key, row]: any) => {
      if (row.price > 0) {
        console.log(key, row, "splitKey")
        const splitKey = key.split('-');

        selectProducts.push({
          ...row,
          producer_id: splitKey[0],
          product_id: splitKey[1],
        });
      }
    });
    setProduct(selectProducts);
    console.log(selectProducts, "selectProducts")
  };

  return (
    <Content className="flex pt-8">
      {notification.title && (<Notification title={notification.title} message={notification.message} type={notification.type} />)}
      <Formik
        initialValues={{
          title: '',
          category_id: 'None',
          description: '',
        }}
        enableReinitialize={true}
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
                    <TextInput type="text" name="title" title="Offer Title" placeholder="Enter Offer Title" />
                    <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                      <DateInput name="start_date" title="Start Date" startDate={startDate} endDate={endDate} setDate={setStartDate} selectDate={startDate} />
                      <DateInput name="end_date" title="End Date" startDate={startDate} endDate={endDate} setDate={setEndDate} selectDate={endDate} />
                      <SelectInput name="category_id" title="Category" options={[]} />
                    </div>
                    <TextAreaInput name="description" title="Description" placeholder="Enter Description" />
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
                  onClick={() => handleSubmit()}
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
      {showModal ? (
        <ModalExample
          handleSelectProduct={handleSelectProduct}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        ''
      )}
    </Content>
  );
};
