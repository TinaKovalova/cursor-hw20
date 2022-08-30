import {ADD_USER, GET_USERS} from './types';

const initialState = {
    users: null
};

export function userReducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case GET_USERS: {
            return {...state, users: payload.users}
        }
        case ADD_USER: {
            const users = state.users ? [...state.users, payload.newUser] : [payload.user]
            return {...state, users}
        }
        default:
            return state;
    }

}

export const usersSelector = (state) => state.users;