import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useList_Offer_By_RefQuery } from '../../generated/graphql';
import { Table } from '../../components/ui/table/table';
import { Link, useNavigate } from 'react-router-dom';
import SearchInput from '../../components/ui/form/SearchInput';
import Select from '../../components/ui/form/Select';

const Content = styled.div``;

export const ListOffers = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(true);
  const [total, setTotal] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [offerList, setOfferList] = useState([] as any[]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  const { data, loading, error } = useList_Offer_By_RefQuery({
    variables: {
      offset, // value for 'offset'
      limit: pageLimit, // value for 'limit'
    },
  });

  useEffect(() => {
    loading && setLoad(true);
  }, [loading]);
  console.log(data);

  useEffect(() => {
    if (data) {
      setOfferList(data.offers);
      setTimeout(() => {
        setLoad(false);
      }, 1000);
      setTotal(data?.offers_aggregate?.aggregate?.count as number);
    }
  }, [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Ref',
        accessor: 'ref',
        width: '25%',
      },
      {
        Header: 'Start Date',
        accessor: 'start_date',
        Cell: ({ row }: any) => {
          return (
            <div>
              {new Date(row.original?.start_date)?.toLocaleDateString('en-US')}
            </div>
          );
        },
      },
      {
        Header: 'End Date',
        accessor: 'end_date',
        Cell: ({ row }: any) => {
          return (
            <div>
              {new Date(row.original?.end_date)?.toLocaleDateString('en-US')}
            </div>
          );
        },
      },
      {
        Header: 'Active',
        accessor: 'is_active',
        Cell: ({ row }: any) => {
          return <div>{row.original.is_active ? 'true' : 'false'}</div>;
        },
      },

      {
        Header: 'Action',
        width: '25%',
        Cell: ({ row }: any) => {
          return (
            <div className="inline-flex space-x-2 text-blue-300	">
              <button
                onClick={() => navigate('/offers/' + row.original?.ref)}
                className="mx-2 my-2 bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-6 py-2 text-xs"
              >
                Manage
              </button>
              <button
                onClick={() => alert("Not Implemented")}
                className="mx-2 my-2 bg-green-500 transition duration-150 ease-in-out hover:bg-green-600 rounded text-white px-6 py-2 text-xs"
              >
                Active
              </button>
              <button className="mx-2 my-2 bg-red-500 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-6 py-2 text-xs">
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    [offerList]
  );

  return (
    <Content className="flex h-full mx-auto pt-8">
      <div className="container bg-white shadow rounded">
        <div>
          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="lg:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  List Offers
                </p>
                <div className="md:flex items-center mt-6 lg:mt-0">
                  <SearchInput
                    placeholder="Search"
                    value={search}
                    onChange={setSearch}
                  />
                  <div className="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                    <div className="w-40 py-2 px-3 bg-white lg:ml-3 border rounded border-gray-200">
                      <Select
                        value={filter}
                        onChange={setFilter}
                        options={['Producer', 'ID']}
                      />
                    </div>
                    <Link
                      to="/offers/create"
                      className="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-blue-500 hover:bg-blue-600 focus:outline-none rounded"
                    >
                      <p className="text-sm font-medium leading-none text-white">
                        Add Offer
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
                data={offerList}
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
