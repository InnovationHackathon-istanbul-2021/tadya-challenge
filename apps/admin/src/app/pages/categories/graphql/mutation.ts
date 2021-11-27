import gql from 'graphql-tag';
export const INSERT_CATEGORY = gql`
  mutation InsertCategory($object: categories_insert_input!) {
    insert_categories_one(object: $object) {
      id
      is_active
      name
      category_type
    }
  }
`;
