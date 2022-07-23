import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { createRef } from 'react'
import { IconContext } from 'react-icons'
import { BiSearch } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { 
    fetchSearchResults, 
    selectSearchResults,
    selectIsDropdownActive, 
    setDropdownState, 
    updateSearchQuery, 
} from '../../features/search/searchSlice'
import { urls } from "../../settings"

import SearchDropdownList from '../SearchDropdown/SearchDropdownList'
import Input from '../Input/Input'


import './SearchBar.css'



const SearchBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isDropdownActive = useSelector(selectIsDropdownActive)

    const [searchQuery, setSearchQuery] = useState('')
    const [proposedResults, setProposedResults] = useState([])

    const inputRef = createRef()
    const dropdownRef = createRef()

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

    const fetchProposedResults = (url) => {
        axios.get(url)
        .then(response => {
            setProposedResults(response.data.drinks)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        if (searchQuery.length >= 3) {
            fetchProposedResults(urls.drinksByName + searchQuery)
            dispatch(setDropdownState(true))
        } else {
            dispatch(setDropdownState(false))
            setProposedResults([])
        }
    }, [searchQuery])

    useEffect(() => {
        const handleSearchDropdownState = (e) => {
            if (isDropdownActive === true && e.target !== inputRef.current && e.target !== dropdownRef.current) {
                dispatch(setDropdownState(false))
            }
        }

        window.addEventListener('click', handleSearchDropdownState)

        return () => {
            window.removeEventListener('click', handleSearchDropdownState)
        }
    })

    
    return (
        <form className="search-bar d-flex flex-row align-items-center" onSubmit={handleSubmitForm}>
            <div className="position-relative">
                <Input 
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    placeholder="Search for a drink"
                    onFocus={() => {
                        dispatch(setDropdownState(true))
                    }}
                    onBlur={() => {
                        dispatch(setDropdownState(false))
                    }}
                    onChange={(e) => { setSearchQuery(e.target.value)}}
                />
                <SearchDropdownList
                    ref={dropdownRef}
                    results={proposedResults}
                    isActive={isDropdownActive}
                    onClick={(e) => {
                        setSearchQuery(e.target.innerHTML)
                        dispatch(setDropdownState(false))
                    }}
                />
            </div>
            <SearchButton />
        </form>
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