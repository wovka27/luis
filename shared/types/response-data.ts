export interface IResponse<T> {
  data: T;
  success: boolean;
}

export type ResponseData<T> = Promise<IResponse<T>>;
