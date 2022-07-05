import { urls } from "../../settings"

import Divider from "../Divider/Divider"
import Header from "../Header/Header"

import './IngredientDetails.css'


const IngredientDetails = ({ name, type, alcohol, abv, description }) => {
    return (
        <div className="ingredient-details d-flex flex-column">
            <Header text={name} />
            <h4>Info</h4>
            <Divider />
            <p>Type: {type ? type : '-'}</p>
            <p>Alcohol: {alcohol ? alcohol : '-'}</p>
            <p>ABV: {abv ? abv : '-'}</p>
            <img className="ingredient-details__image" src={`${urls.ingredientImage}${name}.png`} alt={name} loading="lazy" />
            <h4>Description</h4>
            <Divider />
            <p>{description ? description : 'No description available'}</p>
        </div>
    )
}

export default IngredientDetails