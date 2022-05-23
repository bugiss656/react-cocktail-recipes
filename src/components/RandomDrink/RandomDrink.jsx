import { Link } from "react-router-dom"
import './RandomDrink.css'


const RandomDrink = () => {
    return (
        <Link to="/random-drink">
            <button className="button">Get random recipe</button>
        </Link>
    )
}

export default RandomDrink