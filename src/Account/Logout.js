import React from "react";
import { Redirect } from "react-router-dom";

const logout = () => {
    window.sessionStorage.removeItem("user");
    window.sessionStorage.removeItem("jwt");
    return (<Redirect to="/"/>)
}

export default (logout)