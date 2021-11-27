import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  category_type?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  name: Scalars['String'];
  parent_id?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Categories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: InputMaybe<Array<Categories_Bool_Exp>>;
  _not?: InputMaybe<Categories_Bool_Exp>;
  _or?: InputMaybe<Array<Categories_Bool_Exp>>;
  category_type?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  parent_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  category_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  category_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  category_type?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: InputMaybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  category_type?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CategoryType = 'category_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  category_type?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  parent_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CategoryType = 'category_type',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parent_id'
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "feedback_details" */
export type Feedback_Details = {
  __typename?: 'feedback_details';
  feedback_id: Scalars['Int'];
  feedback_question_id: Scalars['Int'];
  id: Scalars['Int'];
  rating: Scalars['numeric'];
};

/** aggregated selection of "feedback_details" */
export type Feedback_Details_Aggregate = {
  __typename?: 'feedback_details_aggregate';
  aggregate?: Maybe<Feedback_Details_Aggregate_Fields>;
  nodes: Array<Feedback_Details>;
};

/** aggregate fields of "feedback_details" */
export type Feedback_Details_Aggregate_Fields = {
  __typename?: 'feedback_details_aggregate_fields';
  avg?: Maybe<Feedback_Details_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Feedback_Details_Max_Fields>;
  min?: Maybe<Feedback_Details_Min_Fields>;
  stddev?: Maybe<Feedback_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Feedback_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feedback_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Feedback_Details_Sum_Fields>;
  var_pop?: Maybe<Feedback_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Feedback_Details_Var_Samp_Fields>;
  variance?: Maybe<Feedback_Details_Variance_Fields>;
};


