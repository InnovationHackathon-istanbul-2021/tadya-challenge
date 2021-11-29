import React, { useEffect } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Icon } from '../../components/ui/icon/Icon';
import styled from 'styled-components';
const ModalOverlay = styled.div``
export const AddToCartModal = ({modalData, cartModal, setCartModal}: any) => {
  useEffect((): any => {
    document.body.style.overflow = 'hidden';
    return ()=> document.body.style.overflow = 'unset';
 }, []);
  return (
    <ModalOverlay
      className={`absolute inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center`}
    >
      <div className="absolute w-8/12 py-8 z-20">
        <div
          role="alert"
          className="container mx-auto flex justify-center px-4"
        >
          <div className="relative text-left align-top w-11/12 sm:w-8/12 md:w-9/12 bg-white dark:bg-gray-800 shadow  pt-10 pb-8 rounded">
            <p className="text-xl font-semibold leading-5 px-8 text-gray-800 dark:text-gray-100 ">
              Product Details
            </p>
            <hr className="w-full border-gray-200 mt-4 mb-6" />
            <div className="flex flex-col px-4 md:px-12">
              <div className="container align-top mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-6 gap-10">
                <div className="flex items-top align-left">
                    <img
                    src={`${modalData.image}`}
                      className="h-full w-full object-cover shadow"
                      alt="a"
                    />

                </div>
                <div className="items-top align-left">
                  <div>
                  <Rating
                        initialRating={4}
                        emptySymbol={<FaRegStar className="w-3 h-3 text-sm" />}
                        readonly
                        fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                          <FaStar className="w-3 h-3 text-sm" />
                        ))}
                      />
                    <p className="text-base font-bold md:leading-6 mt-1 text-gray-800 text-left dark:text-gray-100">
                    {modalData.product.title}

                    </p>
                    <p className="text-s light-gray mt-2">
                    {modalData.product.quantity} {modalData.product.measure_unit}</p>
                    <p className="text-xs sm:text-sm leading-5 mt-2 sm:mt-4 text-left text-gray-600 dark:text-gray-300">
                      Get yourself ready for the.
                    </p>
                    <div className="flex items-center justify-between py-4">
                      <h3 className="purple text-xl font-semibold">
                        &#x20BA;{modalData.price}TL
                      </h3>
                    </div>

                    <div className="p-10 bg-gray-100">

                    <div className="flex items-left">
                      <div className="text-gray-500 dark:text-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-user"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx={12} cy={7} r={4} />
                          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        </svg>
                      </div>
                      <p className="text-base font-medium leading-4 pl-6 text-gray-800 dark:text-gray-400">
                      {modalData.product.producer.title}
                      </p>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="text-gray-500 dark:text-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-message-circle"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
                        </svg>
                      </div>
                      <p className="text-base font-medium leading-4 pl-6 text-gray-800 dark:text-gray-400">
                        heisenberg@gmail.com
                      </p>
                    </div>
                    <div className="flex items-start mt-6">
                      <div className="text-gray-500 dark:text-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-phone"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                      </div>
                      <div>
                        <div className="flex">
                          <p className="text-base font-medium leading-4 px-6 text-gray-800 dark:text-gray-400">
                            0900-78601
                          </p>

                        </div>

                      </div>
                    </div>
                    <div className="flex items-center mt-6">
                      <div className="text-gray-500 dark:text-gray-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-map-pin"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx={12} cy={11} r={3} />
                          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>
                      </div>
                      <p className="text-base font-medium leading-4 pl-6 text-gray-800 dark:text-gray-400">
                        Ankara
                      </p>
                    </div>

                    </div>
                  </div>

                </div>
              </div>


              <div className="flex items-center mt-4 sm:mt-6 w-full">
                <div className="bg-white border rounded border-gray-200  w-1/3">
                  <input
                    className="w-full focus:outline-none pl-4 py-3 text-sm leading-none text-gray-600  bg-transparent placeholder-gray-600 "
                    placeholder="QTY: e.g 1"
                  />
                </div>
                <button className="px-3 py-3 bg-blue-500 text-white  focus:outline-none hover:bg-opacity-80 ml-2 rounded w-2/3">
                  Add to Cart
                </button>
              </div>
            </div>
            <div onClick={() => setCartModal(!cartModal)} className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out">
              <Icon
                className="text-gray-500 hover:text-gray-700 w-5 h-5"
                icon={'HiX'}
              />
            </div>
          </div>
        </div>
      </div>
    </ModalOverlay>
  );
};
