import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchInput from '../../components/ui/form/SearchInput';
import { Table } from '../../components/ui/table/table';
import {
  useGet_Offer_By_RefQuery,
  useList_Offer_DetaIl_By_RefQuery,
} from '../../generated/graphql';
import _ from 'lodash';
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
  const [offerProductList, setOfferProductList] = useState([] as any[]);
  //alert(params?.id)
  const { data, loading, error } = useGet_Offer_By_RefQuery({
    variables: {
      offset, // value for 'offset'
      limit: pageLimit, // value for 'limit'
      offerRef: params?.id,
    },
  });

  const { data: offersWithProduct } = useList_Offer_DetaIl_By_RefQuery({
    variables: {
      offset, // value for 'offset'
      limit: pageLimit, // value for 'limit'
      refId: params?.id,
    },
  });

  useEffect(() => {
    loading && setLoad(true);
  }, [loading]);

  useEffect(() => {
    if (data) {
      setProductList(data.offers);
      setTimeout(() => {
        setLoad(false);
      }, 1000);
      setTotal(data?.offers_aggregate?.aggregate?.count as number);
    }
  }, [data]);

  useEffect(() => {
    if (offersWithProduct) {

      const flatResult: any[] = [];
      _.each(offersWithProduct.offers, (offer) => {
        const { offer_products, ...rest } = offer;
        _.each(offer_products, (product) => {
          flatResult.push({
            ...product,
            ...rest,
          });
        });
      });
      setOfferProductList(flatResult);
    }
  }, [offersWithProduct]);

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
        Header: 'Products',
        Cell: ({ row }: any) => {
          return (
            <div>
              {row.original?.offer_products_aggregate?.aggregate?.count}
            </div>
          );
        },
      },
      {
        Header: 'Action',
        width: '20%',
        Cell: ({ row }: any) => {
          return (
            <div className="inline-flex space-x-2 text-blue-300	">
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

  const columns2 = React.useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Producer',
        accessor: 'product.producer.title',
      },

      {
        Header: 'Product',
        accessor: 'product.title',
      },
      {
        Header: 'Quantity',
        Cell: ({ row }: any) => {
          return <div className="">{row.original.product.quantity} {row.original.product.measure_unit}</div>;
        },
      },
      {
        Header: 'Price',
        Cell: ({ row }: any) => {
          return <div className="">&#x20BA;{row.original.price}</div>;
        },
      },

      {
        Header: 'Action',
        width: '20%',
        Cell: ({ row }: any) => {
          return (
            <div className="inline-flex space-x-2 text-blue-300	">
              <button className="mx-2 my-2 bg-red-500 transition duration-150 ease-in-out hover:bg-red-600 rounded text-white px-6 py-2 text-xs">
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    [offerProductList]
  );
  return (
    <Content className="flex h-full mx-auto pt-8">
      <div className="container bg-white shadow rounded">
        <div>
          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="lg:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  List By Producers
                </p>
                <div className="md:flex items-center mt-6 lg:mt-0">
                  <SearchInput
                    placeholder="Search"
                    value={search}
                    onChange={setSearch}
                  />
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
        <div>
          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="lg:flex items-center justify-between">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                  List By Products
                </p>
                <div className="md:flex items-center mt-6 lg:mt-0">
                  <SearchInput
                    placeholder="Search"
                    value={search}
                    onChange={setSearch}
                  />
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
                columns={columns2}
                data={offerProductList}
              />
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
};
