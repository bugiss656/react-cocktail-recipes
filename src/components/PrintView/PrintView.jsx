import { useState } from "react"

import Header from "../Header/Header"
import Select from "../Select/Select"

import './PrintView.css'


const PrintView = () => {
    return (
        <div className="print-view d-flex flex-column">
            <Header text="Print Options" />

            <PrintOptions />
        </div>
    )
}

const PrintOptions = () => {
    const [fontSize, setFontSize] = useState('')

    const options = {
        fontSize: ['12', '16', '18']
    }

    console.log(fontSize)

    return (
        <div className="print-options">
            <div className="print-options__font-size">
                <Select 
                    labelFor="font-size__label"
                    labelText="Font size:"
                    id="font-size__label"
                    className="mx-3"
                    name="font-size"
                    selectValue={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    initialOptionText="Choose font size"
                    options={options.fontSize}
                    optionText="px"
                />
            </div>
            <div className="print-options__image">
                
            </div>
        </div>
    )
}

const PrintPreview = () => {
    return (
        <div className="print-preview">

        </div>
    )
}

export default PrintView