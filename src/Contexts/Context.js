import React, { createContext } from 'react'
import backend from "../Links.json";

export const Context = createContext();

class ContextProvider extends React.Component{
    state = {
        isLogged: false,
        Group: ''
    }


    LogIn = (logged, group) => {
        this.setState({
            isLogged: logged,
            Group: group
        })
    }

    CheckIfLogged = () => {
        fetch(`${backend.backend}/token`, {
            method: "GET",
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if(data.Type === 1){
                    this.setState({
                        isLogged: true,
                        Group: data.Group
                    })
                }
            })
    }

    LogOut = () => {
        fetch(`${backend.backend}/logout`, {
            method: "GET",
            credentials: "include"
        })
            .then(res => res.json())
            .then(data => {
                if(data.Type === 1){
                    this.setState({
                        isLogged: false,
                        Group: 'none'
                    })
                }
            })
    }

    render(){
        return(
            <Context.Provider value={{...this.state, LogIn: this.LogIn, CheckIfLogged: this.CheckIfLogged, LogOut: this.LogOut}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ContextProvider
