import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/getBaseUrl';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,
    Credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if(token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }

})

const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery,
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        fetchAllOrders: builder.query({
            query: () => '/',
            providesTags: ['Orders']
        }),
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: '/new-order',
                method: 'POST',
                body: newOrder
            }),
            invalidatesTags: ['Orders']

        }),
        fetchOrdersByEmail: builder.query({
            query: (email) => ({
                url: `/${email}`
            }),
            
            providesTags: ['Orders']

        }),
    
    })
});

export const {useFetchAllOrdersQuery, useCreateOrderMutation, useFetchOrdersByEmailQuery } = ordersApi;
export default ordersApi;