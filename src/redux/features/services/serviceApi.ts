import { baseApi } from "@/redux/api/baseApi";

const api = baseApi;
const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => ({
        url: "/services/",
        method: "GET",
        //   "/services",
      }),
    }),
    // getByFilter: builder.query({
    //   query: (filters) => ({
    //     url: `books/allbooks/?publicaitonYear=${filters || ''}&?genre=${
    //       filters || ''
    //     }`,
    //   }),
    // }),
    // getFilteredBooks: builder.query({
    //   query: ({ searchTerm, filters }) => ({
    //     url: `books/allbooks/?title=${searchTerm}&author=${searchTerm}&${
    //       filters.publicaitonYear
    //         ? `publicaitonYear=${filters.publicaitonYear}`
    //         : ''
    //     }&${filters.genre ? `genre=${filters.genre}` : ''}`,
    //   }),
    // }),

    //   url: `books/allbooks/?title=${searchTerm}
    //   &?author=${
    //     searchTerm || ''
    //   }&?genre=${searchTerm || ''}
    //   &?genre=${filters.genre || ''}
    //   &?publicaitonYear=${filters.publicaitonYear || ''}`,
    // }),
    // singleBook: builder.query<object, string>({
    //   query: (id) => `/books/${id}`,
    // }),
    // singleBook: builder.query({
    //   query: (id) => `/books/${id}`,
    // }),
    // AddBook: builder.mutation({
    //   query: (data) => ({
    //     url: `books/add-book`,
    //     method: 'POST',
    //     body: data,
    //   }),

    //   invalidatesTags: ['books'],
    // }),
    // AddReview: builder.mutation({
    //   query: ({ _id, data }) => ({
    //     url: `books/${_id}/reviews`,
    //     method: 'POST',
    //     body: data,
    //   }),

    //   invalidatesTags: ['books'],
    // }),
    // updateBook: builder.mutation({
    //   query: ({ _id, data }) => ({
    //     url: `books/${_id}`,
    //     method: 'PATCH',
    //     body: data,
    //   }),

    //   invalidatesTags: ['books'],
    // }),
    // deleteBook: builder.mutation<void, string>({
    //   query: (id) => ({
    //     url: `books/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: ['books'],
    // }),
    // updateBookStatus: builder.mutation<void, { id: number; status: string }>({
    //   query: ({ id, status }) => ({
    //     url: `books/${id}`,
    //     method: 'PATCH',
    //     body: { status },
    //   }),
    // }),
  }),
});
export const {
  useGetServicesQuery,
  //   useGetBooksQuery,
  //   useUpdateBookStatusMutation,
  //   useGetFilteredBooksQuery,
  //   useSingleBookQuery,
  //   useAddBookMutation,
  //   useDeleteBookMutation,
  //   useUpdateBookMutation,
  //   useGetByFilterQuery,
  //   useAddReviewMutation,
} = serviceApi;
