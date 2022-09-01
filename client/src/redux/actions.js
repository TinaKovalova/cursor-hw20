import {ADD_USER, GET_USERS} from "./types";
import axios from "axios";

axios.defaults.baseURL = 'https://server-hw-cursor.herokuapp.com/';


export const getUsersAction = () => {
    return async (dispatch) => {
        const users = (await axios.get('/users')).data;
        dispatch({
            type: GET_USERS,
            payload: {users}
        })
    }
}

export const addUserAction = (user) => {
    return async (dispatch) => {
        const newUser = (await axios.post('/users', user)).data;
        dispatch({
            type: ADD_USER,
            payload: {newUser}
        })
    }
}
export const updateUserAction = (id, newUser) => {
    return async (dispatch) => {
        await axios.put(`/users/${id}`, newUser);
        dispatch(getUsersAction());
    }
}
export const deleteUserAction = (id) => {
    return async (dispatch) => {
        await axios.delete(`/users/${id}`);
        dispatch(getUsersAction());
    }
}
