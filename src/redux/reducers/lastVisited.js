import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "lastVisited",
    initialState:{ list: []},

    reducers: {
        prepare: (state, action) =>  {
            const initial = { id:action.payload.id, charData: action.payload.charData }
            state.list.push(initial)
        },
    }
});


export const { prepare } = slice.actions;

export default slice.reducer;