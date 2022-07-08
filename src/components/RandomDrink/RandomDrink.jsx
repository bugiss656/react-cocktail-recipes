import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { fetchDrink } from "../../features/drink/drinkSlice"
import { urls } from "../../settings"
import Button from "../Button/Button"


const RandomDrink = () => {
    const dispatch = useDispatch()

    return (
        <Link to="/random-drink">
            <Button 
                text="Get random recipe"
                onClick={() => dispatch(fetchDrink(urls.randomDrink))}
            />
        </Link>
    )
}

export default RandomDrink