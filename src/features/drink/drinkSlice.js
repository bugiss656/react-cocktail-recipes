import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'


const initialState = {
    drink: {},
    isLoading: true,
    error: null
}

export const fetchDrink = createAsyncThunk(
    'drink/fetchDrink',
    async (url) => {
        const response = await axios.get(url)

        return response.data.drinks[0]
    }
)

const drinkSlice = createSlice({
    name: 'drink',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchDrink.pending]: (state) => {
            state.drink = {}
            state.isLoading = true
        },
        [fetchDrink.fulfilled]: (state, action) => {
            state.isLoading = false
            state.drink = action.payload
        },
        [fetchDrink.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export default drinkSlice.reducer

export const selectDrink = state => state.drink.drink

export const selectIsLoading = state => state.drink.isLoading

export const selectError = state => state.drink.error