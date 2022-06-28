import { useState } from 'react'
import { IconContext } from 'react-icons'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchSearchResults, updateSearchQuery } from '../../features/search/searchSlice'
import { urls } from "../../settings"

import './SearchBar.css'


const SearchBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState('')

    const handleSubmitForm = (e) => {
        e.preventDefault()

        if(!searchQuery) {
            alert('Enter search term')
        } else {
            dispatch(updateSearchQuery(searchQuery))
            dispatch(fetchSearchResults(urls.drinksByName + searchQuery))
            navigate(`/search/${searchQuery}`)
            setSearchQuery('')
        }
    }
    
    return (
        <form className="search-bar d-flex flex-row align-items-center" onSubmit={handleSubmitForm}>
            <Input 
                value={searchQuery} 
                onChange={(e) => { setSearchQuery(e.target.value) }}
            />
            <SearchButton />
        </form>
    )
}

const Input = ({ value, onChange }) => {
    return (
        <input 
            type="text" 
            className="search-bar__input" 
            value={value} 
            onChange={onChange}
            placeholder="Search for a drink" 
        />
    )
}

const SearchButton = () => {
    return (
        <button className="search-bar__button d-flex justify-content-center align-items-center">
            <IconContext.Provider value={{ size: 25 }}>
                <BiSearch />
            </IconContext.Provider>
        </button>
    )
}

export default SearchBar