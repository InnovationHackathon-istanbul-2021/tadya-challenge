import gql from 'graphql-tag';

export const LIST_PRODUCTS = gql`
  query ListProducts($limit: Int = 10, $offset: Int = 0) {
    products(limit: $limit, offset: $offset, order_by: { id: desc }) {
      alias
      description
      id
      image
      measure_unit
      packing_type
      price
      producer_id
      quantity
      quote_on_call
      sku
      thumbnail
      title
      category_id
      base_id
      producer {
        title
      }
    }
    products_aggregate {
      aggregate {
        count(distinct: true, columns: id)
      }
    }
  }
`;

export const GET_PRODUCER_BY_TITLE = gql`
  query GET_PRODUCER_BY_TITLE($payload: String = "") {
    producers(where: { title: { _eq: $payload } }) {
      id
      title
    }
  }
`;
