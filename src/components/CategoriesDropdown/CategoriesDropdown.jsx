import { useState } from "react"
import { categories, urls } from "../../settings"

import { 
    IoIosArrowDown,
    IoIosArrowUp 
} from 'react-icons/io'

import './CategoriesDropdown.css'
import { Link } from "react-router-dom"


const CategoriesDropdown = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <>
            <Dropdown 
                isExpanded={isExpanded} 
                onMouseEnter={() => { setIsExpanded(true) }}
                onMouseLeave={() => { setIsExpanded(false) }} 
                dropdownList={<DropdownList isExpanded={isExpanded} />}
            />
        </>
    )
}

export default CategoriesDropdown

const Dropdown = ({ isExpanded, onMouseEnter, onMouseLeave, dropdownList }) => {
    return (
        <div className="dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            Drink categories
            {isExpanded 
                ? <IoIosArrowUp />
                : <IoIosArrowDown />
            }
            {dropdownList}
        </div>
    )
}

const DropdownList = ({ isExpanded }) => {
    return (
        <ul className="dropdown-list" style={{ visibility: isExpanded ? 'visible' : 'hidden', opacity: isExpanded ? '1' : '0' }}>
            {categories.map(category =>
                <DropdownItem  
                    key={category.name} 
                    text={category.name} 
                    route={`/category/recipes/${category.route}`} 
                />
            )}
        </ul>
    )
}

const DropdownItem = ({ text, route }) => {
    return (
        <li className="dropdown-list__item">
            <Link to={route}>{text}</Link>
        </li>
    )
}