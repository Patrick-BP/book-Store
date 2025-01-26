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
            query: (newbook) => ({
                url: '/new-book',
                method: 'POST',
                body: newbook
            }),
            invalidatesTags: ['Books']

        }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (results, error, id) => [{type: 'Books', id}]

        }),
        updateBook: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }   
            })
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/del/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Books']
        })
    })
});

export const {useFetchAllBooksQuery, useAddBookMutation, useFetchBookByIdQuery, useDeleteBookMutation, useUpdateBookMutation } = booksApi;
export default booksApi;