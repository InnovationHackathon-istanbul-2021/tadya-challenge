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

export const LIST_OFFER_BY_DATE = gql`
  query LIST_OFFER_BY_DATE(
    $limit: Int = 10
    $offset: Int = 0
    $_gt: timestamp = "2021-11-29"
  ) {
    offers(
      order_by: { id: desc }
      limit: $limit
      offset: $offset
      where: { end_date: { _gt: $_gt }, is_active: { _eq: true } }
    ) {
      created_ate
      end_date
      id
      is_active
      offer_products(order_by: { id: desc }) {
        price
        quantity
        product {
          title
          alias
          thumbnail
          quote_on_call
          price
          packing_type
          measure_unit
          image
          id
          description
          category_id
          base_id
          quantity
          sku
          producer {
            title
            id
          }
        }
      }
    }
  }
`;

export const GET_OFFER_BY_REF = gql`
  query GET_OFFER_BY_REF(
    $limit: Int = 10
    $offset: Int = 0
    $offerRef: String
  ) {
    offers(
      order_by: { id: desc }
      limit: $limit
      offset: $offset
      where: { ref: { _eq: $offerRef } }
    ) {
      created_ate
      end_date
      id
      is_active
      start_date
      producer {
        title
      }
      ref
    }
  }
`;

export const LIST_OFFER_BY_REF = gql`
  query LIST_OFFER_BY_REF($limit: Int = 10, $offset: Int = 0) {
    offers(
      order_by: { ref: desc }
      limit: $limit
      offset: $offset
      distinct_on: ref
    ) {
      created_ate
      end_date
      id
      is_active
      start_date
      producer {
        title
      }
      ref
    }
  }
`;
