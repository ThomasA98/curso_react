import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const onLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        login('Tamiel');

        navigate(lastPath, {
            replace: true
        });
    };

    return(
        <div className="container">
        <h1>Login</h1>
        <hr />

        <button
        onClick={ onLogin }
        className="btn btn-primary">
            Login
        </button>
        </div>
    );
};
