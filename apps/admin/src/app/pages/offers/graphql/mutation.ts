import gql from 'graphql-tag';
export const INSERT_PRODUCT_OFFER = gql`
  mutation InsertOffer($object: offers_insert_input!) {
    insert_offers_one(object: $object) {
      id
      is_active
      producer_id
      end_date
      created_ate
      offer_products {
        id
        is_active
        quantity
        price
      }
    }
  }
`;
