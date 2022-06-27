import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchRandomDrink, selectRandomDrink } from "../../features/randomDrink/randomDrinkSlice"
import { urls } from "../../settings"

import './RandomDrink.css'


const RandomDrink = () => {
    const dispatch = useDispatch()
    const randomDrink = useSelector(selectRandomDrink)

    return (
        <Link to="/random-drink">
            <button
                className="button"
                onClick={() => dispatch(fetchRandomDrink(urls.randomDrink))}
            >
                Get random recipe
            </button>
        </Link>
    )
}

export default RandomDrink