import { BsListCheck } from 'react-icons/bs'
import { RiFileList3Line } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import Button from '../Button/Button'
import Divider from '../Divider/Divider'
import Header from '../Header/Header'

import './DrinkDetails.css'


const DrinkDetails = ({ id, name, imageUrl, category, measures, ingredients, instructions }) => {
    return (
        <div className="drink-details d-flex flex-column">
            <IconContext.Provider value={{ style: { marginRight: '6px' } }}>
                <Header text={name} />
                <p className="drink-details__id"><b>drink ID:</b> {id}</p>
                <p className="drink-details__category"><b>Category:</b> {category}</p>
                <Link to="/pdf-view" style={{ margin: '15px 0' }}>
                    <Button 
                        text="Save as pdf file"
                    />  
                </Link>
                <Divider />
                <img className="drink-details__image" src={imageUrl} alt={name} />
                <Divider />
                <h4>
                    <BsListCheck />
                    <b>Ingredients</b>
                </h4>
                <Ingredients
                    measures={measures}
                    ingredients={ingredients}
                />
                <Divider />
                <h4>
                    <RiFileList3Line />
                    <b>Instructions</b>
                </h4>
                <p>{instructions}</p>
            </IconContext.Provider>
        </div>
    )
}

export const Ingredients = ({ ingredients, measures }) => {
    return (
        <div className="d-flex flex-row my-3">
            <List>
                {ingredients.map(ingredient =>
                    <Link key={uuidv4()} to={`/ingredients/${ingredient}`}>
                        <ListItem text={ingredient} />
                    </Link>
                )}
            </List>
            <List>
                {measures.map(measure =>
                    <ListItem key={uuidv4()} text={measure} />
                )}
            </List>
        </div>
    )
}

export const List = ({ children }) => {
    return (
        <ul className="list">
            {children}
        </ul>
    )
}

export const ListItem = ({ text }) => {
    return (
        <li className="list__item">{text}</li>
    )
}

export default DrinkDetails