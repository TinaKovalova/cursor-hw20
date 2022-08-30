import './Nav.css';
import {NavLink} from "react-router-dom";

export const Nav = () =>{
    return (
        <ul className='main-nav'>
            <li>
               <NavLink to = '/users'>Users</NavLink>
            </li>
            <li>
                <NavLink to = '/addUser'>Add user</NavLink>
            </li>
        </ul>
    )
}