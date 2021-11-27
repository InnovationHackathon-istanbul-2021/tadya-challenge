import { Field } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../components/ui/icon/Icon';

const ProductTableBody = styled.div`
  min-height: 250px;
  height: 100%;
  max-height: 500px;
  overflow-y: scroll;
`;
export const ProductList = ({ products , values }: any) => {
  const [show, setshow] = useState(0);
  products.forEach((product: any) => {
    if(!values[`${product.producer_id}-${product.id}`]) {
      values[`${product.producer_id}-${product.id}`] = {price: '0', stock: '0'}
    }
  })

  return (
    <div>
      <ProductTableBody>
        <div className="w-full">
          <table className="min-w-full">
            <thead>
              <th className="w-6 pr-2 text-base text-gray-800 "></th>
              <th className="text-left text-base text-gray-800 pr-6 w-6">Id</th>
              <th className=" text-left pl-6 pr-20 text-base text-gray-800">
                Product Name
              </th>
              <th
                className=" text-left text-base text-gray-800 pr-6 pr-2"
                style={{ width: '100px' }}
              >
                Price
              </th>
              <th
                className="text-left text-base text-gray-800 pr-6 pr-2"
                style={{ width: '100px' }}
              >
                Stock
              </th>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.map((product: any, index: number) => (
                  <tr className="h-20 ">

                    <td className="w-6 pr-2">
                      <div className="flex dark:text-gray-100 text-gray-800 items-center">
                        <Icon className="text-gray-500 w-5 h-5 -mr-3" icon={'HiDotsVertical'} />
                        <Icon className="text-gray-500 w-5 h-5" icon={'HiDotsVertical'} />
                      </div>
                    </td>
                    <td className="text-left text-sm text-gray-800  whitespace-no-wrap tracking-normal leading-4 pr-6 w-6">
                      <div className="bg-white dark:bg-gray-800 border rounded-sm border-gray-400 dark:border-gray-700 w-5 h-5 flex flex-shrink-0 justify-center items-center relative">

                      <Field
                        type="checkbox"
                        id={`${product.producer_id+'-'+product.id}.product_id`}
                        name={`${product.producer_id+'-'+product.id}.product_id`}

                        />
                        <div className="check-icon hidden bg-blue-400 text-white rounded-sm">
                          <Icon className="text-gray-100 w-5 h-5" icon={'HiCheck'} />
                        </div>
                      </div>
                    </td>
                    <td className="pl-6 pr-20">
                      <div className="flex items-center">
                      <div className="h-10 w-12 mb-4 lg:mb-0 mr-4 bg-gray-700 shadow-md flex justify-center items-center rounded-full">
                          <p className="text-white font-bold text-sm">{product.title[0]}</p>
                      </div>
                        <div className="ml-4">
                          <h3 className="text-sm  text-gray-800 dark:text-gray-100">
                            {product.title} {product.quantity}{product.measure_unit} {product.price}TL
                          </h3>
                          <h4 className="text-sm text-gray-400 dark:text-gray-400 mt-1">
                            https://www.figma.com/community?tab=files
                          </h4>
                        </div>
                      </div>
                    </td>
                    <td
                      className=" whitespace-no-wrap tracking-normal leading-4 pr-6 pr-2"
                      style={{ width: '100px' }}
                    >
                      <Field
                        type="text"
                        id={`${product.producer_id+'-'+product.id}.price`}
                        name={`${product.producer_id+'-'+product.id}.price`}
                        className=" w-full border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"
                      />
                    </td>
                    <td
                      className=" whitespace-no-wrap tracking-normal leading-4 pr-6 pr-2"
                      style={{ width: '100px' }}
                    >
                      <Field
                        type="text"
                        id={`${product.producer_id+'-'+product.id}.stock`}
                        name={`${product.producer_id+'-'+product.id}.stock`}
                        className="  w-full  border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border--700 text-gray-800 dark:text-gray-100"
                      />

                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </ProductTableBody>
      <style>
        {`
        .checkbox:checked+.check-icon {
            display: flex;
        }`}
      </style>
    </div>
  );
};
