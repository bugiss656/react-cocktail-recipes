import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    fontSize: {},
    includeImage: true
}

export const pdfSlice = createSlice({
    name: 'pdf',
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

export default pdfSlice.reducer

export const { setFontSize, toggleIncludeImage } = pdfSlice.actions

export const selectFontSize = state => state.pdf.fontSize

export const selectIncludeImage = state => state.pdf.includeImage