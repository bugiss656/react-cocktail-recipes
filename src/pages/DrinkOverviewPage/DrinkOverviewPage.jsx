import { useParams } from "react-router-dom"
import useFetchData from "../../hooks/useFetchData"
import { urls } from "../../settings"
import { retrieveDrinkProperties } from "../../utils/retrieveDrinkProperties"

import SectionContainer from "../../components/Container/SectionContainer"
import DrinkDetails from "../../components/DrinkDetails/DrinkDetails"
import Loader from "../../components/Loader/Loader"


const DrinkOverviewPage = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useFetchData(urls.drinkById + id)

    if (data) {
        var {
            idDrink,
            strDrink,
            strDrinkThumb,
            strCategory,
            strInstructions
        } = data.drinks[0]
    }

    return (
        <SectionContainer className="container my-5">
            {isLoading && <Loader />}
            {error && <div>{error}</div>}
            {data && 
                <DrinkDetails 
                    id={idDrink}
                    name={strDrink}
                    imageUrl={strDrinkThumb}
                    category={strCategory}
                    measures={retrieveDrinkProperties(data.drinks[0], 'strMeasure')}
                    ingredients={retrieveDrinkProperties(data.drinks[0], 'strIngredient')}
                    instructions={strInstructions}
                />
            }
        </SectionContainer>
    )
}

export default DrinkOverviewPage