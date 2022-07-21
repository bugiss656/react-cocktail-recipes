import { useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setDropdownState } from '../../features/search/searchSlice'

import './SearchDropdownList.css'


const SearchDropdownList = ({ isActive, results }) => {
    const dispatch = useDispatch()
    const ref = useRef()

    useEffect(() => {
        const handleSearchDropdownState = (e) => {
            if (isActive === true && e.target !== ref.current) {
                dispatch(setDropdownState(false))
            }
        }

        window.addEventListener('click', handleSearchDropdownState)

        return () => {
            window.removeEventListener('click', handleSearchDropdownState)
        }
    })

    return (
        <ul ref={ref} className='search-dropdown-list' style={{ visibility: isActive ? 'visible' : 'hidden', opacity: isActive ? '1' : '0' }}>
            {results 
                ? results && results.map(result => 
                    <SearchDropdownItem 
                        key={result.idDrink}
                        id={result.idDrink}
                        name={result.strDrink}
                        onClick={() => dispatch(setDropdownState(false))}
                    />
                )
                :
                    <SearchDropdownItem 
                        name="No results found..."
                    />
            }
        </ul>
    )
}

const SearchDropdownItem = ({ id, name, onClick }) => {
    return (
        <Link to={`drinks/${id}`} onClick={onClick}>
            <li className='search-dropdown-list__item'>
                {name}
            </li>
        </Link>
    )
}


export default SearchDropdownList 