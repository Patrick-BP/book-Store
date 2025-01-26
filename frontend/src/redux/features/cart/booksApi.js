import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../../utils/getBaseUrl';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    Credentials: 'include',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if(token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    }

})

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: () => '/',
            providesTags: ['Books']
        }),
        addBook: builder.mutation({
            query: (book) => ({
                url: '/',
                method: 'POST',
                body: book
            })
        }),
        getBook: builder.query({
            query: (id) => `/${id}`
        }),
        updateBook: builder.mutation({
            query: ({id, book}) => ({
                url: `/${id}`,
                method: 'PUT',
                body: book
            })
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE'
            })
        })
    })
});

export const {useFetchAllBooksQuery} = booksApi;
export default booksApi;