import { useParams } from "react-router-dom"
import useFetchData from "../../hooks/useFetchData"
import { matchParams } from "../../utils/matchParams"

import { categories, urls } from "../../settings"
import DrinkCard from "../../components/DrinkCard/DrinkCard"
import SectionContainer from "../../components/Container/SectionContainer"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"


const RecipesList = () => {
    const { category } = useParams()
    const { data, isLoading, error } = useFetchData(urls.drinksByCategory + matchParams(categories, category))

    const getCategoryName = (arr, category) => {
        for (let item of arr) {
            if (category in item) {
                return item.name
            }
        }
    }

    return (
        <>
            <SectionContainer className='container d-flex flex-column my-5'>
                <Header text={`Category: ${getCategoryName(categories, category)}`} />
            </SectionContainer>
            <SectionContainer className="container d-flex flex-row flex-wrap justify-content-center align-items-center my-5">
                {isLoading && <Loader />}
                {error && <div>Error</div>}
                {data &&
                    data.drinks.map(drink =>
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