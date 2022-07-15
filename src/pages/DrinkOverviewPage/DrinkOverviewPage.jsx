import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { urls } from "../../settings"
import { retrieveDrinkProperties } from "../../utils/retrieveDrinkProperties"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { 
    fetchDrink, 
    selectError, 
    selectIsLoading, 
    selectDrink 
} from "../../features/drink/drinkSlice"

import SectionContainer from "../../components/Container/SectionContainer"
import DrinkDetails from "../../components/DrinkDetails/DrinkDetails"
import Loader from "../../components/Loader/Loader"



const DrinkOverviewPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const singleDrink = useSelector(selectDrink)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)


    useEffect(() => {
        dispatch(fetchDrink(urls.drinkById + id))
    }, [id, dispatch])

    return (
        <SectionContainer className="container my-5">
            {isLoading && <Loader />}
            {error && <div>{error}</div>}
            {singleDrink && 
                <DrinkDetails 
                    id={singleDrink.idDrink}
                    name={singleDrink.strDrink}
                    imageUrl={singleDrink.strDrinkThumb}
                    category={singleDrink.strCategory}
                    ingredients={retrieveDrinkProperties(singleDrink, 'strIngredient')}
                    measures={retrieveDrinkProperties(singleDrink, 'strMeasure')}
                    instructions={singleDrink.strInstructions}
                />
            }
        </SectionContainer>
    )
}

export default DrinkOverviewPage