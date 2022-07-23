import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    searchQuery: '',
    searchResults: [],
    isDropdownActive: false,
    isLoading: true,
    error: null
}

export const fetchSearchResults = createAsyncThunk(
    'search/fetchSearchResults',
    async (url) => {
        const response = await axios.get(url)

        return response.data.drinks
    }
)

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setDropdownState: (state, action) => {
            state.isDropdownActive = action.payload
        }
    },
    extraReducers: {
        [fetchSearchResults.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSearchResults.fulfilled]: (state, action) => {
            state.searchResults = []
            state.isLoading = false
            state.searchResults = action.payload
        },
        [fetchSearchResults.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export const { updateSearchQuery, setDropdownState } = searchSlice.actions

export default searchSlice.reducer

export const selectSearchQuery = state => state.search.searchQuery

export const selectSearchResults = state => state.search.searchResults

export const selectIsDropdownActive = state => state.search.isDropdownActive

export const selectIsLoading = state => state.search.isLoading

export const selectError = state => state.search.error