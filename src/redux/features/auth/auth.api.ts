import { baseApi } from "@/redux/api";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        // user register endpoint 
        register: builder.mutation({
            query: ({ registerDat }) => ({
                url: `/auth/register`,
                method: "POST",
                body: registerDat
            })
        }),


        // user login endpoint 
        login: builder.mutation({
            query: (loginData) => ({
                url: `/auth/login`,
                method: "POST",
                body: loginData
            })
        }),



        // user logout end point
        logOut: builder.mutation({
            query: () => ({
                url: '/auth/logout'
            })
        }) 
    })
});

export const {
    useLogOutMutation,
    useLoginMutation,
    useRegisterMutation
} = authApi;

export default authApi.reducer;