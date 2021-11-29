import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { Icon } from '../../components/ui/icon/Icon';

export const AddToCartModal = ({modalData, cartModal, setCartModal}: any) => {
  return (
    <div
      className={`absolute inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center`}
    >
      <div className="absolute w-4/12 py-8 z-20">
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
              <img
                src={`${modalData.image}`}
                className="h-full w-full object-cover shadow"
                alt="a"
              />
              <p className="text-base sm:text-lg md:text-2xl font-bold md:leading-6 mt-6 text-gray-800 text-center dark:text-gray-100">
                {modalData.product.title}
              </p>
              <p className="text-s light-gray mx-1 mt-2">{modalData.product.quantity} {modalData.product.measure_unit}</p>
              <p className="text-xs sm:text-sm leading-5 mt-2 sm:mt-4 text-left text-gray-600 dark:text-gray-300">Get yourself ready for the whole new collection of premium and attractive products made just for you.</p>

              <div className="flex items-center justify-between py-4">
                <Rating
                  initialRating={4}
                  emptySymbol={<FaRegStar className="w-3 h-3 text-sm" />}
                  readonly
                  fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                    <FaStar className="w-3 h-3 text-sm" />
                  ))}
                />
                <h3 className="purple text-xl font-semibold">&#x20BA;{modalData.price}TL</h3>
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
    </div>
  );
};
