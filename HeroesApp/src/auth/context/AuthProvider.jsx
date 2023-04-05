import { useReducer } from "react";
import { typesAuth } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const init = () => {
    const user  = JSON.parse(localStorage.getItem('user'));

    return {
        logged: new Boolean(user).valueOf(),
        ...user
    };
}

export const AuthProvider = ({ children }) => {

    const [ authState, disparchAuthState ] = useReducer(authReducer, undefined, init);

    const login = (name = '') => {

        const user = {
            id: `string_id_user_${name}_${Math.random()}`,
            nameUser : name,
            logged: true
        };

        const action = {
            type: typesAuth.login,
            payload: user
        };

        localStorage.setItem('user', JSON.stringify(user));

        disparchAuthState(action);
    };

    const logout = () => {

        const action = {
            type: typesAuth.logout
        };

        localStorage.removeItem('user');

        disparchAuthState(action);
    }

    return (
        <AuthContext.Provider value={ { authState, login, logout } }>
            { children }
        </AuthContext.Provider>
    );
};
