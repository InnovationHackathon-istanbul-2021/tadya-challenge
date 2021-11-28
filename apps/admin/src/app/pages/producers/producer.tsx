import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/ui/icon/Icon';
import TimeImg from '../../../assets/time.svg';
import ShippingImg from '../../../assets/shipping.svg';
import UserImg from '../../../assets/user.svg';
import ProjectImg from '../../../assets/project.svg';

const Content = styled.div``;

export const Producer = () => {
  return (
    <Content className="mx-auto bg-gray-300 w-full h-full overflow-auto">
      <div className="bg-white py-4 px-5 ">
        <h1 className="cursor-pointer w-full text-sm text-gray-700 tracking-wide font-bold">
          Welcome to Producer Dashboard
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
                      5
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
                      15
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
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/6 ">
          </div>
        </div>
      </div>
    </Content>
  );
};
