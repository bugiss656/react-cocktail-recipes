import { forwardRef } from 'react'

import './SearchDropdownList.css'


const SearchDropdownList = forwardRef(({ isActive, children }, ref) => (
        <ul ref={ref} className='search-dropdown-list' style={{ visibility: isActive ? 'visible' : 'hidden', opacity: isActive ? '1' : '0' }}>
            {children}
        </ul>
))

export const SearchDropdownItem = ({ name, onMouseDown }) => {
    return (
        <li className='search-dropdown-list__item' onMouseDown={onMouseDown}>
            {name}
        </li>
    )
}

export const SearchDropdownItemUnactive = ({ name }) => {
    return (
        <li className="search-dropdown-list__item">
            {name}
        </li>
    )
}


export default SearchDropdownList 