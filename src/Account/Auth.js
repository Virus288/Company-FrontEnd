import backend from "../Links.json";
import { Context } from "../Contexts/Context";
import React from "react";

const RequireAuth = async () => {
    return (
        <Context.Consumer>{async (context) => {
            try {
                const res = await fetch(`${backend.backend}/token`, {
                    method: "GET",
                    credentials: "include"
                });
                const data = await res.json();
                if(data.Type === 1){
                    context.LogIn(true)
                } else {
                    context.LogIn(false)
                }
                return data.Type !== 1;
            } catch (e) {
                console.log(e)
            }
        }}

        </Context.Consumer>
    )
}

export {
    RequireAuth
}
