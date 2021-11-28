import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/ui/icon/Icon';
import MeterImg from '../../../assets/meter.svg';
import TimeImg from '../../../assets/time.svg';
import ShippingImg from '../../../assets/shipping.svg';
import UserImg from '../../../assets/user.svg';
import ProjectImg from '../../../assets/project.svg';

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
                  <img className="" src={UserImg} alt="user"/>
                  <div className="text-gray-800 pl-12 w-1/2">
                      <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">450</h1>
                      <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Happy Clients.</h2>
                  </div>
              </div>
              <div className="flex w-full lg:border-r border-gray-300 py-6">
                  <img className="" src={ShippingImg} alt="shipping"/>
                  <div className="text-gray-800 w-1/2 pl-12">
                      <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">10+</h1>
                      <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Insurance Solutions</h2>
                  </div>
              </div>
              <div className="flex w-full lg:border-r border-gray-300 py-6">
                  <img className="" src={TimeImg} alt="time"/>
                  <div className="text-gray-800 w-1/2 pl-12">
                      <h1 className="font-bold text-2xl lg:text-5xl tracking-1px">35</h1>
                      <h2 className="text-base lg:text-lg mt-4 leading-8 tracking-wide">Years of Experience</h2>
                  </div>
              </div>
              <div className="flex justify-center w-full py-6">
                  <img className="" src={ProjectImg} alt="project"/>
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
