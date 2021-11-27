import gql from 'graphql-tag';
export const INSERT_PRODUCER = gql`
  mutation INSERT_PRODUCER($payload: producers_insert_input!) {
    insert_producers_one(object: $payload) {
      id
      alias
      ref
      user {
        id
        first_name
      }
    }
  }
`;
