import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    singleDrink: {},
    isLoading: true,
    error: null
}

export const fetchSingleDrinkById = createAsyncThunk(
    'singleDrink/fetchSingleDrinkById',
    async (url) => {
        const response = await axios.get(url)

        return response.data.drinks[0]
    }
)

export const singleDrinkSlice = createSlice({
    name: 'singleDrink',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSingleDrinkById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSingleDrinkById.fulfilled]: (state, action) => {
            state.isLoading = false
            state.singleDrink = action.payload
        },
        [fetchSingleDrinkById.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export default singleDrinkSlice.reducer

export const selectSingleDrink = state => state.singleDrink.singleDrink

export const selectIsLoading = state => state.singleDrink.isLoading

export const selectError = state => state.singleDrink.error