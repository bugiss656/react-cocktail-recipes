import { retrieveDrinkProperties } from "../../utils/retrieveDrinkProperties"
import { useSelector } from "react-redux"
import { selectError, selectIsLoading, selectRandomDrink } from "../../features/randomDrink/randomDrinkSlice"

import DrinkDetails from "../../components/DrinkDetails/DrinkDetails"
import SectionContainer from "../../components/Container/SectionContainer"
import Loader from "../../components/Loader/Loader"



const RandomDrinkPage = () => {
    const randomDrink = useSelector(selectRandomDrink)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    if (randomDrink) {
        var {
            idDrink,
            strDrink,
            strDrinkThumb,
            strCategory,
            strInstructions
        } = randomDrink
    }


    return (
        <SectionContainer className="container my-5">
            {isLoading && <Loader />}
            {error && <div>{error}</div>}
            {randomDrink && 
                <DrinkDetails 
                    id={idDrink}
                    name={strDrink}
                    imageUrl={strDrinkThumb}
                    category={strCategory}
                    measures={retrieveDrinkProperties(randomDrink, 'strMeasure')}
                    ingredients={retrieveDrinkProperties(randomDrink, 'strIngredient')}
                    instructions={strInstructions}
                />
            }
        </SectionContainer>
    )
}

export default RandomDrinkPage