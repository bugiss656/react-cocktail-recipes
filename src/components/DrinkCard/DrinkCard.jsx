import { Link } from 'react-router-dom'

import './DrinkCard.css'


const DrinkCard = ({ id, imgUrl, name, text }) => {
    return (
        <div className="recipe-card shadow-sm">
            <Link to={`/drinks/${id}`}>
                <div className="recipe-card__header">
                    <img className="recipe-card__image" src={imgUrl} loading="lazy" alt="" />
                </div>
                <div className="recipe-card__body d-flex flex-column justify-content-between">
                    <h5 className="recipe-card__title">{name}</h5>
                    <p className="recipe-card__id">drink ID: {text}</p>
                </div>
            </Link>
        </div>
    )
}

export default DrinkCard