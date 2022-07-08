import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { selectDrink, selectError, selectIsLoading } from "../../features/drink/drinkSlice"
import { retrieveDrinkProperties } from "../../utils/retrieveDrinkProperties"
import { 
    selectFontSize,
    selectIncludeImage, 
    setFontSize, 
    toggleIncludeImage 
} from "../../features/pdf/pdfSlice"
import jsPDF from "jspdf"

import Checkbox from "../Checkbox/Checkbox"
import Divider from "../Divider/Divider"
import Header from "../Header/Header"
import Loader from "../Loader/Loader"
import Select from "../Select/Select"
import { Ingredients } from "../DrinkDetails/DrinkDetails"

import './PDFView.css'
import { montserratRegular } from "./Montserrat-Regular-normal"
import Button from "../Button/Button"



const PrintView = () => {
    return (
        <div className="print-view d-flex flex-column">
            <Header text="Print Options" />

            <div className="d-flex flex-row justify-content-around my-5">
                <PrintOptions />
                <PDFRecipePreview />
            </div>
        </div>
    )
}

const PrintOptions = () => {
    const dispatch = useDispatch()
    const fontSize = useSelector(selectFontSize)
    const includeImage = useSelector(selectIncludeImage)


    const options = {
        font: [
            {
                size: 'small',
                h1: '24px',
                h5: '20px',
                text: '10px'
            },
            {
                size: 'medium',
                h1: '28px',
                h5: '24px',
                text: '12px'
            },
            {
                size: 'large',
                h1: '32px',
                h5: '28px',
                text: '14px'
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

    const saveAsPDF = () => {
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
                doc.save('recipe.pdf')
            }
        })
    }

    useEffect(() => {
        dispatch(setFontSize(options.getFontSize('medium')))
    }, [])


    return (
        <div className="print-options">
            <div className="print-options__font-size d-flex align-items-center">
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
            <div className="print-options__image d-flex align-items-center">
                <Checkbox 
                    labelText="Include image:"
                    id="image__label"
                    className="mx-3 my-4"
                    isChecked={includeImage} 
                    onChange={() => dispatch(toggleIncludeImage())}
                />
            </div>
            <div className="print-options__print-document my-4">
                <Button 
                    text="Save recipe"
                    onClick={() => saveAsPDF()}
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
            <div className="d-flex flex-row justify-content-between align-items-start" style={{ marginTop: '80px', fontSize: `${fontSize.text}` }}>
                <div className="header__details">
                    <h1 className="details__heading" style={{ fontSize: `${fontSize.h1}` }}>{name}</h1>
                    <p className="details__text">Category: {category}</p>
                    <p className="details__text">Alcoholic: {alcoholic}</p>
                    <p className="details__text">Glass: {glass}</p>
                </div>
                <img className="header__image" src={imageUrl} alt={name} style={{ visibility: includeImage ? 'visible' : 'hidden' }} />
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

export default PrintView