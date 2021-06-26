import React, { Component } from "react"
const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "",
        value: ""
    }


    // //state = {
    //     theme: "dark"
    // }

    // toggleTheme = () => {
    //     this.setState(prevState => ({
    //         theme: prevState.theme === "dark" ? "light" : "dark"
    //     }
    //     ))
    // }


    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            value: e.target.value
        });

        console.log("this.state.value=", this.state.value)
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            theme: this.state.value
        })
    }


    render() {
        return (
            <Provider value={{
                theme: this.state.theme,
                value: this.state.value,
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit
                // toggleTheme: this.toggleTheme
            }}>
                {this.props.children}
            </Provider>

        )
    }

}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }