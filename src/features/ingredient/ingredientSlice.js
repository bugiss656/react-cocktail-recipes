import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    ingredient: {},
    isLoading: true,
    error: null
}

export const fetchIngredientByName = createAsyncThunk(
    'ingredient/fetchIngredientByName',
    async (url) => {
        const response = await axios.get(url)

        return response.data.ingredients[0]
    }
)

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchIngredientByName.pending]: (state) => {
            state.isLoading = true
        },
        [fetchIngredientByName.fulfilled]: (state, action) => {
            state.isLoading = false
            state.ingredient = action.payload
        },
        [fetchIngredientByName.rejected]: (state, action) => {
            state.error = action.error.message
        }
    }
})

export default ingredientSlice.reducer

export const selectIngredient = state => state.ingredient.ingredient

export const selectIsLoading = state => state.ingredient.isLoading

export const selectError = state => state.ingredient.error