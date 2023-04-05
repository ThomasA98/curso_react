import { useMemo } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {

    const { authState } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    useMemo(() => {
        const lastPath = pathname + search;
        localStorage.setItem('lastPath', lastPath);
    }, [pathname, search]);

    return (
        authState?.logged ? children : <Navigate to='/login' />
    );
};
