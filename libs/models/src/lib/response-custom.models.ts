import { Response } from 'express';

export interface ResponseCustomModel<T> extends Response {
  requestedAt?: string;
  results?: number;
  data?: T;
}