/** aggregate fields of "feedback_details" */
export type Feedback_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feedback_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Feedback_Details_Avg_Fields = {
  __typename?: 'feedback_details_avg_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  feedback_question_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "feedback_details". All fields are combined with a logical 'AND'. */
export type Feedback_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Feedback_Details_Bool_Exp>>;
  _not?: InputMaybe<Feedback_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Feedback_Details_Bool_Exp>>;
  feedback_id?: InputMaybe<Int_Comparison_Exp>;
  feedback_question_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "feedback_details" */
export enum Feedback_Details_Constraint {
  /** unique or primary key constraint */
  FeedbackDetailsPkey = 'feedback_details_pkey'
}

/** input type for incrementing numeric columns in table "feedback_details" */
export type Feedback_Details_Inc_Input = {
  feedback_id?: InputMaybe<Scalars['Int']>;
  feedback_question_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "feedback_details" */
export type Feedback_Details_Insert_Input = {
  feedback_id?: InputMaybe<Scalars['Int']>;
  feedback_question_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Feedback_Details_Max_Fields = {
  __typename?: 'feedback_details_max_fields';
  feedback_id?: Maybe<Scalars['Int']>;
  feedback_question_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Feedback_Details_Min_Fields = {
  __typename?: 'feedback_details_min_fields';
  feedback_id?: Maybe<Scalars['Int']>;
  feedback_question_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "feedback_details" */
export type Feedback_Details_Mutation_Response = {
  __typename?: 'feedback_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feedback_Details>;
};

/** on conflict condition type for table "feedback_details" */
export type Feedback_Details_On_Conflict = {
  constraint: Feedback_Details_Constraint;
  update_columns?: Array<Feedback_Details_Update_Column>;
  where?: InputMaybe<Feedback_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "feedback_details". */
export type Feedback_Details_Order_By = {
  feedback_id?: InputMaybe<Order_By>;
  feedback_question_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feedback_details */
export type Feedback_Details_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "feedback_details" */
export enum Feedback_Details_Select_Column {
  /** column name */
  FeedbackId = 'feedback_id',
  /** column name */
  FeedbackQuestionId = 'feedback_question_id',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating'
}

/** input type for updating data in table "feedback_details" */
export type Feedback_Details_Set_Input = {
  feedback_id?: InputMaybe<Scalars['Int']>;
  feedback_question_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Feedback_Details_Stddev_Fields = {
  __typename?: 'feedback_details_stddev_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  feedback_question_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Feedback_Details_Stddev_Pop_Fields = {
  __typename?: 'feedback_details_stddev_pop_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  feedback_question_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Feedback_Details_Stddev_Samp_Fields = {
  __typename?: 'feedback_details_stddev_samp_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  feedback_question_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Feedback_Details_Sum_Fields = {
  __typename?: 'feedback_details_sum_fields';
  feedback_id?: Maybe<Scalars['Int']>;
  feedback_question_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['numeric']>;
};

/** update columns of table "feedback_details" */
export enum Feedback_Details_Update_Column {
  /** column name */
  FeedbackId = 'feedback_id',
  /** column name */
  FeedbackQuestionId = 'feedback_question_id',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating'
}

/** aggregate var_pop on columns */
export type Feedback_Details_Var_Pop_Fields = {
  __typename?: 'feedback_details_var_pop_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  feedback_question_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Feedback_Details_Var_Samp_Fields = {
  __typename?: 'feedback_details_var_samp_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  feedback_question_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Feedback_Details_Variance_Fields = {
  __typename?: 'feedback_details_variance_fields';
  feedback_id?: Maybe<Scalars['Float']>;
  feedback_question_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "feedback_form" */
export type Feedback_Form = {
  __typename?: 'feedback_form';
  alias: Scalars['String'];
  category_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  producer_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

/** aggregated selection of "feedback_form" */
export type Feedback_Form_Aggregate = {
  __typename?: 'feedback_form_aggregate';
  aggregate?: Maybe<Feedback_Form_Aggregate_Fields>;
  nodes: Array<Feedback_Form>;
};

/** aggregate fields of "feedback_form" */
export type Feedback_Form_Aggregate_Fields = {
  __typename?: 'feedback_form_aggregate_fields';
  avg?: Maybe<Feedback_Form_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Feedback_Form_Max_Fields>;
  min?: Maybe<Feedback_Form_Min_Fields>;
  stddev?: Maybe<Feedback_Form_Stddev_Fields>;
  stddev_pop?: Maybe<Feedback_Form_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feedback_Form_Stddev_Samp_Fields>;
  sum?: Maybe<Feedback_Form_Sum_Fields>;
  var_pop?: Maybe<Feedback_Form_Var_Pop_Fields>;
  var_samp?: Maybe<Feedback_Form_Var_Samp_Fields>;
  variance?: Maybe<Feedback_Form_Variance_Fields>;
};


/** aggregate fields of "feedback_form" */
export type Feedback_Form_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feedback_Form_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Feedback_Form_Avg_Fields = {
  __typename?: 'feedback_form_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "feedback_form". All fields are combined with a logical 'AND'. */
export type Feedback_Form_Bool_Exp = {
  _and?: InputMaybe<Array<Feedback_Form_Bool_Exp>>;
  _not?: InputMaybe<Feedback_Form_Bool_Exp>;
  _or?: InputMaybe<Array<Feedback_Form_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  producer_id?: InputMaybe<Int_Comparison_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feedback_form" */
export enum Feedback_Form_Constraint {
  /** unique or primary key constraint */
  FeedbackFormPkey = 'feedback_form_pkey'
}

/** input type for incrementing numeric columns in table "feedback_form" */
export type Feedback_Form_Inc_Input = {
  category_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "feedback_form" */
export type Feedback_Form_Insert_Input = {
  alias?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Feedback_Form_Max_Fields = {
  __typename?: 'feedback_form_max_fields';
  alias?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  producer_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Feedback_Form_Min_Fields = {
  __typename?: 'feedback_form_min_fields';
  alias?: Maybe<Scalars['String']>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  producer_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "feedback_form" */
export type Feedback_Form_Mutation_Response = {
  __typename?: 'feedback_form_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feedback_Form>;
};

/** on conflict condition type for table "feedback_form" */
export type Feedback_Form_On_Conflict = {
  constraint: Feedback_Form_Constraint;
  update_columns?: Array<Feedback_Form_Update_Column>;
  where?: InputMaybe<Feedback_Form_Bool_Exp>;
};

/** Ordering options when selecting data from "feedback_form". */
export type Feedback_Form_Order_By = {
  alias?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  producer_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feedback_form */
export type Feedback_Form_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "feedback_form" */
export enum Feedback_Form_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  ProducerId = 'producer_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "feedback_form" */
export type Feedback_Form_Set_Input = {
  alias?: InputMaybe<Scalars['String']>;
  category_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Feedback_Form_Stddev_Fields = {
  __typename?: 'feedback_form_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Feedback_Form_Stddev_Pop_Fields = {
  __typename?: 'feedback_form_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Feedback_Form_Stddev_Samp_Fields = {
  __typename?: 'feedback_form_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Feedback_Form_Sum_Fields = {
  __typename?: 'feedback_form_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  producer_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "feedback_form" */
export enum Feedback_Form_Update_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  ProducerId = 'producer_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Feedback_Form_Var_Pop_Fields = {
  __typename?: 'feedback_form_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Feedback_Form_Var_Samp_Fields = {
  __typename?: 'feedback_form_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Feedback_Form_Variance_Fields = {
  __typename?: 'feedback_form_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "feedback_questions" */
export type Feedback_Questions = {
  __typename?: 'feedback_questions';
  feedback_form_id: Scalars['Int'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  title: Scalars['String'];
};

/** aggregated selection of "feedback_questions" */
export type Feedback_Questions_Aggregate = {
  __typename?: 'feedback_questions_aggregate';
  aggregate?: Maybe<Feedback_Questions_Aggregate_Fields>;
  nodes: Array<Feedback_Questions>;
};

/** aggregate fields of "feedback_questions" */
export type Feedback_Questions_Aggregate_Fields = {
  __typename?: 'feedback_questions_aggregate_fields';
  avg?: Maybe<Feedback_Questions_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Feedback_Questions_Max_Fields>;
  min?: Maybe<Feedback_Questions_Min_Fields>;
  stddev?: Maybe<Feedback_Questions_Stddev_Fields>;
  stddev_pop?: Maybe<Feedback_Questions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feedback_Questions_Stddev_Samp_Fields>;
  sum?: Maybe<Feedback_Questions_Sum_Fields>;
  var_pop?: Maybe<Feedback_Questions_Var_Pop_Fields>;
  var_samp?: Maybe<Feedback_Questions_Var_Samp_Fields>;
  variance?: Maybe<Feedback_Questions_Variance_Fields>;
};


/** aggregate fields of "feedback_questions" */
export type Feedback_Questions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feedback_Questions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Feedback_Questions_Avg_Fields = {
  __typename?: 'feedback_questions_avg_fields';
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "feedback_questions". All fields are combined with a logical 'AND'. */
export type Feedback_Questions_Bool_Exp = {
  _and?: InputMaybe<Array<Feedback_Questions_Bool_Exp>>;
  _not?: InputMaybe<Feedback_Questions_Bool_Exp>;
  _or?: InputMaybe<Array<Feedback_Questions_Bool_Exp>>;
  feedback_form_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "feedback_questions" */
export enum Feedback_Questions_Constraint {
  /** unique or primary key constraint */
  FeedbackQuestionsPkey = 'feedback_questions_pkey'
}

/** input type for incrementing numeric columns in table "feedback_questions" */
export type Feedback_Questions_Inc_Input = {
  feedback_form_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "feedback_questions" */
export type Feedback_Questions_Insert_Input = {
  feedback_form_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Feedback_Questions_Max_Fields = {
  __typename?: 'feedback_questions_max_fields';
  feedback_form_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Feedback_Questions_Min_Fields = {
  __typename?: 'feedback_questions_min_fields';
  feedback_form_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "feedback_questions" */
export type Feedback_Questions_Mutation_Response = {
  __typename?: 'feedback_questions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feedback_Questions>;
};

/** on conflict condition type for table "feedback_questions" */
export type Feedback_Questions_On_Conflict = {
  constraint: Feedback_Questions_Constraint;
  update_columns?: Array<Feedback_Questions_Update_Column>;
  where?: InputMaybe<Feedback_Questions_Bool_Exp>;
};

/** Ordering options when selecting data from "feedback_questions". */
export type Feedback_Questions_Order_By = {
  feedback_form_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feedback_questions */
export type Feedback_Questions_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "feedback_questions" */
export enum Feedback_Questions_Select_Column {
  /** column name */
  FeedbackFormId = 'feedback_form_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "feedback_questions" */
export type Feedback_Questions_Set_Input = {
  feedback_form_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Feedback_Questions_Stddev_Fields = {
  __typename?: 'feedback_questions_stddev_fields';
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Feedback_Questions_Stddev_Pop_Fields = {
  __typename?: 'feedback_questions_stddev_pop_fields';
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Feedback_Questions_Stddev_Samp_Fields = {
  __typename?: 'feedback_questions_stddev_samp_fields';
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Feedback_Questions_Sum_Fields = {
  __typename?: 'feedback_questions_sum_fields';
  feedback_form_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "feedback_questions" */
export enum Feedback_Questions_Update_Column {
  /** column name */
  FeedbackFormId = 'feedback_form_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type Feedback_Questions_Var_Pop_Fields = {
  __typename?: 'feedback_questions_var_pop_fields';
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Feedback_Questions_Var_Samp_Fields = {
  __typename?: 'feedback_questions_var_samp_fields';
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Feedback_Questions_Variance_Fields = {
  __typename?: 'feedback_questions_variance_fields';
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "feedbacks" */
export type Feedbacks = {
  __typename?: 'feedbacks';
  customer_id: Scalars['Int'];
  feedback_form_id: Scalars['Int'];
  id: Scalars['Int'];
  order_id: Scalars['Int'];
};

/** aggregated selection of "feedbacks" */
export type Feedbacks_Aggregate = {
  __typename?: 'feedbacks_aggregate';
  aggregate?: Maybe<Feedbacks_Aggregate_Fields>;
  nodes: Array<Feedbacks>;
};

/** aggregate fields of "feedbacks" */
export type Feedbacks_Aggregate_Fields = {
  __typename?: 'feedbacks_aggregate_fields';
  avg?: Maybe<Feedbacks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Feedbacks_Max_Fields>;
  min?: Maybe<Feedbacks_Min_Fields>;
  stddev?: Maybe<Feedbacks_Stddev_Fields>;
  stddev_pop?: Maybe<Feedbacks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Feedbacks_Stddev_Samp_Fields>;
  sum?: Maybe<Feedbacks_Sum_Fields>;
  var_pop?: Maybe<Feedbacks_Var_Pop_Fields>;
  var_samp?: Maybe<Feedbacks_Var_Samp_Fields>;
  variance?: Maybe<Feedbacks_Variance_Fields>;
};


/** aggregate fields of "feedbacks" */
export type Feedbacks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Feedbacks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Feedbacks_Avg_Fields = {
  __typename?: 'feedbacks_avg_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "feedbacks". All fields are combined with a logical 'AND'. */
export type Feedbacks_Bool_Exp = {
  _and?: InputMaybe<Array<Feedbacks_Bool_Exp>>;
  _not?: InputMaybe<Feedbacks_Bool_Exp>;
  _or?: InputMaybe<Array<Feedbacks_Bool_Exp>>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  feedback_form_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "feedbacks" */
export enum Feedbacks_Constraint {
  /** unique or primary key constraint */
  FeedbacksPkey = 'feedbacks_pkey'
}

/** input type for incrementing numeric columns in table "feedbacks" */
export type Feedbacks_Inc_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  feedback_form_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "feedbacks" */
export type Feedbacks_Insert_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  feedback_form_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Feedbacks_Max_Fields = {
  __typename?: 'feedbacks_max_fields';
  customer_id?: Maybe<Scalars['Int']>;
  feedback_form_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Feedbacks_Min_Fields = {
  __typename?: 'feedbacks_min_fields';
  customer_id?: Maybe<Scalars['Int']>;
  feedback_form_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "feedbacks" */
export type Feedbacks_Mutation_Response = {
  __typename?: 'feedbacks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Feedbacks>;
};

/** on conflict condition type for table "feedbacks" */
export type Feedbacks_On_Conflict = {
  constraint: Feedbacks_Constraint;
  update_columns?: Array<Feedbacks_Update_Column>;
  where?: InputMaybe<Feedbacks_Bool_Exp>;
};

/** Ordering options when selecting data from "feedbacks". */
export type Feedbacks_Order_By = {
  customer_id?: InputMaybe<Order_By>;
  feedback_form_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: feedbacks */
export type Feedbacks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "feedbacks" */
export enum Feedbacks_Select_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  FeedbackFormId = 'feedback_form_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id'
}

/** input type for updating data in table "feedbacks" */
export type Feedbacks_Set_Input = {
  customer_id?: InputMaybe<Scalars['Int']>;
  feedback_form_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Feedbacks_Stddev_Fields = {
  __typename?: 'feedbacks_stddev_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Feedbacks_Stddev_Pop_Fields = {
  __typename?: 'feedbacks_stddev_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Feedbacks_Stddev_Samp_Fields = {
  __typename?: 'feedbacks_stddev_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Feedbacks_Sum_Fields = {
  __typename?: 'feedbacks_sum_fields';
  customer_id?: Maybe<Scalars['Int']>;
  feedback_form_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "feedbacks" */
export enum Feedbacks_Update_Column {
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  FeedbackFormId = 'feedback_form_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id'
}

/** aggregate var_pop on columns */
export type Feedbacks_Var_Pop_Fields = {
  __typename?: 'feedbacks_var_pop_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Feedbacks_Var_Samp_Fields = {
  __typename?: 'feedbacks_var_samp_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Feedbacks_Variance_Fields = {
  __typename?: 'feedbacks_variance_fields';
  customer_id?: Maybe<Scalars['Float']>;
  feedback_form_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "feedback_details" */
  delete_feedback_details?: Maybe<Feedback_Details_Mutation_Response>;
  /** delete single row from the table: "feedback_details" */
  delete_feedback_details_by_pk?: Maybe<Feedback_Details>;
  /** delete data from the table: "feedback_form" */
  delete_feedback_form?: Maybe<Feedback_Form_Mutation_Response>;
  /** delete single row from the table: "feedback_form" */
  delete_feedback_form_by_pk?: Maybe<Feedback_Form>;
  /** delete data from the table: "feedback_questions" */
  delete_feedback_questions?: Maybe<Feedback_Questions_Mutation_Response>;
  /** delete single row from the table: "feedback_questions" */
  delete_feedback_questions_by_pk?: Maybe<Feedback_Questions>;
  /** delete data from the table: "feedbacks" */
  delete_feedbacks?: Maybe<Feedbacks_Mutation_Response>;
  /** delete single row from the table: "feedbacks" */
  delete_feedbacks_by_pk?: Maybe<Feedbacks>;
  /** delete data from the table: "offer_products" */
  delete_offer_products?: Maybe<Offer_Products_Mutation_Response>;
  /** delete single row from the table: "offer_products" */
  delete_offer_products_by_pk?: Maybe<Offer_Products>;
  /** delete data from the table: "offers" */
  delete_offers?: Maybe<Offers_Mutation_Response>;
  /** delete single row from the table: "offers" */
  delete_offers_by_pk?: Maybe<Offers>;
  /** delete data from the table: "order_details" */
  delete_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** delete single row from the table: "order_details" */
  delete_order_details_by_pk?: Maybe<Order_Details>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "producers" */
  delete_producers?: Maybe<Producers_Mutation_Response>;
  /** delete single row from the table: "producers" */
  delete_producers_by_pk?: Maybe<Producers>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "feedback_details" */
  insert_feedback_details?: Maybe<Feedback_Details_Mutation_Response>;
  /** insert a single row into the table: "feedback_details" */
  insert_feedback_details_one?: Maybe<Feedback_Details>;
  /** insert data into the table: "feedback_form" */
  insert_feedback_form?: Maybe<Feedback_Form_Mutation_Response>;
  /** insert a single row into the table: "feedback_form" */
  insert_feedback_form_one?: Maybe<Feedback_Form>;
  /** insert data into the table: "feedback_questions" */
  insert_feedback_questions?: Maybe<Feedback_Questions_Mutation_Response>;
  /** insert a single row into the table: "feedback_questions" */
  insert_feedback_questions_one?: Maybe<Feedback_Questions>;
  /** insert data into the table: "feedbacks" */
  insert_feedbacks?: Maybe<Feedbacks_Mutation_Response>;
  /** insert a single row into the table: "feedbacks" */
  insert_feedbacks_one?: Maybe<Feedbacks>;
  /** insert data into the table: "offer_products" */
  insert_offer_products?: Maybe<Offer_Products_Mutation_Response>;
  /** insert a single row into the table: "offer_products" */
  insert_offer_products_one?: Maybe<Offer_Products>;
  /** insert data into the table: "offers" */
  insert_offers?: Maybe<Offers_Mutation_Response>;
  /** insert a single row into the table: "offers" */
  insert_offers_one?: Maybe<Offers>;
  /** insert data into the table: "order_details" */
  insert_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** insert a single row into the table: "order_details" */
  insert_order_details_one?: Maybe<Order_Details>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "producers" */
  insert_producers?: Maybe<Producers_Mutation_Response>;
  /** insert a single row into the table: "producers" */
  insert_producers_one?: Maybe<Producers>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "feedback_details" */
  update_feedback_details?: Maybe<Feedback_Details_Mutation_Response>;
  /** update single row of the table: "feedback_details" */
  update_feedback_details_by_pk?: Maybe<Feedback_Details>;
  /** update data of the table: "feedback_form" */
  update_feedback_form?: Maybe<Feedback_Form_Mutation_Response>;
  /** update single row of the table: "feedback_form" */
  update_feedback_form_by_pk?: Maybe<Feedback_Form>;
  /** update data of the table: "feedback_questions" */
  update_feedback_questions?: Maybe<Feedback_Questions_Mutation_Response>;
  /** update single row of the table: "feedback_questions" */
  update_feedback_questions_by_pk?: Maybe<Feedback_Questions>;
  /** update data of the table: "feedbacks" */
  update_feedbacks?: Maybe<Feedbacks_Mutation_Response>;
  /** update single row of the table: "feedbacks" */
  update_feedbacks_by_pk?: Maybe<Feedbacks>;
  /** update data of the table: "offer_products" */
  update_offer_products?: Maybe<Offer_Products_Mutation_Response>;
  /** update single row of the table: "offer_products" */
  update_offer_products_by_pk?: Maybe<Offer_Products>;
  /** update data of the table: "offers" */
  update_offers?: Maybe<Offers_Mutation_Response>;
  /** update single row of the table: "offers" */
  update_offers_by_pk?: Maybe<Offers>;
  /** update data of the table: "order_details" */
  update_order_details?: Maybe<Order_Details_Mutation_Response>;
  /** update single row of the table: "order_details" */
  update_order_details_by_pk?: Maybe<Order_Details>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "producers" */
  update_producers?: Maybe<Producers_Mutation_Response>;
  /** update single row of the table: "producers" */
  update_producers_by_pk?: Maybe<Producers>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Feedback_DetailsArgs = {
  where: Feedback_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feedback_Details_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Feedback_FormArgs = {
  where: Feedback_Form_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feedback_Form_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Feedback_QuestionsArgs = {
  where: Feedback_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feedback_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_FeedbacksArgs = {
  where: Feedbacks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Feedbacks_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Offer_ProductsArgs = {
  where: Offer_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Offer_Products_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OffersArgs = {
  where: Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Offers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Order_DetailsArgs = {
  where: Order_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_Details_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProducersArgs = {
  where: Producers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Producers_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: InputMaybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_DetailsArgs = {
  objects: Array<Feedback_Details_Insert_Input>;
  on_conflict?: InputMaybe<Feedback_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_Details_OneArgs = {
  object: Feedback_Details_Insert_Input;
  on_conflict?: InputMaybe<Feedback_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_FormArgs = {
  objects: Array<Feedback_Form_Insert_Input>;
  on_conflict?: InputMaybe<Feedback_Form_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_Form_OneArgs = {
  object: Feedback_Form_Insert_Input;
  on_conflict?: InputMaybe<Feedback_Form_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_QuestionsArgs = {
  objects: Array<Feedback_Questions_Insert_Input>;
  on_conflict?: InputMaybe<Feedback_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedback_Questions_OneArgs = {
  object: Feedback_Questions_Insert_Input;
  on_conflict?: InputMaybe<Feedback_Questions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FeedbacksArgs = {
  objects: Array<Feedbacks_Insert_Input>;
  on_conflict?: InputMaybe<Feedbacks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Feedbacks_OneArgs = {
  object: Feedbacks_Insert_Input;
  on_conflict?: InputMaybe<Feedbacks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offer_ProductsArgs = {
  objects: Array<Offer_Products_Insert_Input>;
  on_conflict?: InputMaybe<Offer_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offer_Products_OneArgs = {
  object: Offer_Products_Insert_Input;
  on_conflict?: InputMaybe<Offer_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OffersArgs = {
  objects: Array<Offers_Insert_Input>;
  on_conflict?: InputMaybe<Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Offers_OneArgs = {
  object: Offers_Insert_Input;
  on_conflict?: InputMaybe<Offers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_DetailsArgs = {
  objects: Array<Order_Details_Insert_Input>;
  on_conflict?: InputMaybe<Order_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_Details_OneArgs = {
  object: Order_Details_Insert_Input;
  on_conflict?: InputMaybe<Order_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProducersArgs = {
  objects: Array<Producers_Insert_Input>;
  on_conflict?: InputMaybe<Producers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Producers_OneArgs = {
  object: Producers_Insert_Input;
  on_conflict?: InputMaybe<Producers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: InputMaybe<Categories_Inc_Input>;
  _set?: InputMaybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_DetailsArgs = {
  _inc?: InputMaybe<Feedback_Details_Inc_Input>;
  _set?: InputMaybe<Feedback_Details_Set_Input>;
  where: Feedback_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_Details_By_PkArgs = {
  _inc?: InputMaybe<Feedback_Details_Inc_Input>;
  _set?: InputMaybe<Feedback_Details_Set_Input>;
  pk_columns: Feedback_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_FormArgs = {
  _inc?: InputMaybe<Feedback_Form_Inc_Input>;
  _set?: InputMaybe<Feedback_Form_Set_Input>;
  where: Feedback_Form_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_Form_By_PkArgs = {
  _inc?: InputMaybe<Feedback_Form_Inc_Input>;
  _set?: InputMaybe<Feedback_Form_Set_Input>;
  pk_columns: Feedback_Form_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_QuestionsArgs = {
  _inc?: InputMaybe<Feedback_Questions_Inc_Input>;
  _set?: InputMaybe<Feedback_Questions_Set_Input>;
  where: Feedback_Questions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feedback_Questions_By_PkArgs = {
  _inc?: InputMaybe<Feedback_Questions_Inc_Input>;
  _set?: InputMaybe<Feedback_Questions_Set_Input>;
  pk_columns: Feedback_Questions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FeedbacksArgs = {
  _inc?: InputMaybe<Feedbacks_Inc_Input>;
  _set?: InputMaybe<Feedbacks_Set_Input>;
  where: Feedbacks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Feedbacks_By_PkArgs = {
  _inc?: InputMaybe<Feedbacks_Inc_Input>;
  _set?: InputMaybe<Feedbacks_Set_Input>;
  pk_columns: Feedbacks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Offer_ProductsArgs = {
  _inc?: InputMaybe<Offer_Products_Inc_Input>;
  _set?: InputMaybe<Offer_Products_Set_Input>;
  where: Offer_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Offer_Products_By_PkArgs = {
  _inc?: InputMaybe<Offer_Products_Inc_Input>;
  _set?: InputMaybe<Offer_Products_Set_Input>;
  pk_columns: Offer_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OffersArgs = {
  _inc?: InputMaybe<Offers_Inc_Input>;
  _set?: InputMaybe<Offers_Set_Input>;
  where: Offers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Offers_By_PkArgs = {
  _inc?: InputMaybe<Offers_Inc_Input>;
  _set?: InputMaybe<Offers_Set_Input>;
  pk_columns: Offers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_DetailsArgs = {
  _inc?: InputMaybe<Order_Details_Inc_Input>;
  _set?: InputMaybe<Order_Details_Set_Input>;
  where: Order_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_Details_By_PkArgs = {
  _inc?: InputMaybe<Order_Details_Inc_Input>;
  _set?: InputMaybe<Order_Details_Set_Input>;
  pk_columns: Order_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: InputMaybe<Orders_Inc_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProducersArgs = {
  _inc?: InputMaybe<Producers_Inc_Input>;
  _set?: InputMaybe<Producers_Set_Input>;
  where: Producers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Producers_By_PkArgs = {
  _inc?: InputMaybe<Producers_Inc_Input>;
  _set?: InputMaybe<Producers_Set_Input>;
  pk_columns: Producers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** columns and relationships of "offer_products" */
export type Offer_Products = {
  __typename?: 'offer_products';
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  offer_id: Scalars['Int'];
  product_id: Scalars['Int'];
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "offer_products" */
export type Offer_Products_Aggregate = {
  __typename?: 'offer_products_aggregate';
  aggregate?: Maybe<Offer_Products_Aggregate_Fields>;
  nodes: Array<Offer_Products>;
};

/** aggregate fields of "offer_products" */
export type Offer_Products_Aggregate_Fields = {
  __typename?: 'offer_products_aggregate_fields';
  avg?: Maybe<Offer_Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Offer_Products_Max_Fields>;
  min?: Maybe<Offer_Products_Min_Fields>;
  stddev?: Maybe<Offer_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Offer_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Offer_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Offer_Products_Sum_Fields>;
  var_pop?: Maybe<Offer_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Offer_Products_Var_Samp_Fields>;
  variance?: Maybe<Offer_Products_Variance_Fields>;
};


/** aggregate fields of "offer_products" */
export type Offer_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Offer_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Offer_Products_Avg_Fields = {
  __typename?: 'offer_products_avg_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "offer_products". All fields are combined with a logical 'AND'. */
export type Offer_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Offer_Products_Bool_Exp>>;
  _not?: InputMaybe<Offer_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Offer_Products_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  offer_id?: InputMaybe<Int_Comparison_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "offer_products" */
export enum Offer_Products_Constraint {
  /** unique or primary key constraint */
  OfferProductsPkey = 'offer_products_pkey'
}

/** input type for incrementing numeric columns in table "offer_products" */
export type Offer_Products_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  offer_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "offer_products" */
export type Offer_Products_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  offer_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Offer_Products_Max_Fields = {
  __typename?: 'offer_products_max_fields';
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Offer_Products_Min_Fields = {
  __typename?: 'offer_products_min_fields';
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "offer_products" */
export type Offer_Products_Mutation_Response = {
  __typename?: 'offer_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Offer_Products>;
};

/** on conflict condition type for table "offer_products" */
export type Offer_Products_On_Conflict = {
  constraint: Offer_Products_Constraint;
  update_columns?: Array<Offer_Products_Update_Column>;
  where?: InputMaybe<Offer_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "offer_products". */
export type Offer_Products_Order_By = {
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  offer_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: offer_products */
export type Offer_Products_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "offer_products" */
export enum Offer_Products_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity'
}

/** input type for updating data in table "offer_products" */
export type Offer_Products_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  offer_id?: InputMaybe<Scalars['Int']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Offer_Products_Stddev_Fields = {
  __typename?: 'offer_products_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Offer_Products_Stddev_Pop_Fields = {
  __typename?: 'offer_products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Offer_Products_Stddev_Samp_Fields = {
  __typename?: 'offer_products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Offer_Products_Sum_Fields = {
  __typename?: 'offer_products_sum_fields';
  id?: Maybe<Scalars['Int']>;
  offer_id?: Maybe<Scalars['Int']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
};

/** update columns of table "offer_products" */
export enum Offer_Products_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  OfferId = 'offer_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity'
}

/** aggregate var_pop on columns */
export type Offer_Products_Var_Pop_Fields = {
  __typename?: 'offer_products_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Offer_Products_Var_Samp_Fields = {
  __typename?: 'offer_products_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Offer_Products_Variance_Fields = {
  __typename?: 'offer_products_variance_fields';
  id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "offers" */
export type Offers = {
  __typename?: 'offers';
  created_ate: Scalars['date'];
  end_date: Scalars['timestamp'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  producer_id: Scalars['Int'];
  start_date: Scalars['timestamp'];
};

/** aggregated selection of "offers" */
export type Offers_Aggregate = {
  __typename?: 'offers_aggregate';
  aggregate?: Maybe<Offers_Aggregate_Fields>;
  nodes: Array<Offers>;
};

/** aggregate fields of "offers" */
export type Offers_Aggregate_Fields = {
  __typename?: 'offers_aggregate_fields';
  avg?: Maybe<Offers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Offers_Max_Fields>;
  min?: Maybe<Offers_Min_Fields>;
  stddev?: Maybe<Offers_Stddev_Fields>;
  stddev_pop?: Maybe<Offers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Offers_Stddev_Samp_Fields>;
  sum?: Maybe<Offers_Sum_Fields>;
  var_pop?: Maybe<Offers_Var_Pop_Fields>;
  var_samp?: Maybe<Offers_Var_Samp_Fields>;
  variance?: Maybe<Offers_Variance_Fields>;
};


/** aggregate fields of "offers" */
export type Offers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Offers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Offers_Avg_Fields = {
  __typename?: 'offers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "offers". All fields are combined with a logical 'AND'. */
export type Offers_Bool_Exp = {
  _and?: InputMaybe<Array<Offers_Bool_Exp>>;
  _not?: InputMaybe<Offers_Bool_Exp>;
  _or?: InputMaybe<Array<Offers_Bool_Exp>>;
  created_ate?: InputMaybe<Date_Comparison_Exp>;
  end_date?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  producer_id?: InputMaybe<Int_Comparison_Exp>;
  start_date?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "offers" */
export enum Offers_Constraint {
  /** unique or primary key constraint */
  OffersId2Key = 'offers_id2_key',
  /** unique or primary key constraint */
  OffersPkey = 'offers_pkey'
}

/** input type for incrementing numeric columns in table "offers" */
export type Offers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  producer_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "offers" */
export type Offers_Insert_Input = {
  created_ate?: InputMaybe<Scalars['date']>;
  end_date?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Offers_Max_Fields = {
  __typename?: 'offers_max_fields';
  created_ate?: Maybe<Scalars['date']>;
  end_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  producer_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Offers_Min_Fields = {
  __typename?: 'offers_min_fields';
  created_ate?: Maybe<Scalars['date']>;
  end_date?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  producer_id?: Maybe<Scalars['Int']>;
  start_date?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "offers" */
export type Offers_Mutation_Response = {
  __typename?: 'offers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Offers>;
};

/** on conflict condition type for table "offers" */
export type Offers_On_Conflict = {
  constraint: Offers_Constraint;
  update_columns?: Array<Offers_Update_Column>;
  where?: InputMaybe<Offers_Bool_Exp>;
};

/** Ordering options when selecting data from "offers". */
export type Offers_Order_By = {
  created_ate?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  producer_id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
};

/** primary key columns input for table: offers */
export type Offers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "offers" */
export enum Offers_Select_Column {
  /** column name */
  CreatedAte = 'created_ate',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  ProducerId = 'producer_id',
  /** column name */
  StartDate = 'start_date'
}

/** input type for updating data in table "offers" */
export type Offers_Set_Input = {
  created_ate?: InputMaybe<Scalars['date']>;
  end_date?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  start_date?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Offers_Stddev_Fields = {
  __typename?: 'offers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Offers_Stddev_Pop_Fields = {
  __typename?: 'offers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Offers_Stddev_Samp_Fields = {
  __typename?: 'offers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Offers_Sum_Fields = {
  __typename?: 'offers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  producer_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "offers" */
export enum Offers_Update_Column {
  /** column name */
  CreatedAte = 'created_ate',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  ProducerId = 'producer_id',
  /** column name */
  StartDate = 'start_date'
}

/** aggregate var_pop on columns */
export type Offers_Var_Pop_Fields = {
  __typename?: 'offers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Offers_Var_Samp_Fields = {
  __typename?: 'offers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Offers_Variance_Fields = {
  __typename?: 'offers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "order_details" */
export type Order_Details = {
  __typename?: 'order_details';
  id: Scalars['Int'];
  is_fullfiled: Scalars['Boolean'];
  price: Scalars['numeric'];
  product_id: Scalars['Int'];
  quantity: Scalars['Int'];
  total: Scalars['numeric'];
};

/** aggregated selection of "order_details" */
export type Order_Details_Aggregate = {
  __typename?: 'order_details_aggregate';
  aggregate?: Maybe<Order_Details_Aggregate_Fields>;
  nodes: Array<Order_Details>;
};

/** aggregate fields of "order_details" */
export type Order_Details_Aggregate_Fields = {
  __typename?: 'order_details_aggregate_fields';
  avg?: Maybe<Order_Details_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Order_Details_Max_Fields>;
  min?: Maybe<Order_Details_Min_Fields>;
  stddev?: Maybe<Order_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Details_Sum_Fields>;
  var_pop?: Maybe<Order_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Details_Var_Samp_Fields>;
  variance?: Maybe<Order_Details_Variance_Fields>;
};


/** aggregate fields of "order_details" */
export type Order_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Order_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Order_Details_Avg_Fields = {
  __typename?: 'order_details_avg_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "order_details". All fields are combined with a logical 'AND'. */
export type Order_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Details_Bool_Exp>>;
  _not?: InputMaybe<Order_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Details_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_fullfiled?: InputMaybe<Boolean_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  total?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_details" */
export enum Order_Details_Constraint {
  /** unique or primary key constraint */
  OrderDetailsPkey = 'order_details_pkey'
}

/** input type for incrementing numeric columns in table "order_details" */
export type Order_Details_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "order_details" */
export type Order_Details_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  is_fullfiled?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['numeric']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Order_Details_Max_Fields = {
  __typename?: 'order_details_max_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Order_Details_Min_Fields = {
  __typename?: 'order_details_min_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "order_details" */
export type Order_Details_Mutation_Response = {
  __typename?: 'order_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order_Details>;
};

/** on conflict condition type for table "order_details" */
export type Order_Details_On_Conflict = {
  constraint: Order_Details_Constraint;
  update_columns?: Array<Order_Details_Update_Column>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "order_details". */
export type Order_Details_Order_By = {
  id?: InputMaybe<Order_By>;
  is_fullfiled?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  total?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order_details */
export type Order_Details_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order_details" */
export enum Order_Details_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsFullfiled = 'is_fullfiled',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Total = 'total'
}

/** input type for updating data in table "order_details" */
export type Order_Details_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  is_fullfiled?: InputMaybe<Scalars['Boolean']>;
  price?: InputMaybe<Scalars['numeric']>;
  product_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  total?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Order_Details_Stddev_Fields = {
  __typename?: 'order_details_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Order_Details_Stddev_Pop_Fields = {
  __typename?: 'order_details_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Order_Details_Stddev_Samp_Fields = {
  __typename?: 'order_details_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Order_Details_Sum_Fields = {
  __typename?: 'order_details_sum_fields';
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  product_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['numeric']>;
};

/** update columns of table "order_details" */
export enum Order_Details_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsFullfiled = 'is_fullfiled',
  /** column name */
  Price = 'price',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Total = 'total'
}

/** aggregate var_pop on columns */
export type Order_Details_Var_Pop_Fields = {
  __typename?: 'order_details_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Order_Details_Var_Samp_Fields = {
  __typename?: 'order_details_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Order_Details_Variance_Fields = {
  __typename?: 'order_details_variance_fields';
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  product_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  total?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  amount: Scalars['numeric'];
  created_at: Scalars['timestamp'];
  customer_id: Scalars['Int'];
  discount?: Maybe<Scalars['numeric']>;
  id: Scalars['Int'];
  shipping_address?: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  customer_id?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  customer_id?: InputMaybe<Int_Comparison_Exp>;
  discount?: InputMaybe<Numeric_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  shipping_address?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey'
}

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  shipping_address?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  shipping_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  amount?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamp']>;
  customer_id?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  shipping_address?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  discount?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  shipping_address?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  ShippingAddress = 'shipping_address',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  customer_id?: InputMaybe<Scalars['Int']>;
  discount?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  shipping_address?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  customer_id?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  customer_id?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  customer_id?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  amount?: Maybe<Scalars['numeric']>;
  customer_id?: Maybe<Scalars['Int']>;
  discount?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  Discount = 'discount',
  /** column name */
  Id = 'id',
  /** column name */
  ShippingAddress = 'shipping_address',
  /** column name */
  Status = 'status'
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  customer_id?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  customer_id?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  customer_id?: Maybe<Scalars['Float']>;
  discount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "producers" */
export type Producers = {
  __typename?: 'producers';
  alias: Scalars['String'];
  create_at: Scalars['date'];
  create_offer: Scalars['Boolean'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  ref: Scalars['uuid'];
  title: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int'];
};

/** aggregated selection of "producers" */
export type Producers_Aggregate = {
  __typename?: 'producers_aggregate';
  aggregate?: Maybe<Producers_Aggregate_Fields>;
  nodes: Array<Producers>;
};

/** aggregate fields of "producers" */
export type Producers_Aggregate_Fields = {
  __typename?: 'producers_aggregate_fields';
  avg?: Maybe<Producers_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Producers_Max_Fields>;
  min?: Maybe<Producers_Min_Fields>;
  stddev?: Maybe<Producers_Stddev_Fields>;
  stddev_pop?: Maybe<Producers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Producers_Stddev_Samp_Fields>;
  sum?: Maybe<Producers_Sum_Fields>;
  var_pop?: Maybe<Producers_Var_Pop_Fields>;
  var_samp?: Maybe<Producers_Var_Samp_Fields>;
  variance?: Maybe<Producers_Variance_Fields>;
};


/** aggregate fields of "producers" */
export type Producers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Producers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Producers_Avg_Fields = {
  __typename?: 'producers_avg_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "producers". All fields are combined with a logical 'AND'. */
export type Producers_Bool_Exp = {
  _and?: InputMaybe<Array<Producers_Bool_Exp>>;
  _not?: InputMaybe<Producers_Bool_Exp>;
  _or?: InputMaybe<Array<Producers_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  create_at?: InputMaybe<Date_Comparison_Exp>;
  create_offer?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  ref?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "producers" */
export enum Producers_Constraint {
  /** unique or primary key constraint */
  ProducersPkey = 'producers_pkey'
}

/** input type for incrementing numeric columns in table "producers" */
export type Producers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "producers" */
export type Producers_Insert_Input = {
  alias?: InputMaybe<Scalars['String']>;
  create_at?: InputMaybe<Scalars['date']>;
  create_offer?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Producers_Max_Fields = {
  __typename?: 'producers_max_fields';
  alias?: Maybe<Scalars['String']>;
  create_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Producers_Min_Fields = {
  __typename?: 'producers_min_fields';
  alias?: Maybe<Scalars['String']>;
  create_at?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  ref?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "producers" */
export type Producers_Mutation_Response = {
  __typename?: 'producers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Producers>;
};

/** on conflict condition type for table "producers" */
export type Producers_On_Conflict = {
  constraint: Producers_Constraint;
  update_columns?: Array<Producers_Update_Column>;
  where?: InputMaybe<Producers_Bool_Exp>;
};

/** Ordering options when selecting data from "producers". */
export type Producers_Order_By = {
  alias?: InputMaybe<Order_By>;
  create_at?: InputMaybe<Order_By>;
  create_offer?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  ref?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: producers */
export type Producers_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "producers" */
export enum Producers_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  CreateOffer = 'create_offer',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Ref = 'ref',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "producers" */
export type Producers_Set_Input = {
  alias?: InputMaybe<Scalars['String']>;
  create_at?: InputMaybe<Scalars['date']>;
  create_offer?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  ref?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Producers_Stddev_Fields = {
  __typename?: 'producers_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Producers_Stddev_Pop_Fields = {
  __typename?: 'producers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Producers_Stddev_Samp_Fields = {
  __typename?: 'producers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Producers_Sum_Fields = {
  __typename?: 'producers_sum_fields';
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "producers" */
export enum Producers_Update_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  CreateOffer = 'create_offer',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  Ref = 'ref',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Producers_Var_Pop_Fields = {
  __typename?: 'producers_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Producers_Var_Samp_Fields = {
  __typename?: 'producers_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Producers_Variance_Fields = {
  __typename?: 'producers_variance_fields';
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  alias: Scalars['String'];
  base_id?: Maybe<Scalars['Int']>;
  category_id: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  measure_unit: Scalars['String'];
  price: Scalars['numeric'];
  producer_id: Scalars['Int'];
  quantity: Scalars['numeric'];
  sku: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  weight: Scalars['numeric'];
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  base_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  base_id?: InputMaybe<Int_Comparison_Exp>;
  category_id?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  measure_unit?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  producer_id?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Numeric_Comparison_Exp>;
  sku?: InputMaybe<String_Comparison_Exp>;
  thumbnail?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  weight?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  base_id?: InputMaybe<Scalars['Int']>;
  category_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['numeric']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  alias?: InputMaybe<Scalars['String']>;
  base_id?: InputMaybe<Scalars['Int']>;
  category_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  measure_unit?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  sku?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  alias?: Maybe<Scalars['String']>;
  base_id?: Maybe<Scalars['Int']>;
  category_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  measure_unit?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  producer_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  sku?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  alias?: Maybe<Scalars['String']>;
  base_id?: Maybe<Scalars['Int']>;
  category_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  measure_unit?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  producer_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  sku?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** on conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  alias?: InputMaybe<Order_By>;
  base_id?: InputMaybe<Order_By>;
  category_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  measure_unit?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  producer_id?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  sku?: InputMaybe<Order_By>;
  thumbnail?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  MeasureUnit = 'measure_unit',
  /** column name */
  Price = 'price',
  /** column name */
  ProducerId = 'producer_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Sku = 'sku',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  alias?: InputMaybe<Scalars['String']>;
  base_id?: InputMaybe<Scalars['Int']>;
  category_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  measure_unit?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  producer_id?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['numeric']>;
  sku?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  weight?: InputMaybe<Scalars['numeric']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  base_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  base_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  base_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  base_id?: Maybe<Scalars['Int']>;
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['numeric']>;
  producer_id?: Maybe<Scalars['Int']>;
  quantity?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  BaseId = 'base_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  MeasureUnit = 'measure_unit',
  /** column name */
  Price = 'price',
  /** column name */
  ProducerId = 'producer_id',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  Sku = 'sku',
  /** column name */
  Thumbnail = 'thumbnail',
  /** column name */
  Title = 'title',
  /** column name */
  Weight = 'weight'
}

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  base_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  base_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  base_id?: Maybe<Scalars['Float']>;
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  producer_id?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "feedback_details" */
  feedback_details: Array<Feedback_Details>;
  /** fetch aggregated fields from the table: "feedback_details" */
  feedback_details_aggregate: Feedback_Details_Aggregate;
  /** fetch data from the table: "feedback_details" using primary key columns */
  feedback_details_by_pk?: Maybe<Feedback_Details>;
  /** fetch data from the table: "feedback_form" */
  feedback_form: Array<Feedback_Form>;
  /** fetch aggregated fields from the table: "feedback_form" */
  feedback_form_aggregate: Feedback_Form_Aggregate;
  /** fetch data from the table: "feedback_form" using primary key columns */
  feedback_form_by_pk?: Maybe<Feedback_Form>;
  /** fetch data from the table: "feedback_questions" */
  feedback_questions: Array<Feedback_Questions>;
  /** fetch aggregated fields from the table: "feedback_questions" */
  feedback_questions_aggregate: Feedback_Questions_Aggregate;
  /** fetch data from the table: "feedback_questions" using primary key columns */
  feedback_questions_by_pk?: Maybe<Feedback_Questions>;
  /** fetch data from the table: "feedbacks" */
  feedbacks: Array<Feedbacks>;
  /** fetch aggregated fields from the table: "feedbacks" */
  feedbacks_aggregate: Feedbacks_Aggregate;
  /** fetch data from the table: "feedbacks" using primary key columns */
  feedbacks_by_pk?: Maybe<Feedbacks>;
  /** fetch data from the table: "offer_products" */
  offer_products: Array<Offer_Products>;
  /** fetch aggregated fields from the table: "offer_products" */
  offer_products_aggregate: Offer_Products_Aggregate;
  /** fetch data from the table: "offer_products" using primary key columns */
  offer_products_by_pk?: Maybe<Offer_Products>;
  /** fetch data from the table: "offers" */
  offers: Array<Offers>;
  /** fetch aggregated fields from the table: "offers" */
  offers_aggregate: Offers_Aggregate;
  /** fetch data from the table: "offers" using primary key columns */
  offers_by_pk?: Maybe<Offers>;
  /** fetch data from the table: "order_details" */
  order_details: Array<Order_Details>;
  /** fetch aggregated fields from the table: "order_details" */
  order_details_aggregate: Order_Details_Aggregate;
  /** fetch data from the table: "order_details" using primary key columns */
  order_details_by_pk?: Maybe<Order_Details>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "producers" */
  producers: Array<Producers>;
  /** fetch aggregated fields from the table: "producers" */
  producers_aggregate: Producers_Aggregate;
  /** fetch data from the table: "producers" using primary key columns */
  producers_by_pk?: Maybe<Producers>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFeedback_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Details_Order_By>>;
  where?: InputMaybe<Feedback_Details_Bool_Exp>;
};


export type Query_RootFeedback_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Details_Order_By>>;
  where?: InputMaybe<Feedback_Details_Bool_Exp>;
};


export type Query_RootFeedback_Details_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFeedback_FormArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Form_Order_By>>;
  where?: InputMaybe<Feedback_Form_Bool_Exp>;
};


export type Query_RootFeedback_Form_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Form_Order_By>>;
  where?: InputMaybe<Feedback_Form_Bool_Exp>;
};


export type Query_RootFeedback_Form_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFeedback_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Questions_Order_By>>;
  where?: InputMaybe<Feedback_Questions_Bool_Exp>;
};


export type Query_RootFeedback_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Questions_Order_By>>;
  where?: InputMaybe<Feedback_Questions_Bool_Exp>;
};


export type Query_RootFeedback_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootFeedbacksArgs = {
  distinct_on?: InputMaybe<Array<Feedbacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedbacks_Order_By>>;
  where?: InputMaybe<Feedbacks_Bool_Exp>;
};


export type Query_RootFeedbacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedbacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedbacks_Order_By>>;
  where?: InputMaybe<Feedbacks_Bool_Exp>;
};


export type Query_RootFeedbacks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOffer_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Offer_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Products_Order_By>>;
  where?: InputMaybe<Offer_Products_Bool_Exp>;
};


export type Query_RootOffer_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offer_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Products_Order_By>>;
  where?: InputMaybe<Offer_Products_Bool_Exp>;
};


export type Query_RootOffer_Products_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOffersArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Query_RootOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Query_RootOffers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrder_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Query_RootOrder_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Query_RootOrder_Details_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProducersArgs = {
  distinct_on?: InputMaybe<Array<Producers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Producers_Order_By>>;
  where?: InputMaybe<Producers_Bool_Exp>;
};


export type Query_RootProducers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Producers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Producers_Order_By>>;
  where?: InputMaybe<Producers_Bool_Exp>;
};


export type Query_RootProducers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** fetch data from the table: "feedback_details" */
  feedback_details: Array<Feedback_Details>;
  /** fetch aggregated fields from the table: "feedback_details" */
  feedback_details_aggregate: Feedback_Details_Aggregate;
  /** fetch data from the table: "feedback_details" using primary key columns */
  feedback_details_by_pk?: Maybe<Feedback_Details>;
  /** fetch data from the table: "feedback_form" */
  feedback_form: Array<Feedback_Form>;
  /** fetch aggregated fields from the table: "feedback_form" */
  feedback_form_aggregate: Feedback_Form_Aggregate;
  /** fetch data from the table: "feedback_form" using primary key columns */
  feedback_form_by_pk?: Maybe<Feedback_Form>;
  /** fetch data from the table: "feedback_questions" */
  feedback_questions: Array<Feedback_Questions>;
  /** fetch aggregated fields from the table: "feedback_questions" */
  feedback_questions_aggregate: Feedback_Questions_Aggregate;
  /** fetch data from the table: "feedback_questions" using primary key columns */
  feedback_questions_by_pk?: Maybe<Feedback_Questions>;
  /** fetch data from the table: "feedbacks" */
  feedbacks: Array<Feedbacks>;
  /** fetch aggregated fields from the table: "feedbacks" */
  feedbacks_aggregate: Feedbacks_Aggregate;
  /** fetch data from the table: "feedbacks" using primary key columns */
  feedbacks_by_pk?: Maybe<Feedbacks>;
  /** fetch data from the table: "offer_products" */
  offer_products: Array<Offer_Products>;
  /** fetch aggregated fields from the table: "offer_products" */
  offer_products_aggregate: Offer_Products_Aggregate;
  /** fetch data from the table: "offer_products" using primary key columns */
  offer_products_by_pk?: Maybe<Offer_Products>;
  /** fetch data from the table: "offers" */
  offers: Array<Offers>;
  /** fetch aggregated fields from the table: "offers" */
  offers_aggregate: Offers_Aggregate;
  /** fetch data from the table: "offers" using primary key columns */
  offers_by_pk?: Maybe<Offers>;
  /** fetch data from the table: "order_details" */
  order_details: Array<Order_Details>;
  /** fetch aggregated fields from the table: "order_details" */
  order_details_aggregate: Order_Details_Aggregate;
  /** fetch data from the table: "order_details" using primary key columns */
  order_details_by_pk?: Maybe<Order_Details>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "producers" */
  producers: Array<Producers>;
  /** fetch aggregated fields from the table: "producers" */
  producers_aggregate: Producers_Aggregate;
  /** fetch data from the table: "producers" using primary key columns */
  producers_by_pk?: Maybe<Producers>;
  /** fetch data from the table: "products" */
  products: Array<Products>;
  /** fetch aggregated fields from the table: "products" */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Categories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Categories_Order_By>>;
  where?: InputMaybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFeedback_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Details_Order_By>>;
  where?: InputMaybe<Feedback_Details_Bool_Exp>;
};


export type Subscription_RootFeedback_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Details_Order_By>>;
  where?: InputMaybe<Feedback_Details_Bool_Exp>;
};


export type Subscription_RootFeedback_Details_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFeedback_FormArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Form_Order_By>>;
  where?: InputMaybe<Feedback_Form_Bool_Exp>;
};


export type Subscription_RootFeedback_Form_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Form_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Form_Order_By>>;
  where?: InputMaybe<Feedback_Form_Bool_Exp>;
};


export type Subscription_RootFeedback_Form_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFeedback_QuestionsArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Questions_Order_By>>;
  where?: InputMaybe<Feedback_Questions_Bool_Exp>;
};


export type Subscription_RootFeedback_Questions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedback_Questions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedback_Questions_Order_By>>;
  where?: InputMaybe<Feedback_Questions_Bool_Exp>;
};


export type Subscription_RootFeedback_Questions_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFeedbacksArgs = {
  distinct_on?: InputMaybe<Array<Feedbacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedbacks_Order_By>>;
  where?: InputMaybe<Feedbacks_Bool_Exp>;
};


export type Subscription_RootFeedbacks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Feedbacks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Feedbacks_Order_By>>;
  where?: InputMaybe<Feedbacks_Bool_Exp>;
};


export type Subscription_RootFeedbacks_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOffer_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Offer_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Products_Order_By>>;
  where?: InputMaybe<Offer_Products_Bool_Exp>;
};


export type Subscription_RootOffer_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offer_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offer_Products_Order_By>>;
  where?: InputMaybe<Offer_Products_Bool_Exp>;
};


export type Subscription_RootOffer_Products_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOffersArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Subscription_RootOffers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Offers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Offers_Order_By>>;
  where?: InputMaybe<Offers_Bool_Exp>;
};


export type Subscription_RootOffers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrder_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Subscription_RootOrder_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Order_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Order_Details_Order_By>>;
  where?: InputMaybe<Order_Details_Bool_Exp>;
};


export type Subscription_RootOrder_Details_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProducersArgs = {
  distinct_on?: InputMaybe<Array<Producers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Producers_Order_By>>;
  where?: InputMaybe<Producers_Bool_Exp>;
};


export type Subscription_RootProducers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Producers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Producers_Order_By>>;
  where?: InputMaybe<Producers_Bool_Exp>;
};


export type Subscription_RootProducers_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  alias: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  is_active: Scalars['Boolean'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
  username: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  city?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone_number?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  alias?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  alias?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  alias?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  alias?: InputMaybe<Order_By>;
  city?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone_number?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  City = 'city',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  alias?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  City = 'city',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type Insert_ProducerMutationVariables = Exact<{
  payload: Producers_Insert_Input;
}>;


export type Insert_ProducerMutation = { __typename?: 'mutation_root', insert_producers_one?: { __typename?: 'producers', id: number, alias: string, ref: any, user: { __typename?: 'users', id: number, first_name: string } } | null | undefined };

export type ListProducersQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ListProducersQuery = { __typename?: 'query_root', producers: Array<{ __typename?: 'producers', title: string, is_active: boolean, create_offer: boolean, ref: any, id: number, alias: string, create_at: any, user: { __typename?: 'users', email: string, phone_number: string, username: string, password: string, last_name: string, is_active: boolean, id: number, first_name: string, city?: string | null | undefined, alias: string } }>, producers_aggregate: { __typename?: 'producers_aggregate', aggregate?: { __typename?: 'producers_aggregate_fields', count: number } | null | undefined } };


export const Insert_ProducerDocument = gql`
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
export type Insert_ProducerMutationFn = Apollo.MutationFunction<Insert_ProducerMutation, Insert_ProducerMutationVariables>;

/**
 * __useInsert_ProducerMutation__
 *
 * To run a mutation, you first call `useInsert_ProducerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsert_ProducerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertProducerMutation, { data, loading, error }] = useInsert_ProducerMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useInsert_ProducerMutation(baseOptions?: Apollo.MutationHookOptions<Insert_ProducerMutation, Insert_ProducerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Insert_ProducerMutation, Insert_ProducerMutationVariables>(Insert_ProducerDocument, options);
      }
export type Insert_ProducerMutationHookResult = ReturnType<typeof useInsert_ProducerMutation>;
export type Insert_ProducerMutationResult = Apollo.MutationResult<Insert_ProducerMutation>;
export type Insert_ProducerMutationOptions = Apollo.BaseMutationOptions<Insert_ProducerMutation, Insert_ProducerMutationVariables>;
export const ListProducersDocument = gql`
    query ListProducers($offset: Int = 0, $limit: Int = 10) {
  producers(limit: $limit, offset: $offset, order_by: {id: asc}) {
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

/**
 * __useListProducersQuery__
 *
 * To run a query within a React component, call `useListProducersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProducersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProducersQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListProducersQuery(baseOptions?: Apollo.QueryHookOptions<ListProducersQuery, ListProducersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProducersQuery, ListProducersQueryVariables>(ListProducersDocument, options);
      }
export function useListProducersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProducersQuery, ListProducersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProducersQuery, ListProducersQueryVariables>(ListProducersDocument, options);
        }
export type ListProducersQueryHookResult = ReturnType<typeof useListProducersQuery>;
export type ListProducersLazyQueryHookResult = ReturnType<typeof useListProducersLazyQuery>;
export type ListProducersQueryResult = Apollo.QueryResult<ListProducersQuery, ListProducersQueryVariables>;