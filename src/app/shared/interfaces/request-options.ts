export interface RequestOptions {
  fields?: string;
  order?: string;
  offset?: number;
  limit?: number;
  filter?: string;
  include_count?: boolean;
}
