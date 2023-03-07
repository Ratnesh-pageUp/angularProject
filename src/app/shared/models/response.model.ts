export interface Response<T> {
  message: string;
  status: boolean;
  data: T;
}

export interface Result<T> {
  data: T;
  total: number;
}

export interface PaginatedResponse<T> {
  message: string;
  status: boolean;
  data: Result<T>;
}
