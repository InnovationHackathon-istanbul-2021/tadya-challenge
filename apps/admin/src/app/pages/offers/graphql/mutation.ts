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

export const DISABLE_ALL_OFFERS = gql`
  mutation DISABLE_ALL_OFFERS {
    update_offers(
      where: { is_active: { _eq: true } }
      _set: { is_active: false }
    ) {
      returning {
        id
      }
      affected_rows
    }
  }
`;

export const ENABLE_OFFER = gql`
  mutation ENABLE_OFFER($_eq: String = "") {
    update_offers(where: { ref: { _eq: $_eq } }, _set: { is_active: true }) {
      returning {
        id
      }
      affected_rows
    }
  }
`;
