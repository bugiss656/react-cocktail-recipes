import { useParams } from "react-router-dom"
import { urls } from "../../settings"
import { useDispatch, useSelector } from "react-redux"

import SectionContainer from "../../components/Container/SectionContainer"
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails"
import Loader from "../../components/Loader/Loader"
import { useEffect } from "react"
import { fetchIngredientByName, selectError, selectIngredient, selectIsLoading } from "../../features/ingredient/ingredientSlice"



const IngredientOverviewPage = () => {
    const dispatch = useDispatch()
    const { name } = useParams()
    const ingredient = useSelector(selectIngredient)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)


    useEffect(() => {
        dispatch(fetchIngredientByName(urls.ingredientByName + name))
    }, [name])

    return (
        <SectionContainer className='container my-5'>
            {isLoading && <Loader />}
            {error && <div>{error}</div>}
            {ingredient && 
                <IngredientDetails
                    name={ingredient.strIngredient}
                    type={ingredient.strType}
                    alcohol={ingredient.strAlcohol}
                    abv={ingredient.LoaderstrABV}
                    description={ingredient.strDescription}
                />
            }
        </SectionContainer>
    )
}

export default IngredientOverviewPage