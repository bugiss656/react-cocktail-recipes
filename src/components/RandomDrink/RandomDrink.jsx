import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchDrink } from "../../features/drink/drinkSlice"
import { urls } from "../../settings"

import './RandomDrink.css'


const RandomDrink = () => {
    const dispatch = useDispatch()

    return (
        <Link to="/random-drink">
            <button
                className="button"
                onClick={() => dispatch(fetchDrink(urls.randomDrink))}
            >
                Get random recipe
            </button>
        </Link>
    )
}

export default RandomDrink