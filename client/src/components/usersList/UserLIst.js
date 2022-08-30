import './UserList.css';
import {useSelector} from "react-redux";
import {User} from "../user/User";
import {usersSelector} from "../../redux/userReducer";

export const UserLIst = () => {
    const users = useSelector(usersSelector);
    return (
        <div className='users'>
            <ul>
                {
                    users ? users.map(user => (
                        <li key={user._id}>
                            <User{...user}/>
                        </li>
                    )) : <span>There are no users</span>
                }
            </ul>
        </div>
    )
}