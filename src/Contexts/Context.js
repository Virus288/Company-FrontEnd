import React, { createContext } from 'react'

export const Context = createContext();

class ThemeContextProvider extends React.Component{
    state = {
        isLogged: false
    }

    LogIn = (data) => {
        this.setState({
            isLogged: data
        })
    }

    render(){
        return(
            <Context.Provider value={{...this.state, LogIn: this.LogIn}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ThemeContextProvider
