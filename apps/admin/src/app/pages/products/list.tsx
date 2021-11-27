import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Table } from '../../components/ui/table/table';
import { Link } from 'react-router-dom';
import { useListProductsQuery } from '../../generated/graphql';
import SearchInput from '../../components/ui/form/SearchInput';
import SelectInput from '../../components/ui/form/SelectInput';
import Select from '../../components/ui/form/Select';
const Content = styled.div``;

export const ListProducts = () => {
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [productsList, setProductsList] = useState([] as any[]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const { data, loading, error } = useListProductsQuery({
    variables: {
      offset: offset* pageLimit, // value for 'offset'
      limit: pageLimit, // value for 'limit'
    },
  });

  useEffect(() => {
    loading && setLoad(true);
  }, [loading]);

  useEffect(() => {
    if (data) {
      setProductsList(data.products);
      setTimeout(() => {
        setLoad(false);
      }, 1000)
      setTotal(data?.products_aggregate.aggregate?.count as number);
    }
  }, [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Producer',
        accessor: 'producer.title',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Quantity',
        Cell: ({ row }: any) => {
          return (
            <div>{row.original.quantity + ' ' + row.original.measure_unit}</div>
          );
        },
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Action',
        width: '20%',
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
    [productsList]
  );

  return (
    <Content className="flex h-full mx-auto pt-8">
      <div className="container bg-white shadow rounded">
        <div>
          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="lg:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  List Products
                </p>
                <div className="md:flex items-center mt-6 lg:mt-0">
                  <SearchInput placeholder="Search" value={search} onChange={setSearch} />
                  <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                    <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                      <Select value={filter} onChange={setFilter} options={['Producer', 'Name', 'ID', 'Active']} />
                    </div>
                    <Link
                      to="/products/create"
                      className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded"
                    >
                      <p className="text-sm font-medium leading-none text-white">
                        Add Product
                      </p>
                    </Link>
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
                data={productsList}
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
