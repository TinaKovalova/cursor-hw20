import './User.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteUserAction} from "../../redux/actions";
export const User = (props) =>{
    const dispatch = useDispatch();
    return (
        <div className='user'>
            <img src={props.avatar} className='user-photo'  alt='avatar'/>
            <div className='user-icons'>
                <Link to={{pathname: '/editUser', search : `${props._id}`}}>
                    <FontAwesomeIcon icon={faPencil} className='icon'/>
                </Link>

                <FontAwesomeIcon icon={faTrash} className='icon' onClick={()=>dispatch(deleteUserAction(props._id))}/>
            </div>


            <div className='users-data'>
                <h3>{`${props.name}`}</h3>
                <span className='user-name'>{`${props.nickname}`}</span>
            </div>

        </div>
    )
}