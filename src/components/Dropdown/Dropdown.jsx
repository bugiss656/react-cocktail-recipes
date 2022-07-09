import { useDispatch, useSelector } from "react-redux"
import { 
    selectIsExpanded, 
    setDropdownState 
} from "../../features/categories/categoriesDropdownSlice"
import { categories } from "../../settings"

import { 
    IoIosArrowDown,
    IoIosArrowUp 
} from 'react-icons/io'

import { Link } from "react-router-dom"

import './Dropdown.css'


const Dropdown = ({ children }) => {
    const dispatch = useDispatch()
    const isExpanded = useSelector(selectIsExpanded)

    return (
        <div 
            className="dropdown" 
            onMouseEnter={() => { dispatch(setDropdownState(true)) }} 
            onMouseLeave={() => { dispatch(setDropdownState(false)) }}
        >
            Drink categories
            {isExpanded 
                ? <IoIosArrowUp />
                : <IoIosArrowDown />
            }
            {children}
        </div>
    )
}

export default Dropdown

export const DropdownList = () => {
    const dispatch = useDispatch()
    const isExpanded = useSelector(selectIsExpanded)

    return (
        <ul className="dropdown-list" style={{ visibility: isExpanded ? 'visible' : 'hidden', opacity: isExpanded ? '1' : '0' }}>
            {categories.map(category =>
                <DropdownItem  
                    key={category.name} 
                    text={category.name} 
                    route={`/category/recipes/${category.route}`}
                    onClick={() => dispatch(setDropdownState(false))}
                />
            )}
        </ul>
    )
}

const DropdownItem = ({ text, route, onClick }) => {
    return (
        <li className="dropdown-list__item" onClick={onClick}>
            <Link to={route}>{text}</Link>
        </li>
    )
}