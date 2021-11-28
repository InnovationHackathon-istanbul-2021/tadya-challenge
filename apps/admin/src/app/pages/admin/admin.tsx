import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/ui/icon/Icon';
import TimeImg from '../../../assets/time.svg';
import ShippingImg from '../../../assets/shipping.svg';
import UserImg from '../../../assets/user.svg';
import ProjectImg from '../../../assets/project.svg';

const Content = styled.div``;

export const Admin = () => {
  return (
    <Content className="mx-auto bg-gray-300 w-full h-full overflow-auto">
      <div className="bg-white py-4 px-5 ">
        <h1 className="cursor-pointer w-full text-sm text-gray-700 tracking-wide font-bold">
          Welcome to Admin Dashboard
        </h1>
      </div>

      <div>
        <div className="flex px-5 w-full pt-3">
          <div className="w-full rounded shadow bg-white dark:bg-gray-800 py-6 pl-10 pr-12">
            <div className="flex justify-between">
              <p className="text-lg md:pr-96 font-semibold leading-4 text-gray-800 dark:text-gray-100">
                {' '}
                Current Offer Sales Report
              </p>
              <p className="text-xs leading-3 pl-6 text-right text-gray-500 dark:text-gray-400"></p>
            </div>
            <div className="md:flex items-center justify-between pt-8">
              <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div className="flex justify-center w-full lg:border-r border-gray-300 py-6">
                  <img className="w-12" src={UserImg} alt="user" />
                  <div className="text-gray-800 pl-12 w-1/2">
                    <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
                      15
                    </h1>
                    <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                      New Customer.
                    </h2>
                  </div>
                </div>

                <div className="flex w-full lg:border-r border-gray-300 py-6">
                  <img className="w-12" src={TimeImg} alt="time" />
                  <div className="text-gray-800 w-1/2 pl-12">
                    <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
                      35
                    </h1>
                    <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                      Order Pending
                    </h2>
                  </div>
                </div>
                <div className="flex w-full lg:border-r border-gray-300 py-6">
                  <img className="w-12" src={ShippingImg} alt="shipping" />
                  <div className="text-gray-800 w-1/2 pl-12">
                    <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
                      10
                    </h1>
                    <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                      Order Processing
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center w-full py-6">
                  <img className="w-12" src={ProjectImg} alt="project" />
                  <div className="text-gray-800 w-1/2 pl-12">
                    <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">
                      50
                    </h1>
                    <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">
                      Order Completed
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex px-5 w-full pt-3">
          <div className="w-full rounded shadow bg-white dark:bg-gray-800 py-6 pl-10 pr-12">
            <div className="flex justify-between">
              <p className="text-lg md:pr-96 font-semibold leading-4 text-gray-800 dark:text-gray-100">
                Statistics
              </p>
              <p className="text-xs leading-3 pl-6 text-right text-gray-500 dark:text-gray-400"></p>
            </div>
            <div className="md:flex items-center w-6/12 justify-between pt-8">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                  <Icon
                    className="w-6 h-6 text-purple-700"
                    icon={'HiOutlineTrendingUp'}
                  />
                </div>
                <div className="pl-4">
                  <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                    100
                  </p>
                  <p className="text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">
                    Sales
                  </p>
                </div>
              </div>
              <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                  <Icon
                    className="w-6 h-6 text-blue-700"
                    icon={'HiOutlineCurrencyDollar'}
                  />
                </div>
                <div className="pl-4">
                  <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                    &#x20BA;8.549k
                  </p>
                  <p className="text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">
                    Cost
                  </p>
                </div>
              </div>
              <div className="flex items-center  md:pt-0 pt-4 md:pl-10">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                  <Icon className="h-6 text-red-700" icon={'HiOutlineCube'} />
                </div>
                <div className="pl-4">
                  <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">
                    5
                  </p>
                  <p className="text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">
                    Order Cancel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex px-5 w-full pt-3 items-start justify-between">
        <div className="flex flex-col justify-between lg:flex-row w-full items-start rounded bg-white">
          <div className="w-full lg:w-2/6 mr-5">
            <div className="mt-0">
              <div className="max-w-sm bg-white p-6">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold leading-5 text-gray-800 pr-40">
                    Recent Orders
                  </p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded">
                      <img
                        src="https://cdn.tuk.dev/assets/components/misc/profile-img-1.png"
                        alt="profile"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="pl-3">
                      <p className="text-sm font-medium leading-normal text-gray-800">
                        Sandra Rogers
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-normal text-right text-green-500">
                    &#x20BA;12,847
                  </p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <img
                        src="https://cdn.tuk.dev/assets/components/misc/RT.png"
                        alt="profile"
                      />
                    </div>
                    <div className="pl-3">
                      <p className="text-sm font-medium leading-normal text-gray-800">
                        Raymond Tusk
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-normal text-right text-green-500">
                    &#x20BA;11,847
                  </p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <img
                        src="https://cdn.tuk.dev/assets/components/misc/JR.png"
                        alt="profile"
                      />
                    </div>
                    <div className="pl-3">
                      <p className="text-sm font-medium leading-normal text-gray-800">
                        Jane Roberts
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-normal text-right text-green-500">
                    &#x20BA;21,847
                  </p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <img
                        src="https://cdn.tuk.dev/assets/components/misc/profile-img-2.png"
                        alt="profile"
                      />
                    </div>
                    <div className="pl-3">
                      <p className="text-sm font-medium leading-normal text-gray-800">
                        Maia Kelly
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-normal text-right text-green-500">
                    &#x20BA;2,847
                  </p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <img
                        src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                        alt="profile"
                      />
                    </div>
                    <div className="pl-3">
                      <p className="text-sm font-medium leading-normal text-gray-800">
                        Laurine Watson
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-normal text-right text-green-500">
                    &#x20BA;2,847
                  </p>
                </div>
                <div className="flex items-start justify-between mt-6 w-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <img
                        src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                        alt="profile"
                      />
                    </div>
                    <div className="pl-3">
                      <p className="text-sm font-medium leading-normal text-gray-800">
                        Laurine Watson
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-normal text-right text-green-500">
                    &#x20BA;2,847
                  </p>
                </div>

                <div className="flex items-start justify-between mt-6 w-full">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                      <img
                        src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                        alt="profile"
                      />
                    </div>
                    <div className="pl-3">
                      <p className="text-sm font-medium leading-normal text-gray-800">
                        Laurine Watson
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium leading-normal text-right text-green-500">
                    &#x20BA;2,847
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/6 ">
            <div className="overflow-x-auto">
              <div className="bg-white pt-6 px-5 ">
                <h1 className="cursor-pointer w-full text-xl text-gray-700 tracking-wide font-bold">
                  LeadBoard
                </h1>
              </div>
              <table className="w-full">
                <thead className="">
                  <tr>
                    <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 uppercase sm:py-8 py-4 sm:pl-6 pl-4">
                      <div className="flex items-center">Company</div>
                    </td>

                    <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                      <div className="flex items-center">Orders</div>
                    </td>
                    <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase">
                      <div className="flex items-center">Amount</div>
                    </td>
                    <td className="text-xs font-semibold text-gray-800 dark:text-gray-100 pl-6 uppercase sm:pr-6 pr-4">
                      <div className="flex items-center">Sales</div>
                    </td>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-gray-200 dark:border-gray-900">
                  <td className="py-4 sm:pl-6 pl-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                            alt="profile"
                          />
                        </div>
                        <div className="pl-5">
                          <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                          Rahime Çevik

                          </p>
                        </div>
                      </div>
                    </td><td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                        23.4k
                      </p>

                    </td>
                    <td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                        &#x20BA;891.2
                      </p>
                    </td>
                    <td className="py-4 sm:px-6 px-4">
                      <div className="flex items-center">
                        <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                          68%
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                            fill="#EA5455"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-900">
                  <td className="py-4 sm:pl-6 pl-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                            alt="profile"
                          />
                        </div>
                        <div className="pl-5">
                          <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                          Akyüz Ailesi

                          </p>
                        </div>
                      </div>
                    </td><td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                        78k
                      </p>

                    </td>
                    <td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                        &#x20BA;668
                      </p>
                    </td>
                    <td className="py-4 sm:px-6 px-4">
                      <div className="flex items-center">
                        <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                          97%
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M16 3.99984C16 3.93317 16 3.79984 15.9333 3.73317C15.8667 3.59984 15.7333 3.4665 15.6 3.39984C15.5333 3.33317 15.4 3.33317 15.3333 3.33317H11.3333C10.9333 3.33317 10.6667 3.59984 10.6667 3.99984C10.6667 4.39984 10.9333 4.6665 11.3333 4.6665H13.7333L9 9.39984L6.13333 6.53317C5.86667 6.2665 5.46667 6.2665 5.2 6.53317L0.2 11.5332C-0.0666667 11.7998 -0.0666667 12.1998 0.2 12.4665C0.466667 12.7332 0.866667 12.7332 1.13333 12.4665L5.66667 7.93317L8.53333 10.7998C8.8 11.0665 9.2 11.0665 9.46667 10.7998L14.6667 5.59984V7.99984C14.6667 8.39984 14.9333 8.6665 15.3333 8.6665C15.7333 8.6665 16 8.39984 16 7.99984V3.99984Z"
                            fill="#15803D"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-900">
                  <td className="py-4 sm:pl-6 pl-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                            alt="profile"
                          />
                        </div>
                        <div className="pl-5">
                          <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                          Minaz Ailesi

                          </p>
                        </div>
                      </div>
                    </td><td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                        162
                      </p>

                    </td>
                    <td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                        &#x20BA;522.2
                      </p>
                    </td>
                    <td className="py-4 sm:px-6 px-4">
                      <div className="flex items-center">
                        <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                          98%
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                            fill="#EA5455"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-900">
                  <td className="py-4 sm:pl-6 pl-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                            alt="profile"
                          />
                        </div>
                        <div className="pl-5">
                          <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                          Araç Ailesi

                          </p>
                        </div>
                      </div>
                    </td><td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                        214
                      </p>

                    </td>
                    <td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                        &#x20BA;81.2
                      </p>
                    </td>
                    <td className="py-4 sm:px-6 px-4">
                      <div className="flex items-center">
                        <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                          68%
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                            fill="#EA5455"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-900">
                    <td className="py-4 sm:pl-6 pl-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src="https://cdn.tuk.dev/assets/components/misc/LW.png"
                            alt="profile"
                          />
                        </div>
                        <div className="pl-5">
                          <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100 pb-2">
                          Arslan Ailesi
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                        78k
                      </p>

                    </td>
                    <td className="py-4 sm:pl-6 pl-4">
                      <p className="text-sm leading-none text-gray-800 dark:text-gray-100">
                        &#x20BA; 668
                      </p>
                    </td>
                    <td className="py-4 sm:px-6 px-4">
                      <div className="flex items-center">
                        <p className="text-sm font-semibold pr-3 leading-none text-gray-800 dark:text-gray-100">
                          24%
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M16 12.0002C16 12.0668 16 12.2002 15.9333 12.2668C15.8667 12.4002 15.7333 12.5335 15.6 12.6002C15.5333 12.6668 15.4 12.6668 15.3333 12.6668H11.3333C10.9333 12.6668 10.6667 12.4002 10.6667 12.0002C10.6667 11.6002 10.9333 11.3335 11.3333 11.3335H13.7333L9 6.60016L6.13333 9.46683C5.86667 9.7335 5.46667 9.7335 5.2 9.46683L0.2 4.46683C-0.0666667 4.20016 -0.0666667 3.80016 0.2 3.5335C0.466667 3.26683 0.866667 3.26683 1.13333 3.5335L5.66667 8.06683L8.53333 5.20016C8.8 4.9335 9.2 4.9335 9.46667 5.20016L14.6667 10.4002V8.00016C14.6667 7.60016 14.9333 7.3335 15.3333 7.3335C15.7333 7.3335 16 7.60016 16 8.00016V12.0002Z"
                            fill="#EA5455"
                          />
                        </svg>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
