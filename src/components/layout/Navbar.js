import logo from '../../assets/images/remgemLogo.svg';

function Navbar() {

    return (

        <div className = "navbar">

            <div className='navbar-logo-container'>

                <img src = {logo} alt = "logo" className = "navbar-logo" width='200px' height='200px'/>

            </div>

            <nav className = 'navbar-links-container'>

                <a href = "/login" className = "navbar-link">Login</a>
                <a href = "/register" className = "navbar-link">Register</a>
                <a href = "/about" className = "navbar-link">About</a>
                <a href = "/contact" className = "navbar-link">Contact</a>

            </nav>

            <div className = 'navbar-text-container'>

                <p className = "navbar-text">REMGEM</p>

            </div>

        </div>

    )

}

export default Navbar;