import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

// Create a base query with the base URL
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Create an API slice
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'User', 'Order'], // Define tag types for caching
  endpoints: (builder) => ({}), // Define endpoints here
});
