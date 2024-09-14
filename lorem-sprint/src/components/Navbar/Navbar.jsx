import "./Navbar.css";
import logo from "../../assets/images/logo.svg";
import separator from "../../assets/images/separator.svg";

const Navbar = () => {
    return (
        <div
            className='navbar
        '>
            <img className='logo-icon' src={logo} alt='logo-icon' />

            <ul className='nav-menu'>
                <li>
                    <a href='#'> Home</a>
                </li>
                <li>
                    <a href='#'>Pricing</a>
                </li>
                <li>
                    <a href='#'>Blog</a>
                </li>

                <span>
                    <img src={separator} alt='' />
                </span>

                <li>
                    <a href='#'>Login</a>
                </li>
                <button className="register" href='#'>
                     Register
                </button>
            </ul>
        </div>
    );
};

export default Navbar;
