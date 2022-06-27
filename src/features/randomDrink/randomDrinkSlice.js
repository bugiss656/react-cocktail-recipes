import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'


const initialState = {
    randomDrink: {},
    isLoading: true,
    error: null
}

export const fetchRandomDrink = createAsyncThunk(
    'randomDrink/fetchRandomDrink',
    async (url) => {
        const response = await axios.get(url)

        return response.data.drinks[0]
    }
)

export const randomDrinkSlice = createSlice({
    name: 'randomDrink',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchRandomDrink.pending]: (state) => {
            state.isLoading = true
        },
        [fetchRandomDrink.fulfilled]: (state, action) => {
            state.isLoading = false
            state.randomDrink = action.payload
        },
        [fetchRandomDrink.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export default randomDrinkSlice.reducer

export const selectRandomDrink = state => state.randomDrink.randomDrink

export const selectIsLoading = state => state.randomDrink.isLoading

export const selectError = state => state.randomDrink.error