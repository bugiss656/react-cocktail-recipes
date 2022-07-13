import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { selectDrink, selectError, selectIsLoading } from "../../features/drink/drinkSlice"
import { retrieveDrinkProperties } from "../../utils/retrieveDrinkProperties"
import { 
    selectFilename,
    selectFontSize,
    selectIncludeImage, 
    selectIsModalOpen, 
    setFilename, 
    setFontSize, 
    setModalState, 
    toggleIncludeImage 
} from "../../features/pdf/pdfSlice"
import jsPDF from "jspdf"

import Checkbox from "../Checkbox/Checkbox"
import Divider from "../Divider/Divider"
import Header from "../Header/Header"
import Loader from "../Loader/Loader"
import Select from "../Select/Select"
import Button from "../Button/Button"
import { Ingredients } from "../DrinkDetails/DrinkDetails"
import Modal from "../Modal/Modal"
import Input from "../Input/Input"

import './PDFView.css'
import { montserratRegular } from "./Montserrat-Regular-normal"



const PDFView = () => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector(selectIsModalOpen)
    const filename = useSelector(selectFilename)

    const saveAsPDF = (filename) => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: 'a4'
        })

        doc.addFileToVFS('Montserrat-Regular-normal.ttf', montserratRegular)
        doc.addFont('Montserrat-Regular-normal.ttf', 'Montserrat', 'normal')
        doc.setFont('Montserrat', 'normal')

        doc.html(document.querySelector('#pdf-preview'), {
            callback: (doc) => {
                doc.save(`${filename}.pdf`)
            }
        })
    }


    return (
        <div className="print-view d-flex flex-column">
            <Header text="Save Options" />

            <div className="d-flex flex-row justify-content-around my-5">
                <PDFOptions />
                <PDFRecipePreview />
                <Modal 
                    header={
                        <>
                            <h3>Save recipe</h3>
                            <Divider />
                        </>
                    }
                    body={
                        <div className="d-flex flex-column w-100">
                            <div className="d-flex flex-row align-items-center my-2">
                                <Input
                                    type="text"
                                    value={filename}
                                    placeholder="Enter filename"
                                    onChange={(e) => dispatch(setFilename(e.target.value))}
                                />
                                <span className="mx-2">.pdf</span>
                            </div>
                            <div className="d-flex flex-row justify-content-end my-2">
                                <Button
                                    text="Save"
                                    onClick={() => {
                                        saveAsPDF(filename)
                                        dispatch(setModalState(false))
                                        dispatch(setFilename(''))
                                    }}
                                />
                            </div>
                        </div>
                    }
                    isOpen={isModalOpen}
                    onClick={() => dispatch(setModalState(false))}
                />
            </div>
        </div>
    )
}

const PDFOptions = () => {
    const dispatch = useDispatch()
    const fontSize = useSelector(selectFontSize)
    const includeImage = useSelector(selectIncludeImage)


    const options = {
        font: [
            {
                size: 'small',
                h1: '22px',
                h5: '18px',
                text: '8px'
            },
            {
                size: 'medium',
                h1: '26px',
                h5: '22px',
                text: '10px'
            },
            {
                size: 'large',
                h1: '30px',
                h5: '26px',
                text: '12px'
            },
        ],

        getFontSizeTypes() {
            return this.font.map(size => {
                return size.size
            })
        },

        getFontSize(type) {
            let results = {}

            for (let font of options.font) {
                if (font.size === type) {
                    results = font
                }
            }

            return results
        }
    }

    useEffect(() => {
        dispatch(setFontSize(options.getFontSize('medium')))
    }, [])


    return (
        <div className="save-options">
            <div className="save-options__font-size d-flex align-items-center">
                <Select 
                    labelFor="font-size__label"
                    labelText="Font size:"
                    id="font-size__label"
                    className="mx-3 my-4"
                    name="font-size"
                    selectValue={fontSize.size}
                    onChange={(e) => dispatch(setFontSize(options.getFontSize(e.target.value)))}
                    options={options.getFontSizeTypes()}
                />
            </div>
            <div className="save-options__image d-flex align-items-center">
                <Checkbox 
                    labelText="Include image:"
                    id="image__label"
                    className="mx-3 my-4"
                    isChecked={includeImage} 
                    onChange={() => dispatch(toggleIncludeImage())}
                />
            </div>
            <div className="save-options__save-document my-4">
                <Button
                    text="Save recipe"
                    onClick={() => dispatch(setModalState(true))}
                />
            </div>
        </div>
    )
}

const PDFRecipePreview = () => {
    const drink = useSelector(selectDrink)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    return (
        <div id="pdf-preview" className="pdf-preview shadow">
            {isLoading && <Loader />}
            {error && error}
            {drink &&
                <>
                    <PDFPreviewHeader
                        name={drink.strDrink}
                        category={drink.strCategory} 
                        alcoholic={drink.strAlcoholic}
                        glass={drink.strGlass}
                        imageUrl={drink.strDrinkThumb}
                    />
                    <PDFPreviewBody 
                        ingredients={retrieveDrinkProperties(drink, 'strIngredient')}
                        measures={retrieveDrinkProperties(drink, 'strMeasure')}
                        instructions={drink.strInstructions}
                    />
                </>
            }
        </div>
    )
}

const PDFPreviewHeader = ({ name, category, alcoholic, glass, imageUrl }) => {
    const fontSize = useSelector(selectFontSize)
    const includeImage = useSelector(selectIncludeImage)

    return (
        <div className="pdf-preview__header">
            <div className="header__header-logo d-flex flex-row align-items-center">
                <div className="header-logo__text">cocktailrecipes</div>
                <img className="header-logo__image" src="assets/drink.png" alt="Logo" />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-start" style={{ marginTop: '50px', fontSize: `${fontSize.text}` }}>
                <div className="header__details">
                    <h1 className="details__heading" style={{ fontSize: `${fontSize.h1}` }}>{name}</h1>
                    <p className="details__text">Category: {category}</p>
                    <p className="details__text">Alcoholic: {alcoholic}</p>
                    <p className="details__text">Glass: {glass}</p>
                </div>
                <img className="header__image" src={imageUrl} alt={name} style={{ visibility: includeImage ? 'visible' : 'hidden' }} loading="lazy" />
            </div>
        </div>
    )
}


const PDFPreviewBody = ({ ingredients, measures, instructions }) => {
    const fontSize = useSelector(selectFontSize)
    const includeImage = useSelector(selectIncludeImage)

    return (
        <div className="pdf-preview__body" style={{ fontSize: `${fontSize.text}` }}>
            <Divider />
            <h5 className="d-flex align-items-center" style={{ fontSize: `${fontSize.h5}` }}>
                <img src="assets/checklist.png" alt="checklist" style={{ width: '24px', height: '24px', marginRight: '5px', display: includeImage ? 'block' : 'none' }} />
                Ingredients
            </h5>
            <div className="body__ingredients d-flex flex-row">
                <Ingredients
                    ingredients={ingredients}
                    measures={measures}
                />
            </div>
            <Divider />
            <h5 className="d-flex align-items-center" style={{ fontSize: `${fontSize.h5}` }}>
                <img src="assets/reading.png" alt="reading" style={{ width: '24px', height: '24px', marginRight: '5px', display: includeImage ? 'block' : 'none' }} />
                Instructions
            </h5>
            <div className="body__instructions">{instructions}</div>
        </div>
    )
}

export default PDFView