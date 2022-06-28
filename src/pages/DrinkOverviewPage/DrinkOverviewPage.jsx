import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { urls } from "../../settings"
import { retrieveDrinkProperties } from "../../utils/retrieveDrinkProperties"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { 
    fetchSingleDrinkById, 
    selectError, 
    selectIsLoading, 
    selectSingleDrink 
} from "../../features/singleDrink/singleDrinkSlice"

import SectionContainer from "../../components/Container/SectionContainer"
import DrinkDetails from "../../components/DrinkDetails/DrinkDetails"
import Loader from "../../components/Loader/Loader"



const DrinkOverviewPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const singleDrink = useSelector(selectSingleDrink)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)


    useEffect(() => {
        dispatch(fetchSingleDrinkById(urls.drinkById + id))
    }, [id])

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
                    measures={retrieveDrinkProperties(singleDrink, 'strMeasure')}
                    ingredients={retrieveDrinkProperties(singleDrink, 'strIngredient')}
                    instructions={singleDrink.strInstructions}
                />
            }
        </SectionContainer>
    )
}

export default DrinkOverviewPage