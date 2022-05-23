import useFetchData from "../../hooks/useFetchData"
import { urls } from "../../settings"
import { retrieveDrinkProperties } from "../../utils/retrieveDrinkProperties"

import DrinkDetails from "../../components/DrinkDetails/DrinkDetails"
import SectionContainer from "../../components/Container/SectionContainer"
import Loader from "../../components/Loader/Loader"


const RandomDrinkPage = () => {
    const { data, isLoading, error } = useFetchData(urls.randomDrink)

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

export default RandomDrinkPage