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
      producer_id
    }
  }
`;

export const LIST_OFFERS = gql`
  query LIST_OFFERS($limit: Int = 10, $offset: Int = 0) {
    offers(limit: $limit, offset: $offset, order_by: { id: desc }) {
      created_ate
      end_date
      id
      is_active
      offer_products {
        id
        is_active
        offer_id
        price
        product_id
        quantity
      }
      producer_id
      start_date
    }
    offers_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export const FIND_OFFER_PRODUCTS = gql`
  query FIND_OFFER_PRODUCTS(
    $offer_id: Int = 15
    $limit: Int = 10
    $offset: Int = 0
  ) {
    offer_products(
      where: { offer_id: { _eq: $offer_id } }
      limit: $limit
      offset: $offset
    ) {
      id
      is_active
      offer_id
      price
      product_id
      quantity
    }
    offer_products_aggregate(where: { offer_id: { _eq: $offer_id } }) {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export const LIST_OFFER_DETAIl_BY_REF = gql`
  query LIST_OFFER_DETAIl_BY_REF(
    $limit: Int = 10
    $offset: Int = 0
    $refId: String = "9cc26d49-10a9-430b-8706-29b2f3566d0a"
  ) {
    offers(
      order_by: { id: desc }
      limit: $limit
      offset: $offset
      where: { ref: { _eq: $refId } }
    ) {
      end_date
      id
      offer_products(order_by: { id: desc }) {
        id
        price
        quantity
        product {
          title
          quote_on_call
          price
          packing_type
          measure_unit
          id
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
