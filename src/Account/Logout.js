import React from "react";
import { Redirect } from "react-router-dom";
import { Context } from "../Contexts/Context";

const logout = () => {
    return (
        <Context.Consumer>{(context) => {

            window.sessionStorage.removeItem("user")
            window.sessionStorage.removeItem("jwt")
            context.LogIn()
            return (<Redirect to="/"/>)
        }}

        </Context.Consumer>
    )
}

export default (logout)
