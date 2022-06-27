import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'


const initialState = {
    drinks: [],
    isLoading: true,
    error: null
}

export const fetchDrinksByCategory = createAsyncThunk(
    'drinks/drinksByCategory',
    async (url) => { 
        const response = await axios.get(url)

        return response.data.drinks
    }
)

export const drinksByCategorySlice = createSlice({
    name: 'drinks',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDrinksByCategory.pending]: (state) => {
            state.isLoading = true
        },
        [fetchDrinksByCategory.fulfilled]: (state, action) => {
            state.isLoading = false
            state.drinks = action.payload
        },
        [fetchDrinksByCategory.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export default drinksByCategorySlice.reducer

export const selectDrinksByCategory = state => state.drinks.drinks

export const selectIsLoading = state => state.drinks.isLoading

export const selectError = state => state.drinks.error

