import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthCont } from "../Context/AuthContext/AuthContext";


const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { loading, currentUser } = useContext(AuthCont);

    if (loading) {
        return <span className="loading loading-ring loading-lg text-main"></span>
    }

    if (currentUser) {
        return children;
    }


    return (<Navigate state={location.pathname} to={"/login"}></Navigate>);
};

export default PrivateRoute;