import './Header.css'


const Header = ({ text }) => {
    return (
        <div className='header shadow'>
            <h1 className='header__title'>{text}</h1>
        </div>
    )
}

export default Header