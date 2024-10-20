import { apiSlice } from "./apiSlice";
import { TYPE_URL } from "../constants";

export const typeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createType: builder.mutation({
      query: (newGenre) => ({
        url: `${GENRE_URL}`,
        method: "POST",
        body: newGenre,
      }),
    }),

    updateType: builder.mutation({
      query: ({ id, updateGenre }) => ({
        url: `${GENRE_URL}/${id}`,
        method: "PUT",
        body: updateGenre,
      }),
    }),

    deleteType: builder.mutation({
      query: (id) => ({
        url: `${GENRE_URL}/${id}`,
        method: "DELETE",
      }),
    }),

    fetchType: builder.query({
      query: () => `${GENRE_URL}/genres`,
    }),
  }),
});

export const {
  useCreateTypeMutation,
  useUpdateTypeMutation,
  useDeleteTypeMutation,
  useFetchTypeQuery,
} = typeApiSlice;