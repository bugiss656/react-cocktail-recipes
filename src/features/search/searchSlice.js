import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    searchQuery: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        }
    }
})

export const { updateSearchQuery } = searchSlice.actions

export default searchSlice.reducer

export const returnSearchQuery = state => state.search.searchQuery