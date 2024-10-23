import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface IAuth {
    user: {
        name: string,
        email: string,
        role: 'admin' | 'customer'
    } | null,
}


const initialState: IAuth = {
    user: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state: IAuth, action) => {
            const { user } = action.payload;
            state.user = user;
        },

        logOutUser: (state: IAuth) => {
            state.user = null
        }
    }
});



export const {logOutUser, setUser} = authSlice.actions;
export const authReducer = authSlice.reducer;
export const currentUser = (state: RootState) => state.authReducer.user;