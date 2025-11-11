


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken")
    useEffect(() => {
        if (authentication && !token) {
            navigate("/signin");
        } else if (!authentication && token) {
            navigate("/");
        }
    }, [token, navigate, authentication]);

    return <>{children}</>;
};

export default Protected;
