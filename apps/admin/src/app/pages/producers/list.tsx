import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client/react/hooks';

import styled from 'styled-components';
import { LIST_PRODUCERS } from './graphql/query';
import {
  ListProducersQueryVariables,
  useListProducersQuery,
} from '../../generated/graphql';
import { Table } from '../../components/ui/table/table';
import { Link } from 'react-router-dom';
const Content = styled.div``;

export const ListProducers = () => {
  const [total, setTotal] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [producerList, setProducerList] = useState([] as any[]);

  const { data, loading, error } = useListProducersQuery({
    variables: {
      offset, // value for 'offset'
      limit: pageLimit, // value for 'limit'
    },
  });
  useEffect(() => {
    if (data) {
      setProducerList(data.producers);
      setTotal(data?.producers_aggregate.aggregate?.count as number);
    }
  }, [data]);
  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Name',
        Cell: ({ row }: any) => {
          return (
            <div>
              {row.original.user.first_name + ' ' + row.original.user.last_name}
            </div>
          );
        },
      },
      {
        Header: 'Email',
        accessor: 'user.email',
      },
      {
        Header: 'Phone Number',
        accessor: 'user.phone_number',
      },
      {
        Header: 'Action',
        width: "20%",
        Cell: ({ row }: any) => {
          return (
            <div className="inline-flex space-x-2 text-blue-300	">
              <button className="mx-2 my-2 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs">
                View Details
              </button>
              <button className="mx-2 my-2 bg-red-500 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-6 py-2 text-xs">
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    [producerList]
  );

  return (
    <Content className="flex h-full mx-auto pt-8">
      <div className="container bg-white shadow rounded">
        <div>
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
            <div className="flex justify-between w-11/12 mx-auto">
              <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                List Producers
              </p>
              <p>
              <Link to="/producers/create" className="mx-2 my-2 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs">
                Create New Producer
              </Link>
              <button className="mx-2 my-2 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs">
                Import from CSV
              </button>
              </p>
            </div>
          </div>
          <div className="w-12/12 mx-auto">
            <div>
              <Table
                className="product-table"
                loading={loading}
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
                data={producerList}
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
