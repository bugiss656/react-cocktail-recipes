import { useState } from "react"
import Checkbox from "../Checkbox/Checkbox"

import Header from "../Header/Header"
import Select from "../Select/Select"

import './PrintView.css'


const PrintView = () => {
    return (
        <div className="print-view d-flex flex-column">
            <Header text="Print Options" />

            <div className="d-flex flex-row justify-content-around align-items-center">
                <PrintOptions />
                <PrintPreview />
            </div>
        </div>
    )
}

const PrintOptions = () => {
    const [fontSize, setFontSize] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const options = {
        fontSize: ['12', '16', '18']
    }


    return (
        <div className="print-options">
            <div className="print-options__font-size d-flex align-items-center">
                <Select 
                    labelFor="font-size__label"
                    labelText="Font size:"
                    id="font-size__label"
                    className="mx-3 my-4"
                    name="font-size"
                    selectValue={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    initialOptionText="Choose font size"
                    options={options.fontSize}
                    optionText="px"
                />
            </div>
            <div className="print-options__image d-flex align-items-center">
                <Checkbox 
                    labelText="Include image:"
                    id="image__label"
                    className="mx-3 my-4"
                    isChecked={isChecked} 
                    onChange={() => setIsChecked(!isChecked)}
                />
            </div>
        </div>
    )
}

const PrintPreview = () => {
    return (
        <div className="print-preview">
            Print Preview
        </div>
    )
}

export default PrintView