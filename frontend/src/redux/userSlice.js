import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    loading: false,
    error: false
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = true;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;

        },
        subscription: (state, action) => {
            if (state.currentUser.subscribedUsers.includes(action.payload)) {

                //splice method - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
                state.currentUser.subscribedUsers.splice(
                    state.currentUser?.subscribedUsers.findIndex(
                        channelId => channelId === action.payload
                    ), 1
                );
            } else {
                state.currentUser.subscribedUsers.push(action.payload)
            }
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription } = userSlice.actions;

export default userSlice.reducer;