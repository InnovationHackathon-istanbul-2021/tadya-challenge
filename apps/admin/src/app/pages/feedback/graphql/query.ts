import gql from 'graphql-tag';

export const LIST_FEEDBACK_FORMS = gql`
  query LIST_FEEDBACK_FORMS($limit: Int = 10, $offset: Int = 0) {
    feedback_form(limit: $limit, offset: $offset, order_by: { id: desc }) {
      alias
      created_at
      id
      is_active
      producer_id
      product_id
      title
      feedback_questions {
        title
        is_active
        category
      }
      feedback_questions_aggregate {
        aggregate {
          count(columns: id, distinct: true)
        }
      }
    }
    feedback_form_aggregate {
      aggregate {
        count(columns: id)
      }
    }
  }
`;

export const FIND_FEEDBACK_FORM_BY_ID = gql`
  query FIND_FEEDBACK_FORM_BY_ID(
    $limit: Int = 10
    $offset: Int = 0
    $id: Int_comparison_exp!
  ) {
    feedback_form(
      limit: $limit
      offset: $offset
      order_by: { id: desc }
      where: { id: $id }
    ) {
      alias
      created_at
      id
      is_active
      producer_id
      product_id
      title
      feedback_questions {
        title
        is_active
        category
      }
      feedback_questions_aggregate {
        aggregate {
          count(columns: id, distinct: true)
        }
      }
    }
  }
`;
