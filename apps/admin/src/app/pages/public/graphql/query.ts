import gql from 'graphql-tag';

export const LIST_ALL_PRODUCTS = gql`
  query LIST_ALL_PRODUCTS($limit: Int = 50, $offset: Int = 0) {
    products(limit: $limit, offset: $offset) {
      alias
      category_id
      description
      id
      measure_unit
      packing_type
      price
      quantity
      quote_on_call
      sku
      title
      thumbnail
      producer_id
      producer {
        id
        title
        alias
      }
    }
  }
`;
