import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useList_All_ProductsQuery } from '../../generated/graphql';
import { searchImages } from 'pixabay-api';
import { ProducerModal } from './producerModal';
import { AddToCartModal } from './addToCartModal';

const Content = styled.div``;
export const PublicPage = () => {
  const [products, setProductList] = useState([] as any[]);
  const [randomPics, setRandomPic] = useState([] as any[]);
  const [showProducerInfo, setShowProducerInfo] = useState(false);
  const [cartModal, setCartModal] = useState(false);
  const [modalData, setModalData] = useState<any>(null);
  const { data, loading, error } = useList_All_ProductsQuery();

  useEffect(() => {
    if (data) {
      setProductList(data.products);
      searchImages('24555346-4772f27513bbc7064b64bf8b9', 'dairy', {
        per_page: 50,
      }).then((r) => setRandomPic(r.hits));
    }
  }, [data]);

  return (
    <Content className="container mx-auto w-full h-full ">
      <div className="bg-white rounded py-6 xl:px-24 px-4 flex items-center justify-center">
        <div>
          <div className="mx-auto container">
            {/* Hero */}
            <div className="flex w-full flex-col items-center justif-center pt-16 lg:px-0 px-4">
              <h1 className="lg:text-6xl text-3xl dark-blue font-bold text-center">
                What are you looking for?
              </h1>
              <h2 className="lg:text-2xl text-lg light-gray pt-6 text-centerlg:mb-0 mb-4">
                Tahtacıörencik Doğal Yaşam Kolektifi
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Formik
          initialValues={{
            producer_id: 'None',
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
            setFieldValue,
          }) => (
            <Form className="flex items-start justify-between w-full">
              <div className="flex flex-col justify-between overflow-hidden lg:flex-row w-full items-start  rounded bg-white">
                <div className="w-full lg:w-1/6 mr-5">
                  <div>
                    <h4 className="font-semibold leading-6 mt-8 text-gray-900">
                      Filters
                    </h4>
                    <div className="mt-12">
                      <h4 className="border-b border-gray-200 pb-2 text-xl font-semibold  leading-6 mt-8 text-gray-900">
                        Producer
                      </h4>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">
                            Rahime Çevik
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">
                            Akyüz Ailesi
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">
                            Minaz Ailesi
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">
                            Araç Ailesi
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-12">
                      <h4 className="border-b border-gray-200 pb-2 text-xl font-semibold  leading-6 mt-8 text-gray-900">
                        Categories
                      </h4>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">Dry</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">Cooking</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">Food</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="py-2 flex items-center">
                          <div className="bg-white border rounded-sm border-gray-400 w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                            <Field
                              type="checkbox"
                              id={`product_id`}
                              name={`product_id`}
                              className="checkbox border-0 outline-0 absolute cursor-pointer w-full h-full"
                            />
                          </div>
                          <p className="text-sm leading-none ml-2">All</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-5/6 ">
                  <h2 className="text-xl font-semibold leading-6 mt-8 text-gray-900 mb-5">
                    Produts
                  </h2>
                  <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0">
                    {products &&
                      products.map((product, index) => (
                        <div className="bg-white  rounded py-5 flex items-start">
                          <div className="shadow">
                            <div className="w-72 lg:mb-0 mb-8">
                              <div>
                                {randomPics.length > 0 && (
                                  <img
                                    src={`${randomPics[index].previewURL}`}
                                    className="w-full h-44"
                                    alt="a"
                                  />
                                )}
                              </div>
                              <div className="bg-white">
                                <div className="p-4">
                                  <div className="flex items-center">
                                    <p
                                     onClick={() => {
                                      setShowProducerInfo(!showProducerInfo);
                                      setModalData({ ...product, product, image: randomPics[index].previewURL})
                                    }}
                                    className="text-xs light-gray mt-2 cursor cursor-pointer">
                                      {product.producer.title}
                                    </p>
                                    <span className="px-2 bg-dot-color">•</span>
                                    <p className="text-xs light-gray"> </p>
                                  </div>
                                  <h2 className="text-lg font-semibold dark-gray">
                                    {product.title}
                                  </h2>
                                  <p className="text-xs light-gray mt-2">
                                    {product.quantity} {product.measure_unit}
                                  </p>
                                  <div className="flex items-center justify-between py-4">
                                    <Rating
                                      initialRating={Math.floor(
                                        Math.random() * 10
                                      )}
                                      emptySymbol={
                                        <FaRegStar className="w-3 h-3 text-sm" />
                                      }
                                      readonly
                                      fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                                        <FaStar className="w-3 h-3 text-sm" />
                                      ))}
                                    />
                                    <h3 className="purple text-xl font-semibold">
                                      &#x20BA;{product.price}TL
                                    </h3>
                                  </div>

                                  <div className="flex items-center">
                                    <button
onClick={() => {
  setCartModal(!cartModal);
  setModalData({ ...product, product, image: randomPics[index].previewURL})
}}
                                    className="mx-auto py-3 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs">
                                      Add to Cart
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
      {showProducerInfo?<ProducerModal modalData={modalData} showProducerInfo={showProducerInfo} setShowProducerInfo={setShowProducerInfo} />: ''}
      {cartModal && <AddToCartModal  modalData={modalData} cartModal={cartModal} setCartModal={setCartModal}/>}

    </Content>
  );
};
