import React from "react";
import { Provider } from "react-redux";
import App,{ Container } from "next/app";
import withRedux from "next-redux-wrapper";
import initializeStore,{ actionTypes } from "../store";

class MyApp extends App {
    static async getInitialProps({Component,ctx}){
        ctx.store.dispatch({type:actionTypes.RESET})

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) :{}
        return {pageProps}
    }

    render(){
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