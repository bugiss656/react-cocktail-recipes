import { useParams } from "react-router-dom"
import useFetchData from "../../hooks/useFetchData"
import { urls } from "../../settings"

import SectionContainer from "../../components/Container/SectionContainer"
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails"
import Loader from "../../components/Loader/Loader"



const IngredientOverviewPage = () => {
    const { name } = useParams()
    const { data, isLoading, error } = useFetchData(urls.ingredientByName + name)

    if (data) {
        var {
            strIngredient,
            strType,
            strAlcohol,
            strABV,
            strDescription
        } = data.ingredients[0]
    }

    return (
        <SectionContainer className='container my-5'>
            {isLoading && <Loader />}
            {error && <div>{error}</div>}
            {data && 
                <IngredientDetails
                    name={strIngredient}
                    type={strType}
                    alcohol={strAlcohol}
                    abv={strABV}
                    description={strDescription}
                />
            }
        </SectionContainer>
    )
}

export default IngredientOverviewPage