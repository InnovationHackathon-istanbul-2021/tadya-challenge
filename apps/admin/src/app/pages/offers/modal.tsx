import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import SelectInput from '../../components/ui/form/SelectInput';
import { Icon } from '../../components/ui/icon/Icon';
import {
  useListProducersQuery,
  useListProductsByProducerLazyQuery,
} from '../../generated/graphql';
import { ProductList } from './product_list';

interface IModal {
  showModal: boolean,
  setShowModal: any,
}

export const ModalExample = ({ showModal, setShowModal }: IModal) => {
  const [producerList, setProducerList] = useState([] as any[]);
  const [productsList, setProductsList] = useState([] as any[]);

  const [loadProducts, { data: productList }] =
    useListProductsByProducerLazyQuery();

  const { data: producersData } = useListProducersQuery({
    variables: {
      offset: 0, // value for 'offset'
      limit: 100, // value for 'limit'
    },
  });
  console.log(productList);
  useEffect(() => {
    if (producersData) {
      setProducerList(producersData.producers);
    }
  }, [producersData]);
  useEffect(() => {
    if (productList) {
      setProductsList(productList.products);
    }
  }, [productList]);
  const handleLoadProducts = (producerId: string) => {
    loadProducts({
      variables: {
        producer_id: parseInt(producerId),
        limit: 100,
        offset: 0,
      },
    });
  };
  return (
    <div
      className={`absolute inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center`}
    >
      <div className="absolute w-6/12 py-8 z-20">
        <div
          role="alert"
          className="container mx-auto flex justify-center px-4"
        >
          <div className=" relative bg-white dark:bg-gray-800 w-full shadow rounded-md">
            <div className="sm:flex  items-stretch">
              <div className="w-full">
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
                      <div className="px-6 w-full pt-8">
                        <p className="text-2xl font-bold leading-5 text-gray-800 dark:text-gray-100">
                          Select Products to Offer
                        </p>
                        <br />
                        <div className="xl:flex lg:flex md:flex flex-wrap">
                          <SelectInput name="producer_id" title="Producer / Family" options={producerList} />
                          <div className="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col ml-5 mb-6">
                            <label
                              htmlFor="producer_id"
                              className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                            >
                              Producer / Family
                            </label>
                            <button
                              onClick={() =>
                                handleLoadProducts(values.producer_id)
                              }
                              className="bg-blue-500 w-6/12 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white pl-3 py-3  text-sm focus:outline-none"
                            >
                              Load Products
                            </button>
                          </div>
                        </div>

                        <ProductList products={productsList} />
                      </div>
                      <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
                        <button
                          onClick={() => {resetForm(); setShowModal(!showModal)}}
                          className="btn text-sm focus:outline-none text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-500 py-2 px-6 mr-4 rounded hover:bg-gray-200 transition duration-150 ease-in-out"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => console.log(values)}
                          className="bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                          type="submit"
                        >
                          Save
                        </button>
                      </div>
                    </Form>
                  )}
                />
              </div>
            </div>
            <div onClick={() => setShowModal(!showModal)} className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out">
              <Icon className="text-gray-500 hover:text-gray-700 w-5 h-5" icon={'HiX'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
