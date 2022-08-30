import './Nav.css';
import {Link, NavLink} from "react-router-dom";
import logo from "../../assets/logo.png";

export const Nav = () => {
    return (
        <div className='main-nav'>

            <Link to='/' className='logo'><img src={logo} alt='logo'/></Link>
            <ul className='main-nav-links'>
                <li>
                    <NavLink to='/users'
                             className={({isActive}) => isActive ? "active" : "inactive"}>Users</NavLink>
                </li>
                <li>
                    <NavLink to='/addUser'
                             className={({isActive}) => isActive ? "active" : "inactive"}>Add user</NavLink>
                </li>
            </ul>
        </div>

    )
}