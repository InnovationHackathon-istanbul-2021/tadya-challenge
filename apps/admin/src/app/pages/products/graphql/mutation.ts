import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation InsertProduct($payload: products_insert_input!) {
    insert_products_one(object: $payload) {
      title
      thumbnail
      sku
      quote_on_call
      quantity
      producer_id
      price
      packing_type
      measure_unit
      image
      description
      category_id
      base_id
      alias
    }
  }
`;
