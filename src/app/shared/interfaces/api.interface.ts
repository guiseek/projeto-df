export interface Meta {
  count: number;
  next: number;
}
export interface ApiResponse<Type> {
  resource: Type[];
  meta?: Meta;
}