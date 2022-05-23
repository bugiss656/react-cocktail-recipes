import './Navbar.css'


const Navbar = ({ children }) => {
    return (
        <nav className="navbar shadow d-flex flex-row justify-content-between align-items-center">
            <div className="container">
                {children}
            </div>
        </nav>
    )
}

export default Navbar