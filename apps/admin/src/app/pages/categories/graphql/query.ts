import gql from 'graphql-tag';

export const LIST_CATEGORIES = gql`
  query ListCategories($limit: Int = 10, $offset: Int = 0) {
    categories(limit: $limit, offset: $offset, order_by: { id: desc }) {
      id
      is_active
      name
      parent_id
      category_type
    }
    categories_aggregate {
      aggregate {
        count(distinct: true, columns: id)
      }
    }
  }
`;
