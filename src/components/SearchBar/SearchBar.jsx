import axios from 'axios'
import { 
    useEffect, 
    useState, 
    createRef 
} from 'react'
import { IconContext } from 'react-icons'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { 
    fetchSearchResults, 
    updateSearchQuery, 
} from '../../features/search/searchSlice'
import { urls } from "../../settings"

import SearchDropdownList from '../SearchDropdown/SearchDropdownList'
import { 
    SearchDropdownItem, 
    SearchDropdownItemUnactive 
} from '../SearchDropdown/SearchDropdownList'
import Input from '../Input/Input'


import './SearchBar.css'



const SearchBar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState('')
    const [proposedResults, setProposedResults] = useState([])
    const [isDropdownActive, setIsDropdownActive] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

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
            setIsDropdownActive(true)
        } else {
            setIsDropdownActive(false)
            setProposedResults([])
        }
    }, [searchQuery])


    useEffect(() => {
        const handleSearchDropdownState = (e) => {
            if (isDropdownActive === true && e.target !== inputRef.current && e.target !== dropdownRef.current) {
                setIsDropdownActive(false)
            }
        }

        window.addEventListener('click', handleSearchDropdownState)

        return () => {
            window.removeEventListener('click', handleSearchDropdownState)
        }
    })


    useEffect(() => {
        if (isFocused) setIsDropdownActive(true)
        if (!isFocused) setIsDropdownActive(false)
    }, [isFocused])

    
    return (
        <form className="search-bar d-flex flex-row align-items-center" onSubmit={handleSubmitForm}>
            <div className="position-relative">
                <Input 
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    placeholder="Search for a drink"
                    onFocus={() => {
                        setIsFocused(true)
                    }}
                    onBlur={() => {
                        setIsFocused(false)
                    }}
                    onChange={(e) => { setSearchQuery(e.target.value)}}
                />
                <SearchDropdownList
                    isActive={isDropdownActive}
                >
                    {proposedResults
                        ?
                        proposedResults
                            .slice(0, 6)
                            .map(result =>
                                <SearchDropdownItem
                                    key={result.idDrink}
                                    name={result.strDrink}
                                    onMouseDown={(e) => {
                                        setSearchQuery(e.target.innerHTML)
                                        navigate(`drinks/${result.idDrink}`)
                                        setIsDropdownActive(false)
                                    }}
                                />
                            )
                        :
                        <SearchDropdownItemUnactive
                            name="No results found"
                        />
                    }
                </SearchDropdownList>
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