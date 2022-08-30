import './UserForm.css';
import {useDispatch, useSelector} from "react-redux";
import {addUserAction, updateUserAction} from "../../redux/actions";
import {useEffect, useRef, useState} from "react";
import {useLocation} from "react-router";
import {useNavigate} from "react-router-dom";
import {usersSelector} from "../../redux/userReducer";
import {validateText, validateURLText} from "../../services/validationService";

export function UserForm({title}) {
    const isEditingForm = title.includes('Edit');
    const users = useSelector(usersSelector);
    const id = useLocation().search.slice(1);
    const editUser = id ? users.find(user => user._id === id) : null;


    const [name, setName] = useState(editUser?.name || '');
    const [nickname, setNickname] = useState(editUser?.nickname.slice(1) || '');
    const [avatar, setAvatar] = useState(editUser?.avatar || '');
    const [validForm, setValidForm] = useState({
        name: validateText(name),
        nickname: validateText(nickname),
        avatar: validateURLText(avatar)
    });
    const [btnDisabled, setBtnDisabled] = useState(true);
    const inputAvatar = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const {name, nickname, avatar} = validForm;
        name && nickname && avatar ? setBtnDisabled(false) : setBtnDisabled(true);
    }, [validForm]);

    const handleChangeData = (event) => {
        const {target, target: {name, value}} = event;
        switch (name) {
            case 'name':
                validateInputText(value, target);
                setName(value);
                break;
            case 'nickname':
                validateInputText(value, target);
                setNickname(value);
                break;
            case 'avatar':
                validateAvatar(value, target);
                setAvatar(value);
                break;
        }
    }

    const validateInputText = (text, target) => {
        const textIsValid = validateText(text);
        !textIsValid ? target.style.borderColor = 'red' : target.style.borderColor = 'gray';
        setValidForm((prevState) => ({...prevState, [target.name]: textIsValid}));
    }

    const validateAvatar = (text, target) => {
        const textIsValid = validateURLText(text);
        if (!textIsValid) {
            target.style.borderColor = 'red';
            target.setAttribute('data-valid', false);
        } else {
            target.style.borderColor = 'gray';
        }
        setValidForm((prevState) => ({...prevState, [target.name]: textIsValid}));
    }
    const handleClick = () => {
        const user = {
            name,
            nickname: `@${nickname}`,
            avatar
        }
        isEditingForm ? dispatch(updateUserAction(id, user)) : dispatch(addUserAction(user));
        navigate('/users', {replace: true});
    }


    return (
        <form>
            <h2>{title} user</h2>
            <input type='text' placeholder='user name' name='name' required
                   onChange={handleChangeData}
                   value={name}/>
            <input type='text' placeholder='user nickname' name='nickname' required
                   onChange={handleChangeData}
                   value={nickname}/>
            <input type='text' placeholder='avatar URL' name='avatar' required
                   ref={inputAvatar}
                   onChange={handleChangeData}
                   value={avatar}/>
            <button type='button'
                    disabled={btnDisabled}
                    onClick={handleClick}>{isEditingForm ? 'EDIT' : 'ADD'} user
            </button>
        </form>
    )

}