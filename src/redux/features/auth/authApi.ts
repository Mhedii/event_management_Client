import { baseApi } from "@/redux/api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    createUser: builder.mutation({
      query: (newUser: any) => ({
        url: "/users/signup",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});
export const { useCreateUserMutation } = authApi;
