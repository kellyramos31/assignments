import React from "react"
const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends React.Component {
    state = {

    }


    render() {

        return (
            <Provider value={ }>

            </Provider>

        )
    }

}

export { ThemeContextProvider, Consumer as ThemeContextConsumer }