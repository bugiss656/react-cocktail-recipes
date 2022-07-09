import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isExpanded: false
}

const categoriesDropdownSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setDropdownState: (state, action) => {
            state.isExpanded = action.payload
        }
    }
})

export default categoriesDropdownSlice.reducer

export const { setDropdownState } = categoriesDropdownSlice.actions

export const selectIsExpanded = state => state.categories.isExpanded
