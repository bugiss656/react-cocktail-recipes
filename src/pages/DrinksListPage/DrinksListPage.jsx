import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { matchParams } from "../../utils/matchParams"
import { categories, urls } from "../../settings"
import { useDispatch, useSelector } from "react-redux"
import { 
    fetchDrinksByCategory, 
    selectDrinksByCategory, 
    selectError, 
    selectIsLoading 
} from "../../features/drinks/drinksByCategorySlice"

import DrinkCard from "../../components/DrinkCard/DrinkCard"
import SectionContainer from "../../components/Container/SectionContainer"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"



const RecipesList = () => {
    const dispatch = useDispatch()
    const { category } = useParams()
    const drinks = useSelector(selectDrinksByCategory)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)


    const getCategoryName = (arr, category) => {
        for (let item of arr) {
            if (category in item) {
                return item.name
            }
        }
    }

    useEffect(() => {
        dispatch(fetchDrinksByCategory(urls.drinksByCategory + matchParams(categories, category)))
    }, [category])

    return (
        <>
            <SectionContainer className='container d-flex flex-column my-5'>
                <Header text={`Category: ${getCategoryName(categories, category)}`} />
            </SectionContainer>
            <SectionContainer className="container d-flex flex-row flex-wrap justify-content-center align-items-center my-5">
                {isLoading && <Loader />}
                {error && <div>Error</div>}
                {drinks &&
                    drinks.map(drink =>
                        <DrinkCard
                            key={drink.idDrink}
                            id={drink.idDrink}
                            imgUrl={drink.strDrinkThumb}
                            name={drink.strDrink}
                            text={drink.idDrink}
                        />
                    )
                }
            </SectionContainer>
        </>
    )
}

export default RecipesList