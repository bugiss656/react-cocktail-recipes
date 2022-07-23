import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

import './SearchDropdownList.css'


const SearchDropdownList = forwardRef(({ isActive, results, onClick }, ref) => (
        <ul ref={ref} className='search-dropdown-list' style={{ visibility: isActive ? 'visible' : 'hidden', opacity: isActive ? '1' : '0' }}>
            {results 
                ? 
                    results && results.map(result =>
                        <SearchDropdownItem
                            key={result.idDrink}
                            id={result.idDrink}
                            name={result.strDrink}
                            onClick={onClick}
                        />
                    )
                :
                    <SearchDropdownItemUnactive 
                        name="No results found"
                    />
            }
        </ul>
))

const SearchDropdownItem = ({ id, name, onClick }) => {
    return (
        <Link to={`drinks/${id}`} onClick={onClick}>
            <li className='search-dropdown-list__item'>
                {name}
            </li>
        </Link>
    )
}

const SearchDropdownItemUnactive = ({ name }) => {
    return (
        <li className="search-dropdown-list__item">
            {name}
        </li>
    )
}


export default SearchDropdownList 