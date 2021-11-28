import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/ui/icon/Icon';
import MeterImg from '../../../assets/meter.svg';
import { Table } from '../../components/ui/table/table';

const Content = styled.div``;

export const Customer = () => {
  const [load, setLoad] = useState(false);
  const [orderList, setOrderList] = useState([{
      id: 12,
      order_id: '1421412P - 24SGE2 - 876TBJK',
      quantity: 8,
      price: '$200',
      status: 'accepted',
      status_no: 2,
      is_active: true,
    },{
      id: 12,
      order_id: '1421412P - 24SGE2 - 876TBJK',
      quantity: 8,
      price: '$200',
      status: 'delivery',
      status_no: 3,
      is_active: true,
    },{
      id: 12,
      order_id: '1421412P - 24SGE2 - 876TBJK',
      quantity: 8,
      price: '$200',
      status: 'deliverd',
      status_no: 4,
      is_active: true,
    }
]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Order Id',
        accessor: 'order_id',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Status',
        accessor: 'is_active',
        Cell: ({ row }: any) => {
          return row.values.is_active ? (
            <div className="inline-flex space-x-2 text-blue-400	">
              Active
            </div>
          ): (
            <div className="inline-flex space-x-2 text-gray-500	">
              In Active
            </div>
          );
        },
      },
      {
        Header: 'Action',
        width: "20%",
        Cell: ({ row }: any) => {
          return (
            <div className="inline-flex space-x-2 text-blue-300	">
              <button className="mx-2 my-2 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs">
                Manage
              </button>
              <button className="mx-2 my-2 bg-red-500 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-6 py-2 text-xs">
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    [orderList]
  );

  return (
    <Content className="mx-auto bg-gray-300 w-full h-full overflow-auto">
      <div className="bg-white py-4 px-5 ">
        <h1 className="cursor-pointer w-full text-xl text-gray-700 tracking-wide font-bold">Welcome to Customer Dashboard</h1>
      </div>
      <div>
        <div className="mx-8 lg:w-11/12 w-full overflow-auto">
          <div className="w-12/12 mx-auto">
            {orderList.length > 0 && orderList.map((order) => (<div className="flex items-center justify-center w-full h-full py-8 px-4">
              <div className="w-full py-6 px-8 bg-white dark:bg-gray-800">
                <div className="sm:flex items-center justify-between">
                  <div className=" sm:mb-0 mb-4 flex items-center">
                    {/* <img alt="profile" src="https://images.unsplash.com/photo-1518725522904-4b3939358342?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" className="w-8 h-8 rounded object-cover object-center" />
                    <p className="text-xl pl-4 font-semibold leading-5 text-gray-800 dark:text-gray-100">Antonin Hafer</p> */}
                  </div>
                  <p className="text-xs font-medium leading-3 text-gray-800 dark:text-gray-400">ID: {order.order_id}</p>
                </div>
                <div className="sm:flex items-center justify-between w-full sm:px-24 pt-6">
                  <div className="sm:block flex w-full items-center">
                    <div className="sm:w-full w-2 sm:h-2 h-64 bg-gray-100 flex sm:flex-row flex-col items-center justify-between">
                      <div className={`w-4 h-4 ${order.status_no === 1 ? 'bg-indigo-700' : order.status_no < 1 ? 'bg-gray-400': 'bg-gray-800'} rounded flex items-center justify-center`}>
                        { order.status_no > 1 && <Icon className="w-4 h-4 text-white" icon={'HiOutlineCheck'} />}
                      </div>
                      <div className={`w-4 h-4 ${order.status_no === 2 ? 'bg-indigo-700' : order.status_no < 2 ? 'bg-gray-400': 'bg-gray-800'} rounded flex items-center justify-center`}>
                        { order.status_no > 2 && <Icon className="w-4 h-4 text-white" icon={'HiOutlineCheck'} />}
                      </div>
                      <div className={`w-4 h-4 ${order.status_no === 3 ? 'bg-indigo-700' : order.status_no < 3 ? 'bg-gray-400': 'bg-gray-800'} rounded flex items-center justify-center`}>
                        { order.status_no > 3 && <Icon className="w-4 h-4 text-white" icon={'HiOutlineCheck'} />}
                      </div>
                      <div className={`w-4 h-4 ${order.status_no === 4 ? 'bg-indigo-700' : order.status_no < 4 ? 'bg-gray-400': 'bg-gray-800'} rounded flex items-center justify-center`}>
                        { order.status_no > 4 && <Icon className="w-4 h-4 text-white" icon={'HiOutlineCheck'} />}
                      </div>
                    </div>
                    <div className="flex flex-col sm:hidden items-center justify-between h-64 pl-5">
                      <div className="flex flex-col items-start">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 1 ? 'text-indigo-700' : order.status_no < 1 ? 'text-gray-400' : 'text-gray-800'}`}>Being processed</p>
                        <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 2 ? 'text-indigo-700' : order.status_no < 2 ? 'text-gray-400' : 'text-gray-800'}`}>Order is accepted</p>
                        <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 3 ? 'text-indigo-700' : order.status_no < 3 ? 'text-gray-400' : 'text-gray-800'}`}>Ready for delivery</p>
                        <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 4 ? 'text-indigo-700' : order.status_no < 4 ? 'text-gray-400' : 'text-gray-800'}`}>Delivered</p>
                        <p className="text-xs leading-3 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 sm:block hidden">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 1 ? 'text-indigo-700' : order.status_no < 1 ? 'text-gray-400' : 'text-gray-800'}`}>Being&nbsp;processed</p>
                        <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25&nbsp;AM</p>
                    </div>
                    <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 2 ? 'text-indigo-700' : order.status_no < 2 ? 'text-gray-400' : 'text-gray-800'}`}>Order&nbsp;is&nbsp;accepted</p>
                        <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25&nbsp;AM</p>
                    </div>
                    <div className="flex flex-col items-center pl-10 md:pl-8 lg:pl-20">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 3 ? 'text-indigo-700' : order.status_no < 3 ? 'text-gray-400' : 'text-gray-800'}`}>Ready&nbsp;for&nbsp;delivery</p>
                        <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May 14, 2019 - 8:25&nbsp;AM</p>
                    </div>
                    <div className="flex flex-col items-start pl-10 md:pl-8 lg:pl-20">
                        <p className={`text-sm font-medium leading-4 ${order.status_no === 4 ? 'text-indigo-700' : order.status_no < 4 ? 'text-gray-400' : 'text-gray-800'}`}>Delivered</p>
                        <p className="text-xs leading-4 pt-2.5 text-gray-500 dark:text-gray-400">May&nbsp;14,&nbsp;2019 - 8:25&nbsp;AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          )}
           {/* {orderList.length > 0 && (
            <div>
                <Table
                  className="product-table"
                  loading={load}
                  numOfPages={Math.ceil(orderList.length / 10)}
                  manualPagination={true}
                  onFetchData={(_pageIndex: any, _pageSize: any) => {
                    // setPageIndex(_pageIndex);
                    // setOffset(_pageIndex);
                    // setPageLimit(_pageSize);
                  }}
                  pageIndex={0}
                  perPage={10}
                  columns={columns}
                  data={orderList}
                />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </Content>
  );
};
