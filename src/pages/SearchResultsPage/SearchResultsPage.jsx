import { useSelector } from "react-redux"
import { selectError, selectIsLoading, selectSearchQuery, selectSearchResults } from "../../features/search/searchSlice"

import SectionContainer from "../../components/Container/SectionContainer"
import Header from "../../components/Header/Header"
import Loader from "../../components/Loader/Loader"
import DrinkCard from "../../components/DrinkCard/DrinkCard"


const SearchResultsPage = () => {
    const searchQuery = useSelector(selectSearchQuery)
    const searchResults = useSelector(selectSearchResults)
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)

    return (
        <>
            <SectionContainer className='container d-flex flex-column'>
                <Header text={`Search results for "${searchQuery}"`} />
            </SectionContainer>
            <SectionContainer className='container d-flex flex-row flex-wrap justify-content-center align-items-center my-5'>
                {isLoading && <Loader />}
                {error && <div>{error}</div>}
                {searchResults &&
                    searchResults !== null 
                        ?
                            searchResults.map(drink => 
                                <DrinkCard
                                    key={drink.idDrink}
                                    id={drink.idDrink}
                                    imgUrl={drink.strDrinkThumb}
                                    name={drink.strDrink}
                                    text={drink.idDrink}
                                />
                            )
                        :   
                            <p className="fs-5">No results found, check your spelling and try again</p>
                        
                }
            </SectionContainer>
        </>
    )
}

export default SearchResultsPage