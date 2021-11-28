import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../../components/ui/form/SearchInput';
import { Table } from '../../components/ui/table/table';
import { useFind_Offer_ProductsQuery } from '../../generated/graphql';

const Content = styled.div``;

export const OfferProductList = () => {
  const params = useParams();
  const [load, setLoad] = useState(true);
  const [search, setSearch] = useState('');
  const [pageLimit, setPageLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [productList, setProductList] = useState([] as any[]);

  const { data, loading, error } = useFind_Offer_ProductsQuery({
    variables: {
      offset, // value for 'offset'
      limit: pageLimit, // value for 'limit'
      offer_id: params?.id ? parseInt(params?.id, 10) : 0,
    },
  });

  useEffect(() => {
    loading && setLoad(true);
  }, [loading]);

  useEffect(() => {
    if (data) {
      setProductList(data.offer_products);
      setTimeout(() => {
        setLoad(false);
      }, 1000)
      setTotal(data?.offer_products_aggregate.aggregate?.count as number);
    }
  }, [data]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Product Id',
        accessor: 'product_id',
      },
      {
        Header: 'Offer Id',
        accessor: 'offer_id',
      },
      {
        Header: 'Price',
        accessor: 'price',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
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
    [productList]
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
                data={productList}
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
