import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    fontSize: {},
    includeImage: true,
    isModalOpen: false,
    filename: '',
    isAlertActive: false
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
        },
        setModalState: (state, action) => {
            state.isModalOpen = action.payload
        },
        setFilename: (state, action) => {
            state.filename = action.payload
        },
        setAlertState: (state, action) => {
            state.isAlertActive = action.payload
        }
    }
})

export default pdfSlice.reducer

export const { setFontSize, toggleIncludeImage, setModalState, setFilename, setAlertState } = pdfSlice.actions

export const selectFontSize = state => state.pdf.fontSize

export const selectIncludeImage = state => state.pdf.includeImage

export const selectIsModalOpen = state => state.pdf.isModalOpen

export const selectFilename = state => state.pdf.filename

export const selectIsAlertActive = state => state.pdf.isAlertActive