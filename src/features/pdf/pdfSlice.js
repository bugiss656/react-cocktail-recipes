import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    fontSize: {},
    includeImage: true
}

export const printSlice = createSlice({
    name: 'print',
    initialState,
    reducers: {
        setFontSize: (state, action) => {
            state.fontSize = action.payload
        },
        toggleIncludeImage: (state) => {
            state.includeImage = !state.includeImage
        }
    }
})

export default printSlice.reducer

export const { setFontSize, toggleIncludeImage } = printSlice.actions

export const selectFontSize = state => state.print.fontSize

export const selectIncludeImage = state => state.print.includeImage