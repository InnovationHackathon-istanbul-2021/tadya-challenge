import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  useListCategoriesQuery,
} from '../../generated/graphql';
import { Table } from '../../components/ui/table/table';
import { Link } from 'react-router-dom';
import SearchInput from '../../components/ui/form/SearchInput';
import Select from '../../components/ui/form/Select';
const Content = styled.div``;

export const ListOrders = () => {
  const [total, setTotal] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  const [filter, setFilter] = useState('');
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

  const { data, loading, error } = useListCategoriesQuery({
    variables: {
      limit: pageLimit, // value for 'limit'
      offset // value for 'offset'
    },
  });

  useEffect(() => {
    loading && setLoad(true);
  }, [loading]);

  useEffect(() => {
    if (data) {
      // setOrderList(data.categories);
      setTimeout(() => {
        setLoad(false);
      }, 1000)
      // setTotal(data?.categories_aggregate.aggregate?.count as number);
    }
  }, [data]);

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
    <Content className="flex h-full mx-auto pt-8">
      <div className="container bg-white shadow rounded">
        <div>
        <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="lg:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  List Orders
                </p>
                <div className="md:flex items-center mt-6 lg:mt-0">
                  <SearchInput placeholder="Search" value={search} onChange={setSearch} />
                  <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                    <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                      <Select value={filter} onChange={setFilter} options={['Producer', 'ID']} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-12/12 mx-auto">
            <div>
              <Table
                className="product-table"
                loading={load}
                numOfPages={Math.ceil(total / pageLimit)}
                manualPagination={true}
                onFetchData={(_pageIndex: any, _pageSize: any) => {
                  setPageIndex(_pageIndex);
                  setOffset(_pageIndex);
                  setPageLimit(_pageSize);
                }}
                pageIndex={pageIndex}
                perPage={pageLimit}
                columns={columns}
                data={orderList}
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
