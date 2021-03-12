import React from "react";

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.Context.LogOut()
    }

    render() {
        return (
            "Loggin out"
        )
    }
}
