import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    fontSizeType: 'medium',
    fontSizeValue: '1.1',
    includeImage: true
}

export const printSlice = createSlice({
    name: 'print',
    initialState,
    reducers: {
        setFontSizeType: (state, action) => {
            state.fontSizeType = action.payload
        },
        setFontSizeValue: (state, action) => {
            state.fontSizeValue = action.payload
        },
        toggleIncludeImage: (state) => {
            state.includeImage = !state.includeImage
        }
    }
})

export default printSlice.reducer

export const { setFontSizeType, setFontSizeValue, toggleIncludeImage } = printSlice.actions

export const selectFontSizeType = state => state.print.fontSizeType

export const selectFontSizeValue = state => state.print.fontSizeValue

export const selectIncludeImage = state => state.print.includeImage