import React from "react";
import { Provider } from "react-redux";
import App,{ Container } from "next/app";
import withRedux from "next-redux-wrapper";
import initializeStore,{ actionTypes } from "../store";

class MyApp extends App {
    render(){
        console.log(this.props)
        const {Component,pageProps,store} = this.props
        return(
            <Container>
                <Provider store={store}>
                    <Component {...pageProps}/>
                </Provider>
            </Container>
        )
    }
}

export default withRedux(initializeStore)(MyApp)