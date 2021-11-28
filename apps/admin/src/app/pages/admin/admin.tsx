import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/ui/icon/Icon';
import MeterImg from '../../../assets/meter.svg';

const Content = styled.div``;

export const Admin = () => {
  return (
    <Content className="mx-auto bg-gray-300 w-full h-full overflow-auto">
      <div className="bg-white py-4 px-5 ">
        <h1 className="cursor-pointer w-full text-xl text-gray-700 tracking-wide font-bold">Welcome to Admin Dashboard</h1>
      </div>
      <div className="w-full px-5">
        <div className="w-full rounded shadow bg-white dark:bg-gray-800 container my-5">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <div className="flex justify-center w-full lg:border-r border-gray-300 py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="69" viewBox="0 0 64 69" fill="none">
                      <path d="M31.5 37C41.165 37 49 29.165 49 19.5C49 9.83502 41.165 2 31.5 2C21.835 2 14 9.83502 14 19.5C14 29.165 21.835 37 31.5 37Z" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M2 67V61C2 57.8174 4.10714 54.7652 7.85786 52.5147C11.6086 50.2643 16.6957 49 22 49H42C47.3043 49 52.3914 50.2643 56.1421 52.5147C59.8929 54.7652 62 57.8174 62 61V67" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div className="text-gray-800 pl-12 w-1/2">
                      <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">450</h1>
                      <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Happy Clients.</h2>
                  </div>
              </div>
              <div className="flex justify-center w-full lg:border-r border-gray-300 py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="57" viewBox="0 0 72 57" fill="none">
                      <path d="M54.9999 54.9998C59.1815 54.9998 62.5713 51.6099 62.5713 47.4283C62.5713 43.2468 59.1815 39.8569 54.9999 39.8569C50.8183 39.8569 47.4285 43.2468 47.4285 47.4283C47.4285 51.6099 50.8183 54.9998 54.9999 54.9998Z" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M39.8571 47.4285H9.57142H2V5.78571C2 4.78168 2.39885 3.81877 3.10881 3.10881C3.81877 2.39885 4.78168 2 5.78571 2H39.8571V24.7142M39.8571 47.4285V24.7142M39.8571 47.4285H62.5713H70.1427V24.7142M24.7142 47.4285H47.4285M70.1427 24.7142H39.8571M70.1427 24.7142L58.7856 5.78571H39.8571" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M20.9285 13.3569V28.4998M13.3571 20.9283H28.5H13.3571Z" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M17.1427 54.9998C21.3243 54.9998 24.7142 51.6099 24.7142 47.4283C24.7142 43.2468 21.3243 39.8569 17.1427 39.8569C12.9612 39.8569 9.57133 43.2468 9.57133 47.4283C9.57133 51.6099 12.9612 54.9998 17.1427 54.9998Z" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div className="text-gray-800 w-1/2 pl-12">
                      <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">10+</h1>
                      <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Insurance Solutions</h2>
                  </div>
              </div>
              <div className="flex justify-center w-full lg:border-r border-gray-300 py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                      <path d="M36 70C54.7777 70 70 54.7777 70 36C70 17.2223 54.7777 2 36 2C17.2223 2 2 17.2223 2 36C2 54.7777 17.2223 70 36 70Z" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M36 17.1108V35.9997L47.3333 47.3331" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div className="text-gray-800 w-1/2 pl-12">
                      <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">35</h1>
                      <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Years of Experience</h2>
                  </div>
              </div>
              <div className="flex justify-center w-full py-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="79" viewBox="0 0 72 79" fill="none">
                      <path d="M10.5 63.1375L2 58.5312V48.0625" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M2 31.3123V20.8435L10.5 16.2373" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M27.5 6.60624L36 2L44.5 6.60624" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M61.5 16.2373L70 20.8435V31.3123" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M70 48.0625V58.5312L61.5 63.2212" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M44.5 72.7686L36 77.3748L27.5 72.7686" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M36.0001 39.6873L44.5001 35.0811" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M61.5 25.45L70 20.8438" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M36.0001 39.6875V50.1562" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M36.0001 66.9062V77.375" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M36 39.6875L27.5 34.9976" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M10.5 25.45L2 20.8438" stroke="#805AD5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <div className="text-gray-800 w-1/2 pl-12">
                      <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">530</h1>
                      <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Projects Completed</h2>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex px-5 w-full pt-3">
          <div className="w-full rounded shadow bg-white dark:bg-gray-800 py-6 pl-10 pr-12">
              <div className="flex justify-between">
                  <p className="text-lg md:pr-96 font-semibold leading-4 text-gray-800 dark:text-gray-100">Statistics</p>
                  <p className="text-xs leading-3 pl-6 text-right text-gray-500 dark:text-gray-400">Updated 1 month ago</p>
              </div>
              <div className="md:flex items-center justify-between pt-8">
                  <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                        <Icon className="w-6 h-6 text-purple-700" icon={'HiOutlineTrendingUp'} />
                      </div>
                      <div className="pl-4">
                          <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">230k</p>
                          <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Sales</p>
                      </div>
                  </div>
                  <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                        <Icon className="w-6 h-6 text-blue-700" icon={'HiOutlineUser'} />
                      </div>
                      <div className="pl-4">
                          <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">8.549k</p>
                          <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Customers</p>
                      </div>
                  </div>
                  <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                      <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                        <Icon className="w-6 h-6 text-red-700" icon={'HiOutlineCube'} />
                      </div>
                      <div className="pl-4">
                          <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">1.423k</p>
                          <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Products</p>
                      </div>
                  </div>
                  <div className="flex items-center md:pt-0 pt-4 md:pl-10">
                      <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                        <Icon className="w-6 h-6 text-green-700" icon={'HiOutlineCurrencyDollar'} />
                      </div>
                      <div className="pl-4">
                          <p className="w-11 text-lg font-semibold leading-none text-gray-800 dark:text-gray-100">$9745</p>
                          <p className="w-8 text-xs leading-3 text-gray-500 pt-2 dark:text-gray-400">Revenue</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="py-7 px-5">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
              <div>
                  <img alt="meter" src={MeterImg} className="w-8 h-8" />
              </div>
              <div className="pl-3 pr-10 mt-1">
                  <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Profit Earned</h3>
                  <div className="flex items-end mt-4">
                      <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">2,330</h2>
                      <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 2,125</p>
                  </div>
                  <div className="flex items-center mt-5">
                      <div className="text-green-400">
                        <Icon className="w-5 h-5" icon={'HiOutlineTrendingUp'} />
                      </div>
                      <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2% Increase</p>
                  </div>
              </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
              <div>
                  <img alt="meter" src={MeterImg} className="w-8 h-8" />
              </div>
              <div className="pl-3 pr-10 mt-1">
                  <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Average Click Rate</h3>
                  <div className="flex items-end mt-4">
                      <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">22.3%</h2>
                      <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 21.2%</p>
                  </div>
                  <div className="flex items-center mt-5">
                      <div className="text-green-400">
                        <Icon className="w-5 h-5" icon={'HiOutlineTrendingUp'} />
                      </div>
                      <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2% Increase</p>
                  </div>
              </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
              <div>
                  <img alt="meter" src={MeterImg} className="w-8 h-8" />
              </div>
              <div className="pl-3 pr-10 mt-1">
                  <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Total Sales</h3>
                  <div className="flex items-end mt-4">
                      <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">2,330</h2>
                      <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from 2,850</p>
                  </div>
                  <div className="flex items-center mt-5">
                      <div className="text-red-400">
                        <Icon className="w-5 h-5" icon={'HiOutlineTrendingDown'} />
                      </div>
                      <p className="text-red-400 text-xs tracking-wide font-bold leading-normal pl-1">3.5% Decrease</p>
                  </div>
              </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 flex items-start shadow">
              <div>
                <img alt="meter" src={MeterImg} className="w-8 h-8" />
              </div>
              <div className="pl-3 pr-10 mt-1">
                  <h3 className="font-normal leading-4 text-gray-800 dark:text-gray-100 text-base">Profit Earned</h3>
                  <div className="flex items-end mt-4">
                      <h2 className="text-indigo-700 dark:text-indigo-600 text-2xl leading-normal font-bold">$1200</h2>
                      <p className="ml-2 mb-1 text-sm text-gray-600 dark:text-gray-400">from $800</p>
                  </div>
                  <div className="flex items-center mt-5">
                      <div className="text-green-400">
                        <Icon className="w-5 h-5" icon={'HiOutlineTrendingUp'} />
                      </div>
                      <p className="text-green-400 text-xs tracking-wide font-bold leading-normal pl-1">7.2% Increase</p>
                  </div>
              </div>
          </div>
      </div>
      </div>
    </Content>
  );
};
