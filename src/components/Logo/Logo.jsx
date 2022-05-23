import { Link } from 'react-router-dom'

import './Logo.css'


const Logo = () => {
    return (
        <Link to="/">
            <div className="logo d-flex flex-row justify-content-center align-items-center">
                <div className="logo__text">cocktailrecipes</div>
                <img className="logo__img" src="assets/drink.png" alt="logo" />
            </div>
        </Link>
    )
}

export default Logo