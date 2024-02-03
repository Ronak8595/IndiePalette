import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Wrapper = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return <>{children}</>;
};

export default Wrapper;
