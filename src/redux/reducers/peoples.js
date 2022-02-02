import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const slice = createSlice({
    name: "peoples",
    initialState: {
        list: [],
        loading: true,
    },

    reducers: {
        dataRequested: (data, action) => {
            data.loading = true;
        },

        dataReceived: (data, action) => {
            data.list = action.payload;
            data.loading = false;
        },

        dataRequestFailed: (data, action) => {
            data.loading = false;
        },
    },
});

export default slice.reducer;

const { dataRequested, dataReceived, dataRequestFailed } = slice.actions;

// const url = `?page=${page}`;

export const loadData = (page) => (dispatch) => {
    const url = `?page=${page}`;
    return dispatch(
        apiCallBegan({
            url,
            onStart: dataRequested.type,
            onSuccess: dataReceived.type,
            onError: dataRequestFailed.type,
        })
    );
};