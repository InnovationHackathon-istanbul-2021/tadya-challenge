import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar, FaPhoneAlt } from 'react-icons/fa';
import { Icon } from '../../components/ui/icon/Icon';
import { searchImages } from 'pixabay-api';

export const ProducerModal = () => {
  const [randomPics, setRandomPic] = useState([] as any[]);

  useEffect(() => {
    console.log("1 time")
    searchImages('24555346-4772f27513bbc7064b64bf8b9', 'turkey farmer', {
      per_page: 3,
    }).then((r) => setRandomPic(r.hits));
  },[])
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
            <div className="bg-white dark:bg-gray-800 shadow rounded xl:flex lg:flex w-full">
              <div className="xl:w-2/5 lg:w-2/5 bg-gray-100 dark:bg-gray-800 py-8 border-gray-300 dark:border-gray-200 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full mb-3">
                    {randomPics.length > 0 && (
                      <img
                        src={`${randomPics[0].previewURL}`}
                        className="h-full w-full object-cover rounded-full shadow"
                        alt="a"
                      />
                    )}
                  </div>
                  <p className="mb-2 text-lg font-bold text-gray-900 dark:text-gray-100">
                  Minaz Ailesi
                  </p>
                  <p className="mb-1 text-sm text-gray-700 items-center align-center ">
                    <Rating
                      initialRating={4}
                      readonly
                      emptySymbol={<FaRegStar className="w-3 h-3 text-sm" />}
                      fullSymbol={[1, 2, 3, 4, 5].map((n) => (
                        <FaStar className="w-3 h-3 text-sm" />
                      ))}
                    />
                    <br />
                  </p>
                  <p className="flex gap-2 mb-6 text-sm text-gray-700 items-center align-center ">
                    <FaPhoneAlt className="w-3 h-3 text-sm mr-0" />{' '}
                    +905521111122
                  </p>
                  <button className="bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 dark:border-gray-200 focus:outline-none">
                    Send Message
                  </button>
                </div>
              </div>
              <div className="xl:w-3/5 lg:w-3/5 px-6 py-8">
                <div className="flex flex-wrap justify-between">
                  <div className="flex mx-auto w-4/5 justify-between mb-8">
                    <div className="flex flex-col items-center w-4/12">
                      <p className="text-gray-600 dark:text-gray-400 text-2xl">
                        82
                      </p>
                      <p className="text-gray-800 dark:text-gray-100 text-sm">
                        Reviews
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-4/12 border-r border-l border-gray-200">
                      <p className="text-gray-600 dark:text-gray-400 text-2xl">
                        58
                      </p>
                      <p className="text-gray-800 dark:text-gray-100 text-sm">
                        Produts
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-4/12">
                      <p className="text-gray-600 dark:text-gray-400 text-2xl">
                        142
                      </p>
                      <p className="text-gray-800 dark:text-gray-100 text-sm">
                        Sales
                      </p>
                    </div>
                  </div>
                  <div className="w-2/5 mb-8">
                    <div className="border-b pb-3">
                      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                        Member Since
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        29 Jan, 2010
                      </p>
                    </div>
                  </div>
                  <div className="w-2/5 mb-8">
                    <div className="border-b pb-3">
                      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                        Email
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        sample@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="w-2/5 mb-8">
                    <div className="border-b pb-3">
                      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                        Location
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Ankara
                      </p>
                    </div>
                  </div>
                  <div className="w-2/5 mb-8">
                    <div className="border-b pb-3">
                      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                        Phone Number
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        202-555-0191
                      </p>
                    </div>
                  </div>
                  <div className="w-2/5">
                    <div className="border-b pb-3">
                      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                        Last Login
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Today
                      </p>
                    </div>
                  </div>
                  <div className="w-2/5">
                    <div className="border-b pb-3">
                      <p className="mb-2 text-sm text-gray-700 dark:text-gray-400 font-medium">
                        Delivery Time
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        5 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => alert('close')}
              className="cursor-pointer absolute top-0 right-0 m-3 text-gray-800 dark:text-gray-100 transition duration-150 ease-in-out"
            >
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
