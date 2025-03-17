import { readBody, getHeaders, getQuery, setResponseStatus, type H3Event } from 'h3';
import type { ApiResponse, ApiRequestParams } from '~/server/types/api-types';

export const sendApiResponse = <T>(
  event: H3Event,
  status: number,
  payload: ApiResponse<T>,
): ApiResponse<T> => {
  setResponseStatus(event, status);
  return payload;
};

export const getApiRequestParams = async (event: H3Event): Promise<ApiRequestParams> => {
  const body = await readBody(event);
  const method = event.method;
  const headers = getHeaders(event);
  const query = getQuery(event);

  return { body, method, headers, query };
};
