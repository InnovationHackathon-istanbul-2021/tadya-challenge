import gql from 'graphql-tag';
export const FIND_PRODUCTS_BY_PRODUCERS = gql`
  query ListProductsByProducer(
    $limit: Int = 100
    $offset: Int = 0
    $producer_id: Int = 3
  ) {
    products(
      limit: $limit
      offset: $offset
      order_by: { id: desc }
      where: { producer_id: { _eq: $producer_id } }
    ) {
      id
      image
      measure_unit
      packing_type
      price
      quantity
      quote_on_call
      sku
      thumbnail
      title
    }
  }
`;
