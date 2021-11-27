import gql from 'graphql-tag';

export const LIST_PRODUCERS = gql`
  query ListProducers($offset: Int = 0, $limit: Int = 10) {
    producers(limit: $limit, offset: $offset, order_by: { id: asc }) {
      title
      is_active
      create_offer
      user {
        email
        phone_number
        username
        password
        last_name
        is_active
        id
        first_name
        city
        alias
      }
      ref
      id
      alias
      create_at
    }
    producers_aggregate {
      aggregate {
        count(distinct: true, columns: id)
      }
    }
  }
`;
