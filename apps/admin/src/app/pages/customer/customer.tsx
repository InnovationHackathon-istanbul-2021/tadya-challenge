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
    order_id: 41523,
    quantity: 8,
    price: '$200',
    is_active: true,
  },{
    id: 12,
    order_id: 41523,
    quantity: 8,
    price: '$200',
    is_active: true,
  },{
    id: 12,
    order_id: 41523,
    quantity: 8,
    price: '$200',
    is_active: true,
  },{
    id: 12,
    order_id: 41523,
    quantity: 8,
    price: '$200',
    is_active: true,
  },{
    id: 12,
    order_id: 41523,
    quantity: 8,
    price: '$200',
    is_active: true,
  }]);

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
    <Content className="mx-auto w-full h-full overflow-auto">
      <div className="bg-white py-4 px-5 ">
        <h1 className="cursor-pointer w-full text-xl text-gray-700 tracking-wide font-bold">Welcome to Customer Dashboard</h1>
      </div>
      <div>
        <div className="mx-8 lg:w-11/12 w-full overflow-x-auto">
          <div className="w-12/12 mx-auto">
           {orderList.length > 0 && (
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
            )}
          </div>
        </div>
      </div>
    </Content>
  );
};
